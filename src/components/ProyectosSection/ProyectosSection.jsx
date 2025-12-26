import CarrouselProyects from "../CarrouselProyects/CarrouselProyects"
import { motion } from "framer-motion"

export default function ProyectosSection(){
    return(
        <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        viewport={{ once: false, margin: "-200px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        id="section-proyects" 
        className="relative w-full min-h-[98vh] p-[2rem] pb-[35rem] box-border bg-[linear-gradient(to_bottom,#150c20,#150c20,#66125B)]"
        >
            <div className="text-3xl flex justify-center pb-10">
                <h4 className="mb-5
                    text-[#e8fd1c] 
                    text-shadow-[0_0_20px_#e25ccf]
                    text-shadow-[0_0_10px_#e25ccf]
                    text-shadow-[0_0_20px_#9c1b8c]
                    text-shadow-[0_0_30px_#66125b]
                    text-5xl md:text-6xl">Mis Proyectos</h4>
            </div>
            <div className="w-full pb-[2rem] md:px-10 ">
                <article className="w-full bg-[black] rounded-3xl flex flex-col justify-end inset-shadow-[0px_-50px_50px_0px_#c528b138]">
                    <div className="text-[#fff] p-10 flex flex-col gap-5">
                        <h3 className="text-2xl md:text-3xl">Titulo del proyecto</h3>
                        <h5 className="text-lg md:text-xl">Subtitulo del proyecto</h5>
                        <p className="md:w-200 line-clamp-5 text-[#2076E0]">Descripción del proyecto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, consequatur blanditiis sed quia odit sint quaerat magnam, ea nam quasi aliquam. Aut facere consectetur iste magni. Mollitia, consequatur exercitationem! Quae!</p>
                        <motion.button
                        whileHover={{ backgroundColor: "#221266", textShadow:"0px 0px 2px #9e8203ff", boxShadow:"0 0 10px 4px #ad9d52" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="w-50 text-xl text-[#dfc48d] font-semibold py-2 bg-transparent border border-[#dfc48d] box-shadow-none rounded cursor-pointer">
                            Visitar Proyecto
                        </motion.button>
                    </div>
                </article>
            </div>
            
            <div className="w-full left-1/2 translate-x-[-50%] absolute h-[30rem] z-2">
                <CarrouselProyects/>
            </div>
            
        </motion.div>
    )
}