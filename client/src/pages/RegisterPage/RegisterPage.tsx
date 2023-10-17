import './RegisterPage.scss';

const RegisterPage = () => {
    return (
        <div className="card">
            <div className="mb-3">
                <label htmlFor="register-name-input" className="form-label">Name</label>
                <input type="name" className="form-control" id="register-name-input" placeholder="Введите имя" />
            </div>  
            <div className="mb-3">
                <label htmlFor="register-lastName-input" className="form-label">Last Name</label>
                <input type="lastName" className="form-control" id="register-lastName-input" placeholder="Введите фамилию" />
            </div> 
            <div className="mb-3">
                <label htmlFor="register-email-input" className="form-label">Email address</label>
                <input type="email" className="form-control" id="register-email-input" placeholder="Введите почту" />
            </div> 
            <div className="mb-3">
                <label htmlFor="register-password-input" className="form-label">Password</label>
                <input type="password" className="form-control" id="register-password-input" placeholder="Введите пароль" />
            </div>  
            <button type="button" className="btn btn-primary">Register</button>
        </div>
    )
}

export default RegisterPage;