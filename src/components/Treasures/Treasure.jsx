import * as React from 'react';
import { useState } from "react"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const TreasureTpl = ({chest}) => {

    const locationElt = chest.common_locations === null ? <li> ??? </li> : chest.common_locations.map(location => {return (<li key={location}>{location}</li>)})

    const dlcElt = chest.dlc === false ? null : <li>DLC</li>

    const dropsElt = (
    <li> Drops : 
        <ul>
            {chest.drops.map(drop => (<li key={drop}>{drop}</li>))}
        </ul>
    </li>
    )

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    return (
                <>
            <Card raised sx={{ width: 280, height: 320 }} onClick={handleClickOpen}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="260"
                    image={chest.image}
                    alt={chest.name}
                    />
                    <CardContent>
                    <Typography sx={{ textAlign: 'center', textTransform: 'capitalize', fontSize: 20 }} gutterBottom variant="h5" component="div">
                        {chest.name}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle sx={{ textAlign: 'center', textTransform: 'capitalize', fontWeight: 'bold', fontSize: 24 }}>{chest.name}</DialogTitle>
                <DialogContent sx={{ fontSize: 18, textAlign: 'justify' }}>
                        <img style={{ display: 'block', margin: '0 auto', borderRadius: 20 }} src={chest.image} alt={chest.name} />
                        <p>{chest.description}</p>
                        <ul key={chest.id}>
                            {dropsElt}
                            <li>Location :
                                <ul>
                                    {locationElt}
                                </ul>
                            </li>
                            {dlcElt}
                        </ul>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
        // <ul key={chest.id}>
        //     <img src={chest.image}/>
        //     <li>Treasures name : {chest.name}</li>
        //     <li>Description : {chest.description} </li>
        //     {dropsElt}
        //     <li>Location :
        //         <ul>
        //             {locationElt}
        //         </ul>
        //     </li>
        //     {dlcElt}
        // </ul>
    )
}

export default TreasureTpl