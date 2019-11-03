import React from "react";
import Currency from './Currency'
import '../styles/content.css'
import tMemberLogo1 from '../media/team/paul.jpg'
import tMemberLogo2 from '../media/team/daniel.jpg'


const TeamCard = (props) => {

    const { name, occupation, age, location, description } = props.data;

    return(
        <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div className="mainflip">
                    <div className="frontside">
                        <div class="card">
                            <div className="card-body text-center">
                                <p><img className=" img-fluid" src={tMemberLogo1} alt="Pavel"/></p>
                                <h4 className="card-title">{name}</h4>
                                <p className="card-text">{occupation}<br></br>{age}, {location}</p>
                                <div className="skills d-inline-flex justify-content-center">
                                    <i className="fa fa-line-chart"></i>
                                    <i className="fa fa-line-chart"></i>
                                    <i className="fa fa-line-chart"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="backside">
                        <div class="card">
                            <div class="card-body text-center mt-4">
                                <h4 class="card-title">{name}</h4>
                                <p class="card-text">{description}</p>
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <a class="social-icon text-xs-center" target="_blank" href="https://vk.com/patsvetov">
                                            <i class="fa fa-vk"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="social-icon text-xs-center" target="_blank" href="https://github.com/yaiestura">
                                            <i class="fa fa-github"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="social-icon text-xs-center" target="_blank" href="#">
                                            <i class="fa fa-telegram"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="social-icon text-xs-center" target="_blank" href="#">
                                            <i class="fa fa-skype"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Team = () => {

    const teamMember1 = {
        name: 'Paul Tsvetov',
        occupation: 'Higher School of Economics',
        age: '20 years',
        location: 'Moscow, Russia',
        description: 'Hi, I\'am a senior student, studying FrontEnd Development',
    }

    const teamMember2 = {
        name: 'Daniel',
        occupation: 'The Coding Train',
        age: '35 years',
        location: 'New York, US',
        description: 'Hi, I\'am a senior student, studying FrontEnd Development',
    }

    return (
        <section id="team" class="pb-5">
            <div class="container">
                <h5 class="section-title h1 text-uppercase">Our team</h5>
                <div class="row">
                    <TeamCard data={teamMember1}/>
                    <TeamCard data={teamMember2}/>
                    <TeamCard data={teamMember1}/>
                </div>
            </div>
        </section>
    )
}

const Content = (props) => {
    return(
        <div class="content">
          <Currency/>
          <Team/>
        </div>
    )
}

export default Content;