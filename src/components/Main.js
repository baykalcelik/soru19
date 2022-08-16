import './main.css';
import Stories from './Stories';
import Post from './Post';


export default function Main(){


    return(
        <div id="mainCover">
            
            <Stories />
            
            <div id="postCollection">
                <Post />

            </div>
        </div>
    )
}