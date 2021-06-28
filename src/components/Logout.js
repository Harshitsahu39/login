import React, {useEffect} from 'react'
import {useDispatch , connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { logOut } from '../redux/Action';


function Logout(props) {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(logOut())
    
    },[])
    
        return (
            <div>
                {!props.loading ?<>
                <h1>Logout</h1>
                <Link to ='/'>Login Again</Link>
                </>
                :<h1>Loading...</h1>}
            </div>
        )
    
}

const mapStateToProps = state =>{
    
    return {
        loading: state.data.loading,
        
    }
}

export default connect(mapStateToProps)(Logout)
