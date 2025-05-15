import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FiEdit, FiTrash2, FiPlus, FiUser, FiBook } from 'react-icons/fi';
import { toast } from 'react-toastify';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [myBlogs, setMyBlogs] = useState([]);
  const [activeTab, setActiveTab] = useState('explore');
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);
  const [editBlog, setEditBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    previewImage: ''
  });
  const navigate = useNavigate();

  // Check authentication status
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    fetchBlogs();
  }, []);

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      
      // Fetch all blogs
      const res = await axios.get('http://localhost:5000/api/blog');
      setBlogs(res.data);
      
      // If logged in, fetch user's blogs
      if (token) {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        const userId = decodedToken.userId;
        
        // Filter blogs to show only the current user's blogs
        const userBlogs = res.data.filter(blog => blog.author._id === userId);
        setMyBlogs(userBlogs);
      }
      
      setIsLoading(false);
    } catch (err) {
      toast.error('Failed to fetch blogs');
      setIsLoading(false);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setFormData(prev => ({
        ...prev,
        image: file,
        previewImage: URL.createObjectURL(file)
      }));
    } else {
      toast.warning('Please upload a JPEG or PNG image');
    }
  };

  // Create or update blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      if (editBlog) {
        await axios.put(`http://localhost:5000/api/blog/${editBlog._id}`, formDataToSend, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        });
        toast.success('Blog updated successfully');
      } else {
        await axios.post('http://localhost:5000/api/blog', formDataToSend, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        });
        toast.success('Blog created successfully');
      }

      setShowCreateModal(false);
      setFormData({ title: '', description: '', image: null, previewImage: '' });
      setEditBlog(null);
      fetchBlogs();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong');
    }
  };

  // Delete blog
  const handleDelete = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Authentication token missing');
      return;
    }

    console.log('Attempting to delete blog:', blogToDelete);
    
    const response = await axios.delete(
      `http://localhost:5000/api/blog/${blogToDelete}`,
      {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.status === 200) {
      toast.success('Blog deleted successfully');
      setShowDeleteModal(false);
      fetchBlogs();
    } else {
      toast.error(`Unexpected response: ${response.status}`);
    }
  } catch (err) {
    console.error('Delete error details:', err);
    
    let errorMessage = 'Failed to delete blog';
    if (err.response) {
      // Server responded with error status
      errorMessage += `: ${err.response.data?.message || err.response.statusText}`;
    } else if (err.request) {
      // Request was made but no response
      errorMessage = 'No response from server - check your connection';
    } else {
      // Other errors
      errorMessage = `Error: ${err.message}`;
    }
    
    toast.error(errorMessage);
  }
};

  // Open edit modal
  const handleEdit = (blog) => {
    setEditBlog(blog);
    setFormData({
      title: blog.title,
      description: blog.description,
      image: null,
      previewImage: blog.image ? `http://localhost:5000/uploads/${blog.image}` : ''
    });
    setShowCreateModal(true);
  };

  // View full blog
  const viewFullBlog = (id) => {
    navigate(`/blog/${id}`);
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-blue-900 py-6 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Narmada Yatra Blogs</h1>
          {isLoggedIn && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setEditBlog(null);
                setFormData({ title: '', description: '', image: null, previewImage: '' });
                setShowCreateModal(true);
              }}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <FiPlus /> Create Blog
            </motion.button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex border-b border-gray-700">
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'explore' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
            onClick={() => setActiveTab('explore')}
          >
            <div className="flex items-center gap-2">
              <FiBook /> Explore Blogs
            </div>
          </button>
          {isLoggedIn && (
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'myblogs' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
              onClick={() => setActiveTab('myblogs')}
            >
              <div className="flex items-center gap-2">
                <FiUser /> My Blogs
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Blog List */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {(activeTab === 'explore' ? blogs : myBlogs).map((blog) => (
                <motion.div
                  key={blog._id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={`http://localhost:5000/uploads/${blog.image}`}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-xl font-bold">{blog.title}</h2>
                      {isLoggedIn && activeTab === 'myblogs' && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(blog)}
                            className="text-blue-400 hover:text-blue-300"
                          >
                            <FiEdit />
                          </button>
                          <button
                            onClick={() => {
                              setBlogToDelete(blog._id);
                              setShowDeleteModal(true);
                            }}
                            className="text-red-400 hover:text-red-300"
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mb-4">By {blog.author.username}</p>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {blog.description.length > 150 ? `${blog.description.substring(0, 150)}...` : blog.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => viewFullBlog(blog._id)}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm"
                      >
                        Read Full Blog
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Create/Edit Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-800 rounded-lg w-full max-w-2xl"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">
                {editBlog ? 'Edit Blog' : 'Create New Blog'}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="5"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white"
                    required
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">Blog Image (JPEG/PNG)</label>
                  <input
                    type="file"
                    accept="image/jpeg,image/png"
                    onChange={handleImageChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white"
                  />
                  {formData.previewImage && (
                    <div className="mt-4">
                      <img
                        src={formData.previewImage}
                        alt="Preview"
                        className="max-h-48 rounded-lg"
                      />
                    </div>
                  )}
                </div>
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setShowCreateModal(false);
                      setEditBlog(null);
                    }}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg"
                  >
                    {editBlog ? 'Update' : 'Create'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-800 rounded-lg p-6 max-w-md w-full"
          >
            <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
            <p className="text-gray-300 mb-6">Are you sure you want to delete this blog? This action cannot be undone.</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Blog;