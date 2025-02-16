'use client';
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaLaravel, FaReact } from "react-icons/fa";
import { SiFramer, SiTailwindcss } from "react-icons/si";
const projects = [
    {
        title: "E-commerce",
        description: "Modern shopping experience with Reactjs and Laravel",
        tech: [
            { name: 'React', icon: FaReact, color: "#61DAFB" },
            { name: 'Laravel', icon: FaLaravel, color: "#FF2D20" },
            { name: 'Tailwind', icon: SiTailwindcss, color: "#06B6D4" },
            { name: 'Framer', icon: SiFramer, color: "#0055FF" },
        ],
        image: '/project/view.jpg'
    },
    {
        title: "E-commerce",
        description: "Modern shopping experience with Reactjs and Laravel",
        tech: [
            { name: 'React', icon: FaReact, color: "#61DAFB" },
            { name: 'Laravel', icon: FaLaravel, color: "#FF2D20" },
            { name: 'Tailwind', icon: SiTailwindcss, color: "#06B6D4" },
        ],
        image: '/project/view.jpg'
    },
    {
        title: "E-commerce",
        description: "Modern shopping experience with Reactjs and Laravel",
        tech: [
            { name: 'React', icon: FaReact, color: "#61DAFB" },
            { name: 'Laravel', icon: FaLaravel, color: "#FF2D20" },
            { name: 'Tailwind', icon: SiTailwindcss, color: "#06B6D4" },
        ],
        image: '/project/view.jpg'
    },
]

export default function SelectedProject() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 100])
    return (
        <section className="min-h-screen flex bg-black justify-center items-center relative ">
            <motion.div
                style={{ y }}
                className="max-w-7xl p-8 bg-slate-900 rounded-xl"
            >
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
                    className="flex flex-col items-center">

                    {/* Section Title */}
                    <div className="pb-8">
                        <h1 className="font-mono font-bold text-3xl text-white pb-1">Selected Project</h1>
                        <div className="w-full relative bg-gradient-to-l from-primary to-tertiary h-[3px] rounded-full overflow-hidden">
                            <div className="absolute w-full bg-gradient-to-r from-primary to-tertiary h-full rounded-full animate-underline-bar" />
                            <div className="absolute w-full bg-gradient-to-l from-primary to-tertiary h-full rounded-full animate-underline-bar" />
                        </div>
                    </div>

                    {/* Projects Grid   */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 mx-8">
                        {projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group relative rounded-3xl overflow-hidden bg-surface border border-white/10 cursor-pointer"
                            >
                                <motion.div
                                    className="h-[250px] relative"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                        priority
                                    />
                                </motion.div>
                                <motion.div
                                    transition={{ duration: 0.2 }}
                                    className="p-4 flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                                        <ArrowUpRightIcon className="h-6 w-6 text-white hover:scale-110 transition-all duration-300 ease-in-out hover:text-primary" />
                                    </div>
                                    <p className="text-gray-300 ">{project.description}</p>
                                    <div className="grid grid-cols-3 gap-2">
                                        {project.tech.map((tech, index) => (
                                            <div key={index} className="flex gap-1 hover:scale-110 transition-all duration-300 border border-white/10 rounded-full px-2 py-1">
                                                <tech.icon style={{ color: tech.color }} />
                                                <span className="text-sm text-gray-400">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div className="w-full relative bg-gray-400/10 h-[1px] rounded-full overflow-hidden items-end"></div> */}
                                </motion.div>
                            </motion.div>
                        ))
                        }
                    </div>
                    <div className="flex justify-end mt-8 hover:text-white hover:underline transition-all duration-300 ease-in-out">
                        <a
                            href="#"
                            className="text-white/10 hover:text-white"
                        >
                            View All Project ~&gt;
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}