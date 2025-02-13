import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { parceFormData } from './parcer';
import InputComponent from '../InputComponent';
import FormHeading from '../FormHeading';
import ProjectName from '../ProjectName';
import { postLoginCred } from '../../ApiMethods';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from '../../useUser';

function Login() {
  const { setUserDetails } = useUser();
  const navigate = useNavigate();
  const [loginCredential, setLoginCredential] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState(false);
  const [invalid, setInvalid] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!parceFormData(loginCredential)) {
      try {
        const response = await postLoginCred(loginCredential);
        localStorage.setItem('authToken', response.data.accessToken);
        navigate('/');
        setUserDetails({ email: loginCredential.email });
        setErrors({});
        setInvalid(false);
      } catch (err) {
        console.log('Invalid Credentials', err);
        setInvalid(true);
      }
    } else {
      setErrors(parceFormData(loginCredential));
    }
  }

  return (
    <div className="container-fluid py-4 backGround">
      <ProjectName />
      <div className="registartion mx-auto p-3">
        <FormHeading heading={'LogIn'} />
        <form onSubmit={(e) => handleSubmit(e)} className="  gap-2 ">
          <InputComponent
            label={'Email:'}
            type={'text'}
            formData={loginCredential}
            name={'email'}
            setFormData={setLoginCredential}
            errorMessage={errors.email}
          />

          <InputComponent
            label={'Password:'}
            type={'password'}
            formData={loginCredential}
            name={'password'}
            setFormData={setLoginCredential}
            errorMessage={errors.password}
          />
          {invalid && (
            <div className=" text-danger">Invalid Email or Passowrd</div>
          )}

          <div className="col-12  my-2 d-flex justify-content-center align-items-center gap-2 ">
            <Link
              to="/"
              className="registerButton"
              style={{ textDecoration: 'none' }}
            >
              Register
            </Link>
            <input className="btn" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
