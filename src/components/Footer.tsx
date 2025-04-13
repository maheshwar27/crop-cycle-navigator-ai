
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-agricultural-50 border-t border-agricultural-100 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-agricultural-800 mb-4">Smart Crop Recommender</h3>
            <p className="text-agricultural-600 text-sm">
              Helping farmers make data-driven decisions for optimized crop cycles and better yields.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-agricultural-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-agricultural-600 hover:text-agricultural-500">Home</a></li>
              <li><a href="/about" className="text-agricultural-600 hover:text-agricultural-500">About</a></li>
              <li><a href="/contact" className="text-agricultural-600 hover:text-agricultural-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-agricultural-800 mb-4">How It Works</h3>
            <p className="text-agricultural-600 text-sm">
              Our AI analyzes your soil data and constraints to recommend the best crop cycles for maximum yield and soil health.
            </p>
          </div>
        </div>
        <div className="border-t border-agricultural-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-agricultural-500">&copy; {new Date().getFullYear()} Smart Crop Recommender. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-agricultural-500 hover:text-agricultural-700">
              <span className="sr-only">Privacy Policy</span>
              Privacy Policy
            </a>
            <a href="#" className="text-agricultural-500 hover:text-agricultural-700">
              <span className="sr-only">Terms of Service</span>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
