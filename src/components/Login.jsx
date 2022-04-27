import "../styles/Login.scss";

const Login = () => {
  return (
    <div className="login-page">
      <div className="left-info-continer">
        <div className="information">
          <h1>Interested in working with us?</h1>
          <p>
            We are a Creative & Digital Agency who creates bespoke solutions for
            your brand. The more information you can give us, the more accurate
            the quotation will be.
          </p>
        </div>
      </div>
      <div className="right-login-container">
        <form action="" method="post">
          <div className="setps-container"></div>
          <div className="input-container">
            <input
              type="text"
              name="fullName"
              required="true"
              autoComplete="off"
            />
            <label htmlFor="form-input-fullName">What's your name?</label>
          </div>
          <div className="input-container">
            <input
              type="text"
              name="phoneNumber"
              required="true"
              autoComplete="off"
            />
            <label htmlFor="form-input-phoneNumber">Phone number.</label>
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              required="true"
              autoComplete="off"
            />
            <label htmlFor="form-input-fullName">What is your email?</label>
          </div>
          <div className="btn-container">
            <button type="submit">Next Step</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
