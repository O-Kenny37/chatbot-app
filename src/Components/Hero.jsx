import heroRightImage from '../assets/mobile-screen.png';

function Hero() {

    return(
        <div>

        <div className="hero_container">

        <div className="grid"></div>
        <div className="hero_left_wrapper">
            <p className="we_can_dev">WE CAN DEVELOP</p>

            <h2>Mobile App for Your Business</h2>

            <p className='hero_left_text'>Parallo is a landing page template based on Bootstrap v4.3.1 framework. Please tell your friends about TemplateMo. Thank you.</p>

            <div className="hero_left_button">
                <button className="learn_more">Learn More</button>
            </div>
        </div>

        <div className="grid"></div>
        
        <div className="hero_right_wrapper">
            <div className="hero_right_image">
                <img src={heroRightImage} alt="" />
            </div>
        </div>

        <div className="grid"></div>

        </div>
    </div>
    );
}
export default Hero;