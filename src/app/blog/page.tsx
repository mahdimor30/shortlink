import getDomain from "@/lib/get-domain";
import axios from "axios";
import React from "react";

export const dynamic = "force-dynamic";

async function getData() {
  const url = `${getDomain()}/api/hello`;
  console.log(url);

  const res = await axios.get(url);

  return res.data;
}

async function BlogPage() {
  const data = await getData();

  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
}

export default BlogPage;
