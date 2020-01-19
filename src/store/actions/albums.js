import $api from "./../../utils/API"
import * as actionsType from "./../actionsType"

export const fetchAlbums = () => async dispatch => {
    const albums = await $api.get()

    dispatch({
        type: actionsType.FETCH_ALBUMS,
        payload: albums.data,
    })
}

export const editAlbum = ({ title, id }) => async dispatch => {
    const album = await $api
        .patch(`/${id}`, {
            body: JSON.stringify({
                title,
            }),
        })
        .then(response => ({ ...response.data, body: JSON.parse(response.data.body) }))

    dispatch({
        type: actionsType.EDIT_ALBUM,
        payload: album,
    })
}

export const deleteAlbum = id => async dispatch => {
    await $api.delete(`/${id}`)

    dispatch({
        type: actionsType.DELETE_ALBUM,
        payload: { id },
    })
}

export const addAlbum = title => async dispatch => {
    const album = await $api.post("", {
        body: JSON.stringify({
            title,
        }),
    })

    dispatch({
        type: actionsType.ADD_ALBUM,
        payload: { ...album.data, body: JSON.parse(album.data.body) },
    })
}
