import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Sampleservices() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      easing: "ease-in-out",
      once: true, // animation happens only once
      mirror: false,
    });
  }, []);

  const cards = [
    {
      id: 1,
      title: "Automation",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop",
      aos: "fade-up",
    },
    {
      id: 2,
      title: "Fixtures, Toolings & Gauges",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop",
      aos: "fade-up",
    },
    {
      id: 3,
      title: "Manufacturing",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1170&auto=format&fit=crop",
      aos: "fade-up",
    },
  ];

  return (
    <section className="mb-10 relative bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-100/20 rounded-full blur-3xl mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Section Heading */}
        <div className="relative z-10 text-center mb-16" data-aos="zoom-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Our <span className="text-[#008688] not-italic">Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4"></p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card) => (
            <article
              key={card.id}
              data-aos={card.aos}
              className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition duration-500"
            >
              {/* Image */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium hover:bg-white/30 transition"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
