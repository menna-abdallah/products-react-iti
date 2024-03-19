import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <Card className="h-100 card">
      <Card.Img variant="top" src={props.image} style={{ height: "200px" }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>{props.category}</Card.Text>
        <Button variant="">
          <Link to={`/products/${props.id}`}>show details</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
