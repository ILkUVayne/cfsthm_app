import { Component } from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'

import './index.scss'

export default class Index extends Component<any, any> {
  state = {
    selected: 0,
    color: '#000000',
    selectedColor: '#DC143C',
    list: [
      {
        pagePath: '/pages/index/index',
        // selectedIconPath: '../images/tabbar_home_on.png',
        // iconPath: '../images/tabbar_home.png',
        text: '首页'
      },
      {
        pagePath: '/pages/search/index',
        // selectedIconPath: '../images/tabbar_cate_on.png',
        // iconPath: '../images/tabbar_cate.png',
        text: '查询'
      },
      {
        pagePath: '/pages/article/index',
        // selectedIconPath: '../images/tabbar_cate_on.png',
        // iconPath: '../images/tabbar_cate.png',
        text: '文章'
      },
    ]
  }

  switchTab(index, url) {
    console.log(index)
    this.setSelected(index)
    Taro.switchTab({ url })
  }

  setSelected (idx: number) {
    this.setState({
      selected: idx
    })
  }

  render() {
    const { list, selected, color, selectedColor } = this.state

    return (
      <CoverView className='tab-bar'>
        <CoverView className='tab-bar-border'></CoverView>
        {list.map((item, index) => {
          return (
            <CoverView key={index} className='tab-bar-item' onClick={this.switchTab.bind(this, index, item.pagePath)}>
              {/*<CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} />*/}
              <CoverView style={{ color: selected === index ? selectedColor : color }}>{item.text}</CoverView>
            </CoverView>
          )
        })}
      </CoverView>
    )
  }
}
