import styled from '@emotion/styled';
import React, { useCallback } from 'react';
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

const Signup = () => {
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

  const onValid = useCallback((data: ISignUp) => {
    if (data.password !== data.passwordCheck) {
      setError('password', { message: 'Password are not the same' }, { shouldFocus: true });
    }
  }, []);

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
        </Form>
      </Center>
    </Wrapper>
  );
};

export default Signup;
