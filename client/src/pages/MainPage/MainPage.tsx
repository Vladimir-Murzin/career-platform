import { Link } from 'react-router-dom';
import './MainPage.scss';

const MainPage = () => {
    return(
        <div className="card">
            <Link to="/register-page" className="btn btn-primary">Register</Link>
            <Link to="/login-page" className="btn btn-primary">Login</Link>
        </div>
    )
}

export default MainPage;