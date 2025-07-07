import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-blue-50 text-gray-600 border-t border-blue-100 text-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-center items-center">
        <p className="text-center">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-blue-600">Akhdan Shalahudin</span>. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
