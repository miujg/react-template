/**
 Crate by jgmiu on 19/05/27.
 脚手架路由文件
*/
import {Route, Router} from 'react-router'
import {Main} from "cons/index.js"

export default class RouterCom extends Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return(
      <div>
        <Router>
          <Route path='/' Component={Main} />
        </Router>
      </div>
    )
  }
}

RouterCom.protoTypes = {}
RouterCom.defaultProps = {}
