import './stories.css';
import Story from './Story';

let sira = 0;

export default function Stories(){


    return(
        <div id="storiesCover">
        {/* <button className='leftBtn' onClick={()=>{
            let total = document.getElementsByClassName('scrollcontainer')[0].children.length;
            if(total < 6) return;
            if(sira === 0){ 
                sira = total - 5; 
            }else{
                sira = sira - 1;
            } 

            let solhiza = sira * 75 + 5;
            console.log(solhiza);

            document.getElementsByClassName('scrollcontainer')[0].style.marginLeft = "-" + solhiza + "px";

        }}>
            {/* &#60; 
        

        </button> */}

        <svg onClick={()=>{
            let total = document.getElementsByClassName('scrollcontainer')[0].children.length;
            if(total < 6) return;
            if(sira === 0){ 
                sira = total - 5; 
            }else{
                sira = sira - 1;
            } 

            let solhiza = sira * 75 + 5;
            console.log(solhiza);

            document.getElementsByClassName('scrollcontainer')[0].style.marginLeft = "-" + solhiza + "px";

        }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="currentColor" stroke-width="2" className="bi bi-chevron-left leftBtn" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>



            <div className='scrollcontainer'>
            <Story url="https://picsum.photos/id/28/100/100" name="1Ahmet Denizli 1" />
            <Story url="https://picsum.photos/id/29/100/100" name="2Ahmet Denizli 2" />
            <Story url="https://picsum.photos/id/30/100/100" name="3Ahmet Denizli 3" />
            <Story url="https://picsum.photos/id/31/100/100" name="4Ahmet Denizli 4" />
            <Story url="https://picsum.photos/id/32/100/100" name="5Ahmet Denizli 5" />
            <Story url="https://picsum.photos/id/33/100/100" name="6Ahmet Denizli 6" />
            <Story url="https://picsum.photos/id/34/100/100" name="7Ahmet Denizli 7" />
            <Story url="https://picsum.photos/id/35/100/100" name="8Ahmet Denizli 8" />
            <Story url="https://picsum.photos/id/36/100/100" name="9Ahmet Denizli 9" />
            </div>

                
            <svg  onClick={()=>{
            let total = document.getElementsByClassName('scrollcontainer')[0].children.length;
            if(total < 6) return;
            if(sira >= total - 5){ 
                sira = 0; 
            }else{
                sira = sira + 1;
            } 

            let solhiza = sira * 75 + 5;
            console.log(solhiza);

            document.getElementsByClassName('scrollcontainer')[0].style.marginLeft = "-" + solhiza + "px";

        }}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  stroke="currentColor" stroke-width="2" className="bi bi-chevron-right rightBtn" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>


        </div>
    )
}