
import { BaseLayout } from "@components/ui/layout"
import { Hero } from "@components/ui/common"
// import { getAllCourses } from "@content/courses/fetcher"

export default function Home() {
  return (
    <>
      <Hero />
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
