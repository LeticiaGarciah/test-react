import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Register = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    dataNascimento: "",
    telefone: "",
    cpf: "",
    senha: "",
    confirmarSenha: "",
    whatsapp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit} style={{ padding: "50px 100px" }}>
      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ display: "flex", alignItems: "center" }}>
          <img src="https://www.shareicon.net/data/128x128/2017/01/06/868320_people_512x512.png" />
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "26px",
              color: "dimgray",
              marginLeft: "20px",
            }}
          >
            José Roberto da Silva Santos
          </h1>
        </Col>

        <Col></Col>
      </Row>

      <Row style={{ marginBottom: "20px" }}>
        <Col>
          <Form.Label style={{ width: "100%" }}>
            Nome Completo
            <Form.Control
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </Form.Label>
        </Col>

        <Col>
          <Form.Label style={{ width: "100%" }}>
            E-mail
            <Form.Control
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Label>
        </Col>
      </Row>

      <Row style={{ marginBottom: "20px" }}>
        <Col>
          <Form.Label style={{ width: "100%" }}>
            Data de Nascimento
            <Form.Control
              type="text"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
            />
          </Form.Label>
        </Col>

        <Col>
          <Form.Label style={{ width: "100%" }}>
            Nº CPF
            <Form.Control
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
            />
          </Form.Label>
        </Col>

        <Col>
          <Form.Label style={{ width: "100%" }}>
            Telefones
            <Form.Control
              type="text"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
          </Form.Label>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Label style={{ width: "100%" }}>
            Senha
            <Form.Control
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
            />
          </Form.Label>
        </Col>

        <Col>
          <Form.Label style={{ width: "100%" }}>
            Confirmar Senha
            <Form.Control
              type="password"
              name="confirmarSenha"
              value={formData.confirmarSenha}
              onChange={handleChange}
            />
          </Form.Label>
        </Col>

        <Col>
          <Form.Label style={{ width: "100%" }}>
            Whatsapp
            <Form.Control
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
            />
          </Form.Label>
        </Col>
      </Row>

      <br />

      <Row>
        <Col style={{ textAlign: "end" }}>
          <Button variant="light" style={{ width: "120px" }}>
            Sair
          </Button>
          &nbsp;
          <Button variant="primary" style={{ width: "120px" }}>
            Salvar
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Register;
