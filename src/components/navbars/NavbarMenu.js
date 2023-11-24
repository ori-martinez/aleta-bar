// COMPONENTE
/* Barra de Navegación del Menú */
export const NavbarMenu = ({ activeSection, setActiveSection, sections }) => {
    // CONSTANTES
    /* Nuevo Arreglo de las Secciones */
    const resultSections = [];

    sections.forEach((item, index) => resultSections.push(
        <button
            className={`px-1.5 py-0.5 mx-2 ${index === activeSection && 'border-b-2 border-blue-dark'}`}
            key={index}
            onClick={() => setActiveSection(index)}
        >
            <span className=" text-[0.6rem] text-blue-dark font-bold whitespace-nowrap uppercase sm:text-xs md:text-sm lg:text-base">{ item.title }</span>
        </button>
    ));

    // RETORNO
    return (
        <div className="p-2 mx-4 flex flex-wrap items-center justify-center bg-white rounded-b-xl sm:mx-12 md:mx-28 lg:mx-48">{ resultSections }</div>
    );
}
