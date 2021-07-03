import axios from 'axios';
import './Trending.css';


// Hooks
import React, { useEffect, useState } from 'react';
import MainContent from './MainContent';




const Trending: React.FC = () => {

    // const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);
        
        
        
        setContent(data.results);
        console.log(data);
        
    }

    console.log(content);

    useEffect(() => {
        fetchTrending();
        // eslint-disable-next-line
    }, []);

    return (

        <div>
            <MainContent trending={content}/>
        </div>
    )
}
        
    



export default Trending;