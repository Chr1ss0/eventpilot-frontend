import styles from './SignInPage.module.css';
import MainButton from '../ui/MainButton.jsx';
import BackButton from '../ui/BackButton.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import passwordHidden from '../../assets/img/Hidden.svg';
import passwordShown from '../../assets/img/Shown.svg';

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  const navigate = useNavigate();

  async function signUp(event) {
    event.preventDefault();

    const formdata = new FormData(event.target);

    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + '/api/auth/register',
      { method: 'POST', credentials: 'include', body: formdata },
    );

    if (result.ok) console.log('registered succesfull');
    console.log(response);
    const result = await response.json();
    console.log(result);
  }

  return (
    <div className={styles['formulaPage-container']}>
      <div className={styles['backButton-wrapper']}>
        <BackButton />
      </div>
      <div className={styles['logo-container']}>
        <img src="src/assets/img/Logo.svg" alt="Coporate Logo" />
        <h1>
          Event<span>Pilot</span>
        </h1>
      </div>
      <div className={styles['form-container']}>
        <h2>Sign up</h2>
        <form className={styles.form} onSubmit={signUp}>
          <div className={styles['inputDiv']}>
            <img src="src/assets/img/Name.svg" alt="Name" />
            <input type="text" placeholder="First Name" name="firstName" />
          </div>
          <div className={styles['inputDiv']}>
            <img src="src/assets/img/Name.svg" alt="Name" />
            <input type="text" placeholder="Last Name" name="lastName" />
          </div>
          <div className={styles['inputDiv']}>
            <img src="src/assets/img/Message.svg" alt="MAIL" />
            <input type="email" placeholder="yourmail@email.com" name="email" />
          </div>
          <div className={styles['inputDiv']}>
            <img src="src/assets/img/Lock.svg" alt="LOCK" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="password"
              autoComplete="new-password"
            />
            <button type="button" onClick={togglePassword}>
              <img
                src={showPassword ? passwordShown : passwordHidden}
                alt={showPassword ? 'hide password' : 'display password'}
              />
            </button>
          </div>
          <div className={styles['button-container']}>
            <div className={styles['button-signin']}>
              <MainButton showArrow={true}>sign up</MainButton>
            </div>
            <div className={styles['switch-container']}>
              <p>
                Already have an account? <a href="/signin"> Sign-In</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
