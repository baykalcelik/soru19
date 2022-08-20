import './userphoto.css';


{/* <UserPhoto url="https://picsum.photos/id/42/100/100" size="big" bordered={true}/>
<UserPhoto url="https://picsum.photos/id/42/100/100" size="big" bordered={false}/>
<UserPhoto url="https://picsum.photos/id/42/100/100" size="small" bordered={true}/>
<UserPhoto url="https://picsum.photos/id/42/100/100" size="small" bordered={false}/> */}


export default function UserPhoto(props){

    return(
        <div className={props.bordered === true && props.ufsize === "big"? "bordered bigCircle" : 
        props.bordered === true && props.ufsize === "small" ? "bordered smallCircle" : props.bordered === true && props.ufsize === "medium"? "bordered mediumCircle" : props.bordered === false && props.ufsize === "big" ? "unbordered bigCircle" : props.bordered === false && props.ufsize === "small" ? "unbordered smallCircle" : props.bordered === false && props.ufsize === "medium" ? "unbordered mediumCircle" : props.bordered === false && props.ufsize === "extrasmall" ? "unbordered extrasmallCircle" : "" }>
            <img src={props.url} className={props.ufsize === "big" ? "bigPhoto" : props.ufsize === "small" ? "smallPhoto" : props.ufsize === "extrasmall" ? "extrasmallPhoto" : props.ufsize === "medium" ? "mediumPhoto" : ""} alt="story picture" />
        </div>

    )
}