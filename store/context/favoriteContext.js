const { createContext } = require("react");
import { useState } from 'react'



export const FavoriteContext = createContext({
    id: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { }
})

const FavoriteContextProvider = ({ children }) => {
    const [favoriteMealId, setFavoriteMealId] = useState([])

    const addFavorite = (id) => {
       return setFavoriteMealId((currentId) => [...currentId, id])
    }

    const removeFavorite = (id) => {
        setFavoriteMealId((currentIds) => currentIds.filter(mealId => mealId !== id));
    };
    

    const value = {
        id:favoriteMealId,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite,
    }

    return <FavoriteContext.Provider value={value}>
        {children}
    </FavoriteContext.Provider>
}

export default FavoriteContextProvider;