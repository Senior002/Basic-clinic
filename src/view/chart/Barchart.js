import './Barchart.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,} from 'recharts';

const data = [
  {
    name: 'Psixolog',
    som:  55567000 ,
    fill: '#0CBD0F'
  },
  {
    name: 'UZI',
    som: 46785000 ,
    fill: '#ADFF00'
  },
  {
    name: 'Pediator',
    som: 31250000,
    fill: '#FFE500'
  },
  {
    name: 'Ginekolog',
    som: 24360000,
    fill:  '#FF6D00'
  },
  {
    name: 'EKG',
    som: 21560000 ,
    fill:  '#8000FF'
  },
  {
    name: 'Masaj',
    som:  20320000,
    fill: '#3300FF'
   
  },
  {
    name: 'Lor',
    som: 19590000,
    fill: '#FE0000'
  },
  {
    name: 'Rengen',
    som:  17370000,
    fill: '#00FFFF'
  },
];



export default function Barchart () {

    return (
     <>
        <div className='row bar_wrapper'>
        <h6 className='bar_title'>So’ngi 6 oylik daromat</h6>
          <div className="row bar_row">
            
              
                <BarChart
                  width={1000}
                  height={700}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="name" padding={{ left: 90, right: 90 }} />
                  <YAxis demo={[0, 'dataMax + 1000']} tickCount={8}/>
                
                  <Tooltip cursor={{fill: 'transparent'}}/>
                  <Bar dataKey="som" fill="#82ca9d" radius={[10, 10, 0, 0]} />

                    
                </BarChart>
              
            
        
          </div>
            <div className='row bar_row2'>
              
            <div className="bar_pieces">
                      <div className="bar_p1  my-2">
                          <span className='bar_color1'></span>
                          <p className='bar_p_name1'>Psixolog 55 567 000 so’m </p>
                      </div>
                      <div className="bar_p2 my-2">
                          <span className='bar_color2'></span>
                          <p className='bar_p_name2'>UZI  46 785 000 so’m</p>
                      </div>
                      <div className="bar_p3 my-2">
                          <span className='bar_color3'></span>
                          <p className='bar_p_name3'>Pediator 31 250 000 so’m</p>
                      </div>
                      <div className="bar_p4  my-2">
                          <span className='bar_color4'></span>
                          <p className='bar_p_name4'> Ginekolog 24 360 000 so’m</p>
                      </div>
                      <div className="bar_p5 my-2">
                          <span className='bar_color5'></span>
                          <p className='bar_p_name5'> EKG 21 560 000 so’m</p>
                      </div>
                      <div className="bar_p6 my-2">
                          <span className='bar_color6'></span>
                          <p className='bar_p_name6'> Masaj 20 320 000 so’m</p>
                      </div>
                      <div className="bar_p7  my-2">
                          <span className='bar_color7'></span>
                          <p className='bar_p_name7'> Lor 19 590 000 so’m</p>
                      </div>
                      <div className="bar_p8  my-2">
                          <span className='bar_color8'></span>
                          <p className='bar_p_name8'> Rengen 17 370 000 so’m</p>
                      </div>
                  </div>
            </div>
        </div>
        

      
     </>
    );
  }

