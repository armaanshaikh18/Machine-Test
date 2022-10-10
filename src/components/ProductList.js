import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";
const ProductList = () => {
  const [productAdded, setProductAdded] = useState(false);
  const [products, setProducts] = useState([
    {
      products: "KeyChain",
      price: 120,
      cart: false,
      count: 1,
    },
    {
      products: "Scissor",
      price: 60,
      cart: true,
      count: 1,
    },
    {
      products: "Bottles",
      price: 200,
      cart: false,
      count: 1,
    },
  ]);
  const [addToCarts, setAddToCart] = useState([]);
  const addProducts = (product, price) => {
    const allproducts = [...products, { products: product, price }];
    setProducts(allproducts);
    // console.log("setProducts", setProducts);
  };

  const addToCart = (index) => {
    const allproducts = [...products];
    allproducts[index].cart = true;

    if (
      addToCarts.filter((item) => item?.products == allproducts[index].products)
        .length > 0
    ) {
      let filterData = addToCarts.filter(
        (item) => item?.products !== allproducts[index].products
      );
      setAddToCart(filterData);
    } else {
      setAddToCart((props) => [...props, { ...allproducts[index] }]);
    }
  };
  useEffect(() => {
    localStorage.setItem("addToCart", JSON.stringify(addToCarts));
  }, [addToCarts]);
  const removeProduct = (index) => {
    const allproducts = [...products];
    allproducts.splice(index, 1);
    setProducts(allproducts);
  };
  return (
    <>
      <div className="container">
        <FormInput addData={addProducts} />
        <br />
        <hr />

        {productAdded ? (
          <div
            className="alert alert-info alert-dismissible fade show"
            role="alert"
          >
            <strong>Product Added</strong>
            {/* <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button> */}
          </div>
        ) : (
          ""
        )}
        <div className="row">
          {products.map((data, key) => {
            return (
              <div className="col-md-4" key={key} style={{ marginTop: "1rem" }}>
                <div
                  className="card text-white bg-success mb-3 "
                  style={{ border: "2px solid green" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      Product Name :{data.products}
                    </h5>
                    <h5 className="card-title">Price:{data.price}</h5>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          removeProduct(key);
                        }}
                      >
                        Remove
                      </button>

                      <button
                        type="button"
                        className="btn btn-info btn-sm"
                        onClick={() => {
                          addToCart(key);
                        }}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
