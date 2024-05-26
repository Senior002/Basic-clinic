import './Register.css'
import React , {useState , useEffect} from 'react'
import BASA from '../../user.json'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'


function Register() {
  const navigate = useNavigate()
  const [locInf, setLocInf] = useState('')
  useEffect(()=>{
    const localInfGet = () => {
      let locInfo = JSON.parse(localStorage.getItem("service"))
      setLocInf(locInfo)
    console.log(locInfo);
    }
    localInfGet()
  }, []);
  
  const [patient , setPatient] = useState({
    id : BASA.length + 1,
    firstname : "",
    lastname : "",
    birthday : "",
    address : "",
    service: "",
    price: 0,
  })

 
    


  const sendInfo = (e) => {
    e.preventDefault()
    patient.service=locInf.id
    patient.price=locInf.price
    BASA.push(patient)
    navigate('/table')
    console.log(BASA);
  };

  const changeHandler = (e) => {
    setPatient({...patient , [e.target.name]: e.target.value })
  }

  return (
   <>
   <Navbar/>
    <div className='r_wrapper'>
      <div className="container">
          <h2 className='top_word1'>{locInf.title}</h2>
          <div className="tablet_form bg-light">
            <form onSubmit={sendInfo}>
            <h3 className='tab_top_txt'>Ma'lumotlarni kiriting</h3><br />
            <input value={patient.firstname} name='firstname' onChange={changeHandler} required className='form-control tab_inp_0' type="text" placeholder='Bemor ismi...' />
            <input value={patient.lastname} name='lastname' onChange={changeHandler} required className='form-control tab_inp_1' type="text" placeholder='Bemor familiyasi...' />
            <input value={patient.birthday} name='birthday' onChange={changeHandler} required className='form-control tab_inp_2' type="text" placeholder="Bemor tug'ilgan yili..." /><br />
            <h3 className='tab_txt1'>To'liq manzil</h3><br />
            <input value={patient.address} name='address' onChange={changeHandler} required className='form-control tab_inp_3' type="text" placeholder="Bemor manzili..." />
            <h1 className='tab_txt2'>Mu'olaja qiymati : {`${locInf.price} so'm`}</h1>
            <button className='tab_btn mb-3'>Bajarildi</button>
            </form>
          </div>
              <button className='btm_btn'>Jadvalni ko'rish</button>
              <h6 className='btm_txt0'>This web site MEDICAL.NET Copyright 2020-2021</h6>
      </div>
    </div>
   </>
  )
}

export default Register