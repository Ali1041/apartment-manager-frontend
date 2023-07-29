export const validateAge = (age) => {
    const regex = /[a-zA-Z]/g;
    if (regex.test(age)){
        return false
    }
    const intAge = parseInt(age)
    return intAge >= 18 && intAge <= 100 ? true : false
  };

export const validateConfirmPassword = (confirmPassword, password) => {
    return confirmPassword === password ? true : false
  };