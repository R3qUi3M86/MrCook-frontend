const SearchFilter = ({search, setSearch}) => {
    return(
        <>
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Tags</button>
            <ul className="dropdown-menu">
                <li><button className="dropdown-item" type="button" onClick={()=>search.toggleVegan(setSearch)}>Vegan</button></li>
                <li><button className="dropdown-item" type="button" onClick={()=>search.toggleVegetarian(setSearch)}>Vegetarian</button></li>
                <li><button className="dropdown-item" type="button" onClick={()=>search.toggleCarnivore(setSearch)}>Carnivore</button></li>
                <li><button className="dropdown-item" type="button" onClick={()=>search.toggleSeafood(setSearch)}>Fish/Seafood</button></li>
                <li><button className="dropdown-item" type="button" onClick={()=>search.toggleGlutenFree(setSearch)}>No gluten</button></li>
                <li><button className="dropdown-item" type="button" onClick={()=>search.toggleLowFat(setSearch)}>Low fat</button></li>
                <li><button className="dropdown-item" type="button" onClick={()=>search.toggleLowCarbs(setSearch)}>Low carbs</button></li>
                <li><button className="dropdown-item" type="button" onClick={()=>search.toggleHighProtein(setSearch)}>High protein</button></li>
            </ul>
        </>
    )
}

export default SearchFilter;