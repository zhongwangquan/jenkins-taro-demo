### 启动项目

设置 project.config.json: appid

```sh
npm run dev:weapp
```

### 上传代码设置

更换下载的小程序密钥: private.xxxx.key
/config/index.js: 配置 appid,privateKeyPath

## 其他命令

```sh
# 启动taro
npm run dev:weapp
# 本地测试环境打包
npm run build:weapp:test
# 本地线上环境打包
npm run build:weapp
# jenkins测试环境打包
npm run release:weapp:test
# jenkins线上环境打包
npm run release:weapp:prod

```
