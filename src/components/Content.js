import React from "react";
import Currency from './Currency'
import '../styles/content.css'
import paul from '../media/team/paul.jpg'

const TeamCard = () => {
    return(
        <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div class="mainflip">
                    <div class="frontside">
                        <div class="card">
                            <div class="card-body text-center">
                                <p><img class=" img-fluid" src={paul} alt="Pavel"/></p>
                                <h4 class="card-title">Pavel Tsvetov</h4>
                                <p class="card-text">Higher School of Economics<br></br>20 years, Moscow</p>
                                <div className="skills d-inline-flex justify-content-center">
                                    <i class="fa fa-line-chart"></i>
                                    <i class="fa fa-line-chart"></i>
                                    <i class="fa fa-line-chart"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="backside">
                        <div class="card">
                            <div class="card-body text-center mt-4">
                                <h4 class="card-title">Pavel Tsvetov</h4>
                                <p class="card-text">Lorem ipsum</p>
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
    return (
        <section id="team" class="pb-5">
            <div class="container">
                <h5 class="section-title h1 text-uppercase">Our team</h5>
                <div class="row">
                    <TeamCard/>
                    <TeamCard/>
                    <TeamCard/>
                </div>                    
            </div>
        </section>
    )
}

const Content = (props) => {
    return(
        <div class="imagebg has-parallax bg-image-loaded">
            <img src="../media/calc-bg.jpg" alt="calc-bg"/>
            <Currency/>
            <Team/>
        </div>        
    )
}

export default Content;