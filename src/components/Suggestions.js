
import './suggestions.css';
import SuggestCard from './SuggestCard';
import MultiroleButton from './MultiroleButton';


export default function Suggestions(){

    return(
        <div className='suggesCover'>
            <div className='suggesfl'>
                <span className='suggesttext'>Suggestions For You</span>
                {/* <button className='allsuggest'>See All</button> */}
                <MultiroleButton buttonText="See All" mrbklaslar={"switchBtn siyahBtn mrBtn12px"}/>

            </div>

            <div className='suggestCardCollection'>
                <SuggestCard/>
                <SuggestCard/>
                <SuggestCard/>
                <SuggestCard/>
                <SuggestCard/>
            </div>

            <div className='suggestFooter'>
                <div className='footerLinks'>
                    <a href="#" className='footerLink'>About</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className='aranokta' viewBox="-2 -10 20 20">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                    </svg>
                    <a href="#" className='footerLink'>Help</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className='aranokta' viewBox="-2 -10 20 20">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                    </svg>
                    <a href="#" className='footerLink'>Press</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className='aranokta' viewBox="-2 -10 20 20">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                    </svg>
                    <a href="#" className='footerLink'>API</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className='aranokta' viewBox="-2 -10 20 20">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                    </svg>
                    <a href="#" className='footerLink'>Jobs</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className='aranokta' viewBox="-2 -10 20 20">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                    </svg>
                    <a href="#" className='footerLink'>Privacy</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className='aranokta' viewBox="-2 -10 20 20">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                    </svg>
                    <a href="#" className='footerLink'>Terms</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className='aranokta' viewBox="-2 -10 20 20">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                    </svg>
                    <a href="#" className='footerLink'>Location</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className='aranokta' viewBox="-2 -10 20 20">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                    </svg>
                    <a href="#" className='footerLink'>Language</a>
                </div>
                
                <div className='footerInfo'>
                    <span className='footerText'>© 2022 INSTAGRAM FROM META</span>
                    
                </div>
            </div>
        </div>
        
    )
}