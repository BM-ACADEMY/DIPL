// src/Pages/main/Contact.js
import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ---- Enquiry Form State ----
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwgW3A1bIX_65jIY0zpdAcWmACVsC5iWexW7_MgpOG9QTniBhSJbJJmygY2x-QKbAD6Fw/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const form = new FormData();
  form.append("name", formData.name);
  form.append("email", formData.email);
  form.append("phone", formData.phone);
  form.append("message", formData.message);

  try {
    await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",  // ✅ Important
      body: form,
    });

    // We assume it succeeded
    toast.success("Enquiry sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });

  } catch (error) {
    console.error("Submission error:", error);
    toast.error("Failed to submit form. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="relative bg-gradient-to-br from-[#f0e7d0] to-[#f5e7c5bb] py-16 px-4n overflow-hidden sm:px-6 lg:px-20">
      {/* Top Heading */}
      <div className="text-center mt-10 mb-12" data-aos="fade-up">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Contact <span className="text-[#f0b104]">Us</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          We’d love to hear from you! Get in touch with us for any queries,
          support, or collaboration opportunities.
        </p>
      </div>

      {/* Contact Details + Map */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
        {/* Left: Contact Details */}
        <div
          className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl flex flex-col justify-center"
          data-aos="fade-right"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
            Have questions or want to work with us? Reach out and we’ll get back
            to you quickly.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="bg-[#008688]/10 p-3 rounded-full group-hover:bg-[#fdf7e5] transition">
                <MapPin className="text-[#008688]  w-6 h-6" />
              </div>
              <p className="text-gray-500 font-medium break-words">
                No: SF NO: 52/5, PLOT NO: 11, Govinda Agraharam, Begepalli Post,
                Hosur, Krishnagiri, Tamil Nadu, PIN Code: 635126.
              </p>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="bg-[#008688]/10 p-3 rounded-full group-hover:bg-[#fdf7e5] transition">
                <Phone className="text-[#008688]  w-6 h-6" />
              </div>
              <p className="text-gray-500 font-medium">+91 9677950619</p>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="bg-[#008688]/10 p-3 rounded-full group-hover:bg-[#fdf7e5] transition">
                <Mail className="text-[#008688]  w-6 h-6" />
              </div>
              <p className="text-gray-500 font-medium break-words">
                kowsikkumarkp@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Right: Google Map */}
        <div
          className="rounded-2xl overflow-hidden shadow-xl  aspect-video md:aspect-auto md:h-auto"
          data-aos="fade-left"
        >
          <iframe
    title="Company Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31130.158612416682!2d77.78515640244807!3d12.760981058056862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae711c9235a005%3A0x86df3f74f400478a!2sBegepalli%20Post%20Office!5e0!3m2!1sen!2sin!4v1755686514875!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
        </div>
      </div>

      {/* Enquiry Section - Full Width with Glassmorphism */}
      <div
        className="relative mt-20 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex justify-end max-w-7xl mx-auto px-4 py-20">
          <div
            className="w-full md:w-1/2 backdrop-blur-md bg-white/20 border border-white/30 
                       rounded-2xl shadow-2xl p-8 md:p-10"
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Enquiry Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00b3a4]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00b3a4]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00b3a4]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00b3a4]"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#f0b104] text-white font-semibold py-3 rounded-lg hover:bg-[#f0b104de] transition"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
