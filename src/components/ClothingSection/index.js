import { useContext } from "react"
import { Contextdata } from "../../Context/FirstContext"


const ClothingSection=()=>{
    
    
   
    const products=useContext(Contextdata)
    
  let finalProducts=products.data
    console.log( finalProducts)
    finalProducts=finalProducts.filter(each=>each.category==="clothing")
    
    return(
<div className="eachSection">
<h1 className="eachSectionHeading">Clothing Section</h1>

<ul>
    
   {finalProducts.map(each=>{
    return(
        <li key={each.id}>
            <img src={each.img} alt={each.title}/>
            <div className="contentSection">
            <h1 className="heading">{each.title}</h1>
            <p className="para">{each.descri}</p>
            <button className="priceButton">Price: Rs {each.price}/-</button>
            </div>
            
        </li>
    )
   })

   }
    

</ul>
</div>)
}
export default ClothingSection