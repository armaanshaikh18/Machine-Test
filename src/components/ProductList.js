import React, { useState, useEffect } from "react";
import AddCart from "./AddCart";
import FormInput from "./FormInput";
const ProductList = () => {
  // const [productAdded, setProductAdded] = useState(false);
  const [addToCarts, setAddToCart] = useState([]);

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
      cart: false,
      count: 1,
    },
    {
      products: "Bottles",
      price: 200,
      cart: false,
      count: 1,
    },
  ]);

  const addProducts = (product, price) => {
    const allproducts = [
      ...products,
      { products: product, price, count: 1, cart: false },
    ];
    setProducts(allproducts);
    // console.log("setProducts", setProducts);
  };

  const removeProduct = (index) => {
    const allproducts = [...products];

    allproducts.splice(index, 1);
    setProducts(allproducts);
  };

  const addToCart = (index) => {
    const allproducts = [...products];
    allproducts[index].cart = true;

    if (
      addToCarts.filter(
        (item) => item?.products === allproducts[index].products
      ).length > 0
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
    if (addToCarts.length > 0) {
      localStorage.setItem("addToCart", JSON.stringify(addToCarts));
    }
    // setAddToCart(addToCarts);
  }, [addToCarts]);

  return (
    <>
      <FormInput addData={addProducts} />
      {/* <AddCart cartItem={addToCart} /> */}
      <br />
      <br />
      <hr />
      <div className="container">
        <div className="row">
          {products.map((data, key) => {
            return (
              <div className="col-md-4" key={key} style={{ marginTop: "1rem" }}>
                <div className="card text-white  bg-success mb-3">
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
                        className="btn text-white btn-info btn-sm"
                        onClick={() => {
                          addToCart(key);
                        }}
                      >
                        Add To Cart
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
