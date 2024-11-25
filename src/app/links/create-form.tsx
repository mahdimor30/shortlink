"use client";
import React, { useState } from "react";

function CreateForm() {
  const [result, setResult] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const jsonData = JSON.stringify(data);

    const endpoint = "/api/links/";

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    };

    const res = await fetch(endpoint, options);
    const result = await res.json();
    console.log(result);
    
    setResult(result);
  };
  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <input
          className=""
          type="text"
          defaultValue={
            "https://github.com/codingforentrepreneurs/super-me-photo-ai-api"
          }
          name="url"
          placeholder="Your url to shoten"
        />
        <button type="submit">Create</button>
      </form>
      {result && JSON.stringify(result)}
    </div>
  );
}

export default CreateForm;
