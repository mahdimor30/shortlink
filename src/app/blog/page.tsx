import getDomain from "@/lib/get-domain";

import React from "react";

export const dynamic = "force-dynamic";

async function getData() {
  const url = `${getDomain()}/api/hello`;
  console.log(url);

  const res = await fetch(url);

  return res.json();
}

async function BlogPage() {
  const data = await getData();

  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
}

export default BlogPage;
