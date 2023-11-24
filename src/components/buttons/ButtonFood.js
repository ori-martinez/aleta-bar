// COMPONENTE
/* Botón para la Muestra de la Comida */
export const ButtonFood = ({ img, name, onClick }) => (
    <button
        className="w-16 h-16 rounded-full shadow-lg shadow-white overflow-hidden focus:outline-none xs:w-24 xs:h-24 sm:w-32 sm:h-32"
        onClick={onClick}
    >
        <img alt={name} src={img} />
    </button>
);
