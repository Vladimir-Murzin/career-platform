import React, { useState } from 'react';
import './RegisterPage.scss';

const RegisterPage: React.FC = () => {
    const [nameValue, setNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const handleRegisterUser = () => {
        console.log(nameValue)
        console.log(lastNameValue)
        console.log(emailValue)
        console.log(passwordValue)
        setNameValue('');
        setLastNameValue('');
        setEmailValue('');
        setPasswordValue('');
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
    

    return (
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

export default RegisterPage;