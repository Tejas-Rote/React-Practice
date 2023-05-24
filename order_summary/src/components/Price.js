import React from 'react'
import {Avatar, Box, Container} from '@mui/material'
import { CardContent } from '@mui/material'
function Price() {
    return (
        <Container
        fixed 
        sx={{
            height: '60px',
            backgroundColor:'hsl(225, 100%, 98%)',
            borderRadius:"0.5em",
            display: 'flex',
            flexDirection:'row',
            alignItems: "center",
            justifyContent: "space-between",
        }}>
            <div
            sx={{
                display: 'flex',
                flexDirection:'row',
                alignItems: "center",
                justifyContent: "space-between",

            }}>
            <Avatar sx={{flex:1}}>
                <img src ="/images/icon-music.svg" alt = 'music_image'/>
            </Avatar>
            <div>hi</div>
            <div>height</div>
            
            </div>
        </Container>





        // // <div>
        // // <Box component="div"
        // // sx={{
        // //     height:'60px',
        // //     backgroundColor:'hsl(225, 100%, 98%)',
        // //     borderRadius:"0.8em",
        // //     display:"flex",
        // //     flexDirection:"row",
        // // }}>
        
        // <div sx={{
        //     // display:'flex',
        //     // flexDirection:'row',
            
        // }}>
        // <CardContent
        // sx={{
        //     // height: 20,
        //     flex:1,
        //     display:"flex",
        //     alignItems:'center',
        //     justifyContent:'center',
        // }}>
        //     <img
        //         src="/images/icon-music.svg"
        //         alt="music_image"
        //         style={{
        //             height:"40px",
        //             marginRight: "15px",
        //             // flex:1,
        //         }}
        //         />
        //     <p
        //     style={{
        //         flex:'1',
        //         color:"black",
        //         }}>Annual plan <br/> 
        //         <span className="price"
        //         style={{
        //             color:"grey",
        //         }}>$59.99/year</span>
        //     </p>
        //     <a 
        //     style={{
        //         flex:'1'
        //     }}
        //     href='' className='link'>change</a>

        // </CardContent>
        //     {/* <img src = "./images/icon-music.svg" style={{
        //         flex:'1'
        //     }}/>
        //     <p style={{flex:'1'}}>Annual plan <br/> 
        //         <span className="price">$59.99/year</span>

        //     </p>
        //     <a style={{flex:'1'}}href='' className='link'>change</a> */}
        // </div>
        // // </Box>
        // //     {/* h1 */}
        // // </div>
    )
}

export default Price
