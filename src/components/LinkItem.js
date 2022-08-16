import './linkItem.css';
import { useState } from 'react';


export default function LinkItem(props){

    const [itemactive, setItemactive] = useState(true);

    return(
        <div id="linkItemCover" onClick={()=>{

            window.location.assign(props.url)

            }}>
            {itemactive ? props.svg2 : props.svg}

        </div>
    )
}