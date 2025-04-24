import React from 'react';

const AboutPageSection: React.FC = () => {
  return (
    <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-16 focus:outline-none" tabIndex={-1}>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 md:mb-16">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <img src="images/restaurant.jpeg" alt="Interior or exterior view of the restaurant" className="rounded-lg shadow-lg w-full h-auto object-cover" loading="lazy" width="600" height="450" onError={(e) => e.currentTarget.src='https://placehold.co/600x450/cccccc/ffffff?text=Image+Error'} />
        </div>
        <div className="text-gray-700 space-y-4 leading-relaxed">
          <h3 className="text-2xl font-semibold text-gray-800">Our Story</h3>
          <p>Fresh daily for breakfast, lunch & dinner: Authentic North & South Indian, Kumaoni specialties, and Chinese delights—all under one roof!</p>
          <p>नाश्ता, लंच और डिनर के लिए रोज़ ताजगी से तैयार: असली नॉर्थ व साउथ इंडियन, कुमाऊनी स्पेशल और चाइनीज़ व्यंजन एक ही छत के नीचे!</p>
          {/* <h3 className="text-2xl font-semibold text-gray-800 mt-6">Our Commitment</h3>
          <p>We are committed to quality, sustainability, and our community. We source ingredients responsibly and aim to provide a welcoming atmosphere where everyone feels at home.</p> */}
        </div>
      </div>
    </section>
  );
};
export default AboutPageSection;