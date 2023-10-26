import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function Protected() {
  const { pathname } = useLocation();

  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function validateUser() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + '/api/user/validate',
        { credentials: 'include' },
      );
      // console.log(response);

      const result = await response.json();
      console.log(result);
      if (!response.ok) return navigate('/signin');
      setValidated(true);
    }
    validateUser();
  }, [pathname]);

  return <>{validated && <Outlet />}</>;
}
