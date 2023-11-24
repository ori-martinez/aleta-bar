/* Components */
import { HeaderDecoration } from '../components/HeaderDecoration';
import { NavbarMenu } from '../components/navbars/NavbarMenu';
/* Hooks */
import { useState } from 'react';
/* Utils */
import { sections } from '../utils/helpers';

// PAGINA
/* Menú del Restaurante */
export const Menu = () => {
    // CONSTANTES
    /* Sección Activa */
    const [ activeSection, setActiveSection ] = useState(0);
    
    // RETORNO
    return (
        <div className="min-h-screen relative bg-blue-dark text-white">
            {/* Cabecera Decorada */}
            <HeaderDecoration />

            {/* Menú de las Secciones */}
            <NavbarMenu
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                sections={sections}
            />
        </div>
    );
}
