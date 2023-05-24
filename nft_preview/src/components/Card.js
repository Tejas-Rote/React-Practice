import React from 'react'
import "./Card.css";
import {Card,CardContent,CardMedia, Avatar} from '@mui/material'


function CardText() {
    // can use divider in material ui 
    const ColoredLine = ({color}) => (
        <hr 
            style={{
                backgroundColor:color,
                height:1,
                border: "none",
            }}
        />
    );

    return (
            <Card 
                sx = {{
                // maxWidth:300,
                backgroundColor:"hsl(216, 50%, 20%)",
                width:300,
                height:550,
                padding:"1.5em",
                borderRadius:"0.8em",
                boxShadow:'0px 30px 15px 20px hsl(217, 54%, 9%) ',
            }}>

            {/* equilibrium image  */}
            
            <CardMedia
            component="img"
            alt = "card image"
            image="/images/image-equilibrium.jpg" 
                sx={{
                    height:"250px",
                    borderRadius:"0.5em",
                }}
            />



            {/* main text in card */}
            <CardContent>
                <div style={{
                    color:"white",
                }}>
                    <h3 className = "heading" >
                      Equilibrium #3429
                    </h3>
                    <p 
                    style={{ 
                        color: "hsl(215, 51%, 70%)",
                        fontSize:'16px',
                        fontWeight:'400',
                    }}>
                        Our Equillibrium collection promotes balance and calm.
                    </p>
                </div>
            </CardContent>


            {/* extra content */}
            <div className = "info"
            style={{  
                
                display:"flex",
                flexDirection:'row',
                justifyContent:'space-around',
                alignContent:'center',
                fontWeight:'300',
                
            }}>
                <CardContent
                sx={{
                    height: 20,
                    color:"hsl(178, 100%, 50%)",
                    alignItems:'center',
                    flex:1,
                    display:"flex",

                }}>

                    <img
                    src="/images/icon-ethereum.svg"
                    alt="etherimage"
                    style={{
                        height:"14px",
                        marginRight: "5px",
                    }}
                    />
                        0.041ETH
                </CardContent>

                <CardContent
                sx={{
                    height: 20,
                    color:"hsl(215, 51%, 70%)",
                    alignItems:'center',
                    flex:1,
                    display:"flex",
                }}>
                    <img
                    src="/images/icon-clock.svg"
                    alt="clockimage"
                    style={{
                        height:"14px",
                        marginRight: "5px",
                    }}
                    />
                        3 Days Left
                </CardContent>
            </div>
            
            {/* divideer  */}
            <ColoredLine color="hsl(215, 32%, 27%)" />
           
           {/* avatar region  */}
            <div style={{
                display:"flex",
                justifyContent:'space-between',
                alignItems:"center",
                color:"hsl(215, 51%, 70%)",
            }}>
                <Avatar alt = 'avatar-img' src ="/images/image-avatar.png" />
                <p>
                    Creation of  
                    <span className = "highlight">
                        Julues Wyvern
                    </span>
                </p>
            </div>
            
            
            </Card>


    )
}

export default CardText
