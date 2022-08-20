import './stories.css';
import UserBadge from './UserBadge';
import {useState} from 'react';

let sira = 0;

export default function Stories(){


    const [scarduser, setScarduser] = useState({badgeText:"XXX", uname:"Ahmet.Delioğlu", src:"https://picsum.photos/id/23/100/100",yatayaragenis:false, ufsize:"big",bordered:true, ubklaslar:"badgeCover badgeCoverdikey", infogoster:false, unklaslar:"unTextLight unfontKucuk unfontAile", biklaslar:"badgeinfotext bilightyazi bipunto12 bigriyazi ", unamesize:"half", unamegoster:true});



    return(
        <div id="storiesCover">
        
        <svg onClick={()=>{
            let total = document.getElementsByClassName('scrollcontainer')[0].children.length;
            if(total < 6) return;
            if(sira === 0){ 
                sira = total - 5; 
            }else{
                sira = sira - 1;
            } 

            let solhiza = sira * 75 + 5;
            console.log(solhiza);

            document.getElementsByClassName('scrollcontainer')[0].style.marginLeft = "-" + solhiza + "px";

        }} className="leftBtn" width="40" height="40" fill="white"  version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
        <path d="m105 272.65c-1.918 64.938 22.031 127.98 66.586 175.26 44.555 47.277 106.06 74.93 171 76.867 64.938 1.9375 127.98-21.992 175.28-66.531 47.293-44.539 74.961-106.04 76.918-170.98 1.957-64.934-21.953-127.99-66.48-175.3-44.523-47.309-106.02-74.996-170.95-76.973-43.012-1.3086-85.609 8.7305-123.51 29.113-37.898 20.383-69.758 50.391-92.379 86.996-22.617 36.609-35.195 78.527-36.465 121.54zm319.38-121.1-112.35 128.45 112.35 128.45-26.25 23.102-132.65-151.55 132.65-151.55z"/>
        </svg>




            <div className='scrollcontainer'>


            <UserBadge ubklaslar={scarduser.ubklaslar} src={scarduser.src}   ufsize={scarduser.ufsize} bordered={scarduser.bordered}  yatayaragenis={scarduser.yatayaragenis} uname={scarduser.uname} badgeText={scarduser.badgeText}  infogoster={scarduser.infogoster} unklaslar={scarduser.unklaslar} biklaslar={scarduser.biklaslar}    unamesize={scarduser.unamesize} unamegoster={scarduser.unamegoster}/>

            <UserBadge ubklaslar={scarduser.ubklaslar} src={scarduser.src}   ufsize={scarduser.ufsize} bordered={scarduser.bordered}  yatayaragenis={scarduser.yatayaragenis} uname={scarduser.uname} badgeText={scarduser.badgeText}  infogoster={scarduser.infogoster} unklaslar={scarduser.unklaslar} biklaslar={scarduser.biklaslar}  unamegoster={scarduser.unamegoster}/>

            <UserBadge ubklaslar={scarduser.ubklaslar} src={scarduser.src}   ufsize={scarduser.ufsize} bordered={scarduser.bordered}  yatayaragenis={scarduser.yatayaragenis} uname={scarduser.uname} badgeText={scarduser.badgeText}  infogoster={scarduser.infogoster} unklaslar={scarduser.unklaslar} biklaslar={scarduser.biklaslar} unamegoster={scarduser.unamegoster} />

            <UserBadge ubklaslar={scarduser.ubklaslar} src={scarduser.src}   ufsize={scarduser.ufsize} bordered={scarduser.bordered}  yatayaragenis={scarduser.yatayaragenis} uname={scarduser.uname} badgeText={scarduser.badgeText}  infogoster={scarduser.infogoster} unklaslar={scarduser.unklaslar} biklaslar={scarduser.biklaslar}  unamegoster={scarduser.unamegoster}/>

            <UserBadge ubklaslar={scarduser.ubklaslar} src={scarduser.src}   ufsize={scarduser.ufsize} bordered={scarduser.bordered}  yatayaragenis={scarduser.yatayaragenis} uname={scarduser.uname} badgeText={scarduser.badgeText}  infogoster={scarduser.infogoster} unklaslar={scarduser.unklaslar} biklaslar={scarduser.biklaslar}  unamegoster={scarduser.unamegoster}/>

            <UserBadge ubklaslar={scarduser.ubklaslar} src={scarduser.src}   ufsize={scarduser.ufsize} bordered={scarduser.bordered}  yatayaragenis={scarduser.yatayaragenis} uname={scarduser.uname} badgeText={scarduser.badgeText}  infogoster={scarduser.infogoster} unklaslar={scarduser.unklaslar} biklaslar={scarduser.biklaslar}  unamegoster={scarduser.unamegoster}/>

            <UserBadge ubklaslar={scarduser.ubklaslar} src={scarduser.src}   ufsize={scarduser.ufsize} bordered={scarduser.bordered}  yatayaragenis={scarduser.yatayaragenis} uname={scarduser.uname} badgeText={scarduser.badgeText}  infogoster={scarduser.infogoster} unklaslar={scarduser.unklaslar} biklaslar={scarduser.biklaslar}  unamegoster={scarduser.unamegoster}/>

<UserBadge ubklaslar={scarduser.ubklaslar} src={scarduser.src}   ufsize={scarduser.ufsize} bordered={scarduser.bordered}  yatayaragenis={scarduser.yatayaragenis} uname={scarduser.uname} badgeText={scarduser.badgeText}  infogoster={scarduser.infogoster} unklaslar={scarduser.unklaslar} biklaslar={scarduser.biklaslar}  unamegoster={scarduser.unamegoster}/>

<UserBadge ubklaslar={scarduser.ubklaslar} src={scarduser.src}   ufsize={scarduser.ufsize} bordered={scarduser.bordered}  yatayaragenis={scarduser.yatayaragenis} uname={scarduser.uname} badgeText={scarduser.badgeText}  infogoster={scarduser.infogoster} unklaslar={scarduser.unklaslar} biklaslar={scarduser.biklaslar}  unamegoster={scarduser.unamegoster}/>

<UserBadge ubklaslar={scarduser.ubklaslar} src={scarduser.src}   ufsize={scarduser.ufsize} bordered={scarduser.bordered}  yatayaragenis={scarduser.yatayaragenis} uname={scarduser.uname} badgeText={scarduser.badgeText}  infogoster={scarduser.infogoster} unklaslar={scarduser.unklaslar} biklaslar={scarduser.biklaslar}  unamegoster={scarduser.unamegoster}/>

<UserBadge ubklaslar={scarduser.ubklaslar} src={scarduser.src}   ufsize={scarduser.ufsize} bordered={scarduser.bordered}  yatayaragenis={scarduser.yatayaragenis} uname={scarduser.uname} badgeText={scarduser.badgeText}  infogoster={scarduser.infogoster} unklaslar={scarduser.unklaslar} biklaslar={scarduser.biklaslar}  unamegoster={scarduser.unamegoster}/>

<UserBadge ubklaslar={scarduser.ubklaslar} src={scarduser.src}   ufsize={scarduser.ufsize} bordered={scarduser.bordered}  yatayaragenis={scarduser.yatayaragenis} uname={scarduser.uname} badgeText={scarduser.badgeText}  infogoster={scarduser.infogoster} unklaslar={scarduser.unklaslar} biklaslar={scarduser.biklaslar}  unamegoster={scarduser.unamegoster}/>

<UserBadge ubklaslar={scarduser.ubklaslar} src={scarduser.src}   ufsize={scarduser.ufsize} bordered={scarduser.bordered}  yatayaragenis={scarduser.yatayaragenis} uname={scarduser.uname} badgeText={scarduser.badgeText}  infogoster={scarduser.infogoster} unklaslar={scarduser.unklaslar} biklaslar={scarduser.biklaslar}  unamegoster={scarduser.unamegoster}/>


            </div>

        <svg onClick={()=>{
            let total = document.getElementsByClassName('scrollcontainer')[0].children.length;
            if(total < 6) return;
            if(sira >= total - 5){ 
                sira = 0; 
            }else{
                sira = sira + 1;
            } 

            let solhiza = sira * 75 + 5;
            console.log(solhiza);

            document.getElementsByClassName('scrollcontainer')[0].style.marginLeft = "-" + solhiza + "px";

        }} className="rightBtn" width="40" height="40" fill="white" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
        <path d="m595 287.35c1.918-64.938-22.031-127.98-66.586-175.26-44.555-47.277-106.06-74.93-171-76.867-64.938-1.9375-127.98 21.992-175.28 66.531-47.293 44.539-74.961 106.04-76.918 170.98-1.957 64.934 21.953 127.99 66.48 175.3 44.523 47.309 106.02 74.996 170.95 76.973 43.012 1.3086 85.609-8.7305 123.51-29.113 37.898-20.383 69.758-50.391 92.379-86.996 22.617-36.609 35.195-78.527 36.465-121.54zm-319.38 121.1 112.35-128.45-112.35-128.45 26.25-23.102 132.65 151.55-132.65 151.55z"/>
        </svg>

        


        </div>
    )
}