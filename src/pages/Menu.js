/* Components */
import { HeaderDecoration } from '../components/HeaderDecoration';
import { NavbarMenu } from '../components/navbars/NavbarMenu';
import { SectionMenu } from '../components/sections/SectionMenu';
/* Hooks */
import { useState } from 'react';
/* Utils */
import { images, sections } from '../utils/helpers';
import { Footer } from '../components/Footer';

// PAGINA
/* Menú del Restaurante */
export const Menu = () => {
    // CONSTANTES
    const [ activeSection, setActiveSection ] = useState(0);        /* Index de la Sección Activa */
    const [ section, setSection ] = useState(sections[0]);          /* Sección del Menú Activa */

    // RETORNO
    return (
        <div className="w-full min-h-screen relative bg-blue-dark text-white">
            {/* Cabecera Decorada */}
            <HeaderDecoration />

            <div className="z-10 mx-4 pb-6 relative xs:pb-32 sm:pb-40 sm:mx-12 md:pb-60 md:mx-24 lg:pb-96 lg:mx-40 xl:pb-[38rem]">
                {/* Menú de las Secciones */}
                <NavbarMenu
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    sections={sections}
                    setSection={setSection}
                />

                {/* Platillos de la Sección */}
                <SectionMenu
                    dishes={section.dishes}
                    time={section.time}
                    title={section.title}
                />
            </div>

            <img alt="Hojas" className='z-0 w-screen absolute bottom-0' src={images.hojas3} />
            
            {/* Footer */}
            <Footer />
        </div>
    );
}
