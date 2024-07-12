"use client"
import React, {useState} from 'react';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-screen bg-gray-200">
            <div className="flex flex-col w-64 bg-white border-r">
                <div className="flex items-center justify-center h-16 border-b">
                    <img className="w-8 h-8 mr-2" src="/logo.png" alt="Logo"/>
                    <h1 className="text-lg font-bold">My App</h1>
                </div>
                <div className="flex-grow overflow-y-auto">
                    <ul className="p-2">
                        <li className="mb-2">
                            <button
                                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left bg-white rounded-lg hover:bg-gray-100"
                                onClick={handleToggle}
                            >
                                <span>Menu 1</span>
                                {isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M19.707,7.293c-0.391-0.391-1.023-0.391-1.414,0L12,13.586L5.707,7.293c-0.391-0.391-1.023-0.391-1.414,0 s-0.391,1.023,0,1.414l7,7C11.488,15.902,11.744,16,12,16s0.512-0.098,0.707-0.293l7-7C20.098,8.316,20.098,7.684,19.707,7.293z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M7.293,16.707c0.391,0.391,1.023,0.391,1.414,0L12,10.414l3.293,6.293c0.391,0.391,1.023,0.391,1.414,0 s0.391-1.023,0-1.414l-4-4C11.488,11.098,11.244,11,11,11s-0.488,0.098-0.707,0.293l-4,4C6.098,15.684,6.098,16.316,6.293,16.707z"
                                        />
                                    </svg>
                                )}
                            </button>
                            {isOpen && (
                                <ul className="pl-4 mt-2">
                                    <li>
                                        <a
                                            className="block px-2 py-1 text-sm rounded-lg hover:bg-gray-100"
                                            href="#"
                                        >
                                            Submenu 1
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="block px-2 py-1 text-sm rounded-lg hover:bg-gray-100"
                                            href="#"
                                        >
                                            Submenu 2
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <a
                                className="block px-4 py-2 text-sm rounded-lg hover:bg-gray-100"
                                href="#"
                            >
                                Menu 2
                            </a>
                        </li>
                        <li>
                            <a
                                className="block px-4 py-2 text-sm rounded-lg hover:bg-gray-100"
                                href="#"
                            >
                                Menu 3
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex-grow p-4">
                <h1>Main Content</h1>
            </div>
        </div>
    );
};

export default Sidebar;