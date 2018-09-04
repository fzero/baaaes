import axios from 'axios';
import jwtdecode from 'jwt-decode';

const authClient = axios.create();

authClient.getToken = () => {
  return localStorage.getItem('token');
};

authClient.setToken = token => {
  localStorage.setItem('token', token);
  return token;
};

authClient.getCurrentUser = () => {
  const token = this.getToken();
  console.log(token);
  if (token) return jwtdecode(token);
  return null;
};

authClient.login = () => {
  return this({
    method: 'post',
    url: '/api/users/authenticate',
    data: credentials
  }).then(serverResponse => {
    const token = serverResponse.data.token;
    if (token) {
      this.defaults.headers.common.token = this.setToken(token);
      return jwtdecode(token);
    } else {
      return false;
    }
  });
};
authClient.signUp = () => {
  return this({
    method: 'post',
    url: '/api/users/',
    data: credentials
  }).then(serverResponse => {
    const token = serverResponse.data.token;
    if (token) {
      this.defaults.headers.common.token = this.setToken(token);
      return jwtdecode(token);
    } else {
      return false;
    }
  });
};
// login and signup are same
authClient.logOut = function() {
  localStorage.removeItem('token');
  delete this.defaults.headers.common.token;
  return true;
};
/* For initial app load attempt: To set a localStorage stored token
** as a default header for all api requests. */
authClient.defaults.headers.common.token = authClient.getToken();
export default authClient;
