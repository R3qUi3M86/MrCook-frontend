import { useState } from "react";
import "./searchFilter.css";

const iconsPath = process.env.PUBLIC_URL + '/images/filter_icons/';
const veganIcon = iconsPath + 'vegan.png';
const vegetarianIcon = iconsPath + 'vegetarian.png';
const meatIcon = iconsPath + 'meat.png';
const fishIcon = iconsPath + 'fish.png';
const glutenIcon = iconsPath + 'gluten.png';
const lowFatIcon = iconsPath + 'low_fat.png';
const lowCarbIcon = iconsPath + 'low_carb.png';
const hiProteinIcon = iconsPath + 'hi_protein.png';

const SearchFilter = ({search, setSearch}) => {
    const [seed, setSeed] = useState(Math.random())

    function reload(){
        let newSeed = seed;
        while (newSeed === seed){
            newSeed = Math.random();
        }
        setSeed(newSeed);
    }

    return(
        <>
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Tags</button>
            <ul className="dropdown-menu py-0">
                <li>
                    <button className={search.vegan ? "dropdown-item fixed-height d-flex justify-content-between selected-filter-bg" :
                        "dropdown-item fixed-height d-flex justify-content-between"}
                        type="button" onClick={()=>{search.toggleVegan(setSearch); reload()}}>
                        <p className="mb-0">Vegan</p>
                        <img src={veganIcon} className="icon-small-search" alt="Vegan icon"/>
                    </button>
                </li>
                <li>
                    <button className={search.vegetarian ? "dropdown-item fixed-height d-flex justify-content-between selected-filter-bg" :
                        "dropdown-item fixed-height d-flex justify-content-between"} 
                        type="button" onClick={()=>{search.toggleVegetarian(setSearch); reload()}}>
                        <p className="mb-0">Vegetarian</p>
                        <img src={vegetarianIcon} className="icon-small-search" alt="Vegetarian icon"/>
                    </button>
                </li>
                <li>
                    <button className={search.meat ? "dropdown-item fixed-height d-flex justify-content-between selected-filter-bg" :
                        "dropdown-item fixed-height d-flex justify-content-between"} 
                        type="button" onClick={()=>{search.toggleCarnivore(setSearch); reload()}}>
                        <p className="mb-0">Carnivore</p>
                        <img src={meatIcon} className="icon-small-search" alt="Meat icon"/>
                    </button>
                </li>
                <li>
                    <button className={search.seafood ? "dropdown-item fixed-height d-flex justify-content-between selected-filter-bg" :
                        "dropdown-item fixed-height d-flex justify-content-between"} 
                        type="button" onClick={()=>{search.toggleSeafood(setSearch); reload()}}>
                        <p className="mb-0">Fish/Seafood</p>
                        <img src={fishIcon} className="icon-small-search" alt="Fish icon"/>
                    </button>
                </li>
                <li><button className={search.glutenFree ? "dropdown-item fixed-height d-flex justify-content-between selected-filter-bg" :
                        "dropdown-item fixed-height d-flex justify-content-between"}
                         type="button" onClick={()=>{search.toggleGlutenFree(setSearch); reload()}}>
                        <p className="mb-0">Gluten-free</p>
                        <img src={glutenIcon} className="icon-small-search" alt="Gluten icon"/>
                    </button>
                </li>
                <li><button className={search.lowFat ? "dropdown-item fixed-height d-flex justify-content-between selected-filter-bg" :
                        "dropdown-item fixed-height d-flex justify-content-between"} 
                        type="button" onClick={()=>{search.toggleLowFat(setSearch); reload()}}>
                        <p className="mb-0">Low fat</p>
                        <img src={lowFatIcon} className="icon-small-search" alt="Fat icon"/>
                    </button>
                </li>
                <li>
                    <button className={search.lowCarbs ? "dropdown-item fixed-height d-flex justify-content-between selected-filter-bg" :
                        "dropdown-item fixed-height d-flex justify-content-between"} 
                        type="button" onClick={()=>{search.toggleLowCarbs(setSearch); reload()}}>
                        <p className="mb-0">Low carbs</p>
                        <img src={lowCarbIcon} className="icon-small-search" alt="Carbs icon"/>
                        </button>
                    </li>
                <li>
                    <button className={search.highProtein ? "dropdown-item fixed-height d-flex justify-content-between selected-filter-bg" :
                        "dropdown-item fixed-height d-flex justify-content-between"} 
                        type="button" onClick={()=>{search.toggleHighProtein(setSearch); reload()}}>
                        <p className="mb-0">High protein</p>
                        <img src={hiProteinIcon} className="icon-small-search" alt="Protein icon"/>
                    </button>
                </li>
            </ul>
        </>
    )
}

export default SearchFilter;