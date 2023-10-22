import React, { useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from 'contexts/AuthContext';
import Cookies from 'js-cookie';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  // Retrieve the authentication token
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth/login" />  // adjust the route to your login page accordingly
        )
      }
    />
  );
};

export default AuthenticatedRoute;

