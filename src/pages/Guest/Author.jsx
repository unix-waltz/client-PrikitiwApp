import UserLayout from "../../components/Partials/UserLayout";
import guestService from "../../services/guest.service";
import useReactQuery from "../../hooks/useReactQuery";
import Pagination from "../../components/Pagination";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Author = () => {
  const [posts, setPosts] = useState([]);
  const {author} = useParams()
  const [paginate, setPaginate] = useState({ totalPages: 1, currentPage: 1 });
  const [currentPage, setCurrentPage] = useState(1);
  const { error, data, isError, isLoading } = useReactQuery({
    query: () => guestService.ByAuthor(currentPage,author),
    key: ['all-post', currentPage],
  });

  useEffect(() => {
    if (data) {
      setPaginate(data.data?.meta);
      setPosts(data.data?.data);
    }
  }, [data]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isLoading) return 'Loading....';

  return (
    <UserLayout>
     <div className=" w-[90%] mx-auto">
        <span className="ml-6 font-semibold text-2xl text-teal-600">Author : {author}</span>
        </div>
<br />
     <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 w-[90%] mx-auto">
{posts && posts.map(post => (
  <Card
    key={post.id} 
    date={post.created_at}  
    title={post.title}
    body={post.body}
    thumbnail={post.thumbnail}
    category={post.category}
    url={`/detail/post/${post.id}`}
  />
))}
</div>
      <Pagination
        currentPage={currentPage}
        totalPages={paginate?.totalPages}
        onPageChange={handlePageChange}
      />
    </UserLayout>
  )
}

export default Author