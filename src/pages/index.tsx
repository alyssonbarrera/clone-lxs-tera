import { CourseCustomLayout } from "../components/CourseCustomLayout";
import { CourseContainer } from "../components/Course";
import { Flex, Spinner } from "@chakra-ui/react";
import { GetCoursesHomeDocument, GetCoursesHomeQuery } from "../graphql/generated";
import { GetServerSideProps } from "next";
import { fauna } from "../services/faunadb";
import { getSession } from "next-auth/react";
import { query } from "faunadb";
import { useEffect, useState } from "react";
import client from "../services/apollo";

interface CoursesProps {
  title: string
  slug: string
  courseImage: {
      url: string
  }
  courseName: string
  courseAcronym: string
  coursePeriod: string
  id: string
}

interface HomeProps {
  data: GetCoursesHomeQuery
  user: any
}

export default function Home({ data, user }: HomeProps) {
  const [loading, setLoading] = useState(true)
  
  const [userCourses, setUserCourses] = useState([] as CoursesProps[])
  const [otherCourses, setOtherCourses] = useState([] as CoursesProps[]);
  
  useEffect(() => {
      setUserCourses(user?.courses)
      setOtherCourses(data?.courses.filter(course => !user.courses.some(userCourse => userCourse.courseAcronym === course.courseAcronym)) as any)
      setLoading(false)
  }, [data]);

  return (
    <>
      {
        loading ? (
          <Flex justifyContent={"center"} alignItems={"center"} h={"container.md"}>
            <Spinner size={"lg"} />
          </Flex>
        ) : (
          <CourseContainer userCourses={userCourses} otherCourses={otherCourses} />
        )
      }
    </>
  )
}

Home.layout = CourseCustomLayout

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req });

    if(!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            }
        }
    }

    const user = await fauna.query(
      query.Get(
        query.Match(
            query.Index("user_by_email"),
            query.Casefold(session.user.email)
        )
      )
    )

    const courses = await client.query({
      query: GetCoursesHomeDocument
    });

    return {
      props: {
        data: courses.data,
        user: (user as any).data
      }
    };
}