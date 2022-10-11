import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mt-2 ">
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="/addtocart">
          <button className="btn btn-success btn-sm" type="button">
            Add To Cart :{" "}
            {JSON.parse(localStorage.getItem("addToCart"))?.length}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
