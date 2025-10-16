'use client';

import React, { useEffect, useState, useRef } from 'react';

type DropdownMenuProps = {
    isOpen: boolean;
    toggleMenu: () => void;
};

const Button = ({isOpen, toggleMenu}: DropdownMenuProps) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                toggleMenu;
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button onClick={toggleMenu} >
                <img
                    src="https://images.icon-icons.com/2036/PNG/512/menu_circular_button_burger_icon_124214.png"
                    alt="Menu"
                    className="xl:size-30 xl:ml-10 xl:mt-5 xl:mb-5 size-15 ml-5 mt-2.5"
                />
            </button>
            {isOpen && (
                <div className="fixed left-0 z-10 xl:w-55 h-screen origin-top-right bg-white/5 shadow-lg focus:outline-none w-26">
                    <ul className="xl:text-3xl text-gray-900 font-bold font-mono xl:pl-5 xl:py-5 pl-1 py-2 text-base">
                        <li onClick={toggleMenu} className="hover:bg-purple-300 hover:bg-clip-text hover:text-transparent pb-2 ">Le Jeu</li>
                        <li onClick={toggleMenu} className="hover:bg-purple-300 hover:bg-clip-text hover:text-transparent pb-2">Les Cartes</li>
                        <li onClick={toggleMenu} className="hover:bg-purple-300 hover:bg-clip-text hover:text-transparent pb-2">Le Discord</li>
                    </ul>
                </div>
            )}
        </div>
    )
};

export default Button;