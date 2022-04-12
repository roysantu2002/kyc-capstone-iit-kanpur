import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import Loader from "../loader";
import Section from "../section";

// form validation rules
const validationSchema = Yup.object().shape({
  email: Yup.string().email().required()
});


const CTABase = ({title,subtitle,button}) =>  {
     const [loading, setLoading] = useState(false);

      const {
    register,
    handleSubmit,
    formState: { errors, data },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

    const onSubmit = async (data) => {

  };

    return(
  <Section yPadding="pt-16 pb-16">
     
          <div className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
                <div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-primary-200 md:dark:bg-primary-500">
                   
            <div className="px-6 py-6 md:px-8 md:py-0">
                <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Sign Up Today </h2>
                
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur obcaecati odio</p>
            </div>
        </div>

        <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col p-1 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                    <input className="px-6 py-2 text-gray-500 placeholder-gray-500 bg-white outline-none
                     dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text"  name='email'
              id='email'
              placeholder='email'
              {...register("email")} aria-label="Enter your email"/>
          
                    
                    <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-primary-500 rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"> {loading ? <Loader /> : "Subscribe"}</button>
                </div>
                      <div className='mb-3 text-normal text-[#EC6276] '>
            <p>{errors.email?.message}</p>
          </div>
            </form>
        </div>
            </div>
        
        
        </Section>
    )

    }

CTABase.PropTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  button: React.node,
};


export default CTABase