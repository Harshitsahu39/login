import React, { useState, useEffect } from "react";
import '../App.css'

import {  useParams } from "react-router-dom";
import { editUser, viewUser } from "../redux/Action";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch , connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { findAllByTestId } from "@testing-library/react";
import { useHistory, Redirect } from 'react-router'
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    header: {
        width: '100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    link:{
        textDecoration:'none',
        color:'white'
    },
    inputField:{
        margin:'2% 0'
    }
})

 function Edit(props) {
    const classes = useStyles();
    let history = useHistory()
    const { id } = useParams();
    const dispatch = useDispatch()
    const token = sessionStorage.getItem("auth-token")
    
    
    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')
    const [email, setEmail]=useState('')
    
    useEffect(()=>{

        // dispatch(viewUser(id))
        // setPersonDetail(props.viewData.first_name)
        // console.log(personDetail)
        // console.log(personDetail)
        dispatch(viewUser(id))
        
            
            // setFirstName(props.viewData.first_name)
       
        
    },[])
   
    // const onHandleBlue =e =>{
    //     setFirstName(props.viewData.first_name)
    //     console.log(firstName)
    // }
    
    const onSubmit = (e)=>{
        const personDetail ={
            firstName  : firstName||props.viewData.first_name,
            lastName : lastName||props.viewData.last_name,
            email: email||props.viewData.email
        }
        console.log(personDetail)
        e.preventDefault()
        dispatch(editUser(id,personDetail))
        history.push('/data')
        
    }
    
    
   
    return (
        <div>
            {
                token?<div>
            
            <AppBar position="static" className={classes.header} >
            <Button color="primary" >
                   <Link to="/data" className={classes.link}>HOME</Link>
                </Button>
                <Button color="primary" >
                   <Link to="/logout" className={classes.link}>LOGOUT</Link>
                </Button>

            </AppBar>
        {props.viewData?<div  className="Main-container">
                <div className="Inner">
                            
                            Details Form</div>
                
                 <form  onSubmit={e => onSubmit(e)}>
                    <div className={classes.inputField}>
                    <label className="Label" >First Name </label>
                        <input className="Field"
                            type="text"
                            placeholder="First Name"
                            name="name"
                            value={firstName|| props.viewData.first_name}
                            onChange={e => setFirstName(e.target.value)}
                            
                        />
                    </div>
                    <div  className={classes.inputField}>
                    <label className="Label" >Last Name </label>
                        <input className="Field"
                            type="text"
                            placeholder="Username"
                            name="Last Name"
                            value={lastName|| props.viewData.last_name}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                    <div  className={classes.inputField}>
                    <label className="Label" > Email</label>
                        <input className="Field"
                            type="email"
                            placeholder="E-mail"
                            name="email"
                            value={email|| props.viewData.email}
                            onChange={e => setEmail(e.target.value)}
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