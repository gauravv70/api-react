import { Component } from 'react';
import './index.css';

class RightSection extends Component {
    render() {
       const{
           photoUrl
       } = this.props
        return (
            <div className='wrapper-right'>
                <div className='data-right'>
                <div className="thumbnail">
              <img src={photoUrl} alt={"user-thumbnail"} className="thumbnail"></img>
            </div>
                </div>
            </div>
        )
    }
}

export default RightSection;