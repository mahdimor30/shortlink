import getDomain from "@/lib/get-domain";
import React from "react";

export const dynamic = "force-dynamic";

async function getData() {
  const url = getDomain();
  console.log(url);

  const res = await fetch(`${url}/api/test`);

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

async function BlogPage() {
  const data = await getData();

  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
}

export default BlogPage;
