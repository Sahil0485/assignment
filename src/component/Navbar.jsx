export default function Navbar() {
    return (
        <div className="navbar">
            <div className="company">
                <img src="/images/logo.png" alt=".logo" className="logo" />
                <span className="cmpname">GrowuMedia</span>
            </div>
            <div className="nav_menu">
                <ul className="nm_ul">
                    <li className="nmul_li"><a href="/">Video Editing</a></li>
                    <li className="nmul_li"><a href="/">Reels / Tiktok</a></li>
                    <li className="nmul_li"><a href="/">Video Promotion</a></li>
                    <li className="nmul_li"><a href="/">Pricing</a></li>
                    <li className="nmul_li"><a href="/">Career</a></li>
                </ul>
            </div>
            <div className="bai">
                <button className="bai_button">Book an Intro &rarr;</button>
            </div>
        </div>
    )
}
