'use client';

import React, { useEffect, useState, useRef, Fragment } from 'react';
import {Transition} from '@headlessui/react';
import ButtonBurger from '../image/burger_boutton.png';

type DropdownMenuProps = {
    isOpen: boolean;
    toggleMenu: () => void;
};

const Button = ({isOpen, toggleMenu}: DropdownMenuProps) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node) && isOpen) {
                toggleMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, toggleMenu]);

    return (
        <div className="relative inline-block text-left">
            <Transition
                as={Fragment}
                show={isOpen}
                enter="transition ease-out duration-300 transform"
                enterFrom="-translate-x-full opacity-0"
                enterTo="translate-x-0 opacity-100"

                leave="transition esae-in duration-300 transform"
                leaveFrom="translate-x-0 opacity-100"
                leaveTo="-translate-x-full opacity-0"
            >
                <div  ref={dropdownRef} className="fixed left-0 top-0 z-10 xl:w-55 h-screen origin-top-right bg-white/20 shadow-lg focus:outline-none w-26 ">
                    <ul onClick={toggleMenu} className="xl:text-3xl text-gray-300 font-bold font-mono xl:pl-5 xl:pt-28 pl-1 pt-20 text-base">
                        <li onClick={toggleMenu} className="hover:bg-purple-700 hover:bg-clip-text hover:text-transparent xl:pb-2 xl:pt-2 pb-1 pt-1 "><a href="https://project42.fr" target="_blank">Le Jeu</a></li>
                        <li onClick={toggleMenu} className="hover:bg-purple-700 hover:bg-clip-text hover:text-transparent xl:pb-2 xl:pt-2 pb-1 pt-1"><a href="https://project42.fr/cards" target="_blank">Les Cartes</a></li>
                        <li onClick={toggleMenu} className="hover:bg-purple-700 hover:bg-clip-text hover:text-transparent xl:pb-2 xl:pt-2 pb-1 pt-1"><a href="https://discord.gg/JyXuDFaFfe" target="_blank">Le Discord</a></li>
                    </ul>
                </div>
            </Transition>
            <button className="fixed"onClick={toggleMenu} ref={buttonRef}>
                <img
                    src={ButtonBurger}
                    alt="Menu"
                    className="xl:size-20 xl:ml-5 xl:mt-0 xl:mb-5 size-15 ml-5 bg-white/30 rounded-full"
                />
            </button>
            
        </div>
    )
};

export default Button;
