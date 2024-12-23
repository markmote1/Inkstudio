import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const blogPosts = [
  {
    title: 'The Art of Japanese Tattoos',
    excerpt: 'Explore the rich history and symbolism behind traditional Japanese tattoo art...',
    date: '2024-03-20',
    image: 'https://images.unsplash.com/photo-1611501267726-c4c6eea22f09?auto=format&fit=crop&q=80',
    slug: 'art-of-japanese-tattoos'
  },
  {
    title: 'Aftercare Tips for Your New Tattoo',
    excerpt: 'Essential tips and tricks to ensure your tattoo heals properly and stays vibrant...',
    date: '2024-03-18',
    image: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80',
    slug: 'aftercare-tips'
  },
  {
    title: 'Choosing Your First Tattoo Design',
    excerpt: 'A comprehensive guide to selecting the perfect design for your first tattoo...',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1590246814883-57c511e76523?auto=format&fit=crop&q=80',
    slug: 'choosing-first-tattoo'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-12">
          Latest from the <span className="text-[#87CEEB]">Blog</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={index}>
              <Card className="bg-gray-900 border-gray-800 hover:border-[#87CEEB] transition-colors">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <p className="text-[#87CEEB] text-sm">{post.date}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}