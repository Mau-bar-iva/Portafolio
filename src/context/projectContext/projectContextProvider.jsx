import { useState } from "react"
import { ProjectContext } from "./projectContext"

export function ProjectContextProvider({ children }) {
    const [activeProject, setActiveProject] = useState(null);

    return (
        <ProjectContext.Provider value={{ activeProject, setActiveProject }}>
            {children}
        </ProjectContext.Provider>
    );
}