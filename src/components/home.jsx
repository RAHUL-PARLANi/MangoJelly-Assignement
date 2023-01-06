import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Header from './header';
import {Link} from 'react-router-dom'
import { deleteMobile,setMobile, filterMobilelist,ClearFilter } from "../features/mobile";

const Home = () => {
var mobileList = useSelector((state) => state.mobile.value);
var mobileListAfterFilter = useSelector((state) => state.mobile.filteredArray);
const dispatch = useDispatch();
const [list, setlist] = useState(false) 
function SortbyASC(){
  
  const items=[...(mobileListAfterFilter.length===0?mobileList:mobileListAfterFilter)];    
  var updatedList=items.sort((a,b)=>{return a.brandname.localeCompare(b.brandname)})
  dispatch((mobileListAfterFilter.length===0?mobileList:mobileListAfterFilter)?filterMobilelist(updatedList):setMobile(updatedList));
}
function SortbyDSC(){
  
  const items=[...(mobileListAfterFilter.length===0?mobileList:mobileListAfterFilter)];    
    var updatedList=items.sort((a,b)=>{return b.brandname.localeCompare(a.brandname)})
    dispatch((mobileListAfterFilter.length===0?mobileList:mobileListAfterFilter)?filterMobilelist(updatedList):setMobile(updatedList));
    }
function filter(value){
      
  const updatedList=mobileList.filter((curElem)=>{
             return  curElem.RAM ===  value;
      })
     dispatch(filterMobilelist(updatedList));
  }   
    return (
     <div>
     <Header/>
      <div className='buttons-inbox'>
      <button className='buttons' onClick={()=>setlist(true)}>List View</button>
      <button className='buttons' onClick={()=>setlist(false)}>Grid View</button>
      <button className='buttons' onClick={()=>{filter('6 GB')}} >Filter(6 GB RAM)</button>
      <button className='buttons' onClick={()=>{filter('3 GB')}} >Filter(3 GB RAM)</button>
      <button className='buttons' onClick={()=>{dispatch(ClearFilter())}}>Clear Filter</button>
      <button className='buttons' onClick={()=>{SortbyASC()}}>Sort by ASC</button>
      <button className='buttons' onClick={()=>{SortbyDSC()}}>Sort by DSC</button>
      <Link style={{color:'inherit',textDecoration:"none"}} to={'/add'}><button className='buttons' >Add Mobile</button></Link>
      </div>
      
      <div className={list? 'listbox' : 'GridView'}>
        <div style={{'fontWeight':'600'}}>Brand Name</div>
        <div style={{'fontWeight':'600'}}>Price</div>
        <div style={{'fontWeight':'600'}}>Actions</div>
      </div>
      <div className={list? '':'grid-viewmain'}>
      {(mobileListAfterFilter.length===0?mobileList:mobileListAfterFilter).map((elem)=>{return <div className={list? 'listbox':'gridbox'}>
        <div >{elem.brandname}</div>
        <div >{elem.price}</div>
        <div ><Link to={'/view/'+elem.id}><button className='view-b'>View</button></Link><Link to={'/edit/'+elem.id}><button className='edit-b'>Edit</button></Link><button onClick={()=>{dispatch(deleteMobile({'id':elem.id}))}} className='delete-b'>Delete</button></div>
      </div>
      })}
      
      </div>
    </div>
  )
}

export default Home