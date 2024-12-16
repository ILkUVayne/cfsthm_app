import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from "@tarojs/taro";
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

import type CustomTabBar from '../../custom-tab-bar'


export default class Index extends Component<PropsWithChildren, any> {
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
    const pageObj = Taro.getCurrentInstance().page
    const tabBar = Taro.getTabBar<CustomTabBar>(pageObj)
    tabBar?.setSelected(1)
  }

  componentDidHide () { }

  render () {
    return (
      <View className='<%= pageName %>'>
        <Text>查询页面</Text>
      </View>
    )
  }
}
