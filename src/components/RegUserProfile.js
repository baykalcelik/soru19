import { useEffect, useState } from 'react';
import './RegUserProfile.css';


export default function RegUserProfile(){

    const [userpicture, setUserpicture] = useState();

    useEffect(()=>{
        fetch("https://randomuser.me/api/").then(res=>res.json()).then((data)=>{console.log(data.results[0].picture.thumbnail); setUserpicture(data.results[0].picture.thumbnail);});
    },[])

    

    return(
        <div id="regUserProfileCover">
            <img id="reguserpicture" src={userpicture} alt="user picture"/>
            
        </div>
    )
}