import {BiCheck} from "react-icons/bi"
const Services=()=>{
    return(
        <section id="services">
            <h5>What I offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
               

                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Frontend Design</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Frontend Development</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Backend Development</p>
                        </li>
                    </ul>
                   
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>ERP</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Microsoft Dynamics 365 Buiness Central</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Microsoft Dynamics Navision</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Microsoft Dynamics CRM</p>
                        </li>
                    </ul>
                   
                </article>
                
                <article className="service">
                    <div className="service__head">
                        <h3>Data Science</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Data Analytics</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Artifical Intelligence (AI)</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Machine Learning (ML)</p>
                        </li>
                    </ul>
                   
                </article>


            </div>
        </section>
    )
    }
    
    export default Services;