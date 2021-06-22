import React,  { useEffect } from 'react'
import './style.css'
import {useDispatch , connect} from 'react-redux'
import { viewUser } from "../redux/Action";
import { useHistory, useParams } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    header: {
        width: '100%',
        // textAlign: 'center',
        
        

    },
})

function Details(props) {
    const classes = useStyles();
    const { id } = useParams();
    const dispatch = useDispatch()
    const token = sessionStorage.getItem("auth-token")
    useEffect(() => {
        dispatch(viewUser(id))
    
    },[])
    return (
        <div className="Container">
             {
                token? <>
            <AppBar position="static" className={classes.header} >
                <Typography variant="h6" color="inherit" textAlign='center' display='inline'>
                   {!props.username ? <div display='inline'>Header</div > :<div display='inline'> Welcome {props.username}</div>}
                </Typography>
                <Typography variant="h6" color="white" textAlign='right' display='inline'>
                   <Link to="/logout" color="white">LOGOUT</Link>
                </Typography>

            </AppBar>
      <h1>Hello  users!</h1>
      <div className="flex">
        
              <div key={props.viewData.id}>
                <img key={props.viewData.avatar} src={props.viewData.avatar} />
                <h1>
                  <strong>{props.viewData.first_name} {props.viewData.last_name}</strong>
                </h1>
                <h3>{props.viewData.email}</h3>
              </div>
            
          
      </div></>:<Link to ='/'><h1> login in first</h1>
            
            </Link>}
    </div>
    )
}

const mapStateToProps = state =>{
    
    return {
        username:state.data.username,
         viewData : state.data.viewData,
        loading: state.data.loading,
        
    }
}

export default connect(mapStateToProps)(Details)