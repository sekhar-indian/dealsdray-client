import { useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios'
function Login(){
    const navigate = useNavigate();

    function adminLoginAction(event){
        event.preventDefault();
        const data ={
         username: event.target[0].value,
         password: event.target[1].value
        }
        axios.post('http://localhost:8000/adminlogin',data)
        .then(res=>{
            localStorage.setItem('JWT',res.data);
            navigate('/');
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
       
          <div className='login-container'>
            <div className='login-left-container'>
            <div className='login-form-container'>
              <h2 className='login-form-heading'>Login</h2>
              <form onSubmit={adminLoginAction}>
              <label className='login-from-label'>User Name</label><br></br>
              <input className='login-from-input-item' type='text' name='username'></input><br></br>
              <label className='login-from-label'>Password</label><br></br> 
              <input className='login-from-input-item' name='password' type='password'></input><br></br>
              <button className='login-from-button-item' type="submit">Login</button>
              </form>
            </div>
            </div>
            <div className='login-right-container'>
            <h2 className='login-right-form-heading'>Admin Login</h2>
            <div className='login-right-form-para'>Leadership is not about being in charge. It's about taking care of those in your charge." – Simon Sinek</div>
            <div className='login-right-form-para'>Great leaders don't set out to be a leader... they set out to make a difference. It’s never about the role" —always about the goal</div>
            <div className='login-right-form-para'>Efficiency is doing things right; effectiveness is doing the right things." – Peter Drucker</div>
           </div>
        </div>
  
    )
}
export default Login;