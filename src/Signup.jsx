import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { useCreateUserMutation } from './services/api';
import PasswordInput from './PasswordInput';
import TextInput from './TextInput';

import Neopost from './assets/icons/neopost.svg';
import BackgroundVector from './assets/background-vector.png';
import './App.scss';

const onError = () => {
  toast.error('Please fix the errors in the form.');
};


const Signup = () => {
  const [createUser, { isLoading }] = useCreateUserMutation();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    resetField,
    getValues,
    formState: { errors }
  } = useForm({ mode: 'onChange' });

  const allFieldsFilled = watch('email') && watch('name') && watch('password') && watch('password_confirmation');

  const password = watch('password');
  const navigate = useNavigate();

  const onSubmit = async(data) => {
    try {
      await createUser(data).unwrap();
      toast.success('Account created successfully!');
      navigate('/');
    } catch (error){
      if (error.type === "backend") {
        for (const [field, messages] of Object.entries(error.errors)) {
          if (messages.length > 0 && field in getValues()) {
            setError(field, { type: "manual", message: messages[0] });
          }
        }
        toast.error('Please fix the errors in the form.');
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
      resetField('password');
      resetField('password_confirmation');
      return;
    }
  };

  return (
    <div
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
        onSubmit={handleSubmit(onSubmit, onError)}
        style={{
          alignItems: 'flex-start',
          display: 'inline-flex',
          flexDirection: 'column',
          gap: '30px',
          margin: 'auto',
          width: '33%'

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
        <TextInput
          name="name"
          placeholder="First name"
          register={register}
          errors={errors}
          rules={
            {
              pattern: {
                message: 'Alphabetic characters only',
                value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/
              },
              required: 'First name is required'
            }
          }
        />
        <TextInput
          name="email"
          placeholder="Email"
          register={register}
          errors={errors}
          rules={
            {
              pattern: {
                message: 'Invalid email address',
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
              },
              required: 'Email name is required'
            }
          }
        />
        <PasswordInput
          name="password"
          register={register}
          errors={errors}
          rules={{
            minLength: { message: 'At least 8 characters', value: 8 },
            pattern: {
              message: 'Must include uppercase, lowercase, number, and special character',
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/
            },
            required: 'Password is required'
          }}
        />
        <PasswordInput
          name="password_confirmation"
          register={register}
          errors={errors}
          rules={{
            required: 'Please confirm your password',
            validate: (value) => value === password || 'Passwords do not match'
          }}
        />

        <input type="submit" value="Sign Up" className="primary-button" disabled={!allFieldsFilled || isLoading} />
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
        <button type="submit" className="secondary-button">
          <span style={{ color: '#333' }}>Already have an account?</span>{' '}
          <span style={{ color: '#1445D8', fontWeight: 'bold' }}>Log in</span>
        </button>
      </form>
      <img
        src={BackgroundVector}
        alt="Background"
        height="810px"
      />
    </div>
  );
};

export default Signup;
