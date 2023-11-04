import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <div>
     <footer class="bg-light text-center text-white">
  <div class="container p-4 pb-0">
    <section class="mb-4">
      <a
        class="btn text-white btn-floating m-1"
        style={{background: '#3b5998'}}
        href="#!"
        role="button"
        ><FacebookIcon/></a>
      <a
        class="btn text-white btn-floating m-1"
        style={{background: '#55acee'}}
        href="#!"
        role="button"
        ><TwitterIcon/></a>
      <a
        class="btn text-white btn-floating m-1"
        style={{background: '#dd4b39'}}
        href="#!"
        role="button"
        ><GoogleIcon/></a>
      <a
        class="btn text-white btn-floating m-1"
        style={{background: '#ac2bac'}}
        href="#!"
        role="button"
        ><InstagramIcon/></a>
      <a
        class="btn text-white btn-floating m-1"
        style={{background: '#0082ca'}}
        href="#!"
        role="button"
        ><LinkedInIcon/></a>
      <a
        class="btn text-white btn-floating m-1"
        style={{background: '#333333'}}
        href="#!"
        role="button"
        ><YouTubeIcon/></a>
    </section>
  </div>
  <div class="text-center p-3" style={{background: 'rgba(0, 0, 0, 0.2)'}}>
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</footer>
    </div>
  )
}
