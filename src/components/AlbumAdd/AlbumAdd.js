import React, { useState } from "react"
import { TextField, Grid, Paper, Button, Box } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { addAlbum } from "./../../store/actions/albums"

function AlbumAdd() {
    const [title, setTitle] = useState("")
    const dispatch = useDispatch()

    const submitAddAlbum = () => {
        setTitle("")
        dispatch(addAlbum(title))
    }
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} sm={6}>
                <Paper m={2} component={Box}>
                    <Box p={2}>
                        <TextField
                            label="Nazwa albumu"
                            fullWidth
                            onChange={e => setTitle(e.target.value)}
                            value={title}
                        />
                    </Box>
                    <Box p={2}>
                        <Button variant="contained" color="primary" onClick={submitAddAlbum}>
                            Dodaj album
                        </Button>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default AlbumAdd
