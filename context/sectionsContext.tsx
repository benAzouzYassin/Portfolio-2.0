"use client"
import { ReactNode, createContext, useContext, useState } from "react"

type Section =   "ABOUT" | "TECH STACK" | "PROJECTS" | "EXPERIENCES"
type ContextType = {
    currentSection : Section
    updateSection : (newSection : Section)=> void
} 
const sectionsContext = createContext<ContextType | null>(null)

export function SectionsContextProvider ({children} : {children : ReactNode}) {
    const [currentSection , setCurrentSection] = useState<Section>("ABOUT")
    const updateSection =(newSection : Section)=>{
        setCurrentSection(newSection)}
    return <sectionsContext.Provider value={{currentSection , updateSection }}>
        {children}
    </sectionsContext.Provider>
}

export function useSectionsContext() {
    const context = useContext(sectionsContext)
    if(!context) throw new Error("using sectionsContext outside the provider")
    return context
}