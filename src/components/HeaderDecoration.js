/* Utils */
import { images } from '../utils/helpers';

// COMPONENTE
/* Cabecera Decorada */
export const HeaderDecoration = () => (
    <div className="w-full relative overflow-hidden">
        <img alt="Wall" className="-mt-2 w-full xs:-mt-4 sm:-mt-8 md:-mt-16 lg:-mt-20 xl:-mt-24" src={images.wall} />
        <img alt="Hojas" className="w-28 absolute -left-4 -top-4 xs:w-36 sm:w-40 md:w-56 lg:w-96 xl:w-[30rem]" src={images.hojas1} />
        <img alt="Hojas" className="w-28 absolute -right-4 -bottom-4 xs:w-36 sm:w-40 md:w-56 lg:w-96 xl:w-[30rem]" src={images.hojas2} />

        <div className="w-full absolute inset-y-0 flex flex-col items-center justify-center">
            <div className="w-content rounded-full shadow-xl shadow-white">
                <img alt="Logo" className="w-28 xs:w-40 sm:w-56 md:w-72 lg:w-96 xl:w-[30rem]" src={images.logo} />
            </div>
                
            <img alt="Bienvenido" className="w-32 xs:w-44 sm:w-60 md:w-84 lg:w-[28rem] xl:w-[32rem]" src={images.welcome} />
        </div>
    </div>
);
