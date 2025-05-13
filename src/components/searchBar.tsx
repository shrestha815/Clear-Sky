import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "@hooks/useDebounce";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();
};