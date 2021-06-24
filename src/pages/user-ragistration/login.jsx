
import React,{useState} from 'react';
import "./login.css"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios"

function Copyright() {
  

  
 
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        WealthCode
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );


}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(/assets/images/login.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const[email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error, setError] = useState("")

  // sessionStorage.removeItem("id")
  
  
  
  const classes = useStyles();
  
  
  const    handleKeyDown = (e)=>{

    if (e.key === 'Enter') {
      userLogin(e);
    
    }

  }
  
  
  
  
  
  
  
  
  
  
  const userLogin = (e) => {


    e.preventDefault();
 
    if(email==""|| password==""){
       setError("Please Fill  All Fields")
    
    }
  else{
    
      setError(""); 
    const loginData ={
    
      email:email,
      password: password
    
    }
    

    axios.post(`${BASE_URL}/loginAdmin`,loginData,{headers: {
      'authorization': 'Basic Y29kZVdlYWx0aDphc2ltOTI1NzhAZ21haWwuY29t',
   
    }
  }).then((res)=>{           
      
  
    // console.log(res.data.userData[0]._id);
       
    sessionStorage.setItem("id",res.data.userData[0]._id)
      window.location.reload(false);
    }).catch(function (error) {
      // handle error
    
        
        setError("Email or Password Wrong"); 
       
       
     
      
    })
    
     
    }
   
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form>
          {error ? (<div style={{color:"red"}}>{error}</div>) : (null)}
          <div style={{color:"red"}}>{}</div>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange ={(e)=>setEmail(e.target.value)}
              onKeyDown={handleKeyDown} 
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange ={(e)=>setPassword(e.target.value)}
              onKeyDown={handleKeyDown} 
            />
         
            <Button
             
              fullWidth
              variant="contained"
              color="primary"  style={{marginTop:"15px",padding:"18px"}}
              // className={classes.submit}
              onClick={userLogin}
        
            >
              Sign In
            </Button>
         
            <Box mt={5}>
              <Copyright />
            
            
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
