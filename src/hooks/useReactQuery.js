import { useQuery } from "react-query"
const useReactQuery = ({query,key}) => {
    const {isLoading,isError,data,Error} = useQuery({queryFn:query,queryKey:[key]})
  return {isLoading,isError,data,Error}
}

export default useReactQuery