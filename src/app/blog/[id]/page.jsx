import React from "react";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  // console.log(data);
  return (
    <div>
      <h1>{data.id}</h1>
      <h1>{data.title}</h1>
    </div>
  );
};

export default BlogPost;
