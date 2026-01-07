import CarrouselProyects from "../CarrouselProyects/CarrouselProyects"
import { motion } from "framer-motion"
import { useProjectContext } from "../../context/projectContext/useProjectContext.js"

const proyects = [
    { id: 1, titulo: "Suplementos gold", subtitulo: "Tienda de suplementos", descripcion: "Página web de una tienda de suplementos nutricionales ", imagen: "/suplementosgold.png", path: "https://suplementosgold.vercel.app/" },
    { id: 2, titulo: "ModeaVelour", subtitulo: "Tienda de ropa", descripcion: "Página web de una tienda de ropa", imagen: "/modeavelour.png", path: "https://tp-curso-react.vercel.app/" },
    { id: 3, titulo: "To-do App", subtitulo: "Aplicación de tareas", descripcion: "Página web de una aplicación de tareas", imagen: "/todoapp.png", path: "https://suplementosgold.vercel.app/" },
]

export default function ProyectosSection() {
    const { activeProject } = useProjectContext();

    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            viewport={{ once: false, margin: "-200px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            id="section-proyects"
            className="relative overflow-hidden w-full min-h-[98vh] p-[2rem] px-[0rem] pb-[35rem] box-border bg-[linear-gradient(to_bottom,#150c20,#150c20,#66125B)]"
        >
            <div className="text-3xl flex justify-center pb-10">
                <h4 className="mb-5
                    text-[#e8fd1c] 
                    text-shadow-[0_0_20px_#e25ccf]
                    text-shadow-[0_0_10px_#e25ccf]
                    text-shadow-[0_0_20px_#9c1b8c]
                    text-shadow-[0_0_30px_#66125b]
                    text-5xl md:text-6xl">Proyectos</h4>
            </div>
            <div className="w-full pb-[2rem] md:px-10 ">
                <article
                    id={activeProject?.id}
                    className={`w-full rounded-3xl flex flex-col justify-end inset-shadow-[0px_-50px_50px_0px_#c528b138]`}
                    style={{
                        backgroundImage: `url(${activeProject?.imagen})`,
                        backgroundSize: "cover",
                    }}>
                    <div className="
                    text-[#fff] 
                    p-10 
                    flex 
                    flex-col 
                    gap-5 
                    z-10 
                    bg-[linear-gradient(to_right,#261937_65%,rgba(0,0,0,.7)_80%,rgba(0,0,0,0)_100%)]
                    sm:bg-[linear-gradient(to_right,#261937_25%,rgba(0,0,0,0.11)_60%,rgba(0,0,0,0)_100%)]">
                        <h3 className="text-2xl md:text-3xl font-semibold">{activeProject?.titulo}</h3>
                        <h5 className="text-lg md:text-xl">{activeProject?.subtitulo}</h5>
                        <p className="hidden sm:block md:w-200 line-clamp-5 text-[#2076E0]">{activeProject?.descripcion}</p>
                        <motion.a
                            href={activeProject?.path} target="_blank" rel="noopener noreferrer"
                            whileHover={{ backgroundColor: "#221266", textShadow: "0px 0px 2px #9e8203ff", boxShadow: "0 0 10px 4px #ad9d52" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="w-50 flex justify-center text-xl text-[#dfc48d] font-semibold py-2 bg-transparent border border-[#dfc48d] box-shadow-none rounded cursor-pointer">
                            Visitar Proyecto
                        </motion.a>
                    </div>
                </article>
            </div>

            <div className="w-full left-1/2 translate-x-[-50%] absolute h-[30rem] z-2">
                <CarrouselProyects projects={proyects} />
            </div>

        </motion.section>
    )
}