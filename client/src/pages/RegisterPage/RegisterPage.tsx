import React, { useEffect, useState } from 'react';
import './RegisterPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from '../../store/auth-thunk';
import { RootState, useAppDispatch } from '../../store/store';
import { FetchStatus } from '../../types/common.types';
import { toast } from 'react-toastify';

const RegisterPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const registerStatus = useSelector((state: RootState) => state.auth.registerStatus);
    const errorMessage = useSelector((state: RootState) => state.auth.errorMessage);
    const token = useSelector((state: RootState) => state.auth.token);

    const [nameValue, setNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const handleRegisterUser = () => {
        console.log(nameValue)
        console.log(lastNameValue)
        console.log(emailValue)
        console.log(passwordValue)

        if (nameValue && lastNameValue && emailValue && passwordValue) {
            dispatch(registerThunk({name: nameValue, lastName: lastNameValue, email: emailValue, password: passwordValue}));
            setNameValue('');
            setLastNameValue('');
            setEmailValue('');
            setPasswordValue('');
        } else {
            toast.error('All fields are required')
        }
    }

    const hendleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(e.target.value)
    }
    
    const hendleLastNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastNameValue(e.target.value)
    }

    const hendleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.target.value)
    }

    const hendlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value)
    }

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
        }
    }, [errorMessage]);

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
            toast.success('Success');
        }
    }, [token]);
    

    return (
        <div className="register-page">
            {
                registerStatus === FetchStatus.Fetching && 
                <div style={{ margin: '200px auto', fontSize: '29px', textAlign: 'center' }}>Loading...</div>
            }
            {
                registerStatus !== FetchStatus.Fetching && (
                    <div className="card">
                        <div className="mb-3">
                            <label htmlFor="register-name-input" className="form-label">Name</label>
                            <input 
                                type="name" 
                                className="form-control" 
                                id="register-name-input" 
                                placeholder="Введите имя" 
                                value={nameValue} 
                                onChange={hendleNameInputChange}
                            />
                        </div>  
                        <div className="mb-3">
                            <label htmlFor="register-lastName-input" className="form-label">Last Name</label>
                            <input 
                                type="lastName" 
                                className="form-control" 
                                id="register-lastName-input" 
                                placeholder="Введите фамилию" 
                                value={lastNameValue} 
                                onChange={hendleLastNameInputChange}
                            />
                        </div> 
                        <div className="mb-3">
                            <label htmlFor="register-email-input" className="form-label">Email address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="register-email-input" 
                                placeholder="Введите почту" 
                                value={emailValue} 
                                onChange={hendleEmailInputChange}
                            />
                        </div> 
                        <div className="mb-3">
                            <label htmlFor="register-password-input" className="form-label">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="register-password-input" 
                                placeholder="Введите пароль" 
                                value={passwordValue} 
                                onChange={hendlePasswordInputChange}
                            />
                        </div>  
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={handleRegisterUser}
                        >
                            Register
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default RegisterPage;