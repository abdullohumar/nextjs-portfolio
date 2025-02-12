"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen relative overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto px-6 pt-32">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative group lg:w-1/2"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary text-transparent bg-clip-text mb-6"
                        >
                            Fullstack
                            <br/>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                                className="bg-gradient-to-r from-primary via-secondary to-tertiary text-transparent bg-clip-text"
                            >
                                Developer
                            </motion.span>
                        </motion.h1>
                        <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                        className="text-xl text-content/80 mb-8">
                            Specializing in React.js, Next.js, and Flutter.
                            Building innovative solutions with modern technologies.
                            
                        </motion.p>
                        <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                        whileHover={{scale:1.05, transition:{duration:0.2}}}
                        className="relative overflow-hidden px-8 py-4 rounded-full bg-surface border border-white/10 hover:border-primary/30 transition-all group">
                            <span className="text-content group-hover:text-primary transition-colors">
                                Explore Work
                            </span>
                            <div
                            className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary opacity-0 group-hover:opacity-10 transition-opacity"
                            />
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}