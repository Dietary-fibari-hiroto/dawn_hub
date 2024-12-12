import { motion } from "framer-motion"

const AnimatedRouteSet = ({ children }) => {
    const animation = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.5 },
    }

    return (
        <motion.div {...animation}>
            {children}
        </motion.div>
    )
}


export default AnimatedRouteSet;