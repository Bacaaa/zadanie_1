import React, { useEffect } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { useDispatch } from "react-redux"
import NavBar from "./components/NavBar/NavBar"
import AlbumsList from "./components/AlbumsList/AlbumsList"
import AlbumAdd from "./components/AlbumAdd/AlbumAdd"
import { fetchAlbums } from "./store/actions/albums"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAlbums())
        // eslint-disable-next-line
    }, [])
    
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/" component={AlbumsList} />
                <Route path="/dodaj-album" component={AlbumAdd} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
