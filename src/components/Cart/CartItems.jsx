import "./CartItems.css";
import { ProductList } from "./ProductList";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export const CartItems = () => {
  return (
    <div className="cartItems">
      <div className="mainDiv">
        <h2>{`My Bag`}</h2>

        <div className="yaydiv">
          <LocalShippingIcon
            sx={{ color: "red", fontSize: 30 }}
            className="text-yaydiv"
          ></LocalShippingIcon>
          <div className="text-yaydiv2">
            Yay! you get Free delivery on this order.
          </div>
        </div>
        <ProductList/>
        <ProductList/>
      </div>
    </div>
  );
};
