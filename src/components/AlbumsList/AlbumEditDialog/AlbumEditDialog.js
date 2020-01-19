import React, { useState, useEffect } from "react"
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    TextField,
    Button,
} from "@material-ui/core"

const AlbumEditDialog = ({ title, isAlbumEditDialogOpen, closeAlbumEditDialog, submitEditAlbum }) => {
    const [newAlbumTitle, setNewAlbumTitle] = useState("")

    useEffect(() => {
        setNewAlbumTitle(title)
    }, [title])

    return (
        <Dialog open={isAlbumEditDialogOpen} onClose={closeAlbumEditDialog}>
            <DialogTitle>Edytuj album</DialogTitle>
            <DialogContent>
                <DialogContentText>Wpisz nazwę albumu a następnie kliknij przycisk "zapisz"</DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Nazwa albumu"
                    type="tezt"
                    fullWidth
                    defaultValue={title}
                    onChange={e => setNewAlbumTitle(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => submitEditAlbum(newAlbumTitle)} color="primary">
                    Zapisz
                </Button>
                <Button onClick={closeAlbumEditDialog} color="secondary">
                    Anuluj
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AlbumEditDialog
