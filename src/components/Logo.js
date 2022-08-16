import './Logo.css';



export default function Logo(props){


    return(
        <div id="logoBarCover" onClick={()=>{window.location.assign(props.url)}}>
            {props.svg}


        </div>
    )
}