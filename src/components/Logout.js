import React, { Component } from 'react'
import { Link} from 'react-router-dom'


export default class LogOut extends Component {
    constructor(props) {
        super(props)
        sessionStorage.removeItem('auth-token')
    }
    
    render() {
        return (
            <div>
                <h1>Logout</h1>
                <Link to ='/'>Login Again</Link>
            </div>
        )
    }
}