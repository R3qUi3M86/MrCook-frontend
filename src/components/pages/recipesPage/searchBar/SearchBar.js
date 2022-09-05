import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchCriteron } from "./searchCriteron";
import SearchFilter from "./SearchFilter";

const SearchBar = () => {
    const [search, setSearch] = useState(new SearchCriteron());

    function updateSearchField(e){
        search.string = e.target.value;
        setSearch(search);
    }

    function applySearch(){
        console.log(search);
    }

    // function updateSearchFilter(search){
    //     setSearch(search);
    //     console.log(search)
    // }
    console.log("rerender")
    return(
        <div className="d-flex justify-content-center pt-4">
            <div className="input-group my-2">
                <span className="input-group-text" style={{backgroundColor: "#ce7432"}}>
                    <FaSearch className="text-light"/>
                </span>
                <input type="email" className="form-control" placeholder="Search..." onChange={(e) => updateSearchField(e)} />
                <SearchFilter search={search} setSearch={setSearch}/>
                <button className="btn btn-outline-secondary" onClick={()=>applySearch()}>Apply</button>
            </div>
        </div>
    )
}

export default SearchBar;