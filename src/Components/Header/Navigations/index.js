import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {

  const [isOpenSidebarVal, setisOpenSidebarVal] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="row">   
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
              <Button className="allCatTab align-items-center" onClick={() => setisOpenSidebarVal(!isOpenSidebarVal)}>
                <span className="icon1 mr-2"><IoIosMenu /></span>
                <span class="text">ALL CATEGORIES</span>
                <span className="icon2 ml-2"><FaAngleDown /></span>
              </Button>
              
              <div className={`sidebarNav ${isOpenSidebarVal === true ? 'open' : ''}`}>
                <ul>
                  <li><Link to='/'><Button>Men <FaAngleRight className="ml-auto"/></Button></Link>
                    <div className="submenu">
                      <Link to='/'><Button>clothing</Button></Link>
                      <Link to='/'><Button>footwear</Button></Link>
                      <Link to='/'><Button>watches</Button></Link>
                      <Link to='/'><Button>clothing</Button></Link>
                      <Link to='/'><Button>footwear</Button></Link>
                      <Link to='/'><Button>watches</Button></Link>
                    </div>
                  </li>
                  <li><Link to='/'><Button>Women <FaAngleRight className="ml-auto"/></Button></Link>
                    <div className="submenu">
                      <Link to='/'><Button>clothing</Button></Link>
                      <Link to='/'><Button>footwear</Button></Link>
                      <Link to='/'><Button>watches</Button></Link>
                      <Link to='/'><Button>clothing</Button></Link>
                      <Link to='/'><Button>footwear</Button></Link>
                      <Link to='/'><Button>watches</Button></Link>
                    </div>
                  </li>
                  <li><Link to='/'><Button>Beauty</Button></Link></li>
                  <li><Link to='/'><Button>Watches</Button></Link></li>
                  <li><Link to='/'><Button>Kids</Button></Link></li>
                  <li><Link to='/'><Button>Gift</Button></Link></li>
                  <li><Link to='/'><Button>Men</Button></Link></li>
                  <li><Link to='/'><Button>Women</Button></Link></li>
                  <li><Link to='/'><Button>Beauty</Button></Link></li>
                  <li><Link to='/'><Button>Watches</Button></Link></li>
                  <li><Link to='/'><Button>Kids</Button></Link></li>
                  <li><Link to='/'><Button>Gift</Button></Link></li>
                </ul>
              </div>
            </div>
            
          </div>
 
          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
                <li className="list-inline-item"><Link to='/'><Button>Home</Button></Link></li>
                <li className="list-inline-item">
                  <Link to='/cat/:id'><Button>Shop</Button></Link>
                  <div className="submenu shadow">
                    <Link to='/'><Button>clothing</Button></Link>
                    <Link to='/'><Button>footwear</Button></Link>
                    <Link to='/'><Button>watches</Button></Link>
                    <Link to='/'><Button>clothing</Button></Link>
                    <Link to='/'><Button>footwear</Button></Link>
                    <Link to='/'><Button>watches</Button></Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to='/'><Button>Meat & Seafood</Button></Link>
                  <div className="submenu shadow">
                    <Link to='/'><Button>clothing</Button></Link>
                    <Link to='/'><Button>footwear</Button></Link>
                    <Link to='/'><Button>watches</Button></Link>
                    <Link to='/'><Button>clothing</Button></Link>
                    <Link to='/'><Button>footwear</Button></Link>
                    <Link to='/'><Button>watches</Button></Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to='/'><Button>Bakery</Button></Link>
                  <div className="submenu shadow">
                    <Link to='/'><Button>clothing</Button></Link>
                    <Link to='/'><Button>footwear</Button></Link>
                    <Link to='/'><Button>watches</Button></Link>
                    <Link to='/'><Button>clothing</Button></Link>
                    <Link to='/'><Button>footwear</Button></Link>
                    <Link to='/'><Button>watches</Button></Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to='/'><Button>Beverages</Button></Link>
                  <div className="submenu shadow">
                    <Link to='/'><Button>clothing</Button></Link>
                    <Link to='/'><Button>footwear</Button></Link>
                    <Link to='/'><Button>watches</Button></Link>
                    <Link to='/'><Button>clothing</Button></Link>
                    <Link to='/'><Button>footwear</Button></Link>
                    <Link to='/'><Button>watches</Button></Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to='/'><Button>Blog</Button></Link>
                  <div className="submenu shadow">
                    <Link to='/'><Button>clothing</Button></Link>
                    <Link to='/'><Button>footwear</Button></Link>
                    <Link to='/'><Button>watches</Button></Link>
                    <Link to='/'><Button>clothing</Button></Link>
                    <Link to='/'><Button>footwear</Button></Link>
                    <Link to='/'><Button>watches</Button></Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to='/'><Button>Contact</Button></Link>
                  <div className="submenu shadow">
                    <Link to='/'><Button>clothing</Button></Link>
                    <Link to='/'><Button>footwear</Button></Link>
                    <Link to='/'><Button>watches</Button></Link>
                    <Link to='/'><Button>clothing</Button></Link>
                    <Link to='/'><Button>footwear</Button></Link>
                    <Link to='/'><Button>watches</Button></Link>
                  </div>
                </li>
                
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
