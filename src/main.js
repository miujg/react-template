/**
 * react入口文件
 */
import {Component} from 'react'
import React from 'react'
import ReactDOM from 'react-dom';
// 配置路由
// import Router from './router/Router'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>hello react!!!</div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('app'))
