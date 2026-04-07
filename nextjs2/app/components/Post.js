import Link from "next/link";

const Post = ({ post }) => {

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    (<div className="post">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <p>id: {post.id}</p>
        <p>Author ID: {post.userId}</p>
        <Link href="/">На главную</Link>
      </div>)
  );
};  

export default Post;