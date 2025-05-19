'use client';
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

type SearchBarProps = {
    onSearch: (city: string) => void;
};

export default function SearchBar ({ onSearch }: SearchBarProps) {
    const [city, setCity] = useState('');
    const handleSubmit = (e: React.FormEvent) => { 
        e.preventDefault();
        if (city.trim()) {
            onSearch(city.trim());
            setCity('');
        }
    };
    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full max-w-md mx-auto">
            <input 
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    title="Search"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <CiSearch size={24} />
                </button>
        </form>
    )
};