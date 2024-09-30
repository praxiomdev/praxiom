import React from 'react';
import { PhoneIcon, CalendarIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';

const services = [
  {
    name: '24/7 Call Answering',
    description: 'Never miss a call, even outside business hours. Our AI handles inquiries professionally and efficiently.',
    icon: PhoneIcon,
  },
  {
    name: 'Intelligent Scheduling',
    description: 'Automate your appointment booking process. Our AI manages your calendar, reducing scheduling conflicts and maximizing your time.',
    icon: CalendarIcon,
  },
  {
    name: 'Smart Text Responses',
    description: 'Respond to customer texts instantly. Our AI understands context and provides relevant, helpful replies.',
    icon: ChatBubbleOvalLeftIcon,
  },
];


const Services = () => (
  <div className="bg-white py-12" id="services">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          AI-Powered Communication Solutions
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Streamline your business communications with our cutting-edge AI technology.
        </p>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          {services.map((service) => (
            <div key={service.name} className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{service.name}</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">{service.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
);

export default Services;