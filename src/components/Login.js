import LoginForm from './LoginForm';

function Login({ onSignIn }) {
  return <LoginForm title="Вход" submitBtnText="Войти" onSubmit={onSignIn} />;
}

export default Login;
