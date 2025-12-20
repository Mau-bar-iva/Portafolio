import Nav from "../Nav/Nav.jsx"
import "./Header.css"
import { useState } from "react"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"

export default function Header(){
    const [darkMode, setDarkMode] = useState(false)

    return(
        <motion.header
        initial={{ y: -120, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: false, margin: "0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 h-[3rem] w-full flex justify-center z-10"
        >
            <div className="relative w-full flex gap-[520px] justify-left pl-20">
                <div className="nav-container h-[80%] w-100 flex items-center justify-center px-5 rounded-b-3xl bg-[#0E1452]">
                    <Nav/>
                </div>
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