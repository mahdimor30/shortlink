import React from "react";

async function getData() {
  const res = await fetch("http://localhost:3000/api/hello");

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

async function BlogPage() {
    const data = await getData();

    console.log(data);
    
  return <div></div>;
}

export default BlogPage;
