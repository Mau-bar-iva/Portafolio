import { Menu } from "lucide-react"
import { useState } from "react"
import "./Nav.css"
export default function Nav({ mobile }) {
    const [menuVisible, setMenuVisible] = useState(false)

    const toggleMenu = () => setMenuVisible((prev) => !prev);

    return (
        <nav className={`${mobile && "w-full flex items-center justify-end"}`}>
            {mobile ? (
                <div className={` ${menuVisible ? "nav-mobile-btn-container open" : "nav-mobile-btn-container closed"} h-fit  relative px-[25px] pt-[3rem] pb-[1rem] rounded-full bg-[#0E1452]  flex flex-col items-center justify-center`} >
                    <button className="hamburger-btn self-end" onClick={toggleMenu}>
                        <Menu size={30} color="#e8fd1c" />
                    </button>
                    {!menuVisible && (
                        <ul className="nav-mobile-menu absolute w-full mt-[20rem] left-0 flex flex-col items-center text-2xl text-[#2076e0] gap-8">
                            <li className="hover:text-[#dfc48d]"><a href="#section-inicio">Inicio</a></li>
                            <li className="hover:text-[#dfc48d]"><a href="#section-aboutme">Sobre mi</a></li>
                            <li className="hover:text-[#dfc48d]"><a href="#section-proyects">Proyectos</a></li>
                            <li className="hover:text-[#dfc48d]"><a href="#section-contact">Contacto</a></li>
                        </ul>
                    )}
                </div>
            ) : (
                <ul className="flex justify-around text-[#2076e0] gap-7 ">
                    <li className="hover:text-[#dfc48d]"><a href="#section-inicio">Inicio</a></li>
                    <li className="hover:text-[#dfc48d]"><a href="#section-aboutme">Sobre mi</a></li>
                    <li className="hover:text-[#dfc48d]"><a href="#section-proyects">Proyectos</a></li>
                    <li className="hover:text-[#dfc48d]"><a href="#section-contact">Contacto</a></li>
                </ul>
            )
            }
        </nav >
    )
}