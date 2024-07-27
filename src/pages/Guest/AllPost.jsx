import UserLayout from "../../components/Partials/UserLayout";
import guestService from "../../services/guest.service";
import useReactQuery from "../../hooks/useReactQuery";
import Pagination from "../../components/Pagination";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AllPost = () => {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [posts, setPosts] = useState([]);
  const [paginate, setPaginate] = useState({ totalPages: 1, currentPage: 1 });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const search = keyword || searchTerm;

  const { error, data, isError, isLoading } = useReactQuery({
    query: () => guestService.search(currentPage, search),
    key: ['all-post', currentPage, search],
  });

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/news/search/${searchTerm}`);
  };

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
      <div className="w-[90%] mx-auto">
        <span className="ml-6 font-semibold text-2xl text-teal-600">All Posts</span>
        <br /><br />
        <form onSubmit={handleSearch} className="ml-6 border rounded-lg w-1/4 relative">
          <label htmlFor="Search" className="sr-only">&nbsp; Search </label>
          <input
            type="text"
            id="Search"
            placeholder="    Search for..."
            className="w-full rounded-md border-gray-200 py-2.5 pr-10 shadow-sm sm:text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="absolute inset-y-0 right-0 grid w-10 place-content-center text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </form>
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
  );
};

export default AllPost;
