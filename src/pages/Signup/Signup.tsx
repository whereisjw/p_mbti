import styled from '@emotion/styled';
import axios from 'axios';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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
  @media screen and (min-width: 768px) {
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

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<ISignUp>();
  interface ISignUp {
    email: string;
    nickname: string;
    password: string;
    passwordCheck: string;
  }

  const onValid = (data: ISignUp) => {
    if (data.password !== data.passwordCheck) {
      setError('password', { message: 'Password are not the same' }, { shouldFocus: true });
      return false;
    }
    axios
      .post('http://localhost:3095/api/users', data)
      .then((res) => {
        setValue('email', '');
        setValue('nickname', '');
        setValue('password', '');
        setValue('passwordCheck', '');
        console.log(res);
        navigate('/login');
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data);
      });
  };

  return (
    <Wrapper>
      <Center>
        <Header>SIGN UP_TACO CHAT</Header>
        <Form onSubmit={handleSubmit(onValid)}>
          <Label>
            <span>email</span>
            <div>
              <Input {...register('email', { required: true })} type="text" placeholder="ENTER YOUR ID" />
            </div>
          </Label>
          <Label>
            <span>nickname</span>
            <div>
              <Input {...register('nickname', { required: true })} type="text" placeholder="ENTER YOUR ID" />
            </div>
          </Label>
          <Label>
            <span>PASSWORD</span>
            <div>
              <Input {...register('password', { required: true })} type="password" placeholder="ENTER YOUR PASSWORD" />
            </div>
          </Label>
          <Label>
            <span>PASSWORD CHECK</span>
            <div>
              <Input
                {...register('passwordCheck', { required: true })}
                type="password"
                placeholder="ENTER YOUR PASSWORD"
              />
            </div>
          </Label>
          <p>{errors?.password?.message}</p>
          <p>{errors?.password?.message}</p>
          <p>{errors?.password?.message}</p>
          <p>{errors?.password?.message}</p>
          <Button type="submit">GO TO</Button>
          <Link to={'/login'}>BACK TO LOGIN PAGE</Link>
        </Form>
      </Center>
    </Wrapper>
  );
};

export default Signup;
