import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

function Register(props) {
  const signUp = ({ email, password }) => {
    console.log('signUp', email, password);
  };

  return (
    <LoginForm
      title="Регистрация"
      submitBtnText="Зарегистрироваться"
      onSubmit={signUp}
    >
      <Link to="/sign-in" className="login-form__link">
        Уже зарегистрированы? Войти
      </Link>
    </LoginForm>
  );
}

export default Register;
