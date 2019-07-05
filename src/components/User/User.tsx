import './user.scss'
import React from 'react'
import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {CHANGE_NAME} from 'action/index'

const mapStateToProps = (state:{userReducer:string}) => ({
  user: state.userReducer
})

const mapDispatchToProps = (dispath:any) => {
  return {
    changeName: (name:string) => {
      dispath({type: CHANGE_NAME, value: name})
    }
  }
}

interface props {
  changeName: any,
  user: {name: string}
}

function User(props:props) {

  let hanleClickBtn = (e:object) => {
    props.changeName('testxxx')
  }

  return (
    <div className={'user'}>
      <h1>redux state: <span className={'name'}>{props.user.name}</span></h1>
      <button onClick={hanleClickBtn}>change name</button>
    </div>
  )
}


export default connect<any,any>(mapStateToProps, mapDispatchToProps)(User)