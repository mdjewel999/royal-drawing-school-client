// import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';
import img404 from '../../assets/services/5546.jpg';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <img className="error-img" src={img404} alt="Error" />
      <Link className="go-to-home" to="/">
        <button className="btn btn-active btn-secondary">Go to Home Page</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
