import './add-employ.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddEmploy(){
    const navigate=useNavigate()
    function AddEmployInServer(event){
        event.preventDefault();
        const data ={
         name: event.target[0].value,
         email: event.target[1].value,
         phone:event.target[2].value,
         designation:event.target[3].value,
         gender:event.target.gender.value,
         course:event.target[6].value
        }
        console.log(data)
        let token=localStorage.getItem('JWT')
        axios.post('http://localhost:8000/newemploy',data,{
            headers:{
               'Authorization':`Bearer ${token}`
           }})
        .then(res=>{
            console.log(res);
            
            navigate('/employs-list')
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(
        <div className="body-container">
        <div className='add-employ-container'>
            <form onSubmit={AddEmployInServer} className='add-employ-form-container'>
                <label className='label-item'>Enter Employ Name</label><br></br>
                <input className='input-container' name='name' type='text'></input><br></br>
                <label className='label-item'>Enter Employ Email</label><br></br>
                <input className='input-container' name='email' type='text'></input><br></br>
                <label className='label-item'>Enter Employ Phone number</label><br></br>
                <input className='input-container' name='phone' type='text'></input><br></br>
                <select className='input-container' name="designation" id="designation">
                    <option value="Dveloper">Dveloper</option>
                    <option value="Manager">Manager</option>
                    <option value="Salse">Salse</option>
                    <option value="HR">HR</option>
                </select><br></br>
                <label className='label-item'>GENDER</label><br></br>
                <input className='' type="radio"  name="gender" value="Male"></input>
                <label className='label-item' >Male</label><br></br>
                <input className='' type="radio"  name="gender" value="Female"></input>
                <label className='label-item'>Female</label><br></br>
                <label className='label-item'>Enter Course</label><br></br>
                <input  className='input-container' name='course' type='text'></input><br></br>
                
                <button className='button-container' type='submit'>Submit</button>
            </form>
        </div>
        </div>
    )
}

export default AddEmploy 