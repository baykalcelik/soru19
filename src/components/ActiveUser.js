import { useState } from 'react';
import './activeuser.css';
import UserBadge from './UserBadge';
import MultiroleButton from './MultiroleButton';


export default function ActiveUser(){
    const [activeuser, setActiveuser] = useState({badgeText:"Baykal Çelik", uname:"baykal3183", src:"https://picsum.photos/id/23/100/100",yatayaragenis:true, ufsize:"medium",bordered:false, ubklaslar:"badgeCover badgeCoveryatay", infogoster:true, unklaslar:"unTextBold unfontBuyuk ungriyazi unfontAile", biklaslar:"badgeinfotext bilightyazi bipunto14 bigriyazi ", unamesize:"full", unamegoster:true});
    return(
        <div className='activeuserCover'>

            <UserBadge ubklaslar={activeuser.ubklaslar} src={activeuser.src}   ufsize={activeuser.ufsize} bordered={activeuser.bordered}  yatayaragenis={activeuser.yatayaragenis} uname={activeuser.uname} badgeText={activeuser.badgeText}  infogoster={activeuser.infogoster} unklaslar={activeuser.unklaslar} biklaslar={activeuser.biklaslar} unamesize={activeuser.unamesize} unamegoster={activeuser.unamegoster}/>

            <MultiroleButton buttonText="Switch" mrbklaslar={"switchBtn maviBtn mrBtn12px"}/>

        </div>
    )
}