import { createContext, useState } from "react";

type Section = "ABOUT" | "TECH STACK" | "PROJECTS" | "EXPERIENCES" | "FOOTER";

type ContextType = {
  currentSection?: Section | null;
  updateSection?: (section: Section) => void;
};

export const NavContext = createContext<ContextType>({});

export function NavContextProvider(props: any) {
  const [currentSection, setCurrentSection] = useState<Section | null>("ABOUT");
  const updateSection = (newSection: Section) => {
    setCurrentSection(newSection);
  };

  return (
    <NavContext.Provider
      value={{ currentSection: currentSection, updateSection: updateSection }}
    >
      {props.children}
    </NavContext.Provider>
  );
}
