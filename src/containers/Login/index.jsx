import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { useLoginMutation } from '@services/api';
import Button from '@components/Button';
import TextInput from '@components/TextInput';

import Neopost from '@assets/icons/neopost.svg';
import BackgroundVector from '@assets/background-vector.png';
import './styles.scss';
import '@components/button/styles.scss';

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    watch,
    resetField
  } = useForm({ mode: 'onChange' });

  const allFieldsFilled = watch('email') && watch('password');

  watch('password');
  const navigate = useNavigate();

  const onSubmit = async(data) => {
    try {
      await login(data).unwrap();
      toast.success('Login successful!');
      navigate('/');
    } catch (error) {
      if (error.type === 'backend') {
        toast.error('Incorrect credentials. Please try again.');
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
      resetField('password');
      return;
    }
  };

  return (
    <div className="login__form-container" >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className = "login__form"
      >
        <div className = "login__title-container">
          <img src={Neopost} alt="My Icon" />
          <p className = "login__title">
            NEOPOST
          </p>
        </div>
        <p className="login__subtitle">
          Stay Informed 🤓
        </p>

        <TextInput
          name="email"
          placeholder="Email"
          register={register}
        />
        <TextInput
          name="password"
          placeholder="Password"
          type="password"
          register={register}
        />
        <Button
          type="submit"
          variant="primary"
          disabled={!allFieldsFilled || isLoading}
        >
          Log In
        </Button>
        <p className="login__text">
          or
        </p>
        <Button
          type="button"
          variant="secondary"
          onClick={() => navigate('/signup')}
        >
          <span className="btn__text">Don&apos;t you have an account?</span>{' '}
          <span className="btn__action">Sign up</span>
        </Button>
      </form>
      <div className="login__image-container">
        <img
          src={BackgroundVector}
          alt="Background"
          height="810px"
        />
      </div>
    </div>
  );
};

export default Login;
