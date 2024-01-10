import styled from '@emotion/styled';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  height: 100%;
  width: 100%;
`;

const Header = styled.header`
  text-align: center;
  font-weight: 700;
  font-size: 33px;
  line-height: 46px;
  letter-spacing: -0.75px;
  margin-top: 50px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

const Form = styled.form`
  margin: 0 auto;
  padding: 20px;
  @media screen and (min-width: 1024px) {
    width: 400px;
    max-width: 400px;
    padding: 0;
  }
`;

const Label = styled.div`
  margin-bottom: 16px;
  width: 100%;
  & > span {
    display: block;
    text-align: left;
    padding-bottom: 0px;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
    @media screen and (min-width: 768px) {
      padding-bottom: 8px;
    }
  }
`;

const Input = styled.input`
  border-radius: 4px;
  height: 100%;
  transition:
    border 80ms ease-out,
    box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  padding: 12px;
  height: 30px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;
  outline: none;
  @media screen and (min-width: 768px) {
    height: 44px;
  }
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

const Login = () => {
  const { data, error } = useSWR('http://localhost:3095/api/users', fetcher);
  interface Idata {
    email: string;
    password: string;
  }
  const onValid = (data: Idata) => {
    axios
      .post('http://localhost:3095/api/users/login', data, { withCredentials: true })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
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
