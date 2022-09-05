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
        if (this.vegan){
            this.vegetarian = (this.vegetarian ? false : this.vegetarian);
            this.meat = (this.meat ? false : this.meat);
            this.seafood = (this.seafood ? false : this.seafood);
        }
        setSearch(this);
    }

    toggleVegetarian(setSearch){
        this.vegetarian = !this.vegetarian;
        if (this.vegetarian){
            this.vegan = (this.vegan ? false : this.vegan);
            this.meat = (this.meat ? false : this.meat);
            this.seafood = (this.seafood ? false : this.seafood);
        }
        setSearch(this);
    };

    toggleCarnivore(setSearch){
        this.meat = !this.meat;
        if (this.meat){
            this.vegan = (this.vegan ? false : this.vegan);
            this.vegetarian = (this.vegetarian ? false : this.vegetarian);
            this.seafood = (this.seafood ? false : this.seafood);
        }
        setSearch(this);
    }

    toggleSeafood(setSearch){
        this.seafood = !this.seafood;
        if (this.seafood){
            this.vegan = (this.vegan ? false : this.vegan);
            this.vegetarian = (this.vegetarian ? false : this.vegetarian);
            this.meat = (this.meat ? false : this.meat);
        }
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