"use client";

import React from "react";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = React.use(params).slug;
  console.log(slug);

  return <div>My Post: {slug}</div>;
}
