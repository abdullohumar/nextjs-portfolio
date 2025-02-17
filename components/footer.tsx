'use client';
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center p-4 bg-gray-900 border-t border-gray-800 rounded-xl"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                {/* Copyright */}
                <div className="text-center text-white/50">
                    <p>&copy; {new Date().getFullYear()} Abdulloh Umar. All rights reserved.</p>
                </div>
            </div>
        </motion.footer>
    );
}