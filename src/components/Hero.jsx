import React from 'react';
import img from '../assets/images/IMG_3549.JPG';

function Hero() {
  return (
    <div className="max-w-[115rem] mx-auto overflow-hidden relative">
      {/* Hero Image */}
      <img
        src={img}
        alt="Hero"
        className="w-full max-h-[800px] object-cover"
      />

      {/* Text Content Beneath */}
      <div className="bg-white w-full py-16 neue">
        <h2 className="text-[26px] sm:text-5xl font-normal leading-snug max-w-4xl mb-12">
           One of the most successful chapters in the 
          <br className="hidden sm:block" />
          ‎ Georgia Technology Student Association.
        </h2>

        {/* Stats Bar - Horizontal */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mb-12">
          <div className="flex-1 border-t border-gray-200 pt-6">
            <div className="text-4xl font-light tracking-tight">12</div>
            <div className="text-sm text-gray-500 mt-1">National Top 10s</div>
          </div>
          <div className="flex-1 border-t border-gray-200 pt-6">
            <div className="text-4xl font-light tracking-tight">24</div>
            <div className="text-sm text-gray-500 mt-1">State Champions</div>
          </div>
          <div className="flex-1 border-t border-gray-200 pt-6">
            <div className="text-4xl font-light tracking-tight">100+</div>
            <div className="text-sm text-gray-500 mt-1">State Placings</div>
          </div>
        </div>

        {/* Horizontal line */}
        <div className="border-t border-gray-300 my-12"></div>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row justify-between gap-12 text-sm">
          <div className="space-y-4">
            <div className="font-semibold">About us</div>
            <div className="font-semibold">Projects</div>
            <div className="font-semibold">Contact</div>
          </div>

          <div className="space-y-2 sm:text-right">
            <div className="font-semibold">Our Chapter:</div>
            <div>West Forsyth High School TSA</div>
            <div>4155 Drew Rd, Cumming</div>
            <div>Cumming, 30040</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;