import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 20px;
  margin-top: 30px;
`;

export const InfoContainer = styled.div`
  max-width: 500px;
  padding: 20px 30px;
`;

export const LoginContainer = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 8px;
  max-width: 400px;
  padding: 15px;
  background: #fff;
`;

export const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.1;
  color: inherit;
  color: #333;
`;

export const HR = styled.hr`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background: #4950579c;
`;

export const Description = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 15px;
  line-height: 1.5;
  color: #373a3c;
`;

export const Logo = styled.img`
  display: block;
  margin-right: auto;
  margin-left: auto;
`;

export const LoginDescription = styled.div`
  margin-top: 10px;
  margin-bottom: 1rem;
  text-align: center;
  padding: 20px 0;
  font-size: 15px;
`;

export const Form = styled.form``;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #55595c;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  position: relative;
  padding: 15px;
  position: relative;
  padding: 15px;
  margin-bottom: 15px;
  height: 38px;
  border-color: rgba(120, 130, 140, 0.2);
  border-radius: 0;
  min-height: 2.375rem;
`;

export const Button = styled.button`
  border-color: rgba(120, 130, 140, 0.2);
  border-radius: 0;
  min-height: 2.375rem;
  font-weight: 500;
  outline: 0 !important;
  border-width: 0;
  padding: 0.4375rem 1rem;
  border: solid 1px #999;
  display: inline-block;
  padding: 0.375rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  width: 100%;
  margin-botton: 15px;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  margin: 0;
  line-height: inherit;
  border-radius: 0;
  text-transform: uppercase;
  background-color: #f0f0f0;
  color: rgba(0, 0, 0, 0.87);

  &:hover {
    background-color: #d5d5d5;
    box-shadow: inset 0 -10rem 0px rgba(158, 158, 158, 0.1);
  }
`;

export const ButtonStop = styled.stop`
  cursor: pointer;
  background-color: grey;
  border-bottom-color: grey;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: inline;
  margin-inline-start: 20px;
  margin-inline-end: 22px;
  padding-inline-start: 29px;

  &:hover {
    background-color: #d5d5d5;
    box-shadow: inset 0 -10rem 0px rgba(158, 158, 158, 0.1);
  }
`;
