import React from 'react'
import "./Order.css"
import Price from "./Price"
import {Card, CardMedia,CardContent,Avatar} from '@mui/material'


function Order() {
    return (
    
        <Card
        sx={{
            backgroundColor:'white',
            width:'320px',
            height:'500px',
            borderRadius:'0.8rem',
            boxShadow:'0px 10px 20px 0px hsl(0, 0%, 30%)',

        }} >

        <CardMedia
        component= 'img'
        alt = 'sample_image'
        image = '/images/illustration-hero.svg'
        sx={{
            height:"180px"
        }}
        / >

        <div
        sx={{
            display:'flex',
            // flexDirection:'column',
            alignContent:'center',
            justifyContent:'center',

        }}>
            <CardContent
            sx={{}}>
                <h3 className='heading'>Order Summary</h3>
                <p>You can listen to millions of songs audiobooks and podcasts on amy device anywhere you like!</p>
                <Price />
            </CardContent>
        </div>
       

        </Card>
       
    
 

    );
}

export default Order