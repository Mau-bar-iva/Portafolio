
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0E1452] py-10">
      <div className="max-w-6xl mx-auto text-[#2076e0] px-6 flex flex-col md:flex-row justify-around items-center text-center">
        
        <div>
          {/* Nombre */}
          <h3 className="text-xl font-semibold">
            Mauricio Barreras
            <br />Desarrollador Frontend
          </h3>
          
          {/* Descripción */}
          <p className="text-sm max-w-xl">
            Frontend Developer enfocado en React y UI modernas.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          {/* Social icons */}
          <div className="flex gap-6 mt-4 text-[#2076e0]">
            <div className="w-10 h-10 bg-[#000] flex items-center justify-center rounded-md cursor-pointer"><MdOutlineMail size={30} title="Email"/></div>
            <div className="w-10 h-10 bg-[#000] flex items-center justify-center rounded-md cursor-pointer"><FaGithub  size={30} title="Github"/></div>
            <div className="w-10 h-10 bg-[#000] flex items-center justify-center rounded-md cursor-pointer"><FaLinkedin size={30} title="LinkedIn"/></div>
          </div>

          <div>
            <p>Diseñado y desarrollado por Mauricio Barreras</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
