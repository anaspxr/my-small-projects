import React, { useEffect, useState } from "react";
import "./blogs.css";

export default function Blogs() {
  const localData = JSON.parse(localStorage.getItem("blogs"));
  const initialValues = { id: "", title: "", body: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [blogs, setBlogs] = useState(localData ? localData : []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    console.log(id);
    setBlogs([...blogs, { id: id, ...formValues }]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <div className="content-container">
      <div className="blogs-container"></div>
      <h1 className="heading">Blogs</h1>
      <div className="blogs-display">
        {blogs.map((blog, i) => (
          <div key={i} className="blog">
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        ))}
      </div>
      <div className="blog-form">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="title"
            value={formValues.title}
          />
          <textarea
            onChange={handleChange}
            name="blog"
            placeholder=" enter the body of your blog here!!"
            value={formValues.body}
          />
          <button>Create your own Blog..</button>
        </form>
      </div>
    </div>
  );
}
