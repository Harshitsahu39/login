import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from "@material-ui/core/TablePagination";
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch , connect} from 'react-redux'
import { deleteUser, getUser } from "../redux/Action";
import { Link } from 'react-router-dom';
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
    heading:{
        textAlign:'center',
        
    },
    body: {
        marginTop: '',
        
    },
    dataTable: {
        position: 'sticky',
        tableLayout: 'auto',
        
    },
    container: {
        maxWidth: '70%',
        height: 'auto',
        padding: '2% 0'
    },
    table: {
        width: '100%',
        justifyItems: 'center',
        minWidth:'30%'


    },
    // header: {
    //     textAlign: 'center',
    //     paddingBottom: '5px'
    // },
    tableHeading: {
        fontWeight: 'bold',
    },
    editIcon:{
        color:'blue',
        marginRight:'2px'
      },
      delIcon:{
        color:' rgb(241, 35, 35)'
        
      },
     
})

function Data(props) {
    const dispatch = useDispatch()
    const token = sessionStorage.getItem("auth-token")
    
    useEffect( () => {
        
        // axios.get('https://reqres.in/api/users?page=2')
        //     .then(res => {
        //         setData(res.data.data);
        //         setLoading(false)
        //         console.log(res.data)
        //     })
        //     .catch(err => {
        //         console.log(err.message)
        //     })
       
        dispatch(getUser())
    
    }, [])
    
   
    const handleDelete = id => {
        dispatch(deleteUser(id))
   
      };
    



    const classes = useStyles();
    
    
    return (
        <Grid container >
             {
               token? <>

            <AppBar position="static" className={classes.header} >
                <Typography variant="h6" color="inherit" textAlign='center'>
                   {!props.username ? <div>Header</div> :<div> Welcome {props.username}</div>}
                </Typography>
                <Button color="primary" >
                   <Link to="/logout" className={classes.link}>LOGOUT</Link>
                </Button>

            </AppBar>
            <Container className={classes.container} >
            <Grid item >
                <Typography variant='h4' className={classes.heading} >
                    User Data
                </Typography>
            </Grid>
            <Grid item className={classes.body} >
                {!props.loading ?(<TableContainer component={Paper} sm>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow >

                                <TableCell className={classes.tableHeading} align="center">ID</TableCell>
                                <TableCell className={classes.tableHeading} align="center">First Name</TableCell>
                                <TableCell className={classes.tableHeading} align="center">Last Name</TableCell>
                                <TableCell className={classes.tableHeading} align="center">Email</TableCell>
                                <TableCell className={classes.tableHeading} align="center">Actions</TableCell>
                                <TableCell className={classes.tableHeading} align="center">View</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.data
                                .map((data) => (
                                    <TableRow key={data.id}>
                                        <TableCell align="center">
                                            {data.id}

                                        </TableCell>

                                        <TableCell align="center">{data.first_name}</TableCell>
                                        <TableCell align="center">{data.last_name}</TableCell>
                                        <TableCell align="center">{data.email}</TableCell>
                                        <TableCell align="center">
                                            <Link to={`/edit/${data.id}`} className={classes.link} >{<EditIcon className={classes.editIcon}/>}</Link>
                                        {<DeleteIcon className={classes.delIcon} onClick={() => handleDelete(data.id)}/>}</TableCell>
                                        <TableCell align="center">
                                            <Link to={`/details/${data.id}`} className={classes.link} >
                                                <Button variant="contained" color="primary">View</Button></Link>
                                            </TableCell>


                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                   
                </TableContainer>):(<> <h1>Loading...</h1> </>)}
            </Grid>
            

            </Container></>:<Link to ='/'><h1> login in first</h1>
            
            </Link>}
        </Grid>
    )
}
const mapStateToProps = state =>{
    console.log(state.data)
    return {
        username:state.data.username,
         data : state.data.data,
        loading: state.data.loading,
        isLogedIn: state.data.isLogedIn,
        
    }
}

export default connect(mapStateToProps)(Data)