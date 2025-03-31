import React from 'react';
import { ZapIcon, ShieldIcon, GlobeIcon, RefreshCwIcon, UsersIcon, LineChartIcon } from 'lucide-react';
export const WhyChooseSection = () => {
  const reasons = [{
    icon: <ZapIcon className="h-6 w-6" />,
    title: 'Fast and Efficient',
    description: 'Get your professional website up and running quickly, so you can start attracting customers sooner.'
  }, {
    icon: <ShieldIcon className="h-6 w-6" />,
    title: 'Zero Upfront Design Costs',
    description: 'Start building your online presence without a significant initial investment in website design and development.'
  }, {
    icon: <GlobeIcon className="h-6 w-6" />,
    title: 'Professional Quality, Locally Focused',
    description: 'Beautiful and functional websites designed to resonate with Malaysian customers and built with local needs in mind.'
  }, {
    icon: <RefreshCwIcon className="h-6 w-6" />,
    title: 'Dependable Hosting',
    description: 'Benefit from our robust and efficient hosting services located in Malaysia, ensuring fast loading times and reliable uptime.'
  }, {
    icon: <UsersIcon className="h-6 w-6" />,
    title: 'We Understand Your Market',
    description: "We're focused on helping Malaysian businesses like yours thrive in the digital landscape."
  }, {
    icon: <LineChartIcon className="h-6 w-6" />,
    title: 'Scalable Growth',
    description: 'Easily integrate with our optional premium services as your business grows and your online needs expand.'
  }];
  return <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Why Malaysian Businesses Are Choosing ability.my:
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-10"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {reason.title}
              </h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};