import { Fragment } from 'react';
/* Icons */
import { FaXmark } from 'react-icons/fa6';
// Headless UI
import { Dialog, Transition } from '@headlessui/react';

// COMPONENTE
/* Modal para la Muestra de un Platillo */
export const ModalFood = ({ dish, onClose, open }) => (
    <Transition.Root as={Fragment} show={open}>
        <Dialog as='div' className='z-20 fixed inset-0 overflow-y-auto' onClose={() => onClose({})}>
            <div className="min-h-screen flex items-center justify-center">
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-70 transition-opacity' />
                </Transition.Child>
                    
                <span aria-hidden="true" className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-500'
                    enterFrom='opacity-0 translate-y-4'
                    enterTo='opacity-100 translate-y-0'
                    leave='ease-in duration-500'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-4 sm:translate-y-0'
                >
                    <div className="relative transform transition-all">
                        <div className="rounded-full overflow-hidden">
                            <img alt={dish.name} className="xs:w-96 xs:h-96 md:w-[32rem] md:h-[32rem]" src={dish.img} />
                        </div>

                        <button
                            className="p-2 absolute right-10 top-0 bg-aquamarine rounded-xl xs:top-4 xs:right-14 sm:p-3 sm:top-8 sm:right-20"
                            onClick={() => onClose({})}
                        >
                            <FaXmark className='w-5 h-5 text-white xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8' />
                        </button>
                    </div>
                </Transition.Child>
            </div>
        </Dialog>
    </Transition.Root>
);
