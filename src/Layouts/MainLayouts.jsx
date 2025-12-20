import { lazy, Suspense } from "react"

import MusicPlayer from "../components/MusicPlayer/MusicPlayer.jsx"
const Hero = lazy(() => import("../components/Hero/Hero.jsx"))
const AboutMe = lazy(() => import("../components/AboutMe/AboutMe.jsx"))
const ProyectosSection = lazy(() =>
  import("../components/ProyectosSection/ProyectosSection.jsx")
)
const Contact = lazy(() => import("../components/Contact/Contact.jsx"))

export default function MainLayouts(){

    return(
        <main className="w-full min-h-screen ">
            <Suspense fallback={<p>Cargando...</p>}>
                <Hero />
            </Suspense>
            <Suspense fallback={<p>Cargando...</p>}>
                <AboutMe />
            </Suspense>
            <Suspense fallback={<p>Cargando...</p>}>
                <ProyectosSection />
            </Suspense>
            <Suspense fallback={<p>Cargando...</p>}>
                <Contact />
            </Suspense>
            
        </main>
    )
}