import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "mobile",
  initialState: { value: [{
    "id":1,
    'brandname':'Samsung',
    'price':'Rs55000',
    'screensize':'5.5 inch',
    'RAM':'6 GB',
    'ROM':'126 GB',
    'processor':'Snapdragon 888'    
  },{
    "id":2,
    'brandname':'Iphone 8',
    'price':'Rs35000',
    'screensize':'5.8 inch',
    'RAM':'3 GB',
    'ROM':'32 GB',
    'processor':'bionic A12'    
  },{
    "id":3,
    'brandname':'Mi 11',
    'price':'Rs65000',
    'screensize':'5.8 inch',
    'RAM':'3 GB',
    'ROM':'32 GB',
    'processor':'MediaTech'    
  }
],
indivisualmobile:{
    'brandname':'',
    'price':'',
    'screensize':'',
    'RAM':'',
    'ROM':'',
    'processor':''
},
filteredArray:[]
},
  reducers: {
    addMobile: (state, action) => {
      state.value.push(action.payload);
    },

    deleteMobile: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    setMobile:(state,action)=>{
      state.value = action.payload;
    },
    filterMobilelist:(state,action)=>{
      state.filteredArray=action.payload;
    },
    ClearFilter:(state)=>{
      state.filteredArray=[];
    },
    updateMobile: (state, action) => {
       state.value.map((user) => {
        if (user.id == action.payload.id) {
          user.brandname = action.payload.brandname
          user.RAM=action.payload.RAM
          user.ROM=action.payload.ROM
          user.price=action.payload.price
          user.processor=action.payload.processor
          user.screensize=action.payload.screensize
        }
      });
    },
    getMobile:(state,action)=>{
      state.indivisualmobile = state.value.find((user) => user.id == action.payload.id);
    },
    clearMobile:(state)=>{
      state.indivisualmobile={
        'brandname':'',
        'price':'',
        'screensize':'',
        'RAM':'',
        'ROM':'',
        'processor':''
    }
    }
  },
});

export const { addMobile, deleteMobile, setMobile,updateMobile ,getMobile,clearMobile,ClearFilter,filterMobilelist} = userSlice.actions;
export default userSlice.reducer;