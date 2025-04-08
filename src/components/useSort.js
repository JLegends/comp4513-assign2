import { useState } from "react";

const useSort = (initialData) => {
    const [sortConfig, setSortConfig] = useState({ key: "title", direction: "asc" }); // Defaults to asc

    const handleSort = (key) => {
        setSortConfig((prev) => {
            if (prev.key === key) {
                // Toggle direction if same heading/key
                return {
                    key,
                    direction: prev.direction === "asc" ? "desc" : "asc",
                };
            }
            // new key, start with ascending for that heading
            return { key, direction: "asc" };
        });
    };

    const getNestedValue = (obj, key) => {
        if (key === "artists") return obj.artists ? `${obj.artists.firstName || ""} ${obj.artists.lastName || ""}` : "";
        if (key === "galleries") return obj.galleries?.galleryName || "";
        return key.split(".").reduce((o, k) => (o ? o[k] : ""), obj);
    };

    const sortData = (data) => {
        if (!sortConfig.key) return [...data]; // no sorting done if no key are selected
        return [...data].sort((a, b) => {
            let aValue = getNestedValue(a, sortConfig.key);
            let bValue = getNestedValue(b, sortConfig.key);

            if (typeof aValue === "string") {
                return sortConfig.direction === "asc"
                    ? aValue.localeCompare(bValue)
                    : bValue.localeCompare(aValue);
            }
            return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
        });
    };

    return { sortConfig, handleSort, sortedData: sortData(initialData) };
};

export default useSort;