import PropTypes from 'prop-types'
import { useState, useEffect } from "react"
import axios from "axios"
import CreatureTpl from "./Creature"

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const Creatures = ({currentPage, setTotalPages, entryPerPage, searchToShow }) => {

    const [creatures, setCreatures] = useState([])

    useEffect(() => {
        setTotalPages(Math.ceil(creatures.length / entryPerPage));
    }, [creatures, entryPerPage, setTotalPages]);

    const indexOfLastCreature = currentPage * entryPerPage;
    const indexOfFirstCreature = indexOfLastCreature - entryPerPage;
    const currentCreatures = creatures.slice(indexOfFirstCreature, indexOfLastCreature);

    const getCreatures = async () => {
        try {
        const response = await axios(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures`)
        const creature = response.data.data
        creature.sort((a, b) => a.id - b.id)
        setCreatures(creature);
        } catch (e) {
            console.log("Impossible de récupérer les infos depuis l'API", e);
        }
    }

    useEffect(() => {
        getCreatures()
    }, [])

    const ulElt = currentCreatures.map(creature => {
        return (
            <Grid key={creature.id} xs="auto">
                <CreatureTpl key={creature.id} creature={creature} searchToShow={searchToShow}/>
            </Grid>
        )
    })
            
    return (
        <main>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={3} spacing={15} disableEqualOverflow>
                    {ulElt}
                </Grid>
            </Box>
        </main>
    )
}

Creatures.propTypes = {
    currentPage: PropTypes.number,
    setTotalPages: PropTypes.func,
    entryPerPage: PropTypes.number,
    searchToShow: PropTypes.func,
}

export default Creatures