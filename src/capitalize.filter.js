export default value => {
  if (!value) {
    return "";
  }
  const result = value.toString();
  return result.charAt(0).toUpperCase() + result.slice(1);
};
