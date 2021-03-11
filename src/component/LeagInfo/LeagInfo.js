import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './LeagInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLifeRing,faMars,faMapMarkerAlt,faBullseye } from '@fortawesome/free-solid-svg-icons'
import pic from '../../img/Facebook.png';
import pic2 from '../../img/Twitter.png';
import pic3 from '../../img/YouTube.png';
const LeagInfo = () => {
       const{idLeague} = useParams();
       const [leagsData, setLeagData] = useState({})
       console.log(leagsData);
       useEffect(() => {
           const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
           fetch(url)
           .then(res => res.json())
           .then(data => setLeagData(data.leagues[0]))
       }, [])
    return (
        <div className="body bg-dark">
                <div className="header">
                <div className="imgBox">
                    <img className="img-fluid logo" src={leagsData.strBadge} alt=""/>
                </div>
        </div>

            <div className=" pt-3 pb-5 main">

            <div className="container boxs px-2  overflow-hidden text-white mt-4">    
                 <div className="row flex-column-reverse flex-md-row">
                      <div className="col-lg-8 col-md-6 col-12 text-left px-5 pt-lg-0 pt-md-0 pt-4">
                           
                              <h4 className="text-white font-weight-bold">{leagsData.strLeague}</h4>
                              <p><FontAwesomeIcon icon={faBullseye} /> Founded : <small className="font-weight-bold"> {leagsData.dateFirstEvent}</small></p>
                              <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Country : <small className="font-weight-bold"> {leagsData.strCountry}</small></p>
                              <p><FontAwesomeIcon icon={faLifeRing} /> Sports Type <small className="font-weight-bold"> : Football</small></p>
                              <p><FontAwesomeIcon icon={faMars} /> Gender :  <small className="font-weight-bold"> {leagsData.strGender}</small></p>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12 ">
                             <div className="imgbox">
                                 <img className="img-fluid m-auto n" src={leagsData.strFanart1} alt="aak;" />
                             </div>
                      </div>
                   </div>
                   
               </div>
               <div className="pt-5 main2">
                    <div className="container">
                    <p className="text-white text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus non magni, error exercitationem fugiat, ut excepturi doloribus vitae odit, corporis reiciendis! Officia animi reiciendis quod blanditiis facilis qui velit cum hic? Exercitationem voluptas nemo deleniti incidunt, accusamus sunt minima eligendi dolorem tempora, ipsum officiis sequi sint quo fugit rem? Eveniet fuga consequuntur consequatur illo iste minus? Non alias enim qui magnam, inventore tempore eum. Eos optio a aliquid, numquam at suscipit assumenda repellendus molestias quisquam, quidem non placeat dignissimos dolore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, animi. Sint, veritatis ratione optio quae ipsa natus assumenda fugit eum cumque facere cum alias cupiditate minus similique commodi illo quod.
            </p>
                 <p className="text-white text-left mt-5 pt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus non magni, error exercitationem fugiat, ut excepturi doloribus vitae odit, corporis reiciendis! Officia animi reiciendis quod blanditiis facilis qui velit cum hic? Exercitationem voluptas nemo deleniti incidunt, accusamus sunt minima eligendi dolorem tempora, ipsum officiis sequi sint quo fugit rem? Eveniet fuga consequuntur consequatur illo iste minus? Non alias enim qui magnam, inventore tempore eum. Eos optio a aliquid, numquam at suscipit assumenda repellendus molestias quisquam, quidem non placeat dignissimos dolore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, animi. Sint, veritatis ratione optio quae ipsa natus assumenda fugit eum cumque facere cum alias cupiditate minus similique commodi illo quod.
            </p>
           
                <a href="https://www.facebook.com/profile.php?id=100052249802564"><img src={pic} className="img-fluid icons px-2 " alt=""/></a>
                <a href="https://twitter.com/MDNahid51728802"><img src={pic2} className="img-fluid icons px-2 " alt=""/></a>
                <a href="https://www.youtube.com/watch?v=ktjafK4SgWM" ><img src={pic3} className="img-fluid icons px-2 " alt=""/></a>
            
                    </div>
                 </div>
            </div>
            
            </div>
        );
};

export default LeagInfo;