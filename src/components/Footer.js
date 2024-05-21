import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <p className="text-sm">&copy; 2024 Tuinue Wasichana. All rights reserved.</p>
            <p className="text-sm">Privacy Policy | Terms of Service</p>
          </div>
          <div className="text-white">
            <p className="text-sm">Contact Us: +254 719 405 599 | info@tuinuewasichana.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
