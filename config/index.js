const path = require('path')
const yargs = require('yargs')
const argv = yargs.argv
const { robot = 1, desc } = argv
const CIPluginFn = {
  weapp: {
    appid: 'xxxx',
    privateKeyPath: 'private.xxxx.key', // 配置密钥的路径
    robot,
  },
  desc,
}

const config = {
  projectName: 'wujieai-weapp',
  date: '2023-2-19',
  designWidth: 375,
  deviceRatio: {
    375: 2 / 1,
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  defineConstants: {},
  copy: {
    patterns: [
      {
        from: 'src/assets/',
        to: `dist/${process.env.TARO_ENV}/assets/`,
      },
    ],
    options: {},
  },
  framework: 'react',
  compiler: {
    type: 'webpack5',
    prebundle: {
      enable: false,
    },
  },
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  alias: {
    '~': path.resolve(__dirname, '..', 'src/'),
  },
  plugins: ['@tarojs/plugin-html', ['@tarojs/plugin-mini-ci', CIPluginFn]],
  sass: {
    data: `@import "@nutui/nutui-react-taro/dist/styles/variables.scss";`,
  },
  mini: {
    miniCssExtractPluginOption: {
      // fix: 移除 warning Conflicting order
      ignoreOrder: true,
    },
    postcss: {
      pxtransform: {
        enable: true,
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPatxtern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
    copy: {
      patterns: [],
      options: {},
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          selectorBlackList: ['nut-'],
        },
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  rn: {
    appName: 'taroDemo',
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      },
    },
  },
}

module.exports = function (merge) {
  console.log('process.env.NODE_ENV', process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
