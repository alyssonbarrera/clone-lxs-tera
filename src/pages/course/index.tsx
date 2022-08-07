import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"

export default function Course() {
    return (
        <></>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req });

    if(!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }
    else {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
}