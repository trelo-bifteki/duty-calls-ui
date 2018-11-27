const baseUrl = process.env.NODE_ENV === 'production'
      ? '/duty-calls-ui/'
      : '/';

module.exports = {
  baseUrl,
};
