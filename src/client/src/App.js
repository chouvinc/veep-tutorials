import React, { Component } from 'react';
import logo from './logo.svg';
import Profile from './Profile';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { profiles: [] };
    }

    callAPI() {
        fetch("http://localhost:9000/test")
            .then(res => res.text())
            .then(res => this.setState({ profiles: JSON.parse(res) }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo'/>
                    <h1 className='App-title'>Welcome to React</h1>
                </header>
                <div className='App-intro'>
                    {
                        this.state.profiles.map((profile, key) => {
                            console.log(profile);
                            return (<Profile
                                key={key}
                                name={profile.name}
                                company={profile.company}
                                industry={profile.industry}
                                role={profile.role}
                            />);
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;
