import Logo from '../../components/assests/ph_tidal-logo-bold.png'
import cartImage from '../../components/assests/fluent_cart-24-filled.png'
import headerImage from '../../components/assests/head image.jpeg'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
      <div className='navbar-logo'>
        <img src={Logo} alt='' />
        <p>CeylonExportHub</p>
      </div>
      <ul className='navbar-menu'>
        <li>Home</li>
        <li>Ceylon Products</li>
        <li>Help</li>
        <li>login</li>
      </ul>
      <div className='cartImage'>
        <img src={cartImage} alt='' />
      </div>
      </div>
      <div className='headerImage'>
        <img src={headerImage} alt='' />
      </div>
      <div className='center'>
          <p className='style'>Ceylon Product</p>
          <p className='style1'>Select What You Want</p>
          <p className='style2'>Welcome to our Product Home. 
          These product purely made in Sri Lankan Traditional Products. 
          You can select from here the product category what you need and you can select the items and pay easily. 
          Please don’t forget to rate items if you are satisfied with them.</p>
      </div>
    </div>
  )
}
export default Navbar
