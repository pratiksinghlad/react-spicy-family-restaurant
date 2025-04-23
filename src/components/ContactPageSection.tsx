import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import MapIframeNoKey from './MapIframe';

const ContactPageSection: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16 md:py-24 scroll-mt-16 focus:outline-none" tabIndex={-1}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 md:mb-16">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Our Details</h3>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-amber-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <address className="not-italic text-gray-700">Ground floor, Devansh Tower, Balaji Dwar Road <br />  near Chota Gurunanak School, Adarsh Colony <br /> Rudrapur, Jagatpura, Uttarakhand 263153</address>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-amber-600 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+917895518063" aria-label="Call +91 7895518063" className="text-gray-700 hover:text-amber-700">+91 7895518063</a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-amber-600 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+919720948267" aria-label="Call +91 9720948267" className="text-gray-700 hover:text-amber-700">+91 9720948267</a>
              </div>
              {/* <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-amber-600 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@tastybites.example.com" className="text-gray-700 hover:text-amber-700 break-all">info@tastybites.example.com</a>
              </div> */}
              <div className="pt-2">
                <h4 className="font-semibold text-gray-800 mb-1">Opening Hours</h4>
                <p className="text-gray-700 text-sm">Mon - Sun: 07:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          {/* <div className="bg-gray-300 h-64 md:h-80 rounded-lg shadow-md flex items-center justify-center text-gray-500"> */}
              <MapIframeNoKey zoom={15} width="100%" height="250px" />
            {/* </div> */}
          </div>
        </div>
      </div>
      <style>{`
        .contact-input { @apply block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition duration-150 ease-in-out; }
      `}</style>
    </section>
  );
};
export default ContactPageSection;