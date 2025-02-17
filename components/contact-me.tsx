'use client';
import { motion, useScroll, useTransform } from "framer-motion";

export default function ContactMe() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 100]);

    return (
        <section className="min-h-screen bg-black flex justify-center items-center relative p-4">
            <motion.div
                style={{ y }}
                className="max-w-2xl w-full p-8 rounded-xl bg-slate-900/50 backdrop-blur-2xl border border-white/10"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center mb-8"
                >
                    <h1 className="font-mono font-bold text-4xl text-white pb-2">Contact Me</h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    <form className="space-y-6">
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                                placeholder="Name"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                                placeholder="Email"
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                                placeholder="Your Message"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/30 transition-all transform hover:scale-105 active:scale-95"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </section>
    );
}