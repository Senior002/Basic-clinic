import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './History.css'
import Photo from '../history/medical.png'
import Patients from '../../user.json'
import Doctor from '../../doctor.json'

function History() {
  const [basa, setBasa] = useState(Doctor)
  const [modal, setModal] = useState(false)
  const [users, setUsers] = useState([{
    doctor: '',
    total: 0,
    price: 0,
    summ: 0
  }])
   
  const modalFunction = (elem) => {
      if(modal==false){
        let totalOld = 0
        let summ = 0
        users[0].doctor = elem.firstName
        let result = Patients.reduce((total, item)=>{
          if(item.service==elem.id){
            totalOld++
            summ+=item.price
           return total+=item.price
          }
          
        },0)
        users[0].total = totalOld
        users[0].summ = summ
        users[0].price = elem.price

      }



    if (modal) {
      setModal(!modal)

    } else {
      setModal(!modal)
    }
  }
                
  return (
    <>
      <Navbar />
      <div className='head_qwe'>
        <img src={Photo} alt="ETHERNET is too slow..." className='history_img' />
        <h4 className='history_h4'>MEDICAL.NET</h4>
      </div>

      <h3 className='history_h5'>HISTORY</h3>
      <div className="container justify-content-center">
        <div className="row gy-5 d-flex justify-content-center">
          {
            basa.map((elem, index) => {
              return (
                <div className="col-md-6" key={index}>
                  <button onClick={() => modalFunction(elem)} className="p-3 text-white fs-2 history_button my-4">{elem.title}</button>
                </div>
              )
            })
          }
        </div>
        <div className={modal === true ? "teble_wrapper" : "teble_wrapper2"}>
          <div className="teble_info">
            <div className="container">
              <div className="top_wordq">
                <ul className='time_1'>
                  <li className='today'>Bugun</li>
                  <li className='week'>Hafta</li>
                  <li className='month'>Oy</li>
                  <li className='year'>Yil</li>
                </ul>
              </div>
              <div className="exit text-light">
                <i className="ikonka" onClick={() => modalFunction()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                </i>
              </div>
                {
                  users.map((item, index) => {
                    return(
                      <>
                      <h2 className='midle_txt'>{item.title}</h2>
                      <div className="list_inf" key={index}>
                        <tr className='fir_tab1'>
                          <th className='bir py-2'>Doktor ismi</th>
                          <th className='a1'>Bemorlar soni</th>
                          <th className='b2'>Ko’rilgan bemorlar</th>
                          <th className='c3'>Narx</th>
                          <th className='d4'>Umumiy</th>
                        </tr>
                        <tr className='sec_tab2'>
                          <th className='ikk py-2'>{item.doctor}</th>
                          <th className='e5'>{item.total} ta</th>
                          <th className='f6'>24 ta</th>
                          <th className='g7'>{item.price} so'm</th>
                          <th className='h8'>{item.summ} so'm</th>
                        </tr>
                      </div>
                      </>
                    )
                  })
                }
            </div>
          </div>
        </div>
      </div>
      <h2 className='history_h2'>This web site MEDICAL.NET Copyright 2020-2021</h2>
    </>
  )
}

export default History