import './story.css';


export default function Story(props){


    return(
        <div id="storyCover">
            <div className='imageBackground'>
                <img className="stimg" alt="story picture" src={props.url}/>
            </div>
           
           <span className='sttext'>{props.name.length > 8 ? props.name.substring(0, 8) + "..." : props.name}</span>    
        </div>
    )
}