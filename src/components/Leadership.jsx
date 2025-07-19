import React, { useState } from 'react';
import { ScreenFitText } from './TextWidth';
import { motion, AnimatePresence } from 'framer-motion';

// Event Data
const events = [
  {
    date: "June 27 - July 1, 2025",
    title: "National TSA Conference",
    description: "Our chapter traveled to Nashville, TN to participate in the National TSA Conference. Members enjoyed exploring the venue, participating in events, and celebrating our chapter’s national recognition.",
    highlight: "National Recognition • Competitive Success",
    image: "/src/assets/images/nats.JPG"
  },
  {
    date: "March 12-15, 2025",
    title: "State Leadership Conference",
    description: "At the Georgia TSA State Conference, our chapter placed highly in various events, received statewide recognition, and had student leaders elected to state office.",
    highlight: "State Placings • Student Leadership",
    image: "/src/assets/images/slc.JPG"
  },
  {
    date: "November 8-10, 2024",
    title: "Fall Leadership Conference",
    description: "We participated in workshops, competitions, and a technical presentation designed to prepare members for success at future conferences. We also competed in robotics and had a few laughs during the fun events.",
    highlight: "Workshops • Robotics • Team Building",
    image: "/src/assets/images/image.png"
  },
  {
    date: "October 16, 2024",
    title: "Six Flags CTSO Rally",
    description: "Members had a blast enjoying the rides and competing in leadership-based challenges. The event provided a great opportunity to connect with students from other CTSOs across Georgia.",
    highlight: "Networking • Competition • Fun",
    image: "/src/assets/images/sixseven.jpg"
  },
  {
    date: "October 7, 2024",
    title: "Technology Day",
    description: "Our chapter attended Technology Day at the Georgia National Fairgrounds. We participated in events like Alternative Energy and Robotic Rover and got involved in statewide activities and skits.",
    highlight: "STEM Events • State Skit • Fair Fun",
    image: "/src/assets/images/prince.png"
  }
];

// Gallery
const galleryImages = [
  "/src/assets/images/aura.png",
  "/src/assets/images/vex.png",
  "/src/assets/images/gug.png",
  "/src/assets/images/avaneesh.png",
  "/src/assets/images/shourya.png",
  "/src/assets/images/flcagain.png",
  "/src/assets/images/coke.jpg",
  "/src/assets/images/techday.png"
];

function Leadership() {
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="max-w-[115rem] w-full mx-auto bg-white py-16 neue px-4 sm:px-8">
      {/* Header */}
      <div className='text-center w-full flex-col mb-16'>
        <ScreenFitText>Leadership</ScreenFitText>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Our chapter's conference achievements and leadership development
        </p>
      </div>

      {/* Events */}
      <div className="grid grid-cols-1 gap-12 mb-24">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/5">
                <div className="text-sm text-gray-500 sticky top-4">{event.date}</div>
              </div>

              <div className="lg:w-4/5 space-y-4">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3 space-y-4">
                    <h2 className="text-3xl font-light tracking-tight">{event.title}</h2>
                    <div className="text-sm text-gray-500 font-medium">{event.highlight}</div>
                    <p className="text-gray-700">{event.description}</p>
                  </div>

                  <motion.div
                    className="md:w-1/3 aspect-video bg-gray-100 overflow-hidden -xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                </div>
                {index < events.length - 1 && <div className="border-t border-gray-200 pt-8"></div>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gallery */}
      <div className="mb-24">
        <h3 className="text-2xl font-light mb-8">Conference Moments</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="aspect-square overflow-hidden cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setModalImage(img)}
            >
              <img
                src={img}
                alt={`Conference Moment ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={() => setModalImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalImage(null)}
                className="absolute -top-5 -right-5 text-white text-3xl bg-black bg-opacity-50 rounded-full px-3 py-1 hover:bg-opacity-80"
              >
                ×
              </button>
              <img
                src={modalImage}
                alt="Full View"
                className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 my-12">
        <div className="flex-1 border-t border-gray-200 pt-6">
          <div className="text-4xl font-light tracking-tight">#1</div>
          <div className="text-sm text-gray-500 mt-1">State Placements in Georgia</div>
        </div>
        <div className="flex-1 border-t border-gray-200 pt-6">
          <div className="text-4xl font-light tracking-tight">50+</div>
          <div className="text-sm text-gray-500 mt-1">State Finalists</div>
        </div>
        <div className="flex-1 border-t border-gray-200 pt-6">
          <div className="text-4xl font-light tracking-tight">10+</div>
          <div className="text-sm text-gray-500 mt-1">Top 10 National Placings</div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-between gap-12 text-sm">
        <div className="space-y-4">
          <div className="font-semibold">About us</div>
          <div className="font-semibold">Home</div>
          <div className="font-semibold">Contact</div>
        </div>
        <div className="space-y-2 sm:text-right">
          <div className="font-semibold">Our Chapter:</div>
          <div>West Forsyth High School TSA</div>
          <div>4155 Drew Rd</div>
          <div>Cumming, GA 30040</div>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
