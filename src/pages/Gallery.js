import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './gallery.css';
import travel from '../assets/travel.png';
import {Pagination} from "@mui/material";
import Chip from '@mui/joy/Chip';
export default function Gallery() {
           const[page, setPage] = React.useState(1);

           const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <>
          <br />
           <Grid container spacing={6}
                  justifyContent="center"
                  alignItems="center">
                  <Grid item>
                    <Card sx={{maxWidth: 345}}>
                        <CardMedia
                            sx={{height: 140}}
                            image={travel}
                            title="aeroplane"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Travel
                            </Typography>
                            <Chip
                                color="primary"
                                disabled={false}
                                variant="solid"
                            >Online</Chip>

                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                            <Button variant ="contained">Add to cart</Button>

                        </CardActions>
                    </Card>
                </Grid>
                 <Grid item>
                    <Card sx={{maxWidth: 345}}>
                        <CardMedia
                            sx={{height: 140}}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Garden
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button variant ="contained">Add to cart</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{maxWidth: 345}}>
                        <CardMedia
                            sx={{height: 140}}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Flowers
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button variant ="contained">Add to cart</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

            <br/>
            <br/>
            <Grid container spacing={6} justifyContent="center" alignItems="center">
                <Grid item>
                    <Card sx={{maxWidth: 345}}>
                        <CardMedia
                            sx={{height: 140}}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Travel
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button variant ="contained">Add to cart</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{maxWidth: 345}}>
                        <CardMedia
                            sx={{height: 140}}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Garden
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button variant ="contained">Add to cart</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{maxWidth: 345}}>
                        <CardMedia
                            sx={{height: 140}}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Flowers
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button variant ="contained">Add to cart</Button>
                        </CardActions>
                    </Card>
                </Grid>
                            </Grid>
            <br/>
              <br/>
            <Grid container spacing={6}
                  justifyContent="center"
                  alignItems="center">
                <Grid item>
                    <Card sx={{maxWidth: 345}}>
                        <CardMedia
                            sx={{height: 140}}
                            image={travel}
                            title="aeroplane"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Travel
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>

                       <CardActions>
                            <Button size="small">Learn More</Button>
                            <Button variant ="contained" >Add to cart</Button>
                       </CardActions>
                    </Card>
                </Grid>

                          </Grid>
            <Pagination count={4}
                        itemsPerPage={3}
                        onChange={e => handleChange(e)}   />
        <br />
            </>
    );
}