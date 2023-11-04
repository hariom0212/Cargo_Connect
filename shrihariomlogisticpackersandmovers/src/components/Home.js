import React from 'react'
import photo2 from './images/logo2.jpg'
import photo3 from './images/shpam3.jpg'
import photo4 from './images/logo3.jpg'
import home1 from './images/home1.jpg'
import home2 from './images/home2.jpg'
import home3 from './images/home3.jpg'
import home4 from './images/home4.jpg'
import home5 from './images/home5.jpg'
import home6 from './images/home6.jpg'
import "../css/home.css";


export default function Home() {
  return (
    <div>

    <div className="container">
        <div className="row">
          <div className="t col-md-4">
          <img src={photo4} className="img-fluid" alt="..."/>
         

          </div>

          <div className="col-md-8">
            <h3 className="text">Welcome to Shri Hariom Logistic Packers & Movers</h3>
            <p className="text2">Established in the year 1998, Sri Hariom in Transport Nagar, Gorakhpur is a top player in the category House Structure Relocation Services in the Gorakhpur. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Gorakhpur.
               Over the course of its journey, this business has established a firm foothold in it’s industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day. This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company. In the near future,
                this business aims to expand its line of products and services and cater to a larger client base. In Gorakhpur, this establishment occupies a prominent location in Transport Nagar. It is an effortless task in commuting to this establishment as there are various modes of transport readily available. It is known to provide top service in the following categories: 
               Transporters, Packers And Movers, Packers And Movers (All India),Logistic Services, 24 Hours Packers And Movers, House Structure Relocation Services. </p>
          </div>
  </div>
</div>

<div className="container">
    <h2 className="text3">WE OFFERS YOU</h2>
    <div className="row">
        <div className="col-md-4">
        <div class="card">
  <img src={home1} alt="Avatar" style={{width:"100%"}}/>
  <div class="container">
    <h4><b>PACKING & MOVING SERVICES</b></h4>
    <p>The Packing process services of our company comprises of strong professionals doing their jobs. These people are so well trained in their areas of operations that just by looking at the goods they come to know about the kind of packing that would be required for them.However while packing the big furniture items, the Movers packers of our company always ensure that they are packed in good quality corrugated sheets so that there would be the least amount, or in fact no damage incurred by the goods at all. </p>
  </div>
</div>
        </div>

        <div className="col-md-4">
        <div class="card">
  <img src={home2} alt="Avatar" style={{width:"100%"}}/>
  <div class="container">
    <h4><b>LOADING & UNLOADING SERVICES</b></h4>
    <p>Supported by our talented professionals, we are offering an exceptional assortment of Loading and Unloading Labour Contractors Service for our customers. We are familiar with the market demanded that help us to offer these contractor work to clients in the most appropriate manner. In addition to this, these contractor services are offered at affordable prices. We have chosen an adroit team of quality supervisors that value the quality of our provided services at each stage of execution to make sure that the norms are effectively met.</p>
  </div>
</div>
        </div>

        <div className="col-md-4">
        <div class="card">
  <img src={home3} alt="Avatar" style={{width:"100%"}}/>
  <div class="container">
    <h4><b>HOUSEHOLD GOODS SHIFTING</b></h4>
    <p>Backed ourselves with sound amenities and talented personnel, we have emerged as one of the leading providers of Household Goods Moving. Due to our trouble free management, high quality, and cost effectiveness, the presented services are highly commended by our valued patrons. In addition, our clients can acquire these services from us at industry leading prices. Looking at the contemporary and regular needs of packing and relocation, we are majorly dealing in transportation services. As the relocation activities always come as tiresome task. </p>
  </div>
</div>
        </div>

        <div className="col-md-4">
        <div class="card">
  <img src={home4} alt="Avatar" style={{width:"100%"}}/>
  <div class="container">
    <h4><b>TRANSIT INSURANCE SERVICES</b></h4>
    <p>We are one of the foremost companies of Transit Insurance Service. This service is enormously admired in the market for their flexibility, consistency and reasonable prices. Our experts give full efforts to complete client’s needs and necessities. All types of cargoes both inland/international,low rates,prompt service,online quote,online payment and issue of policies- take a quote and compare, we issue policies within 1 hour, we work 24x7days.</p>
  </div>
</div>
        </div>

        <div className="col-md-4">
        <div class="card">
  <img src={home5} alt="Avatar" style={{width:"100%"}}/>
  <div class="container">
    <h4><b>LOCAL HOME SHIFTING</b></h4>
    <p>Our team in India always ready to offer you Local Home Shifting Services within India. One stop for all service provide household relocation and gives you the flexibility to fit your budget and schedule. We take pleasure to introduce ourselves as one of the renowned organization for offering best-in-class range of Local Shifting Service. Amongst all the types of courier services, international courier service is the solution to send the parcels or documents from one country to another which can be sent by air or sea.</p>
  </div>
</div>
        </div>

        <div className="col-md-4">
        <div class="card">
  <img src={home6} alt="Avatar" style={{width:"100%"}}/>
  <div class="container">
    <h4><b>COURIER SERVICES</b></h4>
    <p>As there is always the need of sending things from one place to another, courier services become very important for our day to day life. Whether of personal or business purpose, we all use courier services for sending documents, parcels, medicines, money etc., from one city to another or from one country to another. Amongst all the types of courier services, international courier service is the solution to send the parcels or documents from one country to another which can be sent by air or sea. </p>
  </div>
</div>
        </div>
    </div>

</div>

</div>


  )
}
