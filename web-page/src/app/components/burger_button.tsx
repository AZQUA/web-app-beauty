'use client';

import React, { useEffect, useState, useRef } from 'react';
const Button = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
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
                />
            </button>
            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <ul className="text-2xl text-gray-900 font-bold font-mono py-1">
                        <li onClick={() => setIsOpen(false)} className="hover:bg-purple-600 hover:bg-clip-text hover:text-transparent ">Le Jeu</li>
                        <li onClick={() => setIsOpen(false)} className="hover:bg-purple-600 hover:bg-clip-text hover:text-transparent ">Les Cartes</li>
                        <li onClick={() => setIsOpen(false)} className="hover:bg-purple-600 hover:bg-clip-text hover:text-transparent ">Le Discord</li>
                    </ul>
                </div>
            )}
        </div>
    )
};

export default Button;