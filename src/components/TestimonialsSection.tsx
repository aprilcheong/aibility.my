import React from 'react';
import { StarIcon } from 'lucide-react';
export const TestimonialsSection = () => {
  const testimonials = [{
    quote: "ability.my helped us get our restaurant online quickly and easily. We've already seen an increase in takeaway orders! The website looks great and our customers love it.",
    name: 'Ahmad Razali',
    business: 'Restoran Selera Kampung',
    location: 'Kuala Lumpur',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
  }, {
    quote: 'As a small business owner, I thought getting a professional website was out of reach. ability.my made it affordable and hassle-free. Highly recommended!',
    name: 'Sarah Tan',
    business: 'Blooming Crafts',
    location: 'Penang',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }];
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Don't Just Take Our Word For It...
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-10"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-md relative">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-yellow-400 mr-1" fill="#FBBF24" />)}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.business}, {testimonial.location}
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                "
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};