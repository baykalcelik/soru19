import './badgeinfo.css';

export default function BadgeInfo(props){
    return(
        <>
        <span className={props.biklaslar}>{props.text}</span>
        </>
    )
}