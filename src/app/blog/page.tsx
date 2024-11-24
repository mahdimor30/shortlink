import getDomain from "@/lib/get-domain";
import React from "react";

async function getData() {
  try {
    const res = await fetch(`${getDomain()}/api/test`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch data");

    return res.json();
  } catch (err) {
    console.log(err);
    return null;
  } 
}

async function BlogPage() {
  const data = await getData();

  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
}

export default BlogPage;
