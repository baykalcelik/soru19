import './username.css';


export default function UserName(props){


    // <UserName uname="Andrew Donaldson" size2="half"/>
    // <UserName uname="Andrew Donaldson" size2="full"/>

    return(

        <div className='unameCover'>
            <span className={props.unklaslar } >{props.unamesize === "full" ? props.uname : ("" + props.uname).length > 13 ? ("" + props.uname).substring(0,10) + "..." : props.uname}</span>
        </div>
    )
}