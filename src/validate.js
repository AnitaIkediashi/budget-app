const validate = (value) => {
  const errors = {};
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // const passRegex =/^(?=.*[-\#\$\.\%\&\@\!\+\=\<\>\*\_]).{2,}$/;
  const name = value.name.trim()
  const email = value.email.trim()
  const password = value.password.trim()
  if (name === '') {
    errors.name = "Name is required";
  }
  if (email === '') {
    errors.email = "Email is required";
  } else if(!email.match(regex)) {
    errors.email = "A valid email is required"
  }
  if (password === '') {
    errors.password = "Password is required";
  } else if (password.length <= 6 || password.length >= 20) {
    errors.password = "Password length should not be <= 6 or >= 20"
  } 
  return errors;
};
export default validate;