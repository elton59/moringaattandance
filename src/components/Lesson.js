import {React,useState} from 'react';
import './Lesson.css';
import {   FaPhoneAlt} from 'react-icons/fa';
import axios from 'axios';

function Appointment(props) {


const url="http://localhost:4000/api/registerLesson"
const [data,setData]=useState(
  {
    fname:"",
    ldate:"",
    rno:"",
  
  }
)

function submit(e)
{
  e.preventDefault();
  axios.post(url,{
    
    studentfirstname:data.fname,
    studentlastname:data.lname,
    registrationnumber:data.rno
  }).then(res=>{
    console.log(res.data)
    alert( res.data.message);
  }).then(function() {
    window.location = "/Scanner";
})
}
function handle(e)
{
  const newdata={...data}
  newdata[e.target.id]=e.target.value
  setData(newdata);
  console.log(newdata)
}




    return (    
        <div >
            <div className='Body'> 
<div className='appointment'>
<div class="container">
    <h1 style={{color:'#fa510f'}}>Register For  A Lession</h1>
<div className='formflex'>
  <form onSubmit={(e)=>submit(e)}>
       <div className='formgroup'>
      <label>lesson ID</label><br/>
      <input type="text"   placeholder='Lesson ID' name="lid"  value={data.lid} onChange={(e)=>handle(e)} required/>
      </div>
      
      <div className='formgroup'>
        
      <label>*Student First Name</label><br/>
      <input type="text"    id="fname"  value={data.fname} onChange={(e)=>handle(e)} placeholder='Last Name' required
     />
      </div>
      <div className='formgroup'>
      <label>*Student Lastname</label><br/>
      <input type="text"  id="lname" value={data.lname } onChange={(e)=>handle(e)}   placeholder='Last Name' required/>
      </div>
      <div className='formgroup'>
      <label>*Registration number</label><br/>
      <input type="text"   placeholder='Registration Number' id="rno"  value={data.rno} onChange={(e)=>handle(e)} required/>
      </div>
    
      
       <button  className='submit2' >Submit</button>
         </form>
  </div>
  </div>
</div>
<div className='Footerd'>
    <div id="waterdrop"></div>

      <div className="footer-top">
        <div className="pt-exebar">
        <div className="col-md-3">
            
            </div>
        </div>
        <div className="">
          <div className="row">
            <div className="">
              <div className="widget footer_widget">
               
                <div className="site-navigation">
                 
                  <h5 className="footer-title">Developed by  John Elton Okoth &copy; 2022</h5>
                  <div className="white"><FaPhoneAlt/> &nbsp; 0741225454</div>
               

                 
                </div>
              </div>

            </div>
         
          
          </div>
        </div>
      </div>
    
 
 

        </div>
</div>
        </div>
    );
}

export default Appointment;