import React from 'react';
import { useEffect, useState } from 'react';
import LeagItems from '../LeagItems/LeagItems';
import './Home.css'
import Header from '../Header/Header'
const Home = () => {
     const [leags, setLeag] = useState([ ]);
    useEffect(() => {
       let url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';

       fetch(url)
           .then(res => res.json())
           .then(data => setLeag(data.leagues.slice(0,21)))
      }, [])
    return ( 
            <>
            <Header></Header>
                 <div className="body row container m-auto pt-5">

                    {
                        leags.map(leag => <LeagItems leag = {leag}></LeagItems>)
                    }
            </div>
            </>
    );
};


export default Home;