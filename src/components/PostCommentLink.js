import './PostCommentLink.css';
import {useState} from 'react';

let favoriteAdded = false;

export default function PostCommentLink(props){

    const [clicked, setClicked] = useState(false);

    return(
        <div className="postcommentlinkcover" onClick={()=>{setClicked(!clicked)}}>
            {!clicked ? props.svg1 : props.svg2}
        </div>
    )
}