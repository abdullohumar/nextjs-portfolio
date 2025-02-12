import { motion } from "framer-motion"

export const MenuItems = ({index, href, children} : {index: number, href: string, children: React.ReactNode}) => {
    return (
        <motion.a
        className="relative overflow-hidden px-2 py-1"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.3, delay: index * 0.1, ease: "easeOut"}}
        href={href}
        >
            <span className="text-content/80 hover:text-primary transition-colors">{children}</span>
        </motion.a>
    )
}