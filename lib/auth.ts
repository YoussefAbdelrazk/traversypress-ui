import Cookies from 'js-cookie';

export function logout() {
  // Remove the auth token from cookies
  Cookies.remove('auth_token');

  // Redirect to auth page
  window.location.href = '/auth';
}
