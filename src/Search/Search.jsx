import React, { useEffect, useState } from 'react'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/herbs.json") // Ensure JSON is in `public` folder
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  // Filter items based on search query
  //  const filteredItems = items.filter((item) =>
  //    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  //  );

  const filteredItems = searchQuery
    ? items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []; // If searchQuery is empty, show nothing

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="What would you like to search for?"
      />

      <ul>
        {filteredItems.length > 0
          ? filteredItems.map((item) => <li key={item.id}>{item.name}</li>)
          : searchQuery && <p>No items found</p>}
      </ul>
    </div>
  );
}

export default Search