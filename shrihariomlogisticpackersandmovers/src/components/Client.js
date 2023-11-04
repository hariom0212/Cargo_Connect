import React from 'react'
import bob from './images/bob.png'
import af from './images/af.png'
import ntpc from './images/ntpc.png'
import nfl from './images/nfl.png'
import uppcl from './images/uppcl.jpeg'
import lic from './images/lic.png'
import ia from './images/ia.jpeg'
import bp from './images/bp.png'
import sbi from './images/sbi.png'
import "../css/client.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Client() {
  return (
    <div>
      <div className='container'>
        <h1 id='client'>OUR CLIENTS</h1>
        <div className='row'>
            <div className='col-md-3'>
            <div class="card" style={{width:" 10rem"}}>
  <img src={bob} class="card-img-top" alt="..."/>
</div>
            </div>
            <div className='col-md-3'>
            <div class="card" style={{width:" 9rem"}}>
  <img src={af} class="card-img-top" alt="..."/>
</div>
            </div>
            <div className='col-md-3'>
            <div class="card" style={{width:" 10rem"}}>
  <img src={ntpc} class="card-img-top" alt="..."/>
</div>
            </div>
            <div className='col-md-3'>
            <div class="card" style={{width:" 10rem"}}>
  <img src={uppcl} class="card-img-top" alt="..."/>
</div>
            </div>
            <div className='col-md-3'>
            <div class="card" style={{width:" 10rem"}}>
  <img src={nfl} class="card-img-top" alt="..."/>
</div>
            </div>
            <div className='col-md-3'>
            <div class="card" style={{width:" 10rem"}}>
  <img src={lic} class="card-img-top" alt="..."/>
</div>
            </div>
            <div className='col-md-3'>
            <div class="card" style={{width:" 10rem"}}>
  <img src={ia} class="card-img-top" alt="..."/>
</div>
            </div>
            <div className='col-md-3'>
            <div class="card" style={{width:" 9rem"}}>
  <img src={bp} class="card-img-top" alt="..."/>
</div>
            </div>
            <div className='col-md-3'>
            <div class="card" style={{width:" 10rem"}}>
  <img src={sbi} class="card-img-top" alt="..."/>
</div>
            </div>
            
        </div>
      </div>
      <div className='container'>
      <section style={{color: "#000; background-color: #f3f2f2"}}>
  <div class="container py-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10 col-xl-8 text-center">
        <h2 class="fw-bold mb-4">What Customer Say's?</h2>
       
      </div>
    </div>

    <div class="row text-center">
      <div class="col-md-4 mb-4 mb-md-0">
        <div class="card">
          <div class="card-body py-4 mt-2">
            <div class="d-flex justify-content-center mb-4">
              <img src="#"
                class="rounded-circle shadow-1-strong" width="100" height="100" />
            </div>
            <h5 class="font-weight-bold">Sumit Jain</h5>
            <h6 class="font-weight-bold my-3">Manager Head Office Escort</h6>
            <ul class="list-unstyled d-flex justify-content-center">
              <li>
                <i class="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-info"></i>
              </li>
            </ul>
            <p class="mb-2">
              <i class="fas fa-quote-left pe-2"></i>Very efficient at work, they give best response, safety and value at peak
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4 mb-md-0">
        <div class="card">
          <div class="card-body py-4 mt-2">
            <div class="d-flex justify-content-center mb-4">
              <img src="#"
                class="rounded-circle shadow-1-strong" width="100" height="100" />
            </div>
            <h5 class="font-weight-bold">Deepak Sharma</h5>
            <h6 class="font-weight-bold my-3">Manager State Bank Of India</h6>
            <ul class="list-unstyled d-flex justify-content-center">
              <li>
                <i class="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-info"></i>
              </li>
            </ul>
            <p class="mb-2">
              <i class="fas fa-quote-left pe-2"></i>I am very greatful to hariom packers and movers who made my transition very smooth....
very praiseworthy work...
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-0">
        <div class="card">
          <div class="card-body py-4 mt-2">
            <div class="d-flex justify-content-center mb-4">
              <img src="#"
                class="rounded-circle shadow-1-strong" width="100" height="100" />
            </div>
            <h5 class="font-weight-bold">Kishor Aggarwal</h5>
            <h6 class="font-weight-bold my-3">Officer CRPF</h6>
            <ul class="list-unstyled d-flex justify-content-center">
              <li>
                <i class="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i class="far fa-star fa-sm text-info"></i>
              </li>
            </ul>
            <p class="mb-2">
              <i class="fas fa-quote-left pe-2"></i>Good hospitality and best service
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
    </div>
  )
}
