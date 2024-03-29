import React from 'react'
import '../styles/contact.css'
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const mapData = {
    center: [55.803469, 37.409846],
    zoom: 14,
  };

  const coordinates = [
    [55.803469, 37.409846]
];

const Contact = () => {
    return (
    <div>
      <div>
		<div className="contact-bg">
          <div className="contact-wrapper">
            <h2 className="text-white">Contact Us</h2>
          </div>
		</div>
		<div className="section section-pad">
		  <div className="container">
				<div className="row">
					<div className="col-md-8 res-m-bttm">
						<div className="contact-information">
							<h4>Contact Information</h4>
							<div className="row">
								<div className="col-4 res-m-bttm">
									<div className="contact-entry">
										<h6>MIEM HSE</h6>
										<p>34 Tallinskaya Street<br></br>Moscow, Russia 123592</p>
									</div>
								</div>
								<div className="col-sm-4 res-m-bttm">
									<div className="contact-entry">
										<h6>Contact number</h6>
										<p>phone:  781-123-9865<br></br>toll free: 800-123-5689</p>
									</div>
								</div>
								<div className="col-sm-4 res-m-bttm">
									<div className="contact-entry">
										<h6>Working hours</h6>
										<p>Monday - Saturday<br></br>7:00am - 10:00pm</p>
									</div>
								</div>
							</div>
						</div>
						<div className="contact-form">
							<p>Complete and submit the form below</p>
							<form id="contact-form" onSubmit={event => { event.preventDefault(); }}>
								<div className="form-results"></div>
								<div className="form-group row">
									<div className="form-field col-sm-6 form-m-bttm">
										<input name="contact-name" type="text" placeholder="Full Name" class="form-control required" aria-required="true"/>
									</div>
									<div className="form-field col-sm-6">
										<input name="contact-email" type="email" placeholder="Email" class="form-control required email" aria-required="true"/>
									</div>
								</div>
								<div className="form-group row">
									<div className="form-field col-sm-6 form-m-bttm">
										<input name="contact-phone" type="text" placeholder="Phone Number" class="form-control required" aria-required="true"/>
									</div>
									<div className="form-field col-sm-6">
										<input name="contact-subject" type="text" placeholder="Subject" class="form-control required" aria-required="true"/>
									</div>
								</div>
								<div className="form-group row">
									<div className="form-field col-md-12">
										<textarea name="contact-message" placeholder="Messages" class="textarea form-control required" aria-required="true"></textarea>
									</div>
								</div>
								<button type="submit" className="btn btn-primary">Submit</button>
							</form>
						</div>
					</div>
                    <div className="col-4 res-m-bttm">
                        <YMaps>
                            <Map defaultState={mapData} width="450px" height="350px">
                                {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                            </Map>
                        </YMaps>
                    </div>
				</div>
			</div>
		</div>
    </div>
</div>
);
}

export default Contact;

