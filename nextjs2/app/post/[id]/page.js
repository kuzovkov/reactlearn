import Post from "@/app/components/Post";

const fetchData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
  };

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?");
  const posts = await res.json();

  return posts.slice(0, 10).map((post) => ({
    id: String(post.id),
  }));
}

export const generateMetadata = async ({params, searchParams}) => {
  const resolved = await params;
  const post = await fetchData(resolved.id);
  console.log('post:', post)
  return {
    title: post.title,
    description: post.body, 
  }
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
