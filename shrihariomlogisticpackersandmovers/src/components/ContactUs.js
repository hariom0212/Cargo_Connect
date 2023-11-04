import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "../css/contactus.css";
import enquiry from './images/enquiry.png'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlaceIcon from '@mui/icons-material/Place';


export default function ContactUs() {
    const history = useNavigate();
    const [user, setUser] = useState({
        name: "", phone: ""
    });
    let name, value;

    const handleInputs = (e) =>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();
        const {name, phone} = user;

        const res = await fetch("/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, phone
            })
        });
        const data = await res.json();
        if(data.status === 422 || !data){
            window.alert('Invalid Registration');
        }
        else{
            window.alert('Registration Successfull');
            history('/');
        }
    }
  return (
    <div>
        <div className='container'>
            <div className='row'>
            <div className='col-md-6'>
      <img src={enquiry} id='enquiry' class="img" alt="..."/>
      </div>


            <div className='col-md-6'>
     
      <form method='POST' className='contactus-form' id='contactus-form'>
      <h2 className='form-title'> ENQUIRY FORM</h2>
      <p className='note'>Fill the enquiry form now, our support staff will contact you soon</p>
        <div className='form-group'>
            <label htmlFor='name'>
            </label>
            <input type='text' name='name' id='name' autoComplete='off' value={user.name} onChange={handleInputs} placeholder=' Your name'/>
        </div>

        <div className='form-group'>
            <label htmlFor='phone'>
            </label>
            <input type='text' name='phone' id='name' value={user.phone} onChange={handleInputs} autoComplete='off' placeholder=' Your phone'/>
        </div>

        <div className='form-group form-button'>
            <input type='submit' name='submit' id = 'submit' className='form-submit' value='submit' onClick={PostData}/>
        </div>
      </form>
      </div>
      </div>
      </div>
      
<div className='container'>
    <h2 id='contactinfo'>CONTACT INFO</h2>
      <div id='contactlist'>
        <div className='row'>
            <div className='col-md-6'>
        <h5 className='head5'>CONTACT PERSON:</h5>
        <p className='para5'><AccountCircleIcon/> MR. Dilip Shukla</p>
        <h5 className='head5'>Contact NUMBER:</h5>
        <p className='para5'><LocalPhoneIcon/> 9794904446</p></div>
        <div className='col-md-6'>
        <h5 className='head5'>OFFICE ADDRESS:</h5>
        <p className='para5'><PlaceIcon/> Transport Nagar Mahewa Chowk Gorakhpur Uttar Pradesh 273016</p>
       
        <h5 className='head5'>EMAIL:</h5>
        <p className='para5'><EmailIcon/> shrihariomlpm@gmail.com</p>
        
    </div>
    </div>
    </div>
    </div>

      </div>


        
      


  )
}
