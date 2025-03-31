import React from 'react';
import { CheckCircleIcon } from 'lucide-react';
export const FeaturesSection = () => {
  const features = ['Professionally designed website template tailored for Malaysian businesses.', 'Essential pages to showcase your business (e.g., Utama (Home), Tentang Kami (About Us), Perkhidmatan/Menu (Services/Menu), Hubungi Kami (Contact Us)).', 'A website that looks fantastic and works perfectly on all devices – from smartphones to tablets and computers (Mobile-responsive design).', 'Basic Search Engine Optimization (SEO) to help local customers find you on Google and other search engines.', 'Easy integration with your social media platforms (Facebook, Instagram, etc.).', 'Reliable, business-class website hosting on our Malaysian-based servers (requires a low monthly fee).'];
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Your Free Website Includes:
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-10"></div>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                </div>
                <p className="text-gray-700">{feature}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};