import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()

    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/">MyMERNApp</a>
        </div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          {/* <li><a href="/about"></a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li> */}

          <div className='"navbar-right'>
            <a onClick={()=>navigate('/createBlog')} >CreateBlog</a>
          </div>
        </ul>
      </nav>
    )
  }
  
  export default Navbar