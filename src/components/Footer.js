import React from 'react'
import '../styles/footer.css'

const Footer = (props) => {

    return (
        <footer className="footer-section section section-pad-md light bg-footer has-bg-image">
			<div className="container w-80">
				<div className="row">
					<div className="col-md-3 col-sm-6 wgs-box res-m-bttm">
						<div className="wgs-footer wgs-menu">
							<h5 className="wgs-title ucap">Services</h5>
							<div className="wgs-content">
								<ul className="menu">
									<li><a href="#">Lorem ipsum</a></li>
									<li><a href="#">Lorem ipsum</a></li>
									<li><a href="#">Lorem ipsum</a></li>
									<li><a href="#">Lorem ipsum</a></li>
									<li><a href="#">Lorem ipsum</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 wgs-box res-m-bttm">
						<div className="wgs-footer wgs-menu">
							<h5 className="wgs-title ucap">Information</h5>
							<div className="wgs-content">
								<ul className="menu">
									<li><a href="#">Lorem ipsum</a></li>
									<li><a href="#">Lorem ipsum</a></li>
									<li><a href="#">Lorem ipsum</a></li>
									<li><a href="#">Lorem ipsum</a></li>
									<li><a href="#">Lorem ipsum</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 wgs-box res-m-bttm">
						<div className="wgs-footer wgs-post">
							<h5 className="wgs-title ucap">Recent Blog</h5>
							<div className="wgs-content">
								<div className="wgs-post-single">
									<div className="wgs-post-thumb">
										<img src="images/post-thumb-sm-b.jpg" alt="post-thumb"/>
									</div>
									<div className="wgs-post-entry">
										<h6 className="wgs-post-title"><a href="blog-single.html">Working Hard to Keep Pace with Demand </a></h6>
										<span className="wgs-post-meta">December 19, 2017</span>
									</div>
								</div>
								<div className="wgs-post-single">
									<div className="wgs-post-thumb">
										<img src="images/post-thumb-sm-c.jpg" alt="post-thumb"/>
									</div>
									<div className="wgs-post-entry">
										<h6 className="wgs-post-title"><a href="blog-single.html">Working Hard to Keep Pace with Demand </a></h6>
										<span className="wgs-post-meta">December 19, 2017</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 wgs-box res-m-bttm">
						<div className="wgs-footer wgs-contact">
							<h5 className="wgs-title ucap">Get in touch</h5>
							<div className="wgs-content">
								<ul className="wgs-contact-list">
									<li><span className="pe pe-7s-map-marker"></span>34 Tallinskaya Street <br></br>Moscow, Russia 123592</li>
									<li><span className="pe pe-7s-call"></span>Telephone: (495) 4567 8910 <br></br>Telephone: (495) 1234 5678</li>
									<li><span className="pe pe-7s-global"></span>Email: <a href="crypto@miem.hse.ru">crypto@miem.hse.ru</a> <br></br>Web : <a href="http://example.com">www.example.com</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>	
            <div className="copyright light">
                <div className="container">
                    <div className="row">
                        <div className="site-copy col-sm-7">
                            <p>Copyright © 2019 Cryptocurrency. Created by <a href="https://github.com/yaiestura">Yaiestura</a></p>
                        </div>
                        <div className="col-sm-5 text-right mobile-left">
                            <ul className="social d-flex justify-content-between">
                                <li><a href="#"><i className="fa fa-facebook">Facebook</i></a></li>
                                <li><a href="#"><i className="fa fa-twitter">Twitter</i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin">Linkedin</i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus">Google</i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;