import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useDispatch,useSelector} from 'react-redux';
import {add} from '../store/cartSlice';
import { getApiData } from "../store/productSlice";
const Product = () => {
  const dispatch=useDispatch();
  const {data:products}=useSelector(state=>state.product)
  // const [products, setProducts] = useState([]);

  // const getApiData = async () => {

    // we have to dispatch an action fro fetchProducts

    // const res = await fetch("https://fakestoreapi.com/products");
    // const data = await res.json();
    // console.log(data);
    // setProducts(data);
  // };

  useEffect(() => {
    dispatch(getApiData())
  }, []);


  const addToCart=(items)=>{
   // dispatch  an add  action
  dispatch(add(items))
  
  }
  return (
    <div>
      <h3 className="text-center m-2 p-2">Products Dashboard</h3>
      <Row className="p-4 m-4">
        {products.map((items) => {
          return (
            <Col md={3} xs={6} sm={4} lg={3} key={items.id}>
              <Card className="m-3 card">
                <div className="text-center">
                  <Card.Img
                    className="m-2"
                    variant="top"
                    src={items.image}
                    style={{ width: "100px", height: "130px" }}
                  />
                </div>
                <Card.Body>
                  <Card.Title
                    className="text-truncate"
                    style={{ fontSize: "12px" }}
                  >
                    {items.title}
                  </Card.Title>
                  <Card.Text className="text-truncate">
                    {items.category}
                  </Card.Text>
                  <Card.Text className="text-truncate">
                    INR:{items.price}
                  </Card.Text>
                  <Card.Footer
                    style={{ backgroundColor: "#fff" }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Button variant="primary" onClick={()=>addToCart(items)}>Add to Cart</Button>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Product;



