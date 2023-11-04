import React from 'react'
import "../css/about.css";
import pic from './images/shpam3.jpg'
import pic2 from './images/logo2.jpg'
import pic3 from './images/shpam1.jpg'
import about1 from './images/about1.png'
import about2 from './images/about2.jpg'

export default function About() {
  return (
    <div>
      <div className='container'>
      <h2 className="text4">ABOUT Us</h2>
      <div className='row'>
          <div className='col-md-8'>
      <p className='para'>Shri Hariom Logistics Packers and Movers is the excellent name among packers and movers service providers of India.
         We provide services to all cities in India. We offer world class packing, loading,
          unloading, transportation, unpacking, car transportation services including warehousing of household goods and commercial goods in India. 
          Shri Hariom Logistics Packers and Movers conducts more than 3,000 relocation every year,
         transferring corporate and government employees and moving individual customers.

Our relocation experts are always committed to provide international quality relocation solutions for each and every type of requirements. Shri Hariom Logistics Packers and Movers management team includes some of our industry’s most respected leaders-men who redefine relocation every day in their words and deeds.
 They are charged with ensuring that Shri Hariom Logistics Packers and Movers is moving the relocation industry forward, and that Shri Hariom Logistics Packers and Movers itself leads the charge. Our management team insists upon excellence in all that we do; most notably, in serving our customers.</p>
      </div>
      <div className='col-md-4'>
      <img src={about1} class="img-fluid" id='about1' alt="Responsive image"/>
      </div>
      </div>
      </div>

      <div className='container'>
      <h2 className='head'>Why us?</h2>
      <div className='row'>
        <div className='col-md-4'>
        <img src={about2} class="img-fluid" alt="Responsive image"/>
        </div>
        <div className='col-md-8'>
      <p className='para1'>
      We have carved a niche as leading logistic solution providers standing on the pillars of :
      </p>
      <p className='para2'>
      • Very well present in all points of entry in India through branch and respective offices <br/>
• Planned and systematic movements of cargo from one particular stand to another <br/>
• Economical movement <br/>
• Facilitated with complete infrastructure for movement of cargo <br/>
• Safe and secure consignment handling<br/>
• 24 hours helpline desk <br/>
• Complete understanding of legal formalities 
      </p>
      </div>
      </div>
      </div>
      <div className='container'>
        <h2 className='text4'>Our History</h2>
        <p className='para'>Shri Dilip Shukla Ji has had a very humble beginning. But with his consistent effort and perseverance,
         his journey has now become a success story. Ever since the inception of the SHLPAM Group in 1998, Shri Dilip Shukla Ji aka Babloo Bhaiya has been the driving force behind Shri Hariom Logistic Packers And Movers,
          formerly known as Agarwal Tempo Transport of India.

Shri Dilip Shukla Ji previously worked in the Economic
 Transport Organization from where he gathered extensive and in-depth experience and knowledge of the transport Industry which facilitated and encouraged him to start his venture under the name of SHLPAM Group.

An organization that once commenced its operation with one Mahindra vehicle now possesses more than 600 vehicles to offer services all across the nation</p>
      </div>
      <div className='container col-md-6'>
        <h2 id='gallery'>Our Gallery</h2>
      <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pic} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pic3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pic2} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    </div>
  )
}
