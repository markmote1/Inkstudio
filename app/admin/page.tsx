'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminPage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');
    const [blogPosts, setBlogPosts] = useState<
        { id: number; slug?: string; image: string; title: string; excerpt: string; created_at: string }[]
    >([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editPostId, setEditPostId] = useState<number | null>(null);

    // Fetch blog posts
    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const res = await fetch('https://inkstudio-backend.vercel.app/');
                const data = await res.json() || [];
                setBlogPosts(data);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };

        fetchBlogPosts();
    }, []);

    // Create or update blog post
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const postData = {
            title,
            content,
            created_at: new Date().toISOString(),
            excerpt,
            image,
        };

        try {
            const url = isEditing
                ? `https://inkstudio-backend.vercel.app/${editPostId}`
                : 'https://inkstudio-backend.vercel.app/';
            const method = isEditing ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData),
            });

            if (res.ok) {
                const updatedPost = await res.json();

                if (isEditing) {
                    setBlogPosts((prevPosts) =>
                        prevPosts.map((post) => (post.id === editPostId ? updatedPost : post))
                    );
                    setMessage('Blog post updated successfully!');
                } else {
                    setBlogPosts((prevPosts) => [updatedPost, ...prevPosts]);
                    setMessage('Blog post created successfully!');
                }

                setTitle('');
                setContent('');
                setExcerpt('');
                setImage('');
                setIsEditing(false);
                setEditPostId(null);
            } else {
                setMessage('Error saving blog post.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error saving blog post.');
        }
    };

    // Edit blog post
    const handleEdit = (post: any) => {
        setTitle(post.title);
        setContent(post.content);
        setExcerpt(post.excerpt);
        setImage(post.image);
        setIsEditing(true);
        setEditPostId(post.id);
    };

    // Delete blog post
    const handleDelete = async (id: number) => {
        try {
            const res = await fetch(`https://inkstudio-backend.vercel.app/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                setBlogPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
                setMessage('Blog post deleted successfully!');
            } else {
                setMessage('Error deleting blog post.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error deleting blog post.');
        }
    };

    return (
        <div className="min-h-screen bg-black pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-white mb-12">
                    Admin <span className="text-[#87CEEB]">Dashboard</span>
                </h1>

                {/* Form for creating/updating */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-white">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter title"
                            className="w-full p-3 text-black"
                        />
                    </div>

                    <div>
                        <label className="block text-white">Content</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Enter content"
                            className="w-full p-3 text-black"
                        />
                    </div>

                    <div>
                        <label className="block text-white">Excerpt</label>
                        <textarea
                            value={excerpt}
                            onChange={(e) => setExcerpt(e.target.value)}
                            placeholder="Enter excerpt"
                            className="w-full p-3 text-black"
                        />
                    </div>

                    <div>
                        <label className="block text-white">Image URL</label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="Enter image URL"
                            className="w-full p-3 text-black"
                        />
                    </div>

                    <button
                        type="submit"
                        className="px-6 py-3 bg-[#87CEEB] text-white font-bold"
                    >
                        {isEditing ? 'Update Blog Post' : 'Create Blog Post'}
                    </button>
                </form>

                {message && <p className="mt-6 text-white">{message}</p>}

                {/* Blog posts list */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.isArray(blogPosts) &&
                        blogPosts.map((post) => (
                            <div
                                key={post.id}
                                className="bg-white p-4 rounded shadow hover:shadow-lg transition"
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover rounded"
                                />
                                <div className="mt-4">
                                    <h2 className="text-xl font-bold">{post.title}</h2>
                                    <p className="text-gray-600">{post.excerpt}</p>
                                    <p className="text-sm text-gray-500">{post.created_at}</p>
                                    <div className="flex justify-between mt-4">
                                        <button
                                            onClick={() => handleEdit(post)}
                                            className="px-4 py-2 bg-yellow-500 text-white rounded"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(post.id)}
                                            className="px-4 py-2 bg-red-500 text-white rounded"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
