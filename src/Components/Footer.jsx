import footerImage from '../assets/call-to-action.jpg';

function Footer() {

    return(
        <>
        <div className="footer_container">

        <div className="footer_wrapper">

            <img src={footerImage} alt="" />

            <div className="footer_right">
                <p className="footer_right_title">Images by Unsplash</p>

                <p className='footer_text'>You may browse <span>Too Css</span> website for the collection of CSS templates for your projects. Aliquam erat volutpat. Nulla eros est, imperdiet vel feugiat non, ullamcorper mattis nulla.</p>

                <input type="text" placeholder='Email'/>
                <button>Get Updates</button>
            </div>

        </div>

            <div className="copyright">
                <p>Copyright &copy; 2025 App Landing Page. Designed by O.Kenny </p>
            </div>

        </div>
        </>
    );
}

export default Footer;