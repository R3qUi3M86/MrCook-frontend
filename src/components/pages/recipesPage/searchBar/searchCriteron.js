//Need to implement tag exclusion logic!!

export class SearchCriteron {
    string = "";
    vegan = false;
    vegetarian = false;
    meat = false;
    seafood = false;
    glutenFree = false;
    lowFat = false;
    lowCarbs = false;
    highProtein = false;

    toggleVegan(setSearch){
        this.vegan = !this.vegan;
        setSearch(this);
    }

    toggleVegetarian(setSearch){
        this.vegetarian = !this.vegetarian;
        setSearch(this);
    };

    toggleCarnivore(setSearch){
        this.meat = !this.meat;
        setSearch(this);
    }

    toggleSeafood(setSearch){
        this.seafood = !this.seafood;
        setSearch(this);
    }

    toggleGlutenFree(setSearch){
        this.glutenFree = !this.glutenFree;
        setSearch(this);
    }

    toggleLowFat(setSearch){
        this.lowFat = !this.lowFat;
        setSearch(this);
    }

    toggleLowCarbs(setSearch){
        this.lowCarbs = !this.lowCarbs;
        setSearch(this);
    }

    toggleHighProtein(setSearch){
        this.highProtein = !this.highProtein;
        setSearch(this);
    }
}