import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="font-bold text-xl text-white mb-2">ability.my</div>
            <p className="text-sm">Empowering Malaysian businesses online.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <TwitterIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8 text-sm">
          <div className="flex items-center justify-center">
            <MapPinIcon className="h-4 w-4 mr-2" />
            <span>123 Jalan Merdeka, 50000 Kuala Lumpur, Malaysia</span>
          </div>
          <div className="flex items-center justify-center">
            <PhoneIcon className="h-4 w-4 mr-2" />
            <span>+60 3 1234 5678</span>
          </div>
          <div className="flex items-center justify-center">
            <MailIcon className="h-4 w-4 mr-2" />
            <span>hello@ability.my</span>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p className="mb-4">
            Copyright © 2025 ability.my. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
};