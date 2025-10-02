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
