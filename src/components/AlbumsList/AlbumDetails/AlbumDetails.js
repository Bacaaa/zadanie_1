import React from "react"
import { Grid, Card, CardActions, CardContent, Typography, Button } from "@material-ui/core"

const AlbumDetails = ({ album, openEditAlbumDialog, openDeleteAlbumDialog }) => {
    return (
        <Grid item xs={12} sm={4} md={3} key={album.id}>
            <Card>
                <CardContent>
                    <Typography variant="subtitle1">{album.title}</Typography>
                </CardContent>
                <CardActions justify="space-between">
                    <Button size="small" variant="contained" color="primary" onClick={openEditAlbumDialog}>
                        Edytuj
                    </Button>
                    <Button size="small" variant="contained" color="secondary" onClick={openDeleteAlbumDialog}>
                        Usuń
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default AlbumDetails
