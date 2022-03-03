import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { getPath } from '@routes';
import { useHistory } from 'react-router-dom';
import { Button, Input, Checkbox } from 'antd';
import styles from './LoginPage.module.scss';
import warning from '../../../assets/images/warning.png';

const schema = yup
  .object({
    login: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const LoginPage: React.FC = () => {
  const [error, setError] = React.useState(false);
  const [, setCookie] = useCookies();
  // const dispatch = useDispatch();
  const history = useHistory();
  // const {
  //   register,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });

  // const onSubmit = (data: any) => {
  //   const { login, password } = data;
  //   console.log(data);

  //   if (login == 'admin' && password == 'admin') {
  //     setCookie('token', 'secure_token');
  //     history.push('/');
  //   }
  // };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (e.target.login.value == 'ivanov@mail.ru' && e.target.password.value == 'ivanov') {
      setCookie('token', 'secure_token');
      history.push('/');
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Авторизация</h1>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.form__inputs}>
            {error && (
              <div className={styles.error}>
                <img src={warning} className={styles.logo} />
                Неверный логин или пароль
              </div>
            )}
            <Input name="login" placeholder="Логин" />
            <Input name="password" placeholder="Пароль" type="password" />
            <Checkbox>Запомнить меня на этом компьютере</Checkbox>
          </div>
          <div className={styles.controls}>
            <Button htmlType="submit" type="primary">
              Войти
            </Button>
            <Button type="link" style={{ backgroundColor: '#F9F9FD' }}>
              Забыли пароль?
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
