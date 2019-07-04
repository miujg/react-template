/**
 * react入口文件
 */
import ReactDOM from 'react-dom'

import {Routers} from 'cons/index.js'
import { createStore } from 'redux'
import { reducers } from './redux/reducer/index'
import {Provider} from 'react-redux'
// antd 样式文件
import 'antd/dist/antd.css'
// 字体文件
import 'css/font.scss'

// chrome redux插件使用 目前启用会在手机端造成白屏
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const enhancer = composeEnhancers()
let store = createStore(reducers)

ReactDOM.render(
    (
        <Provider store={store}>
            <Routers />
        </Provider>
    )   ,
 document.getElementById('app'))



