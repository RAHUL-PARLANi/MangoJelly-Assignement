import React, { useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { clearMobile, getMobile } from '../features/mobile';
import Header from './header'

const View = () => {
const dispatch = useDispatch();
const data=useSelector((state)=>state.mobile.indivisualmobile)
console.log(data)
useEffect(() => {
    dispatch(getMobile({'id':window.location.href.split('/').pop()}))
    console.log(window.location.href.split('/').pop())
    return () => {
      dispatch(clearMobile())
    }
  }, [])
  

return (

    <div>
      <Header/>
      <div className='box-form'>
      
      <div  style={{'display':'flex','justifyContent':'space-between','alignItems':'center'}}>
      <div className='form-title'> Brand Name :</div>
      {data.brandname}
      </div>
      
      <div style={{'display':'flex','justifyContent':'space-between','alignItems':'center'}}>
      <div className='form-title'> Scree Size :</div>
      {data.screensize}
      </div>

      <div style={{'display':'flex','justifyContent':'space-between','alignItems':'center'}}>
      <div className='form-title'> RAM :</div>
      {data.RAM}
      </div>

      <div style={{'display':'flex','justifyContent':'space-between','alignItems':'center'}}>
      <div className='form-title'> ROM :</div>
      {data.ROM}
      </div>

      <div style={{'display':'flex','justifyContent':'space-between','alignItems':'center'}}>
      <div className='form-title'> Processor :</div>
      {data.processor}
      </div>

      <div style={{'display':'flex','justifyContent':'space-between','alignItems':'center'}}>
      <div className='form-title'>Enter Price :</div>
      {data.price}
      </div>
    
    </div>
    
    </div>
  )
}

export default View
