import './Table.css'
import DOCTOR from '../../doctor.json'
import USER from '../../user.json'
import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'

function Table() {
  const [baza, setBaza] = useState(DOCTOR)
  const [user, setUser] = useState(USER)

  return (
    <div>
      <Navbar/>
      <div className="row">
          <div className="col">
            {baza.map((elem, index) => {
              return (
                <div className='btn' key={index}>
                  <button className='button_table1'>{elem.title}</button>
                </div>
              )
            })}
          </div>

          <div className="col button_table">
            <button className='table_button button_text'>Yangi qo’shish</button>
          </div>
        </div>
      <div className="table">
        <tr>
          <th className='son_th'></th>
          <th className='table_pl'>Ism</th>
          <th className='table_pl table_w'>To`lov</th>
          <th className='table_pl table_w'>Bemor yoshi</th>
          <th className='table_pl '>Do`ktor ismi</th>
          <th className='table_pl'>Bemor manzili</th>
        </tr> 
        {
          user.map((item, index) => {
            return (
              <tr  key={index}>
                <th className='son_th'>{item.id}</th>
                <th className='table_pl'>{item.firstName}</th>
                <th className='table_pl table_w'>{item.price}</th>
                <th className='table_pl table_w'>{item.birthday}</th>
                <th className='table_pl'>{item.lastName}</th>
                <th className='table_pl'>{item.address}</th>
              </tr>
            )
          })
        }
      </div>

    </div>
  )
}

export default Table