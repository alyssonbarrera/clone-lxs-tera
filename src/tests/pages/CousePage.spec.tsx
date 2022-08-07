import { render, screen } from '@testing-library/react';
import CoursePage from "../../pages/course/[courseSlug]/index"

const data = {
    course: {
        courseName: "Full Stack Development",
        courseAcronym: "dfs",
        courseImage: {
            url: "test"
        },
        coursePeriod: "part-time",
        id: "1",
        slug: "full-stack-development",
        modules: [
            {
                liveLessons: [
                    {
                        id: "1",
                        slug: "front-end",
                        title: "Front-end",
                        date: "2020-01-01",
                        startTime: 10,
                        endTime: 11,
                        about: {
                            html: "<p>teste</p>"
                        },
                        objectives: {
                            html: "<p>teste</p>"
                        },
                        teacher: {
                            name: "John Doe",
                            image: {
                                url: "test"
                            },
                            bio: "Software engineer",
                            linkedin: "https://www.linkedin.com/in/john-doe/"
                        }
                    },
                    {
                        id: "2",
                        slug: "back-end",
                        title: "Back-end",
                        date: "2020-01-01",
                        startTime: 10,
                        endTime: 11,
                        about: {
                            html: "<p>teste</p>"
                        },
                        objectives: {
                            html: "<p>teste</p>"
                        },
                        teacher: {
                            name: "John Doe",
                            image: {
                                url: "test"
                            },
                            bio: "Software engineer",
                            linkedin: "https://www.linkedin.com/in/john-doe/"
                        }
                    }

                ],
                id: "1",
                moduleNumber: "1",
                moduleTitle: "Boas vindas",
                chapters: [
                    {
                        id: "1",
                        slug: "html",
                        title: "HTML",
                        duration: "30",
                        lessons: [
                            {
                                id: "1",
                                video: {
                                    url: "test"
                                }
                            }
                        ]
                    },
                    {
                        id: "2",
                        slug: "css",
                        title: "CSS",
                        duration: "30",
                        lessons: [
                            {
                                id: "1",
                                video: {
                                    url: "test"
                                }
                            }
                        ]
                    },
                    {
                        id: "3",
                        slug: "javascript",
                        title: "JavaScript",
                        duration: "30",
                        lessons: [
                            {
                                id: "1",
                                video: {
                                    url: "test"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

jest.mock('next-auth/react')
jest.mock('next/router', () => ({
    useRouter: jest.fn().mockReturnValue({
      push: jest.fn(),
      query: {
        courseSlug: 'dfs'
      }
    }),
}))

describe("Course Page", () => {
    it("renders correctly", () => {
        render(<CoursePage data={data} />)

        expect(screen.getByText("Front-end")).toBeInTheDocument()
        expect(screen.getByText("Back-end")).toBeInTheDocument()
        expect(screen.getByText("HTML")).toBeInTheDocument()
        expect(screen.getByText("CSS")).toBeInTheDocument()
        expect(screen.getByText("JavaScript")).toBeInTheDocument()
    })
})