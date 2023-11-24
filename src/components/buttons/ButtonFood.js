// COMPONENTE
/* Botón para la Muestra de un Platillo */
export const ButtonFood = ({ img, name, onClick = () => {} }) => (
    <button
        className="w-16 h-16 rounded-full shadow-lg shadow-white overflow-hidden focus:outline-none xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
        onClick={onClick}
    >
        <img alt={name} src={img} />
    </button>
);
