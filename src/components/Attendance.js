import {React,useState} from 'react';
import './Attendance.css';
import {  FaPhoneAlt} from 'react-icons/fa';
import axios from 'axios';


function Services() {
  const [reso, setReso] = useState('');

  const url="https://moringaattandance.herokuapp.com/api/findStudent"
const [data,setData]=useState(
  {
    rno:"",

   
  
  }
)

function submit(e)
{
  e.preventDefault();
  axios.put(url,{
    
    registrationnumber:data.rno,
   

  }).then(res=>{
    console.log(res.data)
    alert( res.data[0].registrationnumber);
    setReso(res.data[0]);
  
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
        <div>
            <div>
       
            </div>
            <div className='service'>
            <div className='serviceheader'>
                <h1>Student Register</h1></div><br/>
                <div className='serviceflex'>
                <div className='formflex'>
 <div className='containera'>
  <form onSubmit={(e)=>submit(e)}>
  <div className='formgroup'>
        
        <label>*Registration No</label><br/>
        <input type="text"    id="rno"  value={data.rno} onChange={(e)=>handle(e)} placeholder='Registration Number' required
       />
        </div>
       <div className='formgroup'>
      <label>Date</label><br/>
      <input type="text"   placeholder='ldate' name="ldate"  value={data.lid} onChange={(e)=>handle(e)} required/>
      </div>
      
   
     
    
      
       <button  className='submit2' >Submit</button>
         </form></div>

  </div>
                <div className='servicecard'>
                <h3></h3>   
                
                <div className='servicecardimgdiv'>
                    
                 </div>
                 <div className='servicecardtext'>
                     <p>
                   <ul>
                  
                   <li>Firstname :&nbsp;{reso.registrationnumber}</li><br/>
                   <li>Lastname:&nbsp;{reso.studentlastname} </li><br/><br/>
                   <li>LessonKey:&nbsp;{reso.lessonkey}</li><br/>
                   <li>LessonID:&nbsp;{reso.lessonid}</li><br/>
                   <li>Registration NUmber:&nbsp; {reso.registrationnumber}</li>
                   <li>Chekin Date:&nbsp;{reso.checkintime}</li>
</ul>
</p>
</div>
                </div>
              
              
               
               </div> 
            </div>
            <div className='Footerc'>
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
                 
                  <h5 className="footer-title">developed by John Elton Okoth</h5>
                  <div className="white"><FaPhoneAlt/>0741225424</div>
               

                 
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

export default Services;