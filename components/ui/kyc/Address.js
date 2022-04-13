import { useWeb3 } from "@components/providers";
import Loader from "@components/ui/common/loader";
import Section from "@components/ui/common/section";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

// form validation rules
// const validationSchema = Yup.object().shape({
//   owner: Yup.string().required()
// });



const Address = () => {
    const { web3, contract, requireInstall } = useWeb3()
    console.log(contract)
    const [loading, setLoading] = useState(false);
    const [address, setAddress] = useState("Contract Address Details");
      const {
    handleSubmit,
  } = useForm();



  const onSubmit = async () => {
    console.log("clicked submit")
    try {
      const result = await contract._address
    //   const _address = web3.utils.keccak256(result)
      setAddress(result)
    //   console.log(_address)
      // return web3.utils.keccak256(result)
    } catch(error) {
      console.log(error.message)
    }
  }
// 
//     const onSubmit = async (data) => {
// 
//   };

    return(
  <Section yPadding="pt-16 pb-16">
     
          <div className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
                <div class="md:flex md:items-center md:justify-center md:w-1/3 md:bg-primary-200 md:dark:bg-primary-500">
                   
            <div className="px-6 py-6 md:px-8 md:py-0">
                <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Know the contract Address </h2>
                
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">get the contract address</p>
            </div>
        </div>
           
            

        <div className="flex items-center justify-center pb-6 md:py-0 md:w-2/3 flex-wrap">
        

            <div>
                 <p  className="px-6 py-2 text-gray-500 placeholder-gray-500 bg-white outline-none
                     dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text"  name='owner'

              >{address}</p>
       
            </div>
         
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col p-2 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                    {/* <input disabled className="px-6 py-2 text-gray-500 placeholder-gray-500 bg-white outline-none
                     dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text"  name='owner'

              placeholder={owner}/> */}
          
                    
                    <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-primary-500 rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"> {loading ? <Loader /> : "Get Address"}</button>
                </div>
    
            </form>
        </div>
            </div>
        
        
        </Section>
    )

    }
    export default Address