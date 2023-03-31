import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { setProductList } from "./productSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Flipkart.css";

const ProductList = (props) => {
  const { searchText } = props;
  const dispatch = useDispatch();
  const items = useSelector((state) => state.product);
  const [product, setProduct] = useState([]);
  let filteredProduct = [];
  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/codebuds-fk/chat/chats")
      .then(function (response) {
        setProduct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  //   useEffect(() => {
  //     filteredProduct = product.filter((data) => {
  //       return data.title.includes(searchText) || data.orderId.includes(searchText);
  //     });
  //   }, [searchText]);

  //   const filteredProduct = useCallback(() => {
  //     return product.filter((data) => {
  //       return data.title.includes(searchText) || data.orderId.includes(searchText);
  //     });
  //   }, searchText);
  console.log(
    "first333",
    product.filter(
      (data) =>
        data.title.includes(searchText) || data.orderId.includes(searchText)
    )
  );
  return (
    <div>
      {product.map((data) => {
        const date = new Date(data.latestMessageTimestamp);
        return (
          <div key={data.id} className="productCard">
            <div>
              <div style={{ display: "flex" }}>
                <img
                  src={data.imageURL}
                  width="20px"
                  height="20px"
                  style={{ paddingTop: "7px", marginRight: "5px" }}
                ></img>
                <div>
                  <div>{data.title}</div>
                  <div>{data.orderId}</div>
                </div>
              </div>
            </div>
            <div>{date.toLocaleDateString("en-UK")}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
