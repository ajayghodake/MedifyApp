import React from 'react'
import {Box, Typography} from '@mui/material'

export default function DevInfo() {
  return (
    <Box Box bgcolor="#0c2b5c" display='flex' justifyContent='center' alignItems='center'  py={1}>
      <Typography color='#fff' fontWeight={200} fontSize={14}>
        This App is developed By Ajay Ghodake
      </Typography>
    </Box>
  )
}
