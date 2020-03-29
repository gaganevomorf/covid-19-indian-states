import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const ApiContext = createContext<any>(null);

const ApiContextProvider = (props:any) => {
    const [stateWise, setstateWise] = useState<any>({});
    async function fetchData(){
        await axios.get('https://api.covid19india.org/data.json')
        .then(res => setstateWise(res.data.statewise))
    }
    
    useEffect(() =>{
        fetchData();
    },[])
    
    return (
        <ApiContext.Provider value={{stateWise}}>
        {props.children}
        </ApiContext.Provider>
    )
}

export default ApiContextProvider
