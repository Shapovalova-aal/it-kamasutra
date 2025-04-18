export const required = (value) => {
  if (value) return undefined;
  return "Field is required";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length >= maxLength)
    return `Max lenght is ${maxLength} symbols`;
  return undefined;
};

export const minLengthCreator = (minLength) => (value) => {
  if (value && value.length < minLength)
    return `Min lenght is ${minLength} symbols`;
  return undefined;
};

export const email = (value) => {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  if (EMAIL_REGEXP.test(value)) return undefined;
  return "invalid email address";
};
