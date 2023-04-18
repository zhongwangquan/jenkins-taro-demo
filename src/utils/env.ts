import Taro from '@tarojs/taro'

export enum EEnvType {
  /** 测试环境 */
  dev = 'development',
  /** 生产环境 */
  prod = 'production',
}
/** 获取小程序环境变量 */
export const getEnvVersion = () => {
  return Taro.getAccountInfoSync()?.miniProgram?.envVersion || 'release'
}

/** 小程序devel环境 */
export const isWeappDev = () => {
  return getEnvVersion() === 'develop'
}

/** 小程序体验版环境 */
export const isWeappTrial = () => {
  return getEnvVersion() === 'trial'
}

/** 小程序线上环境 */
export const isWeappRelease = () => {
  return getEnvVersion() === 'release'
}

/** webpack开发环境 */
export const isDevEnv = () => {
  return process.env.NODE_ENV === 'development'
}

/** webpack线上环境 */
export const isProdEnv = () => {
  return process.env.NODE_ENV === 'production'
}

/** 环境变量key */
export const STORAGE_ENV_KEY = 'env'
/** 获取当前的环境变量 */
export const getCurrentEnv = (env: string | undefined) => {
  // 本地缓存的env
  const cacheEnv = Taro.getStorageSync(STORAGE_ENV_KEY)
  // 小程序release环境或者线上打包地址，默认都是线上地址
  if (isWeappRelease() || isProdEnv()) {
    return EEnvType.prod
  }
  // 存在缓存env，则采用
  if (cacheEnv && [EEnvType.dev, EEnvType.prod].includes(cacheEnv)) {
    return cacheEnv
  }
  // webpack注入的环境变量
  return env
}
