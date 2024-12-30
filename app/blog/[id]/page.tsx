// app/blog/[id]/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ShareButtons from '../../../components/ShareButtons'; // Import the Client Component

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  excerpt: string;
  created_at: string;
}

// Generate static paths for dynamic routing
export async function generateStaticParams() {
  try {
    const res = await fetch('http://localhost:5000/blog/');
    if (!res.ok) throw new Error('Failed to fetch blog posts');
    const blogPosts: BlogPost[] = await res.json();
    return blogPosts.map((post) => ({ id: post.id.toString() }));
  } catch (error) {
    console.error('Error fetching static params:', error);
    return [];
  }
}

interface BlogPageProps {
  params: {
    id: string;
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = params; // Await params

  try {
    const res = await fetch(`http://localhost:5000/blog/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch blog post: ${res.status}`);
    const post: BlogPost = await res.json();

    if (!post) {
      throw new Error('Post is undefined or null.');
    }

    const shareUrl = typeof window !== 'undefined' ? window.location.href : `http://localhost:3000/blog/${id}`;

    return (
      <div className="min-h-screen bg-black pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto p-4 bg-gray-900 rounded-lg shadow-md border-gray-800">
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-white">{post.title}</h1>
        </div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
            <img
          src={post.image || '/placeholder-image.png'}
          alt={post.title}
          className="w-full h-auto object-cover rounded-t-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-400">{post.content}</p>
          </div>
        </div>
        <ShareButtons shareUrl={shareUrl} /> {/* Use the Client Component */}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return <h1 className="text-red-500 text-center mt-4">Error loading blog post.</h1>;
  }
}