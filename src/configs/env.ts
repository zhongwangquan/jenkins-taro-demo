import { getCurrentEnv, EEnvType } from '~/utils/env'

/** api域名 */
export const API_HOST = {
  [EEnvType.dev]: 'xxx',
  [EEnvType.prod]: 'xxxx',
}

/** 当前的环境变量 */
export const currentEnv = getCurrentEnv(process.env.NODE_ENV)

/** API 当前请求域名 */
export const API_CURRENT_HOST = API_HOST[currentEnv]
