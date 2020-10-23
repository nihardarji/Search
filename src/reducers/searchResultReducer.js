import { 
    GET_SEARCH_RESULT,
    SET_FAVOURITE
} from '../actions/types'
const initialState = {
    result: [],
    favouriteIds: [],
    favourites : []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_RESULT:
            return {
                ...state,
                result: action.payload
            }
    
        case SET_FAVOURITE:
            return {
                ...state,
                favouriteIds : state.favouriteIds.includes(action.payload.id)? state.favouriteIds.filter(fav => fav !== action.payload.id) :  [...state.favouriteIds, action.payload.id],
                favourites : state.favouriteIds.includes(action.payload.id)? state.favourites.filter(fav => fav.id !== action.payload.id) : [...state.favourites, action.payload]
            }
        default:
            return state
    }
}