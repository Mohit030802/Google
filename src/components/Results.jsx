import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useResultContext } from '../context/ResultContextProvider'
import Loading from './Loading'


const Results = () => {
    const { getResults, results, searchTerm, setSearchTerm, isLoading }=useResultContext()
    const location=useLocation();
    useEffect(()=>{
        getResults('/search/tesla')
    },[])
    console.log(results)
    if(isLoading) return <Loading/>
    console.log(location.pathname)
    switch (location.pathname) {
        case '/search':
            return 'search'
            break;
        case '/images':
            return 'images'
            break;
    
        default:
            return 'error';
            break;
    }
}

export default Results
