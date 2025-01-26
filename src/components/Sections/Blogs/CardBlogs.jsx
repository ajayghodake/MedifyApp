import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Person from "../../../assets/person.png"
import Detox from "../../../assets/blog.png"
import Yoga from "../../../assets/Yoga.jpg"
import MentalHealth from "../../../assets/mentalHealth.jpg"

const CardBlogs = () => {
    return (
        <Box border='1px solid rgba(0,0,0,0.1)' borderRadius={2}>

           <Box component='img' src={Detox} width={1}/>
           <Box p={2}>
                <Typography color='#77829D' fontWeight={500} mb={1} fontSize={{xs: 12, md: 16}}>March | March 31, 2024</Typography>
                <Typography component="h3" color='#1B3C74' fontSize={{ xs: 14, md: 18 }} fontWeight={500} lineHeight={1.2} mb={2}>6 Tips To Protect Your Mental Health When You're Sick</Typography>
           
           <Stack direction="row" alignItems="center" spacing={2}>
            <Box component='img' src={Person} height={32} width={32}/>
            <Typography color='#1B3C74' fontSize={{ xs: 12, md: 16 }} >Rebbeca Lee</Typography>
           </Stack>
           </Box>
        </Box>
    );
};  

export default CardBlogs;