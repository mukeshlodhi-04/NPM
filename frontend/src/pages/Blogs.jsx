import React, { useState, useEffect } from "react";
import { FaPlus, FaUser, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: "", description: "", photo: "" });
  const [selectedBlog, setSelectedBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const dummyBlogs = [
      {
        id: 1,
        title: "Exploring Omkareshwar",
        description: "Omkareshwar is one of the 12 Jyotirlingas and is a must-visit on the Narmada Parikrama.",
        photo: "https://source.unsplash.com/400x300/?omkareshwar,temple",
        author: "John Doe",
      },
      {
        id: 2,
        title: "The Beauty of Maheshwar",
        description: "Maheshwar is known for its stunning ghats and the Maheshwar Fort.",
        photo: "https://source.unsplash.com/400x300/?maheshwar,ghat",
        author: "Jane Smith",
      },
    ];
    setBlogs(dummyBlogs);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBlog.title && newBlog.description && newBlog.photo) {
      const blog = {
        id: blogs.length + 1,
        title: newBlog.title,
        description: newBlog.description,
        photo: newBlog.photo,
        author: "Current User",
      };
      setBlogs([...blogs, blog]);
      setNewBlog({ title: "", description: "", photo: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const openBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const closeBlog = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Blogs
      </h1>

      {isLoggedIn && (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Create a New Blog
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={newBlog.title}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter blog title"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                value={newBlog.description}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                rows="4"
                placeholder="Enter blog description"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Photo URL</label>
              <input
                type="text"
                name="photo"
                value={newBlog.photo}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter photo URL"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
            >
              <FaPlus className="inline-block mr-2" />
              Post Blog
            </button>
          </form>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">
          {isLoggedIn ? "Your Blogs" : "Explore Blogs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => openBlog(blog)}
            >
              <img
                src={blog.photo}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {blog.description.substring(0, 50)}...
                </p>
                <div className="flex items-center text-gray-600">
                  <FaUser className="mr-2" />
                  <p>{blog.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {!isLoggedIn && (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-8 text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Want to Share Your Experience?
          </h2>
          <p className="text-gray-600 mb-4">
            Log in to create and share your own blogs about the Narmada Parikrama.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Log In
          </button>
        </div>
      )}

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={closeBlog}
            >
              <FaTimes size={20} />
            </button>
            <img
              src={selectedBlog.photo}
              alt={selectedBlog.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-600 mb-2">
              {selectedBlog.title}
            </h2>
            <p className="text-gray-700 mb-4">{selectedBlog.description}</p>
            <div className="flex items-center text-gray-600">
              <FaUser className="mr-2" />
              <p>{selectedBlog.author}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
