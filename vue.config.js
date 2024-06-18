module.exports = {
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin('define').tap((args) => {
      args[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = false;
      return args;
    });
  },
  publicPath: process.env.NODE_ENV === 'production'
      ? '/wedding/'
      : '/'
};
