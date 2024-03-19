import React, { useState, useEffect } from "react";
import {
  Content,
  LoginContainer,
  InfoContainer,
  Title,
  HR,
  Description,
  Logo,
  LoginDescription,
  Form,
  Input,
  Button,
  ButtonStop,
} from "./styles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import logo from "../../assets/img/logo.png";

export const Login = () => {
  const [card, setCard] = useState(0);
  const totalSlides = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      if (card === totalSlides - 1) {
        setCard(0);
      } else {
        setCard(card + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [card, totalSlides]);
  return (
    <Container>
      <Content>
        <Row>
          <Col>
            <InfoContainer>
              <Title>Tecnologia e Soluções Legislativa</Title>
              <HR />

              {card === 0 && (
                <Description>
                  TECLegis - Tecnologia e Soluções Legislativa - oferece uma
                  ampla gama de serviços e de soluções no ámbito dos poderes
                  legislativos municipais, que inclui consultorias
                  personalizadas, tecnologia de soluções sistémicas,
                  assessoramento, cursos completos, mini cursos e palestras para
                  atender as necessidades que compõem a rotina legislativa.
                </Description>
              )}
              {card === 1 && <Description>TEXTO 2</Description>}
              {card === 2 && <Description>TEXTO 3</Description>}
              {card === 3 && <Description>TEXTO 4</Description>}

              <ButtonStop onClick={() => setCard(0)}>
                <i className="bi bi-circle-fill"></i>
              </ButtonStop>
              <ButtonStop onClick={() => setCard(1)}>
                <i className="bi bi-circle-fill"></i>
              </ButtonStop>
              <ButtonStop onClick={() => setCard(2)}>
                <i className="bi bi-circle-fill"></i>
              </ButtonStop>
              <ButtonStop onClick={() => setCard(3)}>
                <i className="bi bi-circle-fill"></i>
              </ButtonStop>
            </InfoContainer>
          </Col>
          <Col>
            <LoginContainer>
              <Logo src={logo} alt={logo} />
              <LoginDescription>
                Use o e-mail e senha para entrar no sistema.
              </LoginDescription>

              <HR />

              <Form>
                <Input placeholder="Digite seu e-mail" />
                <Input placeholder="Senha" />
                <HR />
                <Button>Entrar</Button>
              </Form>
            </LoginContainer>
          </Col>
        </Row>
      </Content>
    </Container>
  );
};
