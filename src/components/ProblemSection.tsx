import React from 'react';
import { SearchIcon, SmartphoneIcon, ShoppingCartIcon } from 'lucide-react';
export const ProblemSection = () => {
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Is Your Online Presence Holding You Back?
          </h2>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            In today's Malaysia, your customers expect to find you online.
            Whether they're searching for the best nasi lemak nearby, a reliable
            plumber in their area, or a unique gift, their first stop is often
            the internet.
          </p>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Many hardworking Malaysian small businesses are struggling with
            outdated websites that don't attract customers, or worse, no website
            at all.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-10 text-gray-800">
            Think about it:
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <SearchIcon className="text-white w-8 h-8" />
              </div>
              <p className="text-gray-700 text-center">
                Are you missing out on potential customers who are actively
                searching online for businesses like yours in Kuala Lumpur,
                Penang, Johor Bahru, and smaller towns?
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <SmartphoneIcon className="text-white w-8 h-8" />
              </div>
              <p className="text-gray-700 text-center">
                Does the thought of expensive website designers and complicated
                development processes feel overwhelming?
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-gradient-to-br from-pink-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <ShoppingCartIcon className="text-white w-8 h-8" />
              </div>
              <p className="text-gray-700 text-center">
                You're not alone. Malaysian businesses are increasingly
                understanding that a professional website is no longer a luxury
                – it's a necessity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};