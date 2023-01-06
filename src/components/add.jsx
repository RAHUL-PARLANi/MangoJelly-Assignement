import React, { useState } from 'react'
import Header from './header'
import { useSelector,useDispatch } from 'react-redux';
import { addMobile } from "../features/mobile";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [Brand, setBrand] = useState('');
  const [price, setprice] = useState('');
  const [RAM, setRAM] = useState('');
  const [ROM, setROM] = useState('');
  const [screensize, setscreensize] = useState('');
  const [processor, setprocessor] = useState('');
  const mobileList = useSelector((state) => state.mobile.value);
  const dispatch = useDispatch();
  const history = useNavigate();

  function submit(e){
   e.preventDefault();
   const object ={
      "id":mobileList[mobileList.length-1].id+1,
      'brandname':Brand,
      'price':price,
      'screensize':screensize,
      'RAM':RAM,
      'ROM':ROM,
      'processor':processor    
    }
    console.log(object);
    dispatch(addMobile(object));
    alert('Mobile Added Successfully !');
    history('/');
  }
  return (
    <div>
     <Header/>
     <div style={{'textAlign':'center','margin':'10px'}} className='NAV-HEADING'>Add Mobile</div>   
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
      <button type='submit'>Add</button>
      </form>
    </div>
    </div>
  )
}

export default Add
