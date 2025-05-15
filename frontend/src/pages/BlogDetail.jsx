import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`http://localhost:5000/api/blog/${id}`);
      setBlog(res.data);
      setIsLoading(false);
    } catch (err) {
      toast.error('Failed to fetch blog');
      setIsLoading(false);
      navigate('/blog');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-400 mb-8"
        >
          <FiArrowLeft /> Back to Blogs
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-xl"
        >
          <div className="h-96 overflow-hidden">
            <img
              src={`http://localhost:5000/uploads/${blog.image}`}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold">{blog.title}</h1>
              <span className="text-sm text-gray-400">
                {new Date(blog.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-blue-400 mb-6">By {blog.author.username}</p>
            <div className="prose prose-invert max-w-none">
              <p className="whitespace-pre-line text-gray-300">{blog.description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetail;