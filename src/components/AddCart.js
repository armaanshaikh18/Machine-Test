import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AddCart = ({ addToCarts, setAddToCart }) => {
  // const [cart, setCart] = useState(
  //   JSON.parse(localStorage.getItem("addToCart"))
  // );
  const [cartDetail, setCartDetail] = useState({
    length: 0,
    price: 0,
  });

  const handleAddition = (index) => {
    const newProjects = addToCarts.map((p, i) =>
      i === index ? { ...p, count: addToCarts[index]?.count + 1 } : p
    );
    setAddToCart(newProjects);
  };
  const handleDeduction = (index) => {
    if (addToCarts[index]?.count - 1 > 0) {
      const newProjects = addToCarts.map((p, i) =>
        i === index ? { ...p, count: addToCarts[index]?.count - 1 } : p
      );
      setAddToCart(newProjects);
    } else {
      handleDeletion(addToCarts[index]?.products);
    }
  };
  const handleDeletion = (product) => {
    const deleted = addToCarts.filter((data) => data.products !== product);
    setAddToCart(deleted);
  };

  useEffect(() => {
    let number = 0;
    let price = 0;
    addToCarts?.forEach((data) => (price += data?.count * data?.price));
    addToCarts?.forEach((data) => (number += data?.count));
    setCartDetail({
      length: number,
      price,
    });
  }, [addToCarts]);
  const handleTotalCount = () => {
    let totalCount = 0;
    addToCarts.forEach((data) => {
      totalCount += data?.count;
    });
    return totalCount;
  };
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="row my-5">
            <div className="col-md-2">
              <div>
                <label>Your Cart: {cartDetail?.length}</label>
              </div>
            </div>
            <div className="col-md-2">
              {" "}
              <div>
                <label>Your Cost:{cartDetail?.price}</label>
              </div>
            </div>
            <div className="col-md-2">
              <Link to="/">
                <div>
                  <button
                    type="button"
                    className="btn btn-info text-white btn-sm"
                  >
                    Go Back
                  </button>
                </div>
              </Link>
            </div>
          </div>

          {addToCarts && addToCarts.length ? (
            addToCarts.map((data, key) => (
              <div className="col-md-4" key={key} style={{ marginTop: "1rem" }}>
                <div className="card text-left text-white bg-success mb-3">
                  <div className="card-body">
                    <h5 className="card-title">
                      Product Name :{data?.products}
                    </h5>
                    <h5 className="card-title">Price:{data?.price}</h5>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleAddition(key)}
                      >
                        +
                      </button>
                      <span className="input-group-text">{data?.count}</span>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleDeduction(key)}
                      >
                        -
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          handleDeletion(data?.products);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <span>No Product Found!</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddCart;
