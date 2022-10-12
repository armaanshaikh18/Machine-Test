import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";

const ProductList = ({ products, setProducts, addToCarts, setAddToCart }) => {
  const [searchProduct, setSearchProduct] = useState();
  const addProducts = (product, price) => {
    const allproducts = [
      ...products,
      {
        products: product,
        price,
        count: 1,
        cart: false,
      },
    ];
    setProducts(allproducts);
    // console.log("setProducts", setProducts);
  };
  console.log("products", products);
  const removeProduct = (index) => {
    const allproducts = [...products];
    const getDeleteItem = allproducts[index];
    allproducts.splice(index, 1);
    setProducts(allproducts);
    if (
      addToCarts?.filter((item) => item?.products === getDeleteItem.products)
        .length > 0
    ) {
      let filterData = addToCarts.filter(
        (item) => item?.products !== getDeleteItem.products
      );
      setAddToCart(filterData);
    }
  };

  const addToCart = (index) => {
    const allproducts = [...products];
    // allproducts[index].cart = true;
    // allproducts[index].cart = true;
    if (
      addToCarts?.filter(
        (item) => item?.products === allproducts[index].products
      ).length > 0
    ) {
      // let filterData = addToCarts.filter(
      //   (item) =>  item?.products == allproducts[index].products
      // );
      // setAddToCart(filterData);
      const filterData = addToCarts.map((data) => {
        if (data?.products == allproducts[index].products) {
          data.count += 1;
        }
        return data;
      });
      setAddToCart(filterData);
    } else {
      setAddToCart((props) => [...props, { ...allproducts[index] }]);
    }
  };

  // useEffect(() => {
  //   if (addToCarts?.length > 0) {
  //     localStorage.setItem("addToCart", JSON.stringify(addToCarts));
  //     console.log("addToCarts", addToCarts);
  //   }
  //   // setAddToCart(addToCarts);
  // }, [addToCarts]);
  // const handleInput = (e) => {
  //   const searchData = products.filter((item) => {
  //     return Object.values(item)
  //       .join("")
  //       .toLowerCase()
  //       .includes(e.toLowerCase());
  //   });
  //   setSearchProduct(searchData);
  // };
  return (
    <>
      <div className="container">
        <FormInput addData={addProducts} />
        {/* <AddCart cartItem={addToCart} /> */}
        <br />
        <br />
        <hr />
        {/* <input onChange={(e) => handleInput(e.target.value)} />
      <br />
      <br /> */}

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
