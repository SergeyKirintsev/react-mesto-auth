import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

function Register({ onSignUp }) {
  return (
    <LoginForm
      title="Регистрация"
      submitBtnText="Зарегистрироваться"
      onSubmit={onSignUp}
    >
      <Link to="/sign-in" className="login-form__link">
        Уже зарегистрированы? Войти
      </Link>
    </LoginForm>
  );
}

export default Register;
