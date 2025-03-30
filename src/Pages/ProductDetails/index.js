import ProductZoom from "../../Components/ProductZoom";
import Rating from '@mui/material/Rating';
import QuantityBox from "../../Components/QuantityBox";
import Button from '@mui/material/Button'
import { BsCartFill } from "react-icons/bs";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import RelatedProducts from "./RelatedProduct";


const ProductDetails = () => {

  const [activeSize, setActiveSize] = useState(null);
  const [activeTabs, setActiveTabs] = useState(null);

  const isActive = (index) => {
    setActiveSize(index);
  }

  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pl-5">
              <ProductZoom />
            </div>

            <div className="col-md-7 pl-5 pr-5">
              <h2 className="hd text-capitalize">
                All Natural Italian-Style Chicken Meatballs
              </h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inine-item">
                  <div className="d-flex align-items-center">
                    <span className="text-gray mr-2">Brands:</span>
                    <span>Welch's</span>                 
                  </div>
                </li>

                <li className="list-inine-item">
                    <div className="d-flex align-items-center">
                        <Rating name="read-only" value={4.5}  precision={0.5} readOnly size="small" />
                        <span className="text-gray cursor">1 Review</span>
                    </div>
                </li>

              </ul>

              <div className="d-flex info mb-3">
                <span className="oldPrice">80.000đ</span>
                <span className="netPrice text-danger ml-2">50.000đ</span>
              </div>

              <span className="badge bg-success">IN STOCK</span>

              <p className="mt-3">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. 
              Class aptent taciti sociosqu ad litora torquent</p>


              <div className="productSize d-flex align-items-center">
                <span>Size / Weight: </span>
                <ul className="list list-inline mb-0 pl-4">
                  <li className="list-inline-item"><a className={`tag ${activeSize === 0 ? 'active' :''}`}
                  onClick={() => isActive(0)}>50g</a></li>
                  <li className="list-inline-item"><a className={`tag ${activeSize === 1 ? 'active' :''}`}
                  onClick={() => isActive(1)}>100g</a></li>
                  <li className="list-inline-item"><a className={`tag ${activeSize === 2 ? 'active' :''}`}
                  onClick={() => isActive(2)}>200g</a></li>
                  <li className="list-inline-item"><a className={`tag ${activeSize === 3 ? 'active' :''}`}
                  onClick={() => isActive(3)}>300g</a></li>
                  <li className="list-inline-item"><a className={`tag ${activeSize === 4 ? 'active' :''}`}
                  onClick={() => isActive(4)}>500g</a></li>
                </ul>
              </div>


              <div className="d-flex align-items-center mt-3">
                <QuantityBox/>
                <Button className="btn-blue btn-lg btn-big btn-round"><BsCartFill/> &nbsp; Add to cart</Button>

                <Tooltip title="Add to WishList" placement="top">
                  <Button className="btn-blue btn-lg btn-big btn-circle ml-4"><FaRegHeart/></Button>
                </Tooltip>
                
                <Tooltip title="Add to Compare" placement="top">
                  <Button className="btn-blue btn-lg btn-big btn-circle ml-2"><MdOutlineCompareArrows/></Button>
                </Tooltip>
                
                
              </div>

              

            </div>

          </div>

          <br/>

          <div className="card mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="list list-inline d-flex">
                <li className="list list-inline">
                  <Button className={`${activeTabs === 0 && 'active'}`} onClick={() => {
                    setActiveTabs(0)
                  }}>Description</Button>
                </li>
                <li className="list list-inline">
                  <Button className={`${activeTabs === 1 && 'active'}`} onClick={() => {
                    setActiveTabs(1)
                  }}>Additional info</Button>
                </li>
                <li className="list list-inline">
                  <Button className={`${activeTabs === 2 && 'active'}`} onClick={() => {
                    setActiveTabs(2)
                  }}>Review (3)</Button>
                </li>
              </ul>

              <br/>

              {
                activeTabs === 0 && 
                <div className="tabContent">
                  <p>Quisque varius diam vel metus mattis, id aliquam diam rhoncus. 
                    Proin vitae magna in dui finibus malesuada et at nulla. 
                    Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. 
                    Fusce fermentum iaculis nibh, at sodales leo maximus a. 
                    Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. 
                    Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. 
                    Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.</p>
                </div>
              }

              {
                activeTabs === 1 && 
                <div className="tabContent">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr className="stand-up">
                          <th>Stand Up</th>
                          <td>
                            <p>35"L x 24"W x 37-45"H(front to back wheel)</p>
                          </td>
                        </tr>
                        <tr className="folded-wo-wheels">
                          <th>Folded (w/o wheels)</th>
                          <td>
                            <p>32.5"L x 18.5"W x 16.5"H</p>
                          </td>
                        </tr>
                        <tr className="folded-w-wheels">
                          <th>Folded (w/ wheels)</th>
                          <td>
                            <p>32.5"L x 24"W x 16.5"H</p>
                          </td>
                        </tr>
                        <tr className="door-pass-throught">
                          <th>Door Pass Throught</th>
                          <td>
                            <p>24</p>
                          </td>
                        </tr>
                        <tr className="frame">
                          <th>Frame</th>
                          <td>
                            <p>Aluminum</p>
                          </td>
                        </tr>
                        <tr className="weight-wo-wheels">
                          <th>Weight (w/o wheels)</th>
                          <td>
                            <p>20 LBS</p>
                          </td>
                        </tr>
                        <tr className="weight-capacity">
                          <th>Weight Capacity</th>
                          <td>
                            <p>60 LBS</p>
                          </td>
                        </tr>
                        <tr className="width">
                          <th>Width</th>
                          <td>
                            <p>24"</p>
                          </td>
                        </tr>
                        <tr className="handle-height-ground-to-handle">
                          <th>Handle height (ground to handle)</th>
                          <td>
                            <p>37-45"</p>
                          </td>
                        </tr>
                        <tr className="wheels">
                          <th>Wheels</th>
                          <td>
                            <p>12" air / wide track slick tread</p>
                          </td>
                        </tr>
                        <tr className="seat-back-height">
                          <th>Seat back height</th>
                          <td>
                            <p>21.5"</p>
                          </td>
                        </tr>
                        <tr className="head-room-inside-canopy">
                          <th>Head room (inside canopy)</th>
                          <td>
                            <p>25"</p>
                          </td>
                        </tr>
                        <tr className="pa-color">
                          <th>Color</th>
                          <td>
                            <p>Black, Blue, Red, White</p>
                          </td>
                        </tr>
                        <tr className="pa-size">
                          <th>Size</th>
                          <td>
                            <p>M, 5</p>
                          </td>
                        </tr>


                      </tbody>
                    </table>
                  </div>
                </div>
              }

              {
                activeTabs === 2 &&
                <div className="tabContent">
                  <div className="row">
                    <div className="col-md-8">
                      <h3>Customer questions & answers</h3>
                      <br/>

                      <div className="card p-4 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"/>
                          </div>
                          <span className="text-g d-block text-center font-weight-bold">Anh Le</span>
                        </div>

                        <div className="info pl-5">
                          <div className="d-flex align-items-center w-100">
                            <h5 className="text-gray">05/05/2002</h5>
                            <div className="ml-auto">
                              <Rating name="half-rating-read" value={4.5} precision={0.5} readOnly size="small"/>
                            </div>
                          </div>

                          <p>Tôi cảm thấy rất tuyệt vời. Good job!!!</p>
                        </div>
                      </div>

                      <br className="res-hide"/>

                      <br className="res-hide"/>


                      <form className="reviewForm">
                        <h4>Add a review</h4>
                        <div className="form-group">
                          <textarea className="form-control"
                          placeholder="Write a Review"
                          name="reivew"></textarea>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Name" name="userName"/>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <Rating name="rating" value={4.5} precision={0.5}/>
                            </div>
                          </div>
                        </div>

                        <br/>

                        <div className="form-group">
                          <Button type="submit" className="btn-blue btn-lg btn-big btn-round">Submit Review</Button>
                        </div>

                      </form>

                    </div>
                  </div>
                </div>
              }


            </div>
          </div>

          <br/>

          

        </div>
      </section>
    </>
  );
};
export default ProductDetails;
