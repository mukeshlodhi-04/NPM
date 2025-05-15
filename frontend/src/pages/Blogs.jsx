import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaUser, FaTimes, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: "", description: "" });
  const [image, setImage] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [editingBlog, setEditingBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blog");
      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newBlog.title || !newBlog.description || !image) return;

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You must be logged in to create a blog");
        navigate("/login");
        return;
      }

      const formData = new FormData();
      formData.append("title", newBlog.title);
      formData.append("description", newBlog.description);
      formData.append("image", image);

      const res = await axios.post("http://localhost:5000/api/blog", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setBlogs([...blogs, res.data]);
      setNewBlog({ title: "", description: "" });
      setImage(null);
      document.getElementById("imageInput").value = "";
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  const handleChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  const openBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const closeBlog = () => {
    setSelectedBlog(null);
  };

  const startEditing = (blog) => {
    setEditingBlog(blog);
    setNewBlog({ title: blog.title, description: blog.description });
  };

  const cancelEditing = () => {
    setEditingBlog(null);
    setNewBlog({ title: "", description: "" });
    setImage(null);
    document.getElementById("imageInput").value = "";
  };

  const updateBlog = async (e) => {
    e.preventDefault();
    if (!newBlog.title || !newBlog.description) return;

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You must be logged in to edit a blog");
        navigate("/login");
        return;
      }

      const formData = new FormData();
      formData.append("title", newBlog.title);
      formData.append("description", newBlog.description);
      if (image) {
        formData.append("image", image);
      }

      const res = await axios.put(
        `http://localhost:5000/api/blog/${editingBlog._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setBlogs(blogs.map((blog) => (blog._id === editingBlog._id ? res.data : blog)));
      cancelEditing();
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const deleteBlog = async (blogId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You must be logged in to delete a blog");
        navigate("/login");
        return;
      }

      await axios.delete(`http://localhost:5000/api/blog/${blogId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setBlogs(blogs.filter((blog) => blog._id !== blogId));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  
};

export default Blogs;
