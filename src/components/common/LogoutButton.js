import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <div className="button__logout" onClick={handleLogout}>
      Logout
    </div>
  );
};
