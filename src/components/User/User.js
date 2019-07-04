/**
 Crate by jgmiu on 19/07/04.
 eg: redux 例子示例
*/
import './user.scss'
import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {CHANGE_NAME} from 'action'

const mapStateToProps = state => ({
  user: state.userReducer
})

const mapDispatchToProps = dispath => {
  return {
    changeName: name => {
      dispath({type: CHANGE_NAME, value: name})
    }
  }
}

function User(props){
  
  let hanleClickBtn = e => {
    props.changeName('testxxx')
  }

  return(
    <div className={'user'}>
      <h1>redux state: <span className={'name'}>{props.user.name}</span></h1>
      <button onClick={hanleClickBtn}>change name</button>
    </div>
  )
}

User.propTypes = {}
User.defaultProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(User)