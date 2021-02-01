import React, { Component } from 'react';
import corgi from './corgi.jpg';
import './Profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Profile'>
                <img src={corgi} className='Profile-corgi' alt='corgi'/>
                <div className='Profile-content'>
                    <div className='Profile-name'>{this.props.name}</div>
                    <div>{this.props.company}</div>
                    <div>{this.props.industry}</div>
                    <div>{this.props.role}</div>
                </div>
            </div>
        )
    }
}

export default Profile;