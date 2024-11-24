import React from "react";

export const dynamic = 'force-dynamic'

async function getData() {
  const res = await fetch("http://localhost:3000/api/hello");

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

async function BlogPage() {
  const data = await getData();

  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
}

export default BlogPage;
