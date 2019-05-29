/**
 Crate by jgmiu on 19/05/27.
*/
import {User} from 'coms/index'

import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'

export default class Main extends Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return(
      <div className={'Main'}>
        <Switch>
            <Route exact path={'/'} component={User} />
        </Switch>
      </div>
    )
  }
}

Main.protoTypes = {}
Main.defaultProps = {}