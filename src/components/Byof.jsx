import React, { useState,  useEffect} from 'react';
import '../css/byof.css';
import { RiUser5Fill, RiMailFill, RiPhoneFill, RiMoneyDollarCircleFill, RiHashtag } from 'react-icons/ri';

const Byof = () => {
  useEffect(()=>{
    window.scroll(0,0)
  }, [])
    const [data, setData] = useState({
        fullname: '',
        email: '',
        phone: '',
        budget: '',
        hash: ''
    })
    const handleSubmit = (e) =>{
      // e.preventDefault();
      if(isNaN(data.phone)){
        alert("Please enter numeric characters!")
      }
      else if(data.budget){
        if(isNaN(data.budget)){
          alert("Please enter numeric characters!")
        }
      }
      else if(data.hash){
        if(isNaN(data.hash)){
          alert("Please enter numeric characters!")
        }
      }
    }
  return (  
    <div>
        <div className="svgDiv">
        <p>BUILD YOUR OWN FARM</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="svg"
        >
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,128L60,149.3C120,171,240,213,360,234.7C480,256,600,256,720,240C840,224,960,192,
              1080,170.7C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,
              1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <hr className="divider" />

      <div className='byofDiv'>
          <p>
              Now you can build your own customized farm. For that you just have to
              provide us some details !
          </p>
          <div className='inputDiv'>
              <form>
                  <div>
                    <RiUser5Fill color="#222" style={{width: '50px', height: '50px'}}/>
                    <input type="text" class="form__input" placeholder="Full name" 
                    autoComplete="new-password"
                    onChange={(text) => setData({...data, fullname: text.target.value})}
                    required/>
                    <label for="name" class="form__label">Full Name</label>
                  </div>

                  <div>
                    <RiMailFill color='#222' style={{width: '50px', height: '50px'}}/>
                    <input type="email" class="form__input" placeholder="Email" 
                    autoComplete="new-password"
                    onChange={(text) => setData({...data, email: text.target.value})}
                    required />
                    <label for="email" class="form__label">Email</label>
                  </div>

                  <div>
                    <RiPhoneFill color='#222' style={{width: '50px', height: '50px'}}/>
                    <input type="text" class="form__input" placeholder="Mobile no." 
                    autoComplete="new-password"
                    maxlength="10"
                    onChange={(text) => setData({...data, phone: text.target.value})}
                    required />
                    <label for="mobile" class="form__label">Mobile no.</label>
                  </div>
 
                  <div>
                  <RiMoneyDollarCircleFill color='#222' style={{width: '50px', height: '50px'}}/>
                    <input type="text" class="form__input" placeholder="Budget (in INR)" 
                    autoComplete="new-password"
                    onChange={(text) => setData({...data, budget: text.target.value})}
                    value={data.budget}
                    disabled={data.hash ? true : false}
                     />
                    <label for="budget" class="form__label">Budget</label>
                  </div>

                  <fieldset className='fieldset'>
                      <legend>or</legend>
                  </fieldset>

                  
                  <div>
                  <RiHashtag color='#222' style={{width: '50px', height: '50px'}}/>
                    <input type="text" class="form__input" placeholder="Hash Rate" 
                    autoComplete="new-password"
                    onChange={(text) => setData({...data, hash: text.target.value})}
                    value={data.hash}
                    disabled={data.budget ? true : false}
                     />
                    <label for="hash" class="form__label form__hashLabel">Hash Rate</label>
                  </div>

                  <button className='buttonByof' onClick={handleSubmit}>Submit</button>
              </form>
          </div>
      </div>
    </div>
  )
}

export default Byof