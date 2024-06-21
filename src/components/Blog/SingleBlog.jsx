import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleBlog() {
  const { id } = useParams();
  const localData = JSON.parse(localStorage.getItem("blogs"));
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    for (let blog of localData) {
      console.log(blog.id);
      console.log(id);
      if (blog.id == id) setBlog(blog);
    }
  }, []);

  return (
    <div>
      {blog ? (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
        </div>
      ) : (
        <p>invalid blog id..!!</p>
      )}
    </div>
  );
}
