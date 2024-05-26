import {useNavigate} from 'react-router-dom'
function Button(props){
    const navigate = useNavigate()
    const service_storage = () => {
        localStorage.setItem("service" , JSON.stringify(props.service))
        navigate("/register")
    }
    return(
        <>
            <button className='p-3  text-white fs-2 home_button my-4' onClick={()=>service_storage()}>{props.name}</button>
        </>
    )
}
export default Button