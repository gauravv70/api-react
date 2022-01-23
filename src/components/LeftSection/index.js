import { Component } from 'react';
import './index.css';

class LeftSection extends Component {
    render() {
        const{
            name,
            email,
            gender,
            dob,
            phone,
            location
        } = this.props.data
        return (
            <div className='wrapper-left'>
                <div className='data-left'>
                    <div>
                    <div className="info">
                        <strong> Name:</strong> {name.first + " " + name.last}
                    </div>
                    <div className="info">
                        <strong>Email:</strong> {email}
                    </div>
                    <div className="info">
                        <strong>Gender: </strong> {gender}
                    </div>
                    <div className="info">
                        <strong>Age:</strong> {dob.age}
                    </div>
                    <div className="info">
                        <strong>Contact Number: </strong>{phone}
                    </div>
                    <div className="info">
                        <strong>Address: </strong>{location.city + ", " + location.state + ", " + location.country}
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftSection;