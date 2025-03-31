import React from 'react';
import { Button } from './ui/Button';
export const HeroSection = () => {
  return <div className="w-full bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="flex items-center mb-8">
              <div className="font-bold text-2xl">ability.my</div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Get a Professional Website for Your Malaysian Business -
              Absolutely Free!
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
              Stop losing customers online. ability.my offers a stunning,
              functional website at no upfront cost for design and development
              to help your kedai makan, SME, or any local business across
              Malaysia thrive in the digital age. You'll just need to cover the
              standard costs of your domain name and our reliable hosting.
            </h2>
            <Button>Claim Your Free Website Now!</Button>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-30 rounded-lg"></div>
              <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Malaysian businesses with modern websites" className="rounded-lg shadow-2xl w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>;
};