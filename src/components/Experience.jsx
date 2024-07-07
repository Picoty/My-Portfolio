import React from 'react'
import Article from './ExpArtical'

const Experience = () => {
    return(
        <section id="experience">
          <h5>What Skills I Have</h5>
          <h2>My Experience</h2>
          <div className="container experience__container">

             <div className="experience__frontend">
                 <h3>Frontend Development</h3>
                <div className="experience__content">
                <Article h4={'HTML'} level="experienced"/>
                <Article h4={'CSS'} level="intermediate"/>
                <Article h4={'JavaScript'} level="intermediate"/>
                <Article h4={'React'} level="experienced"/>
                <Article h4={'Next'} level="basics"/>
                <Article h4={'Bootstrap'} level="experienced"/>
                <Article h4={'tailwind CSS'} level="experienced"/>  
                <Article h4={'Typescript'} level="experienced"/>               
                </div>
             </div > 

             <div className="experince__backend">
             <h3>Backend Development</h3>
                <div className="experience__content">
                <Article h4={'Django'} level="experienced"/>
                <Article h4={'PHP'} level="intermediate"/>
                <Article h4={'Node Js'} level="experienced"/>
                <Article h4={'MongoDB'} level="basics"/>
               </div>               
             </div>
             <div className="experince__backend">
             <h3>ERP</h3>
                <div className="experience__content">
                <Article h4={'Microsoft Dynamics 365 Buiness Central'} level="intermediate"/>  
                <Article h4={'Microsoft Dynamics Navision '} level="intermediate"/>
                <Article h4={'Microsoft Dynamics CRM'} level="intermediate"/>
                <Article h4={'SQL Server Management Studio'} level="intermediate"/>
               </div>               
             </div>
             <div className="experince__backend">
             <h3>Data Science</h3>
                <div className="experience__content">
                <Article h4={'Python'} level="experienced"/>  
                <Article h4={'NumPy '} level="experienced"/>
                <Article h4={'Pandas'} level="intermediate"/>
                <Article h4={'TensorFlow'} level="intermediate"/>
                <Article h4={'Keras'} level="intermediate"/>
                <Article h4={'PyTorch'} level="intermediate"/>
               </div>               
             </div>

          </div>
        </section>
    )
}

export default Experience