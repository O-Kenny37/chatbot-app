
function Header( {hero} ) {

    return(
        <div>

<div className="headerHero_container">

    <div className="header_container">

        <div className="logo_bg">
            <div className="logo"></div>
            <div className="company_text_wrapper">
                <div className="company_name">
                    <p>PARALLO</p>
                </div>
                <span className="company_sub_text">new app landing page</span>
            </div>
        </div>

        <nav>
                <ul>
                    <div className="home">
                    <li><a href="#" >Home</a></li>
                    </div>
                
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
        </nav>

        <div className="hamburger_container" onClick={() => {    
            if(document.querySelector('.span1').classList.contains('span1_animate')) {
                document.querySelector('.span1').classList.remove('span1_animate')
                document.querySelector('.span2').classList.remove('span2_animate')
                document.querySelector('.span3').classList.remove('span3_animate')
                document.querySelector('nav').style.display = 'none';
            } 
            else {
                document.querySelector('.span1').classList.add('span1_animate')
                document.querySelector('.span2').classList.add('span2_animate')
                document.querySelector('.span3').classList.add('span3_animate')
                document.querySelector('nav').style.display = 'block';
            }
        }}>
            <span className="span1"></span>
            <span className="span2"></span>
            <span className="span3"></span>
        </div>

        </div>
        {/* //////////////// HERO PAGE BELOW /////////// */}

        <div>{hero}</div>

    </div>
</div>
    );
}
export default Header;