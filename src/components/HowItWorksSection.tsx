import React from 'react';
import { LayoutTemplateIcon, ClipboardIcon, RocketIcon } from 'lucide-react';
export const HowItWorksSection = () => {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            It's Easy to Get Your Free Website!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-10"></div>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 h-full border border-blue-200">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <LayoutTemplateIcon className="text-white w-8 h-8" />
                </div>
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-900">
                  Choose Your Template
                </h3>
                <p className="text-gray-700 text-center">
                  Browse our selection of professionally designed website
                  templates created with Malaysian businesses in mind – from
                  vibrant restaurant layouts to sleek designs for SMEs and
                  service providers. Simply pick the one that best suits your
                  brand and industry.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 h-full border border-purple-200">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <ClipboardIcon className="text-white w-8 h-8" />
                </div>
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-900">
                  Provide Your Information
                </h3>
                <p className="text-gray-700 text-center">
                  Tell us about your business! Share your essential details,
                  logo, existing photos, and any text you want on your website.
                  Don't worry, we'll make it easy for you to provide the content
                  we need. We'll also assist you in securing your perfect domain
                  name.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-8 h-full border border-pink-200">
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <RocketIcon className="text-white w-8 h-8" />
                </div>
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-r from-pink-600 to-pink-700 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-900">
                  Launch Your New Website
                </h3>
                <p className="text-gray-700 text-center">
                  Once we have your information, our team will build and host
                  your stunning new website on our reliable servers. Get ready
                  to attract more customers and grow your business online!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};