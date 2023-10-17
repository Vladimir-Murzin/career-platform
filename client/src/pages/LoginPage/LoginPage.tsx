import './LoginPage.scss';

const LoginPage = () => {
    return (
        <div className="card">
            <div className="mb-3">
                <label htmlFor="login-email-input" className="form-label">Email</label>
                <input type="email" className="form-control" id="login-email-input" placeholder="Введите почту" />
            </div>  
            <div className="mb-3">
                <label htmlFor="login-password-input" className="form-label">Password</label>
                <input type="password" className="form-control" id="login-password-input" placeholder="Введите пароль" />
            </div> 
            <button type="button" className="btn btn-primary">Login</button>
        </div>
    )
}

export default LoginPage;