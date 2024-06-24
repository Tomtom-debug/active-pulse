import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // Alternative for directly assigning object from useFetch(custom Hook) when the object has no keys
    //const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
    const fetchData = useFetch('http://localhost:8000/blogs')
    const error = fetchData.error
    const blogs = fetchData.data
    const isPending = fetchData.status

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;