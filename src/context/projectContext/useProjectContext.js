import { useContext} from 'react'
import { ProjectContext } from '../projectContext/projectContext'

export function useProjectContext() {
    return useContext(ProjectContext)
}