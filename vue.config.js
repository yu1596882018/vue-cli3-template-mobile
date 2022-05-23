const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/assets/css/variables.scss'),
        path.resolve(__dirname, './src/assets/css/functions.scss'),
      ],
    },
  },

  lintOnSave: true,

  css: {
    sourceMap: true,
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${path.join(__dirname, './src/assets/css/vantTheme.less')}";`,
        },
      },
    },
  },
}
