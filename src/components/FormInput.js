import React, { useState } from "react";

const FormInput = (props) => {
  const [productData, setProductData] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addData(productData, price);
    setProductData("");
    setPrice("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div
            className="card text-white bg-success"

            // style={{
            //   height: "15rem",
            //   marginTop: "2rem",
            //   marginLeft: "22rem",
            //   border: "2px solid green",
            // }}
          >
            <div className="card-header">Search Your Products Here!</div>
            <div className="card-body">
              <form className="form-group mb-2" onSubmit={handleSubmit}>
                <label className="form-label">Product Name</label>
                <input
                  className="form-control form-control-sm "
                  type="text"
                  value={productData}
                  onChange={(e) => setProductData(e.target.value)}
                  required
                />
                <label className="form-label">Product Price</label>
                <input
                  className="form-control form-control-sm"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
                <button
                  className="btn btn-info text-white btn-sm mt-3"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
