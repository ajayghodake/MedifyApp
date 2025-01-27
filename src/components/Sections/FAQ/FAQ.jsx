import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import FAQPoster from "../../../assets/faqs-banner.jpg"
import CustomizedAccordions from '../../Accordion/Accordion';

const FAQ = () => {

    const faqs = [
        {
            question: 'Why choose our medical for your family?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'Why we are different from others?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'Trusted & experience senior care & love',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'How to get appointment for emergency cases?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        }
    ]


    return (
        <Box py={4}>
            <Container maxWidth='xl'>
                <Typography color='primary.main' fontWeight={600} textAlign='center'>Get Your Answer</Typography>
                <Typography variant='h2' textAlign='center' mb={2}>Frequently Asked Questions</Typography>
                <Grid container alignItems='center' spacing={5}>
                    <Grid item xs={12} md={6}>
                        <Box component='img' src={FAQPoster} width={1} height='auto'/>
                    </Grid> 
                    <Grid item xs={12} md={6}>
                        <Box maxWidth={450}>
                            <CustomizedAccordions data={faqs}/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default FAQ;