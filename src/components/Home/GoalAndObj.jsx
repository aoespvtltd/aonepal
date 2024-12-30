import React from "react";
import { motion } from "framer-motion";

const VisionMissionCard = ({ title, description, direction }) => {
  // Animation variants based on direction
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? -50 : direction === "down" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="rounded-2xl p-6 flex flex-col items-center h-full border-2"
      variants={variants}
      initial="hidden"
      animate="visible"
      whileHover={{
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.4, ease: "easeOut" },
      }}
    >
      <h2 className="text-2xl font-bold mb-4 relative">{title}</h2>
      <p className="text-center text-sm">{description}</p>
    </motion.div>
  );
};


const GoalAndObj = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        <VisionMissionCard
          title="Our Vision"
          description="To create industrial-grade solution across all sectors, solving real-world problems with innovative solutions proudly made in Nepal."
          direction="left"
        />
        <VisionMissionCard
          title="Our Mission"
          description="To design and produce high-quality, affordable products in Nepal, promoting self-reliance, innovation, and sustainable growth across sectors."
          direction="right"
        />
        <VisionMissionCard
          title="Our Commitment"
          description="Transforming Nepal's industries through innovation, quality, affordability, and local, sustainable solutions for global competitiveness."
          direction="up"
        />
        <VisionMissionCard
          title="Our Values"
          description="Innovation, integrity, and customer-centricity are at the heart of everything we do."
          direction="down"
        />
      </div>
    </div>
  );
};

export default GoalAndObj;
