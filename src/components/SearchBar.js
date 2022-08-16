import { useRef,useState } from 'react';
import './SearchBar.css';


export default function SearchBar(){

    const [svgGoster, setSvgGoster] = useState(true);
    const svgicon = useRef();

    return(
        <div id="searchBarCover">
            {/* <svg id="searchMagnif" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg> */}

            <svg id="searchMagnif" className="showme" ref={svgicon} version="1.1" xmlns="http://www.w3.org/2000/svg"  width="16" height="16"  viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
            <g>
                <path d="m495,466.1l-119.2-119.2c29.1-35.5 46.5-80.8 46.5-130.3 0-113.5-92.1-205.6-205.6-205.6-113.6,0-205.7,92.1-205.7,205.7s92.1,205.7 205.7,205.7c49.4,0 94.8-17.4 130.3-46.5l119.1,119.1c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9zm-443.2-249.4c-1.42109e-14-91 73.8-164.8 164.8-164.8 91,0 164.8,73.8 164.8,164.8s-73.8,164.8-164.8,164.8c-91,0-164.8-73.8-164.8-164.8z" fill="currentColor" stroke="currentColor"/>
            </g>
            </svg>
            

            <input type="text" id="searchInput" placeholder="Search" 
            onFocus={(ev)=>{
                svgicon.current.style.display ="none";
                ev.target.style.paddingLeft ="1rem";
            }}  
            onBlur={(ev)=>{
                    svgicon.current.style.display ="block";
                    ev.target.style.paddingLeft ="3rem";
            }}/>

        </div>
    )
}