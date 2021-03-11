import React, { useEffect, useState } from 'react';
import { Link, useHistory} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const LeagItems = (props) => {
    const {idLeague, strLeague} = props.leag;

    const history = useHistory();
    const leagsData = idLeague => {
        const url =  `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}
        `;
        //  fetch(url)
        //  .then(res => res.json())
        //  .then(data => leagsData(data.leagues))

        history.push(url)
    }
    
    const [logo, setLogo] = useState([ ]);
    useEffect(() => {
       let url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;

       fetch(url)
           .then(res => res.json())
           .then(data => setLogo(data.leagues.slice(0,21)))
      }, [])
     return (
        <div className="col-md-4 g-4">
            <div className="py-3">
            <div className="card">
                {/* <img src="..." className="card-img-top" alt="..."> */}
                <div className="card-body">
                    <img src={logo.strBadge} alt=""/>
                    <h5 className="card-title">{strLeague}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  
                   <Link onClick={() => leagsData()} className="btn btn-primary" to={`/ligInfo/${idLeague}`}>Explore  <FontAwesomeIcon icon={faArrowRight} /> </Link>
                   
                    
                </div>
                </div>
                   
            </div>
           
        </div>
    );
};

export default LeagItems;