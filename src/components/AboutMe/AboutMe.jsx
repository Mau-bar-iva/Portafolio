import { Tecnologias } from "../Tecnologias/Tecnologias"
import { motion } from "framer-motion"

export default function AboutMe(){
    return(
        <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        viewport={{ once: false, margin: "-200px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        id="section-aboutme" 
        className="relative flex flex-col items-center justify-center min-h-[98vh] py-[1.5rem] box-border bg-[linear-gradient(to_left_bottom,#351266,#0E1452,#150c20,#150c20,#150c20)]"
        >
            <div className="h-full w-full grid grid-cols-2 align-content-center justify-items-center justify-center px-[1%]">
                <div className="w-full flex justify-center items-center">
                    <div className="w-[70%] max-w-[420px] overflow-hidden rounded-[20px]">
                        <img src="./public/aboutme.jpg" alt="" />
                    </div>
                </div>
                <div className="absolute top-4 left-[1%] top-[50%] translate-y-[-50%] flex flex-col gap-5">
                    {Tecnologias("html", "css", "tailwindcss", "javascript", "react", "bootstrap","python", "django", "mysql", "git").map((icon, index) => (
                    <img
                        key={index}
                        src={icon}
                        alt="technology icon"
                        className="w-8 h-8"
                    />
                    ))}
                </div>
                <div className="text-[#2076e0]">
                    <h1 className="
                    mb-5
                    text-[#e8fd1c] 
                    text-shadow-[0_0_20px_#e25ccf]
                    text-shadow-[0_0_10px_#e25ccf]
                    text-shadow-[0_0_20px_#9c1b8c]
                    text-shadow-[0_0_30px_#66125b]
                    text-6xl ">
                        Sobre mi
                    </h1>
                    <h2 className="text-3xl bg-[#221266] rounded w-fit p-2 mb-2">soy <strong className="text-4xl">Mauricio Barreras</strong></h2>
                    <h2 className="text-4xl bg-[#221266] rounded w-fit p-2"><strong>Desarrollador Frontend</strong></h2>
                    <p className="my-4 mb-10 text-xl pr-[8rem]">Actualmente estoy fortaleciendo mis conocimientos, trabajando en proyectos que me ayudan a mejorar cada día mientras mantengo la prioridad en mi formación académica.
                        <br />
                        <br />
                        Concentro mi enfoque en construir interfaces claras, funcionales y bien pensadas. 
                        <br />
                        <br />
                        Mi objetivo es crecer profesionalmente y formar parte de un equipo donde pueda aportar, aprender y enfrentar desafíos reales.
                        <br />
                        <br />
                        Cuando no estoy programando, me gusta escuchar música, descubrir cosas nuevas y experimentar con diseños.
                    </p>
                    <div>
                        <motion.button
                        whileHover={{ backgroundColor: "#7715c8b5", textShadow:"0px 0px 2px #9e8203ff", boxShadow:"0 0 10px 4px #ad9d52" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="w-50 text-xl text-[#ad9d52] font-semibold py-2 bg-transparent border border-[#ad9d52] box-shadow-none rounded cursor-pointer">
                            Descargar CV
                        </motion.button>
                        
                    </div>
                </div>
            </div>
        </motion.section>
    )
}