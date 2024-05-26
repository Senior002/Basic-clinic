import './Chart.css'
import './Barchart'
import { PieChart, Pie, Cell, ResponsiveContainer, } from 'recharts';
import Barchart from './Barchart';
import Navbar from '../../components/navbar/Navbar'
import Users from '../../user.json'
import { useEffect } from 'react';

export default function Chart () {
    const data = [
        { name: 'Psixolog ', value: 0 },
        { name: 'UZI', value: 0 },
        { name: 'Pediator ', value: 0 },
      { name: 'Ginekolog', value: 0 },
      { name: 'EKG', value: 0 }
    ];

    useEffect(()=>{
        const hisob = () => {
            for(let i=0; i<Users.length;i++){
                if(Users[i].service==1){
                    data[0].value+=1
                }
                if(Users[i].service==2){
                    data[1].value+=1
                }
                if(Users[i].service==3){
                    data[2].value+=1
                }
                if(Users[i].service==4){
                    data[3].value+=1
                }
                if(Users[i].service==5){
                    data[4].value+=1
                }
            }
        }
        hisob()
    },[])

    console.log(data)

    const COLORS = ['#0CBD0F', '#ADFF00', '#FFE500', '#FF6D00', '#8000FF'];
    
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        
        </text>
      );
    };
    return (
        <>
        <Navbar/>
            <div className='chart_wrapper'>
            <div className="row pie_row">
                <h2 className='dashboard_title'>Dashboard</h2>
                <h6 className='pie_title'>So’ngi 30 kun ichida foydalanilgan xizmatylar</h6>
                <div className="col-md-5 pie_chart">
                    <ResponsiveContainer>
                        <PieChart width={600} height={600}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                            width={700}
                        >
                            {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        </PieChart>
                        
                    </ResponsiveContainer>
                </div>
                <div className="col-md-5 pie_pieces">
                    <div className="row">
                    {
                        data.map((item,index)=> {
                            return(
                                <div className="my-2 col-md-5" key={index}>
                                    <span className='pie_color1'></span>
                                    <p className=''>{item.name}- {item.value} marta</p>
                                </div>
                            )
                        })
                    }
                    </div>
                    
                </div>
            </div>
            <div className='bar'>
                <Barchart/>
            </div>
            <h5 className='chart_bottom'>This web site MEDICAL.NET Copyright 2020-2021</h5>
          </div>
        </>

    );
  };
