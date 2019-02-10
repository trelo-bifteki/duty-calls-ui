const publicPath = process.env.NODE_ENV === 'production'
      ? '/duty-calls-ui/'
      : '/';

module.exports = {
  publicPath,
};
