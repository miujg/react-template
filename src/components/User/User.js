/**
 Crate by jgmiu on 19/05/29.
*/
import {hot} from 'react-hot-loader/root'
import nbaimg from 'imgs/nba.jpg'
class User extends Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return(
            <div className={'User'}>
                user..121211211<span className={'icon-quill'}></span>
                <img src={nbaimg} />
            </div>
        )
    }
}

User.protoTypes = {}
User.defaultProps = {}
export default hot(User)
