import React from 'react'
import { Link, Stack } from '@mui/material'
import RightArrowIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Links({children}) {
  return (
    <Link underline='none' color='#fff' fontWeight={300} fontSize={14}>
      <Stack direction='row'gap={0.5}>
        <RightArrowIcon/>
        {children}
      </Stack>
    </Link>
  )
}
