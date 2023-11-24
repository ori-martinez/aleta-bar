/* Components */
import { ButtonFood } from '../buttons/ButtonFood';

// COMPONENTE
/* Sección del Menú */
export const SectionMenu = ({ dishes, time, title }) => {
    // CONSTANTES
    /* Nuevo Arreglo de los Platillos de la Sección */
    const resultDishes = [];

    dishes.forEach((item, index) => resultDishes.push(
        <div className="py-2 w-full grid grid-cols-3 gap-x-4 place-items-center" key={index}>
            <ButtonFood img={item.img} name={item.name} />

            <div className="w-full col-span-2">
                <p className="mb-2 flex flex-wrap flex-row items-center justify-between text-sm text-aquamarine font-bold xs:text-base sm:text-lg md:text-xl lg:text-2xl">
                    { item.name } <span className="text-white">{ item.price } $</span>
                </p>
                <p className="text-xs font-light xs:text-sm sm:text-base">{ item.description }</p>
            </div>
        </div>
    ));

    // RETORNO
    return (
        <div className="mt-12">
            <p className="mx-4 text-base font-bold uppercase xs:mx-6 xs:text-lg sm:mx-10 sm:text-xl md:mx-16 md:text-2xl lg:text-3xl">{ title }</p>
            <p className="mx-4 text-sm font-light xs:mx-6 xs:text-base sm:mx-10 sm:text-lg md:mx-16 md:text-xl lg:text-2xl">Opciones de { time }</p>

            <div className="mt-6 pb-8 overflow-x-hidden">
                <hr className='border-t-2 border-aquamarine' />
                
                <div className="-mt-4 mb-2 h-4 shadow-lg shadow-aquamarine"></div>
            </div>
            <div className="mx-4 xs:mx-6 sm:mx-10 md:mx-16 lg:mx-28">{ resultDishes }</div>
        </div>
    );
}