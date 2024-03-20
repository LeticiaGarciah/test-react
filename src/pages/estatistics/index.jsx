import React from "react";
import "./styless.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Estatistics = () => {
  return (
    <section className="estatistica">
      <Row>
        <Col>
          <div className="grafico1">
            <img
              src={
                "https://adrianopataro.com.br/wp-content/uploads/2021/10/elementos-do-grafico-do-excel.png"
              }
              alt="grafico1"
            />
          </div>
        </Col>
        <Col>
          <div className="grafico2">
            <img
              src={
                "https://adrianopataro.com.br/wp-content/uploads/2021/10/elementos-do-grafico-do-excel.png"
              }
              alt="grafico2"
            />
          </div>
        </Col>
      </Row>

      <br />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row style={{ marginBottom: "20px" }}>
                <Col>
                  <Button variant="light">
                    <Card.Title>Pendente</Card.Title>
                    <Card.Subtitle>TOTAL 98</Card.Subtitle>
                  </Button>
                </Col>

                <Col>
                  <Button variant="light">
                    <Card.Title>Em andamento</Card.Title>
                    <Card.Subtitle>TOTAL 80</Card.Subtitle>
                  </Button>
                </Col>

                <Col>
                  <Button variant="light">
                    <Card.Title>Revisado</Card.Title>
                    <Card.Subtitle>TOTAL 44</Card.Subtitle>
                  </Button>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Button variant="light">
                    <Card.Title>Concluído</Card.Title>
                    <Card.Subtitle>TOTAL 114</Card.Subtitle>
                  </Button>
                </Col>

                <Col>
                  <Button variant="light">
                    <Card.Title>Arquivado</Card.Title>
                    <Card.Subtitle>TOTAL 14</Card.Subtitle>
                  </Button>
                </Col>

                <Col>
                  <Button variant="light">
                    <Card.Title>Aprovado</Card.Title>
                    <Card.Subtitle>TOTAL 98</Card.Subtitle>
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Estatistics;
