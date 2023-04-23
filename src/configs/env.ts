import { getCurrentEnv, EEnvType } from '~/utils/env'

/** api域名：实际使用替换成自己项目对应的域名 */
export const API_HOST = {
  [EEnvType.dev]: 'test',
  [EEnvType.prod]: 'prod',
}

/** 当前的环境变量 */
export const currentEnv = getCurrentEnv(process.env.NODE_ENV)

/** API 当前请求域名 */
export const API_CURRENT_HOST = API_HOST[currentEnv]
