import { useAccount } from "@components/hooks/web3"
import React from 'react'
import Button from '../button'
import HeroButton from '../herobutton'
import Section from "../section"


const Hero = () => {
   const { account } = useAccount()
  return (
 
     <>
         <Section yPadding="pt-16 pb-16">
               <div className="bg-white mt-5 p-10 shadow-2xl rounded-lg ">
      <HeroButton
        title={
          <>
            {'Every Project matters.'}<br className='md:hidden'></br>
            <span className="text-primary-500">IIT Kanpur Blockchain Capstone Project</span>
          </>
        }
        description="Decentralized KYC Verification."
        button={
        
            <a>
              <Button xl>START NOW!</Button>
            </a>
        
        }
      />
      </div>
       <div className="bg-white mt-5 p-10 shadow-2xl rounded-lg ">
   
   
       { account.data &&

        <HeroButton
        title={
          <>
        
            <span className="text-primary-500">Metamask Connected as</span>
          </>
        }
    
        button={
        
            <a>
               <Button xl>{account.data}</Button>
            </a>
        }
           />

      }
     
        </div>
      </Section>
      </>


    
  )
}

export default Hero