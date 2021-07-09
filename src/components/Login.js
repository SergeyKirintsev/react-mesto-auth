import LoginForm from './LoginForm';

function Login() {
  const signIn = ({ email, password }) => {
    console.log('signIn', email, password);
  };

  return <LoginForm title="Вход" submitBtnText="Войти" onSubmit={signIn} />;
}

export default Login;
