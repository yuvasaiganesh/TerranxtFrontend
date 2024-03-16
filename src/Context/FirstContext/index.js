import React from "react"

let productdata={
    data:[],
    updataData:(item)=>{
        productdata.data=[...item]
        
    }
    
   
}

export const Contextdata=React.createContext()

export const WrappedContext=({children})=>{
    return(<Contextdata.Provider value={productdata}>{children}</Contextdata.Provider>)
}