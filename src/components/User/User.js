/**
 Crate by jgmiu on 19/05/29.
*/
import nbaimg from 'imgs/nba.jpg'
export default class User extends Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return(
            <div className={'User'}>
                user....<span className={'icon-quill'}></span>
                <img src={nbaimg} />
            </div>
        )
    }
}

User.protoTypes = {}
User.defaultProps = {}
