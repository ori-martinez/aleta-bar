/* Components */
import { HeaderDecoration } from '../components/HeaderDecoration';
import { NavbarMenu } from '../components/navbars/NavbarMenu';
import { SectionMenu } from '../components/sections/SectionMenu';
/* Hooks */
import { useState } from 'react';
/* Utils */
import { sections } from '../utils/helpers';

// PAGINA
/* Menú del Restaurante */
export const Menu = () => {
    // CONSTANTES
    const [ activeSection, setActiveSection ] = useState(0);        /* Index de la Sección Activa */
    const [ section, setSection ] = useState(sections[0]);          /* Sección del Menú Activa */

    
    // RETORNO
    return (
        <div className="min-h-screen bg-blue-dark text-white">
            {/* Cabecera Decorada */}
            <HeaderDecoration />

            <div className="mx-4 relative sm:mx-12 md:mx-28 lg:mx-48">
                {/* Menú de las Secciones */}
                <NavbarMenu
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    sections={sections}
                    setSection={setSection}
                />
                
                <SectionMenu
                    dishes={section.dishes}
                    time={section.time}
                    title={section.title}
                />
            </div>
        </div>
    );
}
