import React, { useState } from 'react'
import { View } from '@tarojs/components'
import styles from './index.module.less'
import { Picker } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'
import { EEnvType, STORAGE_ENV_KEY } from '~/utils/env'

export const EnvPopup: React.FC<{}> = () => {
  const [visible, setVisible] = useState(false)

  const listData = [
    [
      { value: EEnvType.dev, text: '开发环境' },
      { value: EEnvType.prod, text: '正式环境' },
    ],
  ]
  const confirmPicker = (values: (string | number)[]) => {
    Taro.setStorageSync(STORAGE_ENV_KEY, values[0])
    Taro.showToast({
      title: '请点击右上角三个点，选择重新进入小程序后生效',
      icon: 'none',
    })
  }
  return (
    <>
      <View
        className={styles.btn}
        onClick={() => {
          setVisible(true)
        }}
      >
        切
      </View>
      <Picker
        title="环境切换"
        className={styles.myPicker}
        defaultValueData={[
          Taro.getStorageSync(STORAGE_ENV_KEY) || EEnvType.dev,
        ]}
        isVisible={visible}
        listData={listData}
        onConfirm={values => confirmPicker(values)}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
