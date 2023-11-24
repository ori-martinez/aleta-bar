/* Utils */
import { images } from '../utils/helpers';

// COMPONENTE
/* Cabecera Decorada */
export const HeaderDecoration = () => (
    <div className="w-full relative overflow-hidden">
        <img alt="Wall" className="-mt-2 w-full xs:-mt-4 sm:-mt-8 md:-mt-16 lg:-mt-32 xl:-mt-64" src={images.wall} />
        <img alt="Hojas" className="w-28 absolute -left-4 -top-4 xs:w-36 sm:w-40 md:w-56 lg:w-96 xl:w-[30rem]" src={images.hojas1} />
        <img alt="Hojas" className="w-28 absolute -right-4 -bottom-4 xs:w-36 sm:w-40 md:w-56 lg:w-96 xl:w-[30rem]" src={images.hojas2} />
        <img alt="Bienvenido" className="w-32 absolute right-4 top-4 xs:w-44 xs:right-8 xs:top-8 sm:w-60 sm:right-12 sm:top-12 md:w-84 md:right-16 md:top-16 lg:w-[28rem] lg:right-20 lg:top-20 xl:w-[32rem] xl:right-24 xl:top-24" src={images.welcome} />

        <div className="absolute left-4 bottom-4 xs:left-8 xs:bottom-8 sm:left-12 sm:bottom-12 md:left-16 md:bottom-16 lg:left-20 lg:bottom-20 xl:left-24 xl:bottom-24">
            <div className="w-content rounded-full shadow-lg shadow-white">
                <img alt="Logo" className="w-28 xs:w-40 sm:w-56 md:w-72 lg:w-96 xl:w-[30rem]" src={images.logo} />
            </div>
        </div>
    </div>
);
