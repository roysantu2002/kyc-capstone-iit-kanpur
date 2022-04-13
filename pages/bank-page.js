
// import { getAllCourses } from "@content/courses/fetcher"
import { CTABase } from "@components/ui/common";
import { AddBank } from "@components/ui/kyc";
import { BaseLayout } from "@components/ui/layout";


export default function BankPage() {
//    const { web3, contract, requireInstall } = useWeb3()
//   const { hasConnectedWallet, isConnecting, account } = useWalletInfo()
// 
//   const _addBank = async () => {
//     try {
//       await contract.methods.addNewBank(data.name, data.address);
//       result =  await contract.methods.getBank(_bankOne);
//      console.log(result)
//     } catch(error) {
//       console.log(error.message)
//     }
//   }
// 
//   console.log("current owner")
//     _getOwner()
  return (
    <>
    <AddBank/>

      <CTABase
      title="JOIN US TODAY!"
    />

  
    </>
  )
}


BankPage.Layout = BaseLayout
