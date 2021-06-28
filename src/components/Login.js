import React, { useState, useEffect } from "react";
import '../App.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
    Card, Grid, makeStyles,TextField,
    Button, Tooltip
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useDispatch , connect} from 'react-redux'
import { logIn } from "../redux/Action";
import { useHistory, Redirect } from 'react-router'
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

 function Login(props) {
    const dispatch = useDispatch()
    let history = useHistory()
    const [showPassword, setShowPassword] = useState(false)
    const useStyles = makeStyles({
        cardLayout: {
            maxWidth: '320px',
            justifyContent: 'center',
            position: 'absolute',
            top:'50%',
            left: '50%',
            transform: 'translate(-50% , -50%)',
            textAlign: "center",
            boxShadow: '0 15px 20px  rgb(150, 148, 148)',
            borderRadius:'10%'
        },
        header: {
            height:'40%',
            color: ' #fff',
            margin: '0 0',
            padding: '10px',
            background: 'rgb(5, 5, 187)',
            fontSize: '25px',
        },
        formLayout: {
            width:'85%',
            margin: '10px 0',
            padding: '10px 20px 20px 20px',
        },
        error: {
            color: 'red',
            position: 'absolute',
            fontSize: '12px',
            marginLeft: '10px',
            marginTop: '0'
        },
       icon:{
            marginTop:'5%',
            position:'absolute'
        }
    })
    const initialValues = {
        username:'',
        password:''
    }
    const validationSchema = Yup.object({
        username: Yup.string('').required('Required').matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]/, "Invalid email "),
        password: Yup.string().required('Required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, " Invalid password "),
    })
    
    useEffect(()=>{
        
       
    },[])
    
    const onSubmit = (e)=>{
      
        let hardcodedCred = {
            email: 'email@email.com',
            password:'Password@123'
        }
        console.log(formik.values.username)
        if((formik.values.username === hardcodedCred.email) && 
        (formik.values.password === hardcodedCred.password)){
               
            dispatch(logIn(formik.values.username))
            history.push('/data')
            // return <Redirect to='/home' />
            
        } 
        else{
            alert("invalid user")
            return(false)
            
        }
    
    }

    const handlePassword=()=>{
        setShowPassword(!showPassword)
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,

    })
    const classes = useStyles()
    
    return (<>
  
        <Grid container>
        <Card elevation={4} className={classes.cardLayout}>
        <Grid align='center'>
                    <h1 className={classes.header}>
                        <ExitToAppIcon fontSize="large" /> <br/>
                        Login
        
                        </h1>
                </Grid>
                 <form className={classes.formLayout} onSubmit={formik.handleSubmit}>
                 <Grid container spacing={3}>
                        <Grid item xs={12} >
                            <TextField
                                type='text'
                                id='username'
                                name='username'
                                label='Userame*'
                                fullWidth='true'
                                size='small'
                                
                               
                                error={formik.touched.username && formik.errors.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.username}
                            />
                            <PersonOutlineIcon className={classes.icon}/>
                            {formik.touched.username && formik.errors.username ? (
                                <div className={classes.error}>{formik.errors.username}</div>
                            ) : null}
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                type={showPassword? 'text':'password'}
                                id='password'
                                name='password'
                                label='Password'
                                fullWidth='true'
                                size='small'
                                error={formik.touched.password && formik.errors.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            <Tooltip title={showPassword? 'Hide Password':'Show Password'}>
                            {!showPassword ? <Visibility className={classes.icon} onClick ={handlePassword}/> : 
                            <VisibilityOff className={classes.icon} onClick ={handlePassword} />}
                            </Tooltip>
                            {formik.touched.password && formik.errors.password ? (
                                <div className={classes.error}>{formik.errors.password}</div>
                            ) : null}
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                size="small"
                                color="primary"
                                fullWidth='true'
                                type='submit'>Submit</Button>
                        </Grid>
                        </Grid>
                </form>

                
            </Card>
            </Grid>
            </>
    )
}
const mapStateToProps = state =>{
    
    return {
        isLogedIn:state.data.isLogedIn,
        loading: state.data.loading,
        
    }
}

export default connect(mapStateToProps)(Login)