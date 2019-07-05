import React from 'react'
import ReactDOM from 'react-dom'
import {Routers} from 'cons/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// antd 样式文件
import 'antd/dist/antd.css'
// 字体文件
import 'css/font.scss'
import { reducers } from './redux/reducer';

let store = createStore(reducers)

ReactDOM.render((
  <Provider store={store}>
    <Routers />
  </Provider>
),document.getElementById('app'))