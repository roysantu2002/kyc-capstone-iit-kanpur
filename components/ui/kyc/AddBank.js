import { useAccount } from "@components/hooks/web3";
import { useWeb3 } from "@components/providers";
import Loader from "@components/ui/common/loader";
import Section from "@components/ui/common/section";
import { yupResolver } from "@hookform/resolvers/yup";
import { default as React, useState } from 'react';
import { useForm } from "react-hook-form";
import * as Yup from "yup";




// form validation rules
const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  address: Yup.string().required(),
});



const AddBank = () => {
    const { web3, contract, requireInstall } = useWeb3()
     const { account } = useAccount()
    console.log(account.data)
    const [loading, setLoading] = useState(false);
    const [address, setAddress] = useState("Contract Address Details");
      const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });



  const onSubmit = async (data) => {

    
  
    try {
      const _owner = await contract.methods.getContractOwner().call();
      console.log(_owner);
      await contract.methods.addNewBank(data.name, data.address).call();
      const result =  await contract.methods.getBank(data.name).call();
    console.log(result)
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
                <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Add a new bank</h2>
                
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">Adding a new bank to the contract</p>
            </div>
        </div>
           
            

        <div className="flex items-center justify-center pb-6 md:py-0 md:w-2/3 flex-wrap">
     
     
          <form onSubmit={handleSubmit(onSubmit)}>
     

            <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3'>
                <label
                  className='block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2'
                  htmlFor='name'
                >
                  Bank Name
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='name'
                  type='text'
                  placeholder='Bank Name'
                   {...register("name")}
                 
                />
                  <p className='text-[#EC6276] text-xs italic'>
                  {errors.name?.message}
                </p>
              </div>
              <div className='w-full md:w-1/2 px-3'>
                <label
                  className='block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2'
                  htmlFor='address'
                >
                  Bank Address
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='address'
                  name='address'
                  type='text'
                  placeholder='Bank Address'
                  {...register("address")}
                />
                <p className='text-[#EC6276] text-xs italic'>
                  {errors.address?.message}
                </p>
              </div>
            </div>
            
            <div className='w-full px-3'>
               <button className="appearance-none block w-full px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-primary-500 rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"> {loading ? <Loader /> : "Add Bank"}</button>
            </div>
          </form>
  
            </div>
            </div>
        
        
        </Section>
    )

    }
    export default AddBank