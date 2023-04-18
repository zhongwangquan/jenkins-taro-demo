import { View } from '@tarojs/components'
import { EnvPopup } from '~/components/EnvPopup'
import { isWeappRelease, isProdEnv } from '~/utils/env'
const Index = () => {
  return (
    <>
      我是首页
      <View>{!isWeappRelease() && !isProdEnv() && <EnvPopup />}</View>
    </>
  )
}

export default Index
