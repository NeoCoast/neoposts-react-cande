import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { useLoginMutation } from './services/api';
import PasswordInput from './PasswordInput';
import TextInput from './TextInput';

import Neopost from './assets/icons/neopost.svg';
import BackgroundVector from './assets/background-vector.png';
import './App.scss';

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
    <div
      className="form-container"
      style={{
        alignItems: 'center',
        alignSelf: 'start',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0',
        width: '100%'
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          alignItems: 'flex-start',
          display: 'inline-flex',
          flexDirection: 'column',
          gap: '30px',
          margin: 'auto'
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '25px'
          }}
        >
          <img src={Neopost} alt="My Icon" />
          <p
            style={{
              color: '#0F31AA',
              fontSize: '45.496px',
              fontWeight: '600',
              lineHeight: '150%'
            }}
          >
            NEOPOST
          </p>
        </div>
        <p
          style={{
            color: '#1445D8',
            fontSize: '30px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '120%',
            marginTop: '0'
          }}
        >
          Stay Informed 🤓
        </p>

        <TextInput
          name="email"
          placeholder="Email"
          register={register}
        />
        <PasswordInput
          name="password"
          placeholder="Password"
          register={register}
        />

        <input type="submit" value="Log In" className="primary-button" disabled={!allFieldsFilled || isLoading} />
        <p
          style={{
            alignItems: 'center',
            color: '#8A8FA2',
            display: 'flex',
            gap: '33.333px',
            justifyContent: 'center',
            width: '435px'
          }}
        >
          or
        </p>
        <button type="button" className="secondary-button" onClick={() => navigate('/signup')}>
          <span style={{ color: '#333' }}>Don&apos;t you have an account?</span>{' '}
          <span style={{ color: '#1445D8', fontWeight: 'bold' }}>Sign up</span>
        </button>
      </form>
      <div className="image-container">
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
