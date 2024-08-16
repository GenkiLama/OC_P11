import logo from './../assets/images/footerLogo.png'

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='footer--logo'>
                <img src={logo} alt="logo kaza"/>
            </div>
            <div className="footer--content">
                <p>&copy; 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}