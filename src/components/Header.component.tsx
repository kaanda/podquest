import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"; // Verifique a versão correta
import { BellIcon } from "@heroicons/react/24/outline";
import DropdownMenu from "./DropdownMenu.component";


export default function Header() {
    return (
        <div className="header">
            <div className="relative ml-[50px]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MagnifyingGlassIcon className="w-5 h-5" />
                </div>
                <input
                    type="text"
                    placeholder="Buscar podcasts..."
                    className="block w-full pl-10 pr-3 py-2 rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
            </div>
            {/* <div className="w-8 h-[2.2rem] ml-1 bg-white rounded flex items-center justify-center"> */}
            {/* </div> */}
            <div className="dropdown-menu">
                <BellIcon className="w-8 h-8 mt-[2px] bg-white rounded flex items-center justify-center" />
                <DropdownMenu />
            </div>
        </div>
    );
}
