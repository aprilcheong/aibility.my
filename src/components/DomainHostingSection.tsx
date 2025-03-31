import React from 'react';
import { GlobeIcon, ServerIcon } from 'lucide-react';
export const DomainHostingSection = () => {
  return <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            What About Your Web Address (Domain Name) and Keeping Your Website
            Online (Hosting)?
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Think of your website like your physical shop. To have a shop, you
            need two things:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <GlobeIcon className="text-white w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-900">
              A Shop Address (Domain Name)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              This is your unique address on the internet, so customers can
              easily find you (e.g., yourbusiness.my). You will need to register
              this name – think of it like registering your business name – and
              there's usually a small annual fee to keep it yours. We can help
              guide you through the process of choosing and registering a domain
              name that suits your business.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <ServerIcon className="text-white w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-900">
              The Land Your Shop Sits On (Website Hosting)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              This is the service that keeps your website files stored securely
              and accessible on the internet, ensuring it's live for your
              customers to visit 24/7. Your website's content lives on our
              secure and high-performing servers right here in Malaysia,
              ensuring fast loading times for your local audience.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 max-w-5xl mx-auto rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6 text-white text-center">
            Our Special Offer
          </h3>
          <p className="text-white text-lg leading-relaxed mb-0">
            We're providing you with the building (your professional website)
            for free. In return, we simply require you to use our reliable
            website hosting services for a low monthly fee. This allows us to
            cover our operational costs, provide you with the free website
            development, and offer you ongoing support to ensure your online
            presence runs smoothly. It's like getting a beautifully designed
            shop for free, and you just pay a reasonable rent for the prime
            location!
          </p>
        </div>
      </div>
    </section>;
};