import FormularioContacto from "../FormularioContacto/FormularioContacto.jsx"
import { Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"
import "./Contact.css"

export default function Contact(){
    return(
        <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        viewport={{ once: false, margin: "-200px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        id="section-contact" 
        className="relative min-h-[50vh] pt-[1.5rem] bg-[linear-gradient(to_bottom,#66125B,#121966)]"
        >
            <div className="h-full flex justify-center items-center gap-25 py-20 pb-10 px-30">
                <div className="max-w-xl h-full flex flex-col gap-10 pb-40">
                    
                    <h2 className="text-5xl flex-1 pl-2
                    text-[#e8fd1c] 
                    text-shadow-[0_0_20px_#e25ccf]
                    text-shadow-[0_0_10px_#e25ccf]
                    text-shadow-[0_0_20px_#9c1b8c]
                    text-shadow-[0_0_30px_#66125b]
                    text-6xl font-semibold">
                        
                        <span className="absolute h-6 w-30 text-[#66125B] border-b left-0 translate-y-[50%]"></span>
                        <span className="absolute h-6 w-150 text-[#66125B] border-b left-0 translate-y-[180%] "></span>
                        Contactame</h2>

                    <p className="text-3xl text-[#2076E0]">Si tenes algún proyecto en mente hablemos y construyamos juntos</p>
                    
                    <div className="flex flex-col gap-5 text-[#2076E0]">
                        <a href="#" className="group socialmedia
                            flex items-center gap-3
                            w-12 h-12 px-2
                            bg-[linear-gradient(to_top_right,#121966,#66125B)] outline-1 outline-[#121966] rounded-full
                            overflow-hidden
                            transition-[width] duration-400
                            hover:w-[360px]">
                        <Mail size={30} className="shrink-0"/>
                        <span className="text">Mauricio_bar_ivan@outlook.com</span>
                        </a>
                        <a href="#" className="group socialmedia
                            flex items-center gap-3
                            w-12 h-12 px-2
                            bg-[linear-gradient(to_top_right,#121966,#66125B)] outline-1 outline-[#121966] rounded-full
                            overflow-hidden
                            transition-[width] duration-400
                            hover:w-[360px]">
                        <Phone size={30} className="shrink-0"/>
                        <span className="text font-semibold">+54 9 11 2769-1254</span>
                        </a>
                    </div>
                </div>
                <div className="max-w-xl w-full h-full px-20">
                    <FormularioContacto />
                </div>
            </div>

        </motion.section>
    )
}