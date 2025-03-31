import React from 'react';
import { Button } from './ui/Button';
export const CallToActionSection = () => {
  return <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Establish Your Professional Online Presence?
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            (Just Pay for Your Domain & Hosting)
          </p>
          <Button className="mb-6">Claim Your Free Website Now!</Button>
          <p className="text-sm text-blue-200">
            Limited Time Offer - Get Your Business Online Today!
          </p>
        </div>
      </div>
    </section>;
};