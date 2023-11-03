export const rules = {
  //password
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/,
  //firstname
  firstName: /^\w{3,30}$/,
  //lastName
  lastName: /^\w{3,30}$/,
  //mobile
  mobile: /^09\d{9}$/,
  //email
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
};
