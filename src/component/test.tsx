import { motion } from "framer-motion";

const HoverPopupContainer = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <motion.div
        className="relative w-[800px] h-[600px] bg-gray-800 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src="https://via.placeholder.com/800x600"
          alt="Placeholder"
          className="absolute w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black via-transparent to-black text-white p-6 opacity-0"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-2xl font-semibold text-center">
            This is a sample description that appears on hover.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HoverPopupContainer;
