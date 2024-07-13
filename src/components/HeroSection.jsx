import { useState } from "react";
import { medicalProducts } from "../data/data"

const HeroSection = () => {

    const [category, setCategory] = useState(null);
    const [price , setPrice ] = useState(null) ;
    
    const selectedcatagory = (element) => {
      setCategory(element);
    };
  
    const selectedByPrice = ( productPrice ) =>{
      setPrice(productPrice);
    }

    const filteredProduct = medicalProducts.filter(product => {
      if (product.category !== category) {
        return null;
      }
      if (price == "Under-40" && product.price <= 40) {
        return product;
      }
      if (price == "Upto-40" && product.price >= 40) {
        return product;
      }
      return product;
    });

  return (
    <div className='bg-slate-100 text-black flex flex-col items-center justify-center '>
      <nav className="flex gap-6 list-none bg-sky-700 text-white mt-4 px-8 rounded-md">
        <li className="text-xl hover:bg-sky-600 rounded-md py-2 px-4" onClick={() => selectedcatagory("Diagnostics")}>Diagnostics</li>
        <li className="text-xl hover:bg-sky-600 rounded-md py-2 px-4"  onClick={() => selectedcatagory("Protection")}>Protection</li>
        <li className="text-xl hover:bg-sky-600 rounded-md py-2 px-4" onClick={() => selectedcatagory("Hygiene")}>Hygiene</li>
        <li className="text-xl hover:bg-sky-600 rounded-md py-2 px-4" onClick={() => selectedcatagory("Supplies")}>Supplies</li>
        <li className="text-xl hover:bg-sky-600 rounded-md py-2 px-4" onClick={() => selectedcatagory("Therapy")}>Therapy</li>
      </nav>
      <nav className="flex gap-6 list-none bg-sky-700 text-white mt-4 px-8 rounded-md">
        <li className="text-xl hover:bg-sky-600 rounded-md py-2 px-4" onClick={() => selectedByPrice("Under-40")} >Under-40</li>
        <li className="text-xl hover:bg-sky-600 rounded-md py-2 px-4" onClick={ () => selectedByPrice("Upto-40")}  >Upto-40</li>
      
      </nav>
        <div className=" text-black grid grid-cols-3 gap-8 p-8 w-[80%] ">
    {filteredProduct.map((product , index ) => (
        <div className="border-[2px] border-sky-900 shadow-lg rounded-md flex flex-col gap-4 py-4 px-6 bg-sky-100" key={index}>
            <img src={product.image} alt="" className="w-[100vh]" />
            <div className="flex flex-col gap-3">
            <h2 className="text-xl text-sky-950 font-bold ">{product.name}</h2>
            <p className=""> {product.description}</p>
            <span className="text-xl font-semibold">{product.price}</span>
            <span className="font-semibold ">{product.category}</span>
            <button className="py-2 px-6 rounded-md bg-sky-950 text-white font-semibold border-[1px] hover:border-sky-900 hover:bg-transparent hover:text-sky-900 ">Buy Now</button>
            </div>
            
        </div>
    ))}

        </div>
    </div>
  )
}

export default HeroSection
