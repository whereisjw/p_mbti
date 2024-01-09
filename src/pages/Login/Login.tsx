import styled from '@emotion/styled';
import React from 'react';
import { useForm } from 'react-hook-form';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div``;

const Header = styled.header`
  text-align: center;

  font-weight: 700;
  font-size: 48px;
  line-height: 46px;
  letter-spacing: -0.75px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 400px;
  max-width: 400px;
`;

const Label = styled.label`
  margin-bottom: 16px;

  & > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
  }
`;

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid red;
  transition:
    border 80ms ease-out,
    box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  padding: 12px;
  height: 44px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;
  outline: none;
`;

const Button = styled.button`
  margin-bottom: 12px;
  width: 100%;
  max-width: 100%;
  color: TOMATO;
  background-color: red;
  border: none;
  font-size: 18px;
  font-weight: 900;
  height: 44px;
  min-width: 96px;
  padding: 0 16px 3px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    color: white;
    background-color: tomato;
  }
`;

const Error = styled.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`;

const Success = styled.div`
  color: #2eb67d;
  font-weight: bold;
`;

const LinkContainer = styled.p`
  font-size: 13px;
  color: #616061;
  margin: 0 auto 8px;
  width: 400px;
  max-width: 400px;

  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
`;
interface Idata {
  email: string;
  password: string;
}
const onValid = (data: Idata) => {
  console.log(data);
};

const Login = () => {
  const { register, handleSubmit, watch } = useForm<Idata>();
  return (
    <Wrapper>
      <Center>
        <Header>TACO CHAT</Header>
        <Form onSubmit={handleSubmit(onValid)}>
          <Label>
            <span>email</span>
            <div>
              <Input {...register('email')} type="text" placeholder="ENTER YOUR ID" />
            </div>
          </Label>
          <Label>
            <span>PASSWORD</span>
            <div>
              <Input {...register('password')} type="password" placeholder="ENTER YOUR PASSWORD" />
            </div>
            <Error>WELCOME TO TACO CHAT</Error>
          </Label>
          <Button type="submit">LOG IN</Button>
          <Button type="button">SIGN UP</Button>
        </Form>
      </Center>
    </Wrapper>
  );
};

export default Login;
