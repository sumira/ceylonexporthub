import React from 'react'; 
// import './footer.css'; 
import './footer.css'
import img1 from '../../components/assests/2.1.png' 
import img2 from '../../components/assests/2.2.png' 
import img3 from '../../components/assests/2.3.png' 
 
const Footer = () => { 
  return ( 
    <footer className="footer"> 
      <div className='footers'> 
        <div className="footer-content"> 
          <div className='subContainer'> 
            <div className="footer_detail"> 
              <h3>Important</h3> 
              <ul> 
                <li>About us</li> 
                <li>FAQs</li> 
                <li>Privacy policy</li> 
                <li>Shipping policy</li> 
                <li>Delivery policy</li> 
              </ul> 
            </div> 
            <div className="footer_detail"> 
              <h3>Terms & Conditions</h3> 
              <ul> 
                <li>Cookies</li> 
                <li>3 days return policy</li> 
                <li>Your privacy</li> 
                <li>Hyperlinking to our content</li> 
                <li>Disclaimer</li> 
              </ul> 
            </div> 
            <div className="footer_detail"> 
              <h3>Your Account</h3> 
              <ul> 
                <li>Sign in</li> 
                <li>Register</li> 
                <li>View cart</li> 
                <li>Shop now</li> 
                <li>View your watch list</li> 
              </ul> 
            </div> 
            <div className='footer_detail'> 
              <h3>Contact Details</h3> 
              <ul> 
                <li>Ceylon ExportHub Address</li> 
                <li>Phone Number</li> 
                <li>Email</li> 
              </ul> 
            </div> 
          </div> 
          <div className="securePayment"> 
            <h3>Secure Payment & Shipping Method</h3> 
            <div className='images'> 
              <img src={img1} alt='' /> 
              <img src={img2} alt='' /> 
              <img src={img3} alt='' />             
            </div> 
          </div> 
          <div className="stay"> 
            <h3>Stay Connected...</h3> 
          </div> 
        </div> 
      </div> 
      <div className="footer-bottom"> 
        <p>2024 CeylonExportHub International (Pvt) Ltd. All Right Reserved.</p> 
      </div> 
    </footer> 
  ); 
} 
 
export default Footer; 