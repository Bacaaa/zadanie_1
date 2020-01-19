import React, { useState } from "react"
import { useDispatch, shallowEqual, useSelector } from "react-redux"
import { Grid } from "@material-ui/core"
import { editAlbum, deleteAlbum } from "./../../store/actions/albums"
import AlbumDetails from "./AlbumDetails/AlbumDetails"
import AlbumEditDialog from "./AlbumEditDialog/AlbumEditDialog"
import AlbumDeleteDialog from "./AlbumDeleteDialog/AlbumDeleteDialog"

function AlbumsList() {
    const [isAlbumEditDialogOpen, setIsAlbumEditDialogOpen] = useState(false)
    const [isAlbumDeleteDialogOpen, setIsAlbumDeleteDialogOpen] = useState(false)
    const [albumToEdit, setAlbumToEdit] = useState({})
    const [albumToDelete, setAlbumToDelete] = useState({})
    const albumsList = useSelector(state => state.albums, shallowEqual)
    const dispatch = useDispatch()

    const openEditAlbumDialog = album => {
        setAlbumToEdit(album)
        setIsAlbumEditDialogOpen(true)
    }

    const openDeleteAlbumDialog = album => {
        setAlbumToDelete(album)
        setIsAlbumDeleteDialogOpen(true)
    }
    const submitEditAlbum = newAlbumTitle => {
        const id = albumToEdit.id
        const title = newAlbumTitle

        setIsAlbumEditDialogOpen(false)
        dispatch(editAlbum({ title, id }))
    }

    const submitDeleteAlbum = () => {
        setIsAlbumDeleteDialogOpen(false)
        dispatch(deleteAlbum(albumToDelete.id))
    }
    return (
        <Grid container spacing={5} direction="row" justify="space-evenly" alignItems="flex-end">
            {albumsList.map(album => (
                <AlbumDetails
                    key={album.id}
                    album={album}
                    openEditAlbumDialog={() => openEditAlbumDialog(album)}
                    openDeleteAlbumDialog={() => openDeleteAlbumDialog(album)}
                />
            ))}
            <AlbumEditDialog
                title={albumToEdit.title}
                isAlbumEditDialogOpen={isAlbumEditDialogOpen}
                closeAlbumEditDialog={() => setIsAlbumEditDialogOpen(false)}
                submitEditAlbum={submitEditAlbum}
            />
            <AlbumDeleteDialog
                isAlbumDeleteDialogOpen={isAlbumDeleteDialogOpen}
                closeDeleteAlboumDialog={() => setIsAlbumDeleteDialogOpen(false)}
                albumTitle={albumToDelete.title}
                submitDeleteAlbum={submitDeleteAlbum}
            />
        </Grid>
    )
}

export default AlbumsList
