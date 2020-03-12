import React from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const PersonalInfoForm = () => {
  return (
    <div>
      <Card bg='light'>
        <Card.Header>Contacto (Requerimos uno)</Card.Header>
        <Card.Body>
          <Form>
            <Form.Row>
              <Col>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Correo Electronico</Form.Label>
                  <Form.Control type='email' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='formBasicPassword'>
                  <Form.Label>Numero Telefonico</Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
              </Col>
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Button style={{ margin: "20px" }} variant='outline-info'>
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
