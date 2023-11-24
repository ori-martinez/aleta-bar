/* Constants */
import { images } from '../constants/helpers';

// COMPONENTE
/* Cabecera Decorada */
export const HeaderDecoration = () => (
    <div className="w-full relative overflow-hidden">
        <img alt="Hojas" className="w-28 absolute -top-4 -left-4 sm:w-40 md:w-48 lg:w-64" src={images.hojas1} />
        <img alt="Wall" className="-mt-2 w-full sm:-mt-8 md:-mt-16 lg:-mt-32 xl:-mt-64" src={images.wall} />
        <img alt="Hojas" className="w-28 absolute -bottom-4 -right-4 sm:w-40 md:w-48 lg:w-64" src={images.hojas2} />

        <div className="w-full absolute -top-6 flex flex-col items-center justify-center">
            <img alt="Logo" className="w-36 sm:w-56 md:w-72 lg:w-96" src={images.logo} />
            <img alt="Bienvenido" className="-mt-6 w-24 sm:-mt-10 sm:w-40 md:-mt-14 md:w-56 lg:-mt-20 lg:w-64" src={images.welcome} />
        </div>
    </div>
);
