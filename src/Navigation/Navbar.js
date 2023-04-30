import { Disclosure } from '@headlessui/react'
import logoImage from '../static/logo.png';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-black">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}

                                <div className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <img className='h-10 w-10' src={logoImage} alt="Logo" />
                                </div>

                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">

                                    {/* <img className="block h-10 w-auto lg:hidden" src={logoImage} alt="Logo" /> */}
                                    <img className="hidden h-10 w-auto lg:block" src={logoImage} alt="Logo" />

                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">

                                        <a href='#' className='no-underline text-white rounded-md px-3 py-2 text-2xl'>Industrie 4.0 Conseils</a>

                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                {/* Right Menu */}
                                <a href='#' className='no-underline text-white px-3 py-2 text-sm mr-3 font-medium'>Qui sommes-nous</a>
                                <a href='#' className='no-underline text-white bg-purple-700 rounded-md px-3 py-2 text-sm font-medium'>Contactez-nous</a>


                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}