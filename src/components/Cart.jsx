import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";
const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (items) => {
    dispatch(remove(items));
    console.log(items);
  };
  return (
    <div>
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
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(items.id)}
                    >
                      Remove Item
                    </Button>
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

export default Cart;
