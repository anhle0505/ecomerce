import Rating from "@mui/material/Rating";
import { SlSizeFullscreen } from "react-icons/sl";
import Button from "@mui/material/Button";
import { IoMdHeartEmpty } from "react-icons/io";
import { MyContext } from "../../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ProductItem = (props) => {

  const context = useContext(MyContext);

  const viewProductDetails = (id) => {
    context.setisOpenProductModal(true);
  }


  return (
    <>
      <div className={`ProductItem ${props.itemView}`}>
        <div className="imgWrapper">
          <Link to='/product/:id'>
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"
              className="w-100"
            />
          </Link>
          
          <span className="badge badge-primary">28%</span>

          <div className="actions">
            <Button onClick={() => viewProductDetails(1)}>
              <SlSizeFullscreen />
            </Button>

            <Button>
              <IoMdHeartEmpty style={{ fontSize: "20px" }} />
            </Button>
          </div>
        </div>

        <div className="info">
          <h4>All Natural Italian-Style Chicken Meatballs</h4>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex">
            <span className="oldPrice">80.000đ</span>
            <span className="netPrice text-danger ml-2">50.000đ</span>
          </div>
        </div>
      </div>
      
      

      
    </>
  );
};

export default ProductItem;
