import { useState } from "react";
const useSortAndFilter = (data) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortDirection(event.target.value);
    };

    const filteredData = data?.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedData = [...filteredData].sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (sortDirection === 'asc') {
            return nameA.localeCompare(nameB);
        } else {
            return nameB.localeCompare(nameA);
        }
    });

    return { searchTerm, handleSearch, handleSortChange, sortDirection, sortedData }
}

export default useSortAndFilter