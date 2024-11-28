import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const listItems = [
        { id: 1, fieldName: "Home", path: "#home" },
        { id: 2, fieldName: "About", path: "#about" },
        { id: 3, fieldName: "Experience", path: "#exp" },
        { id: 4, fieldName: "Skills", path: "#skills" },
        { id: 5, fieldName: " Interests & Abilities", path: "#extras" },
        { id: 6, fieldName: "Contact Me", path: "#contact" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-green-800 text-white shadow-md p-6">
            <nav className="flex justify-center items-center">
                <ul className="hidden md:flex space-x-8">
                    {listItems.map(({ id, fieldName, path }) => (
                        <li key={id}>
                            <a
                                href={`${path}`}
                                className="text-white hover:text-green-400 transition-all duration-300"
                            >
                                {fieldName}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="md:hidden flex justify-between items-center">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="text-white p-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {isMenuOpen && (
                        <ul className="absolute top-16 left-0 w-full bg-green-700 text-white p-4 space-y-4">
                            {listItems.map(({ id, fieldName, path }) => (
                                <li key={id}>
                                    <a
                                        href={`${path}`}
                                        className="block text-center hover:text-green-400 transition-all duration-300"
                                        onClick={() => setIsMenuOpen(false)} 
                                    >
                                        {fieldName}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
