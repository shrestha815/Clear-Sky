//base template for a navbar component
export default function Navbar() {
    return(
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-center">ClearSky</h1>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-white hover:text-gray-200">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-200">About</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-200">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
