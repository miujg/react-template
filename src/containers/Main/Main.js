/**
 Crate by jgmiu on 19/05/27.
*/
import {User} from 'coms/index'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import {hot} from 'react-hot-loader/root'

class Main extends Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return(
      <div className={'Main'}>
        <span>112121</span>
        <Switch>
            <Route exact path={'/'} component={User} />
        </Switch>
      </div>
    )
  }
}

Main.protoTypes = {}
Main.defaultProps = {}

export default hot(Main)