
// import { getAllCourses } from "@content/courses/fetcher"
import { useWalletInfo } from "@components/hooks/web3";
import { useWeb3 } from "@components/providers";
import { CTABase } from "@components/ui/common";
import { BaseLayout } from "@components/ui/layout";


export default function BankPage() {
   const { web3, contract, requireInstall } = useWeb3()
  const { hasConnectedWallet, isConnecting, account } = useWalletInfo()
//   console.log(`this is the account `)
//   console.log(account.data)
// 
// 
//   const _getOwner = async () => {
//     try {
//       const result = await contract.methods.getContractOwner().call()
//       return web3.utils.keccak256(result)
//     } catch(error) {
//       console.log(error.message)
//     }
//   }
// 
//   console.log("current owner")
//     _getOwner()
  return (
    <>

      <CTABase
      title="JOIN US TODAY!"
    />

  
    </>
  )
}


BankPage.Layout = BaseLayout
