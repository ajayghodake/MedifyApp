import React from 'react'
import { Box, Typography, Container, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Poster from '../../../assets/patientcaring.png'
import Tick from '../../../assets/icons/tick-blue.png'
export default function PatientCaring() {
  return (
    <Box py={6} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
      <Container>
        <Grid container spacing={6} alignItems="center">

            <Grid item xs={12} md={6}>
              <Box component="img" src={Poster} width={1}/>
            </Grid>

            <Grid item xs={12} md={6}>

                <Typography fontWeight={600} color="primary.main">HELPING PATIENTS FROM AROUND THE GLOBE!!</Typography>
                <Typography variant='h2' color="#1B3C74" mb={1}>Patient <Box component="span" color="primary.main">Caring</Box></Typography>
                <Typography color='#77829D' lineHeight={1.8}>
                Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
                </Typography>

                <List sx ={{ fontSize:{xs: 12, md: 12} }} color="#1B3C74" mt={4}>

                    <ListItem disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                            <Box component="img" src={Tick} height={22} width={22}/>
                        </ListItemIcon>
                        <ListItemText primary="Stay Updated About Your Health" primaryTypographyProps={{fontSize: {xs: 14, md: 18}, fontWeight: 500, color: "#1B3C74" }}/>
                    </ListItem>

                    <ListItem disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                            <Box component="img" src={Tick} height={22} width={22}/>
                        </ListItemIcon>
                        <ListItemText primary="Check Your Results Online" primaryTypographyProps={{fontSize: {xs: 14, md: 18}, fontWeight: 500, color: "#1B3C74" }}/>
                    </ListItem>

                    <ListItem disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                            <Box component="img" src={Tick} height={22} width={22}/>
                        </ListItemIcon>
                        <ListItemText primary="Manage Your Appointments" primaryTypographyProps={{fontSize: {xs: 14, md: 18}, fontWeight: 500, color: "#1B3C74" }}/>
                    </ListItem>
                    
                </List>

            </Grid>

        </Grid>
      </Container>
    </Box>
  )
}
