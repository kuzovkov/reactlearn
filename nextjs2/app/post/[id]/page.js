import Post from "@/app/components/Post";

const fetchData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
  };


const PostPage = async ({params}) => {

  const resolvedParams = await params;
  const post = await fetchData(resolvedParams.id);

  return(
    <div> 
      <Post post={post} />
    </div>
  );
}   


export default PostPage