import React, { useState, useEffect, useRef } from 'react';
import CONFIG from '../config';
import styled, { keyframes } from 'styled-components';

const HeroLanding = (props) => {
    //get data to display in carousel or thru prps

    // const [data, setData] = useState({});
    // useEffect(() => {
    //     const getMovies = async () => {
    //         const resp = await fetch(`${CONFIG.BASE_URL}/3/movie/top_rated?api_key=${CONFIG.API_KEY}`);
    //         const data = await resp.json();
    //         const results = data.results.map((n) => {
    //             // console.log(n)
    //         });
    //         // console.log('dataaaaa', results);
    //     };
    //     getMovies();
    // }, []);



    const hero1 = useRef(null)
    const hero2 = useRef(null)
    const hero3 = useRef(null)
    useEffect(() => {

        hero1.current.style.background = 'steelblue'
        hero1.current.style.left = '0%'

        hero2.current.style.background = 'pink'
        hero2.current.style.left = '33.33%'

        hero3.current.style.background = 'orange'
        hero3.current.style.left = '66.66%'
    })

    const slidee = keyframes`
    0%{
        transform: translateX(0)
    }
    20%{
        transform: translateX(0)
    }
    40%{
        transform: translateX(-100vw)
    }
    50%{
        transform: translateX(-100vw)
    }
    70%{
        transform: translateX(-100vw)
    }

    80%{
        transform: translateX(-200vw)
    }
    100%{
        transform: translateX(-200vw)
    }
    
    `;

    const Carousel = styled.div`
    height: 600px;
    width: 300vw;
    display: flex;
    margin-bottom: 20px;   
    position:relative;
    animation: ${slidee} 22s ease-in-out infinite alternate;
    
    
    `;

    const Hero = styled.div`
    position: absolute;
    height: 100%;
    width: 100vw;   
`;

    return (
        <Carousel >
            <Hero ref={hero1} />
            <Hero ref={hero2} />
            <Hero ref={hero3} />
        </Carousel>
    )
}

export default HeroLanding
