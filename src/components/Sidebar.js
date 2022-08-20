import './sidebar.css';
import Suggestions from './Suggestions.js';
import ActiveUser from './ActiveUser.js';


export default function Sidebar(){


    return(
        <div className="sidebarCover">
            <ActiveUser />
            <Suggestions/>
        </div>
    )
}