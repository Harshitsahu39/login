import React, { useState, useEffect } from "react";
import '../App.css'

import {  useParams } from "react-router-dom";
import {useDispatch , connect} from 'react-redux'
import { editUser, viewUser } from "../redux/Action";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { findAllByTestId } from "@testing-library/react";
import { useHistory, Redirect } from 'react-router'

const useStyles = makeStyles({
    header: {
        width: '100%',
        textAlign: 'center',
    },
})

 function Edit(props) {
    const classes = useStyles();
    let history = useHistory()
    const { id } = useParams();
    const dispatch = useDispatch()
    const token = sessionStorage.getItem("auth-token")
    
    const [personDetail, setPersonDetail] = useState({
        first_name:'',
        last_name:'',
        email:''
    })
    const [getData, setGetData] = useState(false)
    
    useEffect(()=>{

        // dispatch(viewUser(id))
        // setPersonDetail(props.viewData.first_name)
        // console.log(personDetail)
        // console.log(personDetail)
        console.log(dispatch(viewUser(id)))
        
            setPersonDetail({first_name: props.viewData.first_name})
            setPersonDetail({last_name: props.viewData.last_name})
            setPersonDetail({email: props.viewData.email})
            
        
       
        
    },[])
   
        
    
    const onChangeHandler = e => {
        setPersonDetail({[e.target.name]: e.target.value });
    };
    const onSubmit = (e)=>{
        e.preventDefault()
        dispatch(editUser(id,personDetail))
        
            history.push('/data')
        
    }
    
    
   
    return (
        <div>
            {
                token?<div>
            
            <AppBar position="static" className={classes.header} >
                <Typography variant="h6" color="inherit" textAlign='center' >
                   {!props.username ? <div>Header</div> :props.username}
                </Typography>

            </AppBar>
        {props.viewData?<div  className="Main-container">
                <div className="Inner">
                            
                            Details Form</div>
                
                 <form onSubmit={e => onSubmit(e)}>
                    <div >
                    <label className="Label" >First Name </label>
                        <input className="Field"
                            type="text"
                            placeholder="First Name"
                            name="name"
                            value={props.viewData.first_name}
                            onChange={e => onChangeHandler(e)}
                        />
                    </div>
                    <div >
                    <label className="Label" >Last Name </label>
                        <input className="Field"
                            type="text"
                            placeholder="Username"
                            name="Last Name"
                            value={props.viewData.last_name}
                            onChange={e => onChangeHandler(e)}
                        />
                    </div>
                    <div >
                    <label className="Label" > Email</label>
                        <input className="Field"
                            type="email"
                            placeholder="E-mail"
                            name="email"
                            value={props.viewData.email}
                            onChange={e => onChangeHandler(e)}
                        />
                    </div>

                    <button className="Btn">Update User</button>
                </form>

                
            </div>:<h1>loading</h1>}
            </div>:<Link to ='/'><h1> login in first</h1>
            
            </Link>
 }
            </div>
    );
}
const mapStateToProps = state =>{
    
    return {
        username:state.data.username,
        viewData : state.data.viewData,
        loading: state.data.loading,
        isLogedIn: state.data.isLogedIn,
        edit: state.data.edit,
        
    }
}

export default connect(mapStateToProps)(Edit)