import React from 'react'

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = ({}) => {
        return (

            <nav className='flex flex-col w-full sm:h-4 md:h-4 lg:h-4 xl:h-12 bg-[#FF6665] text-white'>
                <span className='flex p-4 align-middle sm:text-sm md:text-sm lg:text-md xl:text-lg font-medium'>Bolo Hmm..</span>
            </nav>
        );
}