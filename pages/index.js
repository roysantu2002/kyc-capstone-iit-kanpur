
// import { getAllCourses } from "@content/courses/fetcher"
import { useWalletInfo } from "@components/hooks/web3";
import { useWeb3 } from "@components/providers";
import { CTABase, Hero } from "@components/ui/common";
import { Fetures } from "@components/ui/features/Fetures";
import { Address, Owner } from "@components/ui/kyc";
import { BaseLayout } from "@components/ui/layout";


export default function Home() {
   const { web3, contract, requireInstall } = useWeb3()
  const { hasConnectedWallet, isConnecting, account } = useWalletInfo()
  // console.log(`this is the account `)
  // console.log(account.data)


  // console.log("current owner")
  //   _getOwner()
  return (
    <>
      <Hero />
     <Owner/>
     <Address/>
        <Fetures/>
      <CTABase
      title="JOIN US TODAY!"
    />

  

      {/* <CourseList
        courses={courses}
      >
      {course =>
        <CourseCard
          key={course.id}
          course={course}
        />
      }
      </CourseList> */}
    </>
  )
}

// export function getStaticProps() {
//   const { data } = getAllCourses()
//   return {
//     props: {
//       courses: data
//     }
//   }
// }

Home.Layout = BaseLayout
