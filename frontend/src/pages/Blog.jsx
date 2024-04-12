import React from "react";
import Posts from "../components/blog/Posts";

const Blog = () => {
  return (
    <div className="w-screen" style={{
      backgroundImage: "url(/pattern.svg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}>
      <Posts />
    </div>
  );
};

export default Blog;
