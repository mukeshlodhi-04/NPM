import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You must be logged in to create a blog");
        navigate("/login");
        return;
      }

      await axios.post("http://localhost:5000/api/blog", { title, content }, { headers: { Authorization: `Bearer ${token}` } });
      navigate("/blogs");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Create Blog</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded-lg mb-4" required />
          <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} className="w-full p-2 border rounded-lg mb-4" required />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
