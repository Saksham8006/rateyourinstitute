import React, { useState } from 'react'
import data from "./Mock_Data.json";
import { Link } from 'react-router-dom';


const Searchbar = () => {
    // const history = useHistory();
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };

    // const onItemClick = (name) => {
    //     onSearch(name);
    //     history.push('/rev/:instituteName'); // Navigate to the form route
    //   };


    return (
        <div className="App">
            <div className=" w-[500px] ">
                <div className="dropdown">
                    <div className=" w-[300px]  xs:w-[400px]  ss:w-[480px] sm:w-[520px] md:w-[590px] lg:w-[605px] xl:w-[610px] space-x-3 border-gray-400 p-3 border-none outline-none hover:outline-none rounded-lg shadow-lg shadow-gray-100 search-inner flex bg-gray-100">
                        <input className="flex bg-gray-100 justify-center px-3 py-3 w-full focus:outline-none"
                            type="text" value={value} onChange={onChange} id='searchItem' placeholder='search your institute' />
                        <button className="bg-blue-500 p-3 rounded-lg"
                            onClick={() => onSearch(value)}>Search</button>
                    </div>
                    {data
                        .filter((item) => {
                            const searchTerm = value.toLowerCase();
                            const Name = item.name.toLowerCase();

                            return (
                                searchTerm &&
                                Name.startsWith(searchTerm) &&
                                Name !== searchTerm
                            );
                        })
                        .slice(0, 10)
                        .map((item) => (
                            <Link to={`/rev?institute=${item.name}`}>
                                <div
                                    // onClick={() => onItemClick(item.name)}
                                    className="dropdown-row text-left pl-5 bg-gray-100 cursor-pointer px-[5px]"
                                    key={item.name}
                                >

                                    {item.name}
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </div>

    )
}

export default Searchbar


