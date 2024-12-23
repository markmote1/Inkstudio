"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { WhatsappIcon } from '@/components/whatsapp-icon';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold text-white mb-6">
              Get in <span className="text-[#87CEEB]">Touch</span>
            </h1>
            <p className="text-gray-400 mb-8">
              Have questions about our services or want to schedule a consultation? 
              Reach out to us through WhatsApp or fill out the contact form.
            </p>
            
            <div className="bg-gray-900 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Contact Information</h2>
              <div className="space-y-4 text-gray-400">
                <p>123 Tattoo Street</p>
                <p>New York, NY 10001</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@inkmasters.com</p>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white w-full md:w-auto"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              <WhatsappIcon className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-gray-800 border-gray-700 text-white"
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="bg-[#87CEEB] text-black hover:bg-[#87CEEB]/80 w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}