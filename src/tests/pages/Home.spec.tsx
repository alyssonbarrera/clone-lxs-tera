import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/react";
import Home from "../../pages";

const data = {
    courses: [{
        id: "1",
        slug: "test",
        alternativeSlug: "test",
        courseImage: {
            url: "test"
        },
        courseName: "Full Stack Development",
        courseAcronym: "dfs",
        coursePeriod: "part-time",
    }]
}

let user = {
    name: "John Doe",
    email: "johndoe@email.com",
    courses: [
        {
            id: "1",
            slug: "test",
            alternativeSlug: "test",
            courseImage: {
                url: "test"
            },
            courseName: "Full Stack Development",
            courseAcronym: "dfs",
            coursePeriod: "part-time",
        }
    ]
}

jest.mock('next-auth/react')
jest.mock('next/router', () => ({
    useRouter: jest.fn().mockReturnValue({
      push: jest.fn(),
    }),
}))

describe("Home", () => {
    it("renders correctly", () => {
        const useSessionMocked = jest.mocked(useSession)

        useSessionMocked.mockReturnValueOnce({
            data: {
                expires: 'fake-expires',
                user: {
                    name: 'John Doe',
                    email: 'johndoe@email.com',
                    image: 'fake-image'
                }
            }, status: 'authenticated'
        })

        render(<Home data={data} user={user} />)

        expect(screen.getByText('Olá, John Doe')).toBeInTheDocument()
        expect(screen.getByText('Full Stack Development')).toBeInTheDocument()
        expect(screen.getByText('Remoto (part-time)')).toBeInTheDocument()
        
    })

    it("renders correctly if user has more than one stroke", () => {
        const useSessionMocked = jest.mocked(useSession)

        useSessionMocked.mockReturnValueOnce({
            data: {
                expires: 'fake-expires',
                user: {
                    name: 'John Doe',
                    email: 'johndoe@email.com',
                    image: 'fake-image'
                }
            }, status: 'authenticated'
        })

        let user = {
            name: "John Doe",
            email: "johndoe@email.com",
            courses: [
                {
                    id: "1",
                    slug: "test",
                    alternativeSlug: "test",
                    courseImage: {
                        url: "test"
                    },
                    courseName: "Full Stack Development",
                    courseAcronym: "dfs",
                    coursePeriod: "part-time",
                },
                {
                    id: "2",
                    slug: "test2",
                    alternativeSlug: "test2",
                    courseImage: {
                        url: "test2"
                    },
                    courseName: "Digital Product Leadership",
                    courseAcronym: "dpd",
                    coursePeriod: "part-time",
                }
            ]
        }

        render(<Home data={data} user={user} />)

        expect(screen.getByText('Olá, John Doe')).toBeInTheDocument()
        expect(screen.getByText('Full Stack Development')).toBeInTheDocument()
        expect(screen.getByText('Digital Product Leadership')).toBeInTheDocument()
    })
})