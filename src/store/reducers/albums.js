import * as actionsType from "./../actionsType"

const initState = []

const albumsReducer = (state = initState, action) => {
    switch (action.type) {
        case actionsType.FETCH_ALBUMS:
            return [...state, ...action.payload]

        case actionsType.EDIT_ALBUM:
            return state.map(album => (album.id === action.payload.id ? { ...album, ...action.payload.body } : album))

        case actionsType.DELETE_ALBUM:
            return [...state.filter(album => album.id !== action.payload.id)]

        case actionsType.ADD_ALBUM:
            return [...state, { id: action.payload.id, ...action.payload.body }]
        default:
            return state
    }
}

export default albumsReducer
