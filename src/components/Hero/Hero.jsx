import { motion } from "framer-motion"

export default function Hero() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            viewport={{ once: false, margin: "-200px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            id="section-inicio"
            className="relative min-h-screen md:px-10 box-border bg-[linear-gradient(to_right,#0f1452,#0E1452,#351266)] scroll-mt-24"
        >
            <div className="
            relative 
            h-[650px] 
            rounded-xl 
            rounded-t-[6%] 
            overflow-hidden 
            flex 
            bg-[#032258]
            bg-[url('/me.png')] 
            bg-[position:30%_50%] 
            md:bg-[position:10%_50%] 
            lg:bg-[position:120%_50%] 
            bg-no-repeat 
            shadow-[inset_0_-70px_50px_#0f1452] 
            md:shadow-[inset_20rem_10px_100px_#032258]
            lg:shadow-[inset_30rem_10px_100px_#032258]">
                <div className="absolute bottom-[40%] text-center md:text-left md:h-[80px] md:ml-[30px] flex flex-col">
                    <span className="text-4xl font-bold px-[20px] text-[#e8fd1c]
                        text-shadow-[0_0_8px_#e25ccf]
                        text-shadow-[0_0_10px_#e25ccf]
                        text-shadow-[0_0_20px_#9c1b8c]
                        text-shadow-[0_0_30px_#66125b]">
                        ¡Bienvenido a mi portafolio!
                    </span>
                </div>
            </div>
            <div className="md:absolute md:top-[50%] md:translate-y-[90%] md:left-none md:w-[45rem] bg-[#0f1452] outline-[10px] outline-[#0E1452] rounded-tr-xl rounded-ss-none p-4 pl-5 z-1 text-left text-lg">
                <p className="text-[#2076e0]">
                    Siempre estoy aprendiendo nuevas tecnologías y buscando desafíos que me permitan seguir creciendo.
                    Acá vas a encontrar los proyectos que estuve construyendo mientras avanzo en mi camino como desarrollador frontend.
                </p>
            </div>
            <div className="md:absolute md:top-[50%] md:translate-y-[270%] md:left-[18px] h-20 md:w-[55rem] p-4 md:pl-10 bg-[#0f1452] rounded-b-xl rounded-se-xl flex md:justify-center items-center">
                <p className="text-[#2076e0]">
                    ¡Gracias por pasar y espero que disfrutes explorando mi trabajo!
                </p>
            </div>
            {/*
            <div className="absolute h-[400px] w-[280px] right-[2.5rem] top-[400px] bg-[#a3a3a3]">
                <MusicPlayer />
            </div>*/}
        </motion.div>
    )
}