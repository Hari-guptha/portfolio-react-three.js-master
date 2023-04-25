import { Box } from '@mui/system'
import React from 'react'
import Tilt from 'react-tilt';
import '../assets/css/about.css'
import '../assets/css/central.css'
import Img2 from '../assets/img/samp6.png'
import ci1 from '../assets/img/about/react.png'
import ci2 from '../assets/img/about/node.png'
import ci3 from '../assets/img/about/ux.png'
import ci4 from '../assets/img/about/da.png'



const About = () => {
    return (
        <div id='cp' className='about'>
            <div id='About' style={{ paddingTop: "5%" }}>
                <h2 id='h3'>INTRODUCTION</h2>
                <Box sx={{ display: "flex" }} >
                    <h1 id='h1'>overview</h1>
                    <img id='imgtitle' src={Img2} alt="char" />
                </Box>
                <br />
                <h3 id='h4'>
                    Hello there! My name is Hari Guptha, and I am a versatile professional with expertise in multiple domains. As a MERN stack developer, I specialize in creating robust and dynamic web applications using MongoDB, Express, React, and Node.js. I also have a keen eye for design, and I use my UX/UI skills to create intuitive and visually appealing interfaces for web and mobile applications. Aside from my technical abilities, I am also a talented digital artist who enjoys creating stunning graphics and animations. I have a passion for blending technology with art, and I always strive to create work that is not only functional but also aesthetically pleasing. Overall, I am a self-motivated and driven individual who is committed to delivering high-quality work that meets the needs of my clients. If you are looking for a skilled and creative professional who can bring your vision to life, I am the right person for the job!
                </h3>
                <Box sx={{ display: { sm: "block", xs: "none" }, marginTop: "50px" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Tilt options={{ max: 30, speed: 400, perspective: 1000 }}>
                            <div id='card' className='glow-on-hover'>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img id='imgcard' src={ci1} alt="char" />
                                </div>
                                <h3 id='h3c' >front-end</h3>
                            </div>
                        </Tilt>
                        <Tilt options={{ max: 30, speed: 400, perspective: 1000 }}>
                            <div id='card' className='glow-on-hover'>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img id='imgcard' src={ci2} alt="char" />
                                </div>
                                <h3 id='h3c' >back-end</h3>
                            </div>
                        </Tilt>
                        <Tilt options={{ max: 30, speed: 400, perspective: 1000 }}>
                            <div id='card' className='glow-on-hover'>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img id='imgcard' src={ci3} alt="char" />
                                </div>
                                <h3 id='h3c' >UX/UI</h3>
                            </div>
                        </Tilt>
                        <Tilt options={{ max: 30, speed: 400, perspective: 1000 }}>
                            <div id='card' className='glow-on-hover'>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img id='imgcard' src={ci4} alt="char" />
                                </div>
                                <h3 id='h3c' >DIgitAL art</h3>
                            </div>
                        </Tilt>
                    </Box>
                </Box>
                <br />
                <Box sx={{ display: { sm: "none", xs: "block" }, margin: "10% 7%" }}>
                    <Box>
                    <Tilt options={{ max: 30, speed: 400, perspective: 1000 }}>
                            <div id='card' className='glow-on-hover'>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img id='imgcard' src={ci1} alt="char" />
                                </div>
                                <h3 id='h3c' >front-end</h3>
                            </div>
                        </Tilt>
                        <Tilt options={{ max: 30, speed: 400, perspective: 1000 }}>
                            <div id='card' className='glow-on-hover'>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img id='imgcard' src={ci2} alt="char" />
                                </div>
                                <h3 id='h3c' >back-end</h3>
                            </div>
                        </Tilt>
                        <Tilt options={{ max: 30, speed: 400, perspective: 1000 }}>
                            <div id='card' className='glow-on-hover'>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img id='imgcard' src={ci3} alt="char" />
                                </div>
                                <h3 id='h3c' >UX/UI</h3>
                            </div>
                        </Tilt>
                        <Tilt options={{ max: 30, speed: 400, perspective: 1000 }}>
                            <div id='card' className='glow-on-hover'>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img id='imgcard' src={ci4} alt="char" />
                                </div>
                                <h3 id='h3c' >DIgitAL art</h3>
                            </div>
                        </Tilt>
                    </Box>
                </Box>
                <br />
            </div>
        </div>
    )
}
export default About
