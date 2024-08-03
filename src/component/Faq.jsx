function Faq() {
    let scrolltop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <>
            <div className="faqs">
                <h1 className="component_heading">Faq's</h1>
                <div className="faq_quest">
                    <ul className="faqq_ul">
                        <li className="faqqul_li">What sort of podcasts do you work with ? <img className="faqqulli_img" src="https://img.icons8.com/android/24/plus.png" alt="+" /></li>
                        <li className="faqqul_li">What sort of podcasts do you work with ? <img className="faqqulli_img" src="https://img.icons8.com/android/24/plus.png" alt="+" /></li>
                        <li className="faqqul_li">What sort of podcasts do you work with ? <img className="faqqulli_img" src="https://img.icons8.com/android/24/plus.png" alt="+" /></li>
                        <li className="faqqul_li">What sort of podcasts do you work with ? <img className="faqqulli_img" src="https://img.icons8.com/android/24/plus.png" alt="+" /></li>
                        <li className="faqqul_li">What sort of podcasts do you work with ? <img className="faqqulli_img" src="https://img.icons8.com/android/24/plus.png" alt="+" /></li>
                        <li className="faqqul_li">What sort of podcasts do you work with ? <img className="faqqulli_img" src="https://img.icons8.com/android/24/plus.png" alt="+" /></li>
                        <li className="faqqul_li">What sort of podcasts do you work with ? <img className="faqqulli_img" src="https://img.icons8.com/android/24/plus.png" alt="+" /></li>
                        <li className="faqqul_li">What sort of podcasts do you work with ? <img className="faqqulli_img" src="https://img.icons8.com/android/24/plus.png" alt="+" /></li>
                        <li className="faqqul_li">What sort of podcasts do you work with ? <img className="faqqulli_img" src="https://img.icons8.com/android/24/plus.png" alt="+" /></li>
                        <li className="faqqul_li">What sort of podcasts do you work with ? <img className="faqqulli_img" src="https://img.icons8.com/android/24/plus.png" alt="+" /></li>
                        <li className="faqqul_li">What sort of podcasts do you work with ? <img className="faqqulli_img" src="https://img.icons8.com/android/24/plus.png" alt="+" /></li>
                        <li className="faqqul_li faqqul_smq">See More Questions &rarr;</li>
                    </ul>
                </div>
                <div className="final_quest">
                    <span className="fq_span">Have a question about pricing? </span>
                    <div className="fq_right">
                        <button className="bai_button fq_button">Book a Call</button>
                        <button className="bai_button fq_button_mail">Email us</button>
                    </div>
                </div>
            </div>
            <div className="tonextslide">
                <button onClick={scrolltop} className="tns_button"><img className="tns_img" src="./images/button.png" alt="<button>next</button>" /></button>
            </div>
        </>
    )
}
export default Faq