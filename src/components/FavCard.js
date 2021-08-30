import React, { Component } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

export class FavCard extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row md={3}>
            {this.props.dataCrud.map((i, n) => (
              <Col key={n}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={i.strDrinkThumb} />
                  <Card.Body>
                    <Card.Title>{i.strDrink}</Card.Title>
                    <Button variant="danger" onClick={()=>  this.props.deleteFavorite(i._id)}>Delete</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default FavCard;
