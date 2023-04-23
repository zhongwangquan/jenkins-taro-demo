import { View } from '@tarojs/components'
import { useCallback, useEffect, useState } from 'react'
import { EnvPopup } from '~/components/EnvPopup'
import { isWeappRelease, isProdEnv } from '~/utils/env'
import { API_CURRENT_HOST } from '~/configs/env'
const testData = require('~/assets/mock/dev.json')
const prodData = require('~/assets/mock/prod.json')
const Index = () => {
  const [info, setInfo] = useState('')

  // 此处模拟Taro.request的接口
  const getData = useCallback(() => {
    let res
    if (API_CURRENT_HOST === 'test') {
      res = testData
    } else {
      res = prodData
    }
    setInfo(res?.data)
  }, [])

  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      {info}
      <View>{!isWeappRelease() && !isProdEnv() && <EnvPopup />}</View>
    </>
  )
}

export default Index
