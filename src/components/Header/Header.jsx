import Nav from "../Nav/Nav.jsx"
import "./Header.css"
import { useState } from "react"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect } from "react"

export default function Header() {
    const [darkMode, setDarkMode] = useState(false)

    const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 480);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <motion.header
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 h-[3rem] w-full flex justify-center z-50 "
        >
            <div className="relative w-full flex md:gap-[520px] justify-start md:pl-20">
                {/* Si el width es menor mostramos el nav mobile */}
                {isMobile ?
                    (<div className="nav-container w-full flex items-center justify-end py-[30px]">
                        <Nav mobile={true} />
                    </div>) :
                    (<div className="nav-container h-[100%] w-100 flex items-center md:justify-center px-5 rounded-b-3xl bg-[#0E1452]">
                        <Nav mobile={false} />
                    </div>)
                }
                {/*<div className="h-full w-fit ml-40 flex items-center px-5 rounded-b-3xl bg-[#0E1452]">
                    <button 
                        onClick={()=>{setDarkMode(prev => !prev)}}
                        className="cursor-pointer">
                        {darkMode ? <Moon  color="#ad9d52"/> : <Sun color="#ad9d52"/>}
                    </button>
                </div>*/}
            </div>
        </motion.header>
    )
}