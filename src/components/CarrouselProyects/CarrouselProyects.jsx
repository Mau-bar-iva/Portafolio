import Libro from "../../assets/libro.svg"
import { useMemo, useEffect } from "react";
import { motion } from 'framer-motion'
import { useProjectContext } from  "../../context/projectContext/useProjectContext.js"

const particlesCount = 40



export default function CarrouselProyects({ projects }) {
    const { activeProject, setActiveProject } = useProjectContext(projects[0]);

    useEffect(() => {
        if (!activeProject) {
        setActiveProject(projects[0]);
        }
    }, []);

    const particles = useMemo(() => {
    return [...Array(particlesCount)].map((_, i) => {
        const t = i / particlesCount;

        return {
        id: i,
        curveX: Math.sin(t * Math.PI) * 260 + (Math.random() - 0.5) * 1000,
        side: i % 2 === 0 ? -1 : 1,
        size: 1 + Math.random() * 3,
        height: 100 + Math.random() * 100,
        spread: 180 + Math.random() * 120,
        delay: i * 0.2 + Math.random(),
        };
    });
    }, []);

    return(
        <>
            <ul className="w-full relative h-full flex justify-center items-center gap-5 px-5 md:px-15 pb-1">
                <motion.li
                    onClick={() => setActiveProject(projects[0])}
                    whileHover={{ y: -32, scaleY: 1.03 }}
                    animate={
                        activeProject?.id === projects[0].id
                        ? { y: -32, scaleY: 1.03 }
                        : { y: 0, scaleY: 1 }
                    }
                    transition={{ type: "spring"}}
                    className="w-[30%] h-[70%] bg-[black] rounded-3xl cursor-pointer">
                    <img src={projects[0].imagen} alt={projects[0].nombre} className={`w-full h-full object-cover rounded-3xl  hover:brightness-100 ${activeProject?.id === projects[0].id ? "brightness-100" : "brightness-50"}  transition-all duration-300`} />
                </motion.li>
                <motion.li
                    onClick={() => setActiveProject(projects[1])}
                    whileHover={{ y: -32, scaleY: 1.03 }}
                    animate={
                        activeProject?.id === projects[1].id
                        ? { y: -32, scaleY: 1.03 }
                        : { y: 0, scaleY: 1 }
                    }
                    transition={{ type: "spring"}}
                    className="w-[40%] h-[80%] bg-[black] rounded-3xl cursor-pointer">
                    <img src={projects[1].imagen} alt={projects[1].nombre} className={`w-full h-full object-cover rounded-3xl  hover:brightness-100 ${activeProject?.id === projects[1].id ? "brightness-100" : "brightness-50"} transition-all duration-300`} />
                </motion.li>
                    
                <motion.li
                    onClick={() => setActiveProject(projects[2])}
                    whileHover={{ y: -32, scaleY: 1.03 }}
                    animate={
                        activeProject?.id === projects[2].id
                        ? { y: -32, scaleY: 1.03 }
                        : { y: 0, scaleY: 1 }
                    }
                    transition={{ type: "spring"}}
                    className="w-[30%] h-[70%] bg-[black] rounded-3xl cursor-pointer">
                        <img src={projects[2].imagen} alt={projects[2].nombre} className={`w-full h-full object-cover rounded-3xl  hover:brightness-100 ${activeProject?.id === projects[2].id ? "brightness-100" : "brightness-50"} transition-all duration-300`} />
                </motion.li>
                <div className="absolute bottom-0 left-[50%] translate-x-[-49.9%] w-[95%] pointer-events-none">
                    <div className="relative w-full ">
                        <img
                            src={Libro}
                            alt="Libro animado"
                            className="
                            w-full relative z-10 animate-libro-glow
                            "
                        />
                        {/* Emisor */}
                        <div className="absolute bottom-20 left-[40%] -translate-x-[50%]">
                            {particles.map(p => (
                                <span
                                    key={p.id}
                                    className="absolute pointer-events-none rounded-full bg-[#ebeba06b] brightness-1.2 blur-1 shadow-[0_0_10px_#facc15]"
                                    style={{
                                    width: `${p.size * 4}px`,
                                    height: `${p.size * 4}px`,
                                    left: `${p.curveX}px`,
                                    animation: `particle-curve-v 7.5s ease-out infinite`,
                                    animationDelay: `${p.delay}s`,
                                    "--side": p.side,
                                    "--height": `${p.height}px`,
                                    "--spread": `${p.spread}px`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </ul>
            
        </>
    )
}