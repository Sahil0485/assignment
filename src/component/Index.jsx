function Index() {
    return (
        <>
            <div className="banner">
                <div className="banner_head">
                    <h1 className="banner_h1">Not just Another</h1>
                    <h3 className="banner_h3">Video Editing Agency</h3>
                    <p className="banner_desc">we help you to start a new or grow your existing podcast that unlocks opportunities & <span className="banner_dark_desc">leads, expands impact and increases revenue.</span></p>
                </div>
                <div className="banner_buttons">
                    <button className="pnul_button bb_button">View Plans & Pricing</button>
                    <button className="pnul_button bb_button pnul_active">Our Projects &rarr;</button>
                </div>
                <div className="banner_results">
                    <h3 className="component_heading br_heading">Our Results</h3>
                    <div className="br_result">
                        <ul className="brr_ul">
                            <li className="brrul_li"><span className="brrul_span">&rarr;</span><span className="brrli_span">2500+ Clients</span></li>
                            <li className="brrul_li"><span className="brrul_span">&rarr;</span><span className="brrli_span">5000+ Video Edits</span></li>
                            <li className="brrul_li"><span className="brrul_span">&rarr;</span><span className="brrli_span">25+ Countries</span></li>
                            <li className="brrul_li"><span className="brrul_span">&rarr;</span><span className="brrli_span">250Million+ Views</span></li>
                        </ul>
                    </div>
                </div>
                <div className="banner_tape">
                    <img src="./images/banner_tape.png" alt=".img" className="bt_img" />
                </div>
                <h3 className="component_heading">Our Impact</h3>
                <div className="oi_div">
                    <img src="./images/impact.png" alt=".img" className="oid_img" />
                </div>
            </div>
        </>
    )
}
export default Index