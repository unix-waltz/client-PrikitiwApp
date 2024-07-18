import UserLayout from "../../components/Partials/UserLayout"
import guestService from "../../services/guest.service"
import useReactQuery from "../../hooks/useReactQuery"
const AllPost = () => {
const {Error,data,isError,isLoading} = useReactQuery({query:guestService.All,key:'all-post'})
if(!isLoading)console.log(data)
  return (
    <UserLayout>
      
    </UserLayout>
  )
}

export default AllPost