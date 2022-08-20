import './suggestcard.css';
import { useState } from 'react';
import UserBadge from './UserBadge';
import MultiroleButton from './MultiroleButton';




export default function SuggestCard(){

    const [carduser, setCarduser] = useState({badgeText:"Followed by dyıldırımyıldırım",  src:"https://picsum.photos/id/23/100/100",yatayaragenis:false, ufsize:"small",bordered:false, ubklaslar:"badgeCover badgeCoveryatay", infogoster:true, biklaslar:"badgeinfotext bilightyazi bipunto12 bigriyazi ", unklaslar:"unTextextraBold unfontBuyuk unfontAile", uname:"baykal3183", unamesize:"full", unamegoster:true});


    return(
        <div className='suggestcardCover'>
            <UserBadge ubklaslar={carduser.ubklaslar} src={carduser.src}   ufsize={carduser.ufsize} bordered={carduser.bordered}  yatayaragenis={carduser.yatayaragenis} uname={carduser.uname} badgeText={carduser.badgeText}  infogoster={carduser.infogoster} unklaslar={carduser.unklaslar} unamegoster={carduser.unamegoster} biklaslar={carduser.biklaslar} unamesize={carduser.unamesize} />

            <MultiroleButton buttonText="Follow" mrbklaslar={"switchBtn maviBtn mrBtn12px"}/>
        </div>
    )


}



