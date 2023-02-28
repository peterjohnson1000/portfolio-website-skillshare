import avatar_img from "../Assets/avatar.svg.png"
import twitter from "../Assets/twitter-icon.png.png"
import facebbok from "../Assets/facebook-icon.png.png"
import linkedin from "../Assets/linkedin-icon.png.png"
import youtube from "../Assets/youtube-icon.png.png"

const Hero = () => {
    return (
        <div className="text-white flex items-center justify-between py-10 xl:flex-col xl:text-center">
            <div>
                <p className="font-bold text-2xl">Hi there, I'm Ixartz 👋</p>
                <p className="w-[600px] font-normal py-5 md:w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus <span className="text-blueColor">malesuada</span> nisi tellus, non  
                <span className="text-blueColor"> imperdiet</span> nisi tempor at. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore.</p>
                <div className="flex xl:justify-center">
                    <img className="h-8" src={twitter}/>
                    <img className="h-8" src={facebbok}/>
                    <img className="h-8" src={linkedin}/>
                    <img className="h-8" src={youtube}/>
                </div>
            </div>
            <div>
                <img className="h-72" src={avatar_img}/>
            </div>
        </div>
    )
}

export default Hero;