import React, { useEffect, useState } from "react";
import "./blogs.css";
import { Link } from "react-router-dom";

export default function Blogs() {
  const localData = JSON.parse(localStorage.getItem("blogs"));
  const initialValues = { id: "", title: "", body: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [blogs, setBlogs] = useState(localData ? localData : []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    console.log(id);
    setBlogs([...blogs, { ...formValues, id: id.toString() }]);
    setFormValues(initialValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <div className="blogs-container">
      <h1 className="heading">Blogs</h1>
      <div className="blogs-display">
        {blogs.map((blog) => (
          <Link key={blog.id} to={`${blog.id}`}>
            <div className="blog">
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
            </div>
          </Link>
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
            required
          />
          <textarea
            onChange={handleChange}
            name="body"
            placeholder=" enter the body of your blog here!!"
            value={formValues.body}
            required
          />
          <button>Create your own Blog..</button>
        </form>
      </div>
    </div>
  );
}
