// import { useState, Link, useNavigate, InputComponent, Dropdown, registerData,z } from './index';
import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import ProjectName from '../ProjectName';
import InputComponent from '../InputComponent';
import Dropdown from '../DropDown';
import { parseFormData } from './parcer';
import { postLoginCred, registerData } from '../../ApiMethods';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import FormHeading from '../FormHeading';
import { useUser } from '../../useUser';

function Register() {
  const { setUserDetails } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    contact: '',
    dob: '',
    gender: '',
    color: '#ffffff',
  });
  const [errors, setErrors] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();

    if (!parseFormData(formData)) {
      console.log('Jaa Rha hai');
      try {
        await registerData(formData);
        setErrors({});
        console.log('User Registered');
        try {
          const response = await postLoginCred({
            email: formData.email,
            password: formData.password,
          });
          localStorage.setItem('authToken', response.data.accessToken);
          navigate('/');
          setUserDetails({ email: formData.email });
        } catch (err) {
          console.log('Unable to post login Cred', err);
        }
      } catch (err) {
        console.log('Unable to register User', err);
      }
    } else {
      setErrors(parseFormData(formData));
    }
  }

  return (
    <div className="container-fluid py-4 backGround">
      <ProjectName />
      <div className="registartion mx-auto p-3">
        <FormHeading heading={'SignUp'} />
        <form onSubmit={(e) => handleSubmit(e)} className=" gap-2 ">
          <InputComponent
            label={'First Name:'}
            type={'text'}
            formData={formData}
            name={'firstName'}
            setFormData={setFormData}
            errorMessage={errors.firstName}
          />
          <InputComponent
            label="Last Name:"
            type={'text'}
            formData={formData}
            name={'lastName'}
            setFormData={setFormData}
            errorMessage={errors.lastName}
          />
          <InputComponent
            label="E-mail:"
            type={'text'}
            formData={formData}
            name={'email'}
            setFormData={setFormData}
            errorMessage={errors.email}
          />
          <InputComponent
            label={'Password:'}
            type={'password'}
            formData={formData}
            name={'password'}
            setFormData={setFormData}
            errorMessage={errors.password}
          />
          <InputComponent
            label={'Contact No.:'}
            type={'text'}
            formData={formData}
            name={'contact'}
            setFormData={setFormData}
            errorMessage={errors.contact}
          />
          <InputComponent
            label={'D.O.B'}
            type={'date'}
            formData={formData}
            name={'dob'}
            setFormData={setFormData}
            errorMessage={errors.dob}
          />
          <InputComponent
            label={'Color:'}
            type={'color'}
            formData={formData}
            name={'color'}
            setFormData={setFormData}
            errorMessage={errors.color}
          />
          <Dropdown
            label={'Gender:'}
            formData={formData}
            setFormData={setFormData}
            name={'gender'}
            optionArr={['Male', 'Female']}
            errorMessage={errors.gender}
          />
          <div className=" width d-flex mx-4 align-items-center">
            <input type="submit" value="Register" />
            <Link to="/Login" className="loginButton d-flex align-items-center">
              LogIn
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
