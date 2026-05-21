//1. Render an image hero.png which is available in assets folder.
//2. A paragraph in green color and fontsize 20px use external css for paragraph.
//3. display current time and current date in purple color and it should be center align.

import './My.css'
import img1 from './assets/hero.png'
const date=new Date().toLocaleDateString();
function Comp3(){
    return(
        <div>
            <img src={img1}></img>
            <p className='para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Illo veniam veritatis repellat commodi laboriosam aperiam ipsam? 
                Laborum nostrum hic molestiae at quas in minus velit sed mollitia assumenda. 
                Voluptates, reiciendis!
            </p>
            <h1 style={{color:'purple',alignContent:'center'}}>{date}</h1>
        </div>
    )
}
export default Comp3