export const saveUserData = (response, meta) => {
  const object = {
    accessToken: meta.response.headers.get('Access-Token'),
    client: meta.response.headers.get('client'),
    email: response.data.email,
    name: response.data.name
  };

  localStorage.setItem('user-profile-data', JSON.stringify(object));

  return object;
};

export const isAuthenticated = () => {
  const userData = localStorage.getItem('user-profile-data');

  if (!userData) return false;

  const { accessToken } = JSON.parse(userData);

  if (!accessToken) return false;

  return true;
};

export const getAuthHeaders = () => {
  const storedUser = JSON.parse(localStorage.getItem('user-profile-data'));

  if (!storedUser) return {};

  return {
    'access-token': storedUser.accessToken,
    client: storedUser.client,
    uid: storedUser.email
  };
};
