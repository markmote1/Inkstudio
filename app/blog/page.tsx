// Ensure you're using Client-Side rendering for components that handle interactivity
'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Dynamically import components without server-side rendering
const Card = dynamic(() => import('@/components/ui/card').then(mod => mod.Card), { ssr: false });
const CardContent = dynamic(() => import('@/components/ui/card').then(mod => mod.CardContent), { ssr: false });
const CardHeader = dynamic(() => import('@/components/ui/card').then(mod => mod.CardHeader), { ssr: false });
const CardTitle = dynamic(() => import('@/components/ui/card').then(mod => mod.CardTitle), { ssr: false });

interface BlogPost {
  id?: string;
  title: string;
  excerpt: string;
  created_at: string;
  image: string;
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://inkstudio-backend.vercel.app/', { cache: 'no-store' }); // Ensures fresh data
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        setBlogPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-12">
          Latest from the <span className="text-[#87CEEB]">Blog</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <Card className="bg-gray-900 border-gray-800 hover:border-[#87CEEB] transition-colors">
                <div className="relative h-48 w-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover rounded-t-lg w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
