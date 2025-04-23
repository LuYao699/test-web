import React from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "home page" }, { name: "description", content: "主页，进行ogp测试" }];
}

export default function Home() {
  return (
    <div>
      <h1>Welcome to React App</h1>
      <p>This is a page without index.html</p>
      <p>sadhjgsjd</p>
    </div>
  );
}
