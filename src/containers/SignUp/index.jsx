import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { useCreateUserMutation } from '@features/api/userSlice.js';
import Button from '@components/Button';
import TextInput from '@components/TextInput';

import Neopost from '@assets/icons/neopost.svg';
import BackgroundVector from '@assets/background-vector.png';
import './styles.scss';
import '@components/button/styles.scss';

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
    } catch (error) {
      if (error.type === 'backend') {
        for (const [field, messages] of Object.entries(error.errors)) {
          if (messages.length > 0 && field in getValues()) {
            setError(field, { message: messages[0], type: 'manual' });
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
    <div className="signup__form-container">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="signup__form"
      >
        <div className = "signup__title-container">
          <img src={Neopost} alt="My Icon" />
          <p className = "signup__title">
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
        <TextInput
          name="password"
          placeholder= "Password"
          type="password"
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
        <TextInput
          name="password_confirmation"
          placeholder= "Password confirmation"
          type="password"
          register={register}
          errors={errors}
          rules={{
            required: 'Please confirm your password',
            validate: (value) => value === password || 'Passwords do not match'
          }}
        />
        <Button
          type="submit"
          variant="primary"
          disabled={!allFieldsFilled || isLoading}
        >
          Sign Up
        </Button>
        <p className="signup__text">
          or
        </p>
        <Button
          type="button"
          variant="secondary"
          onClick={() => navigate('/login')}
        >
          <span className="btn__text">Already have an account?</span>{' '}
          <span className="btn__action">Log in</span>
        </Button>
      </form>
      <div className="signup__image-container">
        <img
          src={BackgroundVector}
          alt="Background"
          height="810px"
        />
      </div>
    </div>
  );
};

export default Signup;
