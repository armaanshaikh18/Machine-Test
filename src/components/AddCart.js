import React, { useState, useEffect } from "react";

const AddCart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("addToCart"))
  );
  const [cartDetail, setCartDetail] = useState({
    length: 0,
    price: 0,
  });

  const handleAddition = (index) => {
    const newProjects = cart.map((p, i) =>
      i === index ? { ...p, count: cart[index]?.count + 1 } : p
    );
    setCart(newProjects);
  };
  const handleDeduction = (index) => {
    if (cart[index]?.count - 1 > 0) {
      const newProjects = cart.map((p, i) =>
        i === index ? { ...p, count: cart[index]?.count - 1 } : p
      );
      setCart(newProjects);
    } else {
      handleDeletion(cart[index]?.products);
    }
  };
  const handleDeletion = (product) => {
    const deleted = cart.filter((data) => data.products !== product);
    setCart(deleted);
  };

  useEffect(() => {
    localStorage.setItem("addToCart", JSON.stringify(cart));
    let number = 0;
    let price = 0;
    cart.forEach((data) => (price += data?.count * data?.price));
    cart.forEach((data) => (number += data?.count));
    setCartDetail({
      length: number,
      price,
    });
  }, [cart]);
  console.log(cartDetail);
  return (
    <>
      <div className="container">
        <div className="row">
          <div>
            <label>Your Cart: {cartDetail?.length}</label>
          </div>
          <div>
            <label>Your Cost:{cartDetail?.price}</label>
          </div>
          {cart && cart.length ? (
            cart.map((data, key) => (
              <div className="col-md-4" key={key} style={{ marginTop: "1rem" }}>
                <div className="card text-left text-white bg-success mb-3">
                  <div className="card-body">
                    <h5 className="card-title">
                      Product Name :{data.products}
                    </h5>
                    <h5 className="card-title">Price:{data.price}</h5>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleAddition(key)}
                      >
                        +
                      </button>
                      <span className="input-group-text">{data.count}</span>
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
