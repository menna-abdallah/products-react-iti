import Form from "react-bootstrap/Form";

function InputCustom(props) {
  return (
    <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
      <Form.Label className="mx-2">{props.label}</Form.Label>
      <Form.Control
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </Form.Group>
  );
}

export default InputCustom;
