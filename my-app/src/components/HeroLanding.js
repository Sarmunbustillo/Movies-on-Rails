import React, { useState, useEffect } from 'react';
import CONFIG from '../config';
import styled from 'styled-components';

const HeroLanding = (props) => {
    const [data, setData] = useState({});
    useEffect(() => {
        const getMovies = async () => {
            const resp = await fetch(`${CONFIG.BASE_URL}/3/movie/top_rated?api_key=${CONFIG.API_KEY}`);
            const data = await resp.json();
            const results = data.results.map((n) => {
                console.log(n)
            });
            console.log('dataaaaa', results);
        };
        getMovies();
    }, []);


    const Hero = styled.div`
    height: 600px;
    width: 100%;
    background: steelblue;
    margin-bottom: 20px;   
`;

    return (
        <Hero></Hero>
    )
}

export default HeroLanding
