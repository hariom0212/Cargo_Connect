import React from 'react'

import "../css/header.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Header() {
  return (
    <div className='conatiner' id='dis'>
      <div className='row'>
      <div className='col-md-2' id='phonebt'>
    
    <a href="tel:9794904446" id='one'> <LocalPhoneIcon/></a>
    <a href="shrihariomlpm02@gmail.com" id='two'> <EmailIcon/></a>
    

     </div>
      <div className='col-md-10' id='icons'>
      <a href="#"><FacebookIcon/></a>
      <a href="#" id='three'> <InstagramIcon/></a>
      <a href="#" id='four'> <TwitterIcon/></a>
      <a href="#" id='four'> <LinkedInIcon/></a>
      <a href="#" id='four'> <TwitterIcon/></a>
      </div>
      
      </div>
      
      </div>
  )
}
