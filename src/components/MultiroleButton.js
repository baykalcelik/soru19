import './multirolebutton.css';


export default function MultiroleButton(props){


    return(
            <div className='mrbuttonCover'>
                <button className={props.mrbklaslar}>{props.buttonText}</button>
            </div>

    )
}


