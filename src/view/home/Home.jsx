import './Home.css'
import React , {useState , useEffect} from 'react'
import Rasim1 from './medical.png'
import Button from '../../components/home_button'
import Services from "../../doctor.json"
import Navbar from '../../components/navbar/Navbar'
function Home(props) {  
  const [baza , setBaza] = useState(Services)

  return (
    <div>
      <Navbar/>
      <div>
        <img src={Rasim1} alt="" className='home_img' />
        <h4 className='home_h4'>MEDICAL.NET</h4>
      </div>
      <div>
        <h3 className='home_h5'>Xizmat turlari</h3>
        <div class="container justify-content-center ">
          <div class="row gy-5 ">
              {
                baza.map((elem, index) => {
                  return(
                    <div className="col-md-6" key={index}>
                      <Button 
                        name={elem.title}
                        service={elem}
                      />
                    </div>
                  )
                })
              }
            
          </div>
        </div>
      </div>
      <h2 className='home_h2'>This web site MEDICAL.NET Copyright 2020-2021</h2>
    </div>
  )
}

export default Home