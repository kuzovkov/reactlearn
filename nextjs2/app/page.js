import Link from "next/link";

import styles from "./page.module.css";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export default async function Home() {
  
  const posts = await fetchData();
  // console.log('data:', data)
  
  return (
    <div>
      <h1>Главная страница</h1>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link href={`/post/${post.id}`}>Детальнее</Link>
        </div>
      ))}
    </div>
  );
}
