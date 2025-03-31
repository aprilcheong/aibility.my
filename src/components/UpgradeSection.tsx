import React from 'react';
import { TrendingUpIcon, TargetIcon, UserPlusIcon, HeartIcon } from 'lucide-react';
export const UpgradeSection = () => {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Ready to Take Your Online Presence to the Next Level?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-10"></div>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Your free website from ability.my is a fantastic starting point to
            establish your online presence and connect with customers. However,
            we understand that as your business grows, your needs may evolve.
          </p>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            That's why we also offer a range of optional premium services
            designed to help you achieve even greater success online.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 text-center">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <TargetIcon className="text-white w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              Advanced Marketing
            </h3>
            <p className="text-gray-700 text-sm">
              Tools to reach more customers and expand your market presence.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 text-center">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <UserPlusIcon className="text-white w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              Lead Generation
            </h3>
            <p className="text-gray-700 text-sm">
              Features to capture inquiries and convert visitors into customers.
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200 text-center">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <HeartIcon className="text-white w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              Customer Engagement
            </h3>
            <p className="text-gray-700 text-sm">
              Tools to build loyalty and keep customers coming back.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 text-center">
            <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <TrendingUpIcon className="text-white w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              Business Growth
            </h3>
            <p className="text-gray-700 text-sm">
              Solutions to help you truly dominate your online market.
            </p>
          </div>
        </div>
      </div>
    </section>;
};