import React from 'react';
import { Button } from './ui/Button';
import { MonitorIcon, PenToolIcon, SmileIcon } from 'lucide-react';
export const SolutionSection = () => {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Introducing ability.my: Get a Beautiful, Functional Website - You
            Only Pay for Domain & Hosting.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-10"></div>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We believe every Malaysian business deserves a strong online
            presence without breaking the bank. That's why ability.my is
            offering you a professionally designed, great-looking website
            completely free of initial design and development charges.
          </p>
          <p className="text-xl font-semibold text-blue-700 mb-6">
            Yes, you read that right! We'll build you a website that you can be
            proud of, tailored to the needs of your business.
          </p>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            The only investment you'll need to make is in your domain name
            registration (your unique online address) and our reliable, local
            website hosting.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <MonitorIcon className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Professional Design
            </h3>
            <p className="text-gray-700">
              Our websites aren't just pretty; they're built with the essential
              functionality your business needs to attract, inform, and engage
              with your customers.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <PenToolIcon className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Tailored Solutions
            </h3>
            <p className="text-gray-700">
              Whether you operate a bustling restaurant in Mambang Di Awan, a
              growing retail shop in Ipoh, or offer specialized services
              throughout Perak, we have a solution to help you shine online.
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-xl border border-pink-200">
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <SmileIcon className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Customer Connection
            </h3>
            <p className="text-gray-700">
              This free website, combined with your own domain name and our
              dependable hosting, is your crucial first step towards building a
              thriving online foundation and connecting with more customers
              across Malaysia.
            </p>
          </div>
        </div>
        <div className="text-center">
          <Button>Claim Your Free Website Now!</Button>
        </div>
      </div>
    </section>;
};