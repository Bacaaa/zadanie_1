import React from "react"
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from "@material-ui/core"

const AlbumDeleteDialog = ({ isAlbumDeleteDialogOpen, albumTitle, closeDeleteAlboumDialog, submitDeleteAlbum }) => {
    return (
        <Dialog open={isAlbumDeleteDialogOpen} onClose={closeDeleteAlboumDialog}>
            <DialogTitle>Czy usunąć wybrany album?</DialogTitle>
            <DialogContent>
                <DialogContentText>{albumTitle}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDeleteAlboumDialog} color="primary">
                    Anuluj
                </Button>
                <Button onClick={submitDeleteAlbum} color="secondary">
                    Usuń
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AlbumDeleteDialog
