import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";


const heroData = [
  {
    id: 1,
    backgroundImage:
      "https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=1600&auto=format&fit=crop",
    heading: "Engineering Innovation, Delivering Excellence",
    description:
      "We design and deliver world-class automation solutions that redefine productivity, efficiency, and precision for modern industries.",
    cta: {
      apply: { text: "Apply Now", href: "#apply" },
      consult: { text: "Book a Free Consultation", href: "#consultation" },
    },
  },
  {
    id: 2,
    backgroundImage:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop",
    heading: "Automation That Empowers",
    description:
      "From line automation and SPMs to robotics and AGVs, our advanced technologies help businesses operate smarter, faster, and more efficiently.",
    cta: {
      apply: { text: "Get Business Loan", href: "#apply-business" },
      consult: { text: "Talk to an Expert", href: "#consult-business" },
    },
  },
  {
    id: 3,
    backgroundImage:
      "https://images.unsplash.com/photo-1556741533-f6acd647d2fb?q=80&w=1600&auto=format&fit=crop",
    heading: "Integrity. Quality. Customer-Centricity.",
    description:
      "Our values drive us to create tailor-made solutions that exceed expectations, ensuring long-term partnerships built on trust and results.",
    cta: {
      apply: { text: "Apply for Home Loan", href: "#apply-home" },
      consult: { text: "Free Home Loan Advice", href: "#consult-home" },
    },
  },
  {
    id: 4,
    backgroundImage:
      "https://images.unsplash.com/photo-1565372919700-69b2cd8e3a45?q=80&w=1600&auto=format&fit=crop",
    heading: "Precision at Every Step",
    description:
      "With unmatched craftsmanship and attention to detail, we provide durable and efficient solutions—from concept to commissioning.",
    cta: {
      apply: { text: "Apply for Education Loan", href: "#apply-edu" },
      consult: { text: "Get Counseling", href: "#consult-edu" },
    },
  },
  {
    id: 5,
    backgroundImage:
      "https://images.unsplash.com/photo-1581092795360-778b5d0b1c34?q=80&w=1600&auto=format&fit=crop",
    heading: "Your Trusted Partner in Industrial Growth",
    description:
      "With a skilled team, state-of-the-art facilities, and relentless innovation, Dynamics India Pvt Ltd helps you stay ahead in today’s evolving industrial landscape.",
    cta: {
      apply: { text: "Apply for Startup Loan", href: "#apply-startup" },
      consult: { text: "Schedule Free Call", href: "#consult-startup" },
    },
  },
];


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const startAutoPlay = () => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroData.length);
    }, 6000);
  };

  const pauseAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    if (!isPaused) {
      startAutoPlay();
    }
    return () => pauseAutoPlay();
  }, [isPaused]);

  const handleNext = () => {
    pauseAutoPlay();
    setCurrentSlide((prevSlide) => (prevSlide + 1) % heroData.length);
    setIsPaused(true);
  };

  const handlePrev = () => {
    pauseAutoPlay();
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + heroData.length) % heroData.length
    );
    setIsPaused(true);
  };

  const slide = heroData[currentSlide];

  return (
    <div className="relative w-full h-[95vh] overflow-hidden group bg-black" id="home">
      {/* Background image with fade transition */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
         <img
  src={slide.backgroundImage}
  alt={slide.heading}
  className="w-full h-full object-cover object-top brightness-50"
/>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center max-w-4xl"
        >
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">{slide.heading}</h1>
          <p className="text-base sm:text-lg text-gray-200 mb-6">{slide.description}</p>

          <div className="flex flex-col sm:flex-row gap-3">
  <Link
    to="/contact"
    className="px-6 py-3 rounded-md font-semibold text-lg bg-emerald-600 hover:bg-emerald-500 transition"
  >
    {slide.cta.apply.text}
  </Link>
  <Link
    to="/contact"
    className="px-6 py-3 rounded-md font-semibold text-lg bg-white/10 hover:bg-white/20 border border-white/20"
  >
    {slide.cta.consult.text}
  </Link>
</div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 rounded-full text-white cursor-pointer z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={handlePrev}
      >
        <ChevronLeft size={32} />
      </motion.button>
      <motion.button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 rounded-full text-white cursor-pointer z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleNext}
      >
        <ChevronRight size={32} />
      </motion.button>
    </div>
  );
};

export default Home;
