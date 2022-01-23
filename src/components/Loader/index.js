import { CircularProgress } from '@mui/material';
import { Component } from 'react';
import './index.css'


class Loader extends Component {
    render() {
        const { show } = this.props
        return (
            <div>
                {
                    show ?
                    <div className='loader'
                    >
                        <CircularProgress
                            color="success"
                            className="progress"
                            size={80}
                        />
                        </div>
                        : null
                }
            </div>
        )
    }
}

export default Loader