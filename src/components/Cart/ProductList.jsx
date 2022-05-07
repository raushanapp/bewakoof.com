import "./ProductList.css";
export const ProductList = () => {
  return (
    <div className="Productdiv">
      <div className="text-img">
        <div className="texts">
          <div className="title">
            Striped Captain America Printed Badge Full Sleeve T-Shirt (AVL)
          </div>
          <div className="price">
            <div className="original-price">{`₹${200}`}</div>
            <div className="strikedoff-price">{`₹${599}`}</div>
          </div>
          <div className="saved">You saved {`₹${324}!`}</div>

          <select name="" id="Size">
          <option value="">Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="2XL">2XL</option>
              <option value="3XL">3XL</option>
          </select>
          <select name="" id="Qty">
          <option value="">Qty</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
          </select>
        </div>
        <img
          className="image-tag"
          src="https://images.bewakoof.com/t320/striped-captain-america-printed-badge-full-sleeve-t-shirt-avl-234126-1637995495-1.jpg"
          alt="image"
        />
      </div>
      <button className="remove-btn">Remove</button>
      <button className="wishlist-btn">Move to wishlist</button>
    </div>
  );
};
