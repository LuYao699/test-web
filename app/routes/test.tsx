import React from "react";
import type { Route } from "./+types/test";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [{ title: "test page" }, { name: "description", content: "测试页面，进行ogp测试" }];
}

export default function Test() {
  return (
    <div>
      <h1>Welcome to test page</h1>
      <p>这是测试页面，进行页面的测试</p>
      <Link to="/">跳转到home页面</Link>
    </div>
  );
}
