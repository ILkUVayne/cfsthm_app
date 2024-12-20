import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Taro from "@tarojs/taro";

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import CustomTabBar from "../../custom-tab-bar";


export default class Index extends Component<PropsWithChildren, any> {
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
    const pageObj = Taro.getCurrentInstance().page
    const tabBar = Taro.getTabBar(pageObj)
    tabBar?.setSelected(0)
  }

  componentDidHide () { }

  render () {
    return (
      <View className='<%= pageName %>'>
        <Text>Hello world!</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗aaa？？</Text>
        <AtButton type='primary' circle>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle>来</AtButton>
      </View>
    )
  }
}
