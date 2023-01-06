import React, { useEffect, useState } from 'react'
import Header from './header'
import { useSelector,useDispatch } from 'react-redux';
import { clearMobile, getMobile, updateMobile } from "../features/mobile";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const [Brand, setBrand] = useState('');
  const [price, setprice] = useState('');
  const [RAM, setRAM] = useState('');
  const [ROM, setROM] = useState('');
  const [screensize, setscreensize] = useState('');
  const [processor, setprocessor] = useState('');
  const mobileList = useSelector((state) => state.mobile.indivisualmobile);
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    dispatch(getMobile({'id':window.location.href.split('/').pop()}))
    setBrand(mobileList.brandname);
    setRAM(mobileList.RAM)
    setROM(mobileList.ROM)
    setprice(mobileList.price)
    setscreensize(mobileList.screensize)
    setprocessor(mobileList.processor)
    return () => {
      dispatch(clearMobile())
    }
  }, [mobileList])

  function submit(e){
   e.preventDefault();
   const object ={
      "id":window.location.href.split('/').pop(),
      'brandname':Brand,
      'price':price,
      'screensize':screensize,
      'RAM':RAM,
      'ROM':ROM,
      'processor':processor    
    }
    console.log(object);
    dispatch(updateMobile(object));
    alert('Mobile Edited Successfully !');
    history('/');
  }
  return (
    <div>
     <Header/>
     <div style={{'textAlign':'center','margin':'10px'}} className='NAV-HEADING'>Edit Mobile</div>   
    <div className='box-form'>
      <form onSubmit={submit}>
      
      <div  style={{'display':'flex','justifyContent':'space-between','alignItems':'center'}}>
      <div className='form-title'>Enter Brand Name :</div>
      <input type={'text'} value={Brand} onChange={(e)=>{setBrand(e.target.value)}}/>
      </div>
      
      <div style={{'display':'flex','justifyContent':'space-between','alignItems':'center'}}>
      <div className='form-title'>Enter Scree Size :</div>
      <input type={'text'} value={screensize} onChange={(e)=>{setscreensize(e.target.value)}}/>
      </div>

      <div style={{'display':'flex','justifyContent':'space-between','alignItems':'center'}}>
      <div className='form-title'>Enter RAM :</div>
      <input type={'text'} value={RAM} onChange={(e)=>{setRAM(e.target.value)}}/>
      </div>

      <div style={{'display':'flex','justifyContent':'space-between','alignItems':'center'}}>
      <div className='form-title'>Enter ROM :</div>
      <input type={'text'} value={ROM} onChange={(e)=>{setROM(e.target.value)}}/>
      </div>

      <div style={{'display':'flex','justifyContent':'space-between','alignItems':'center'}}>
      <div className='form-title'>Enter Processor :</div>
      <input type={'text'} value={processor} onChange={(e)=>{setprocessor(e.target.value)}}/>
      </div>

      <div style={{'display':'flex','justifyContent':'space-between','alignItems':'center'}}>
      <div className='form-title'>Enter Price :</div>
      <input type={'text'} value={price} onChange={(e)=>{setprice(e.target.value)}}/>
      </div>
      <br/>
      <button type='submit'>Edit</button>
      </form>
    </div>
    </div>
  )
}

export default Edit
