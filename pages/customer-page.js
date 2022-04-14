
// import { getAllCourses } from "@content/courses/fetcher"
import { useWalletInfo } from "@components/hooks/web3";
import { useWeb3 } from "@components/providers";
import { CTABase } from "@components/ui/common";
import { AddCustomer } from "@components/ui/kyc";
import { BaseLayout } from "@components/ui/layout";

export default function CustomerPage() {
   const { web3, contract, requireInstall } = useWeb3()
  const { hasConnectedWallet, isConnecting, account } = useWalletInfo()

  return (
    <>
    <AddCustomer/>
      <CTABase
      title="JOIN US TODAY!"
    />

  
    </>
  )
}


CustomerPage.Layout = BaseLayout
