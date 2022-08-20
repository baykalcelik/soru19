import './userbadge.css';
import UserPhoto from './UserPhoto';
import UserName from './UserName';
import BadgeInfo from './BadgeInfo';


export default function UserBadge(props){


    return(

        <div className={props.ubklaslar}>
            <UserPhoto url={props.src} ufsize={props.ufsize} bordered={props.bordered}/>
            <div className= {(props.yatayaragenis ? "yatayaraGenis" : "yatayaraDar") + ' badgeTextDiv'}  >
                {props.unamegoster ? <UserName uname={props.uname} unklaslar={props.unklaslar} unamesize={props.unamesize}/> : ""}
                {props.infogoster ? <BadgeInfo biklaslar={props.biklaslar} text={props.badgeText}/> : ""}
            </div>
        </div>
        

    )
}