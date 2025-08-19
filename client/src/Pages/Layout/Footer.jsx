import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Logo from "@/assets/img/logo.png"; // <-- Import your logo image

export default function Example() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 bg-gray-900">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        
        {/* Left Logo & Description */}
        <div className="md:max-w-96">
          <img
            src={Logo}
            alt="Company Logo"
            className="w-32 h-auto object-contain"
          />

          <p className="mt-6 text-sm text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            since the 1500s.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-white">
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500/30 hover:bg-[#018687] hover:text-white transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500/30 hover:bg-[#018687] hover:text-white transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500/30 hover:bg-[#018687] hover:text-white transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500/30 hover:bg-[#018687] hover:text-white transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Right Links */}
        <div className="flex-1 flex items-start md:justify-end gap-20 flex-wrap">
          
          {/* Company Column */}
          <div>
            <h2 className="font-semibold mb-5 text-gray-100">Company</h2>
            <ul className="text-sm space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#018687]">Home</a></li>
              <li><a href="#" className="hover:text-[#018687]">About us</a></li>
              <li><a href="#" className="hover:text-[#018687]">Contact us</a></li>
              <li><a href="#" className="hover:text-[#018687]">Privacy policy</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h2 className="font-semibold mb-5 text-gray-100">Services</h2>
            <ul className="text-sm space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#018687]">Web Development</a></li>
              <li><a href="#" className="hover:text-[#018687]">Mobile App Development</a></li>
              <li><a href="#" className="hover:text-[#018687]">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-[#018687]">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-semibold mb-5 text-gray-100">Get in touch</h2>
            <div className="text-sm space-y-2 text-gray-300">
              <p>+1-212-456-7890</p>
              <p>contact@example.com</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-6 text-center pb-5">
        <p className="text-gray-300 text-sm">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://bmtechx.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#018687] font-semibold"
          >
            BMTechx.in
          </a>{" "}
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
