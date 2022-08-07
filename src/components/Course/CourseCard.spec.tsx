import { render, screen } from '@testing-library/react';
import { CourseCard } from './CourseCard';


describe('CardCourse', () => {
    it('CardCourse renders correctly', () => {
        render(
            <CourseCard
                slug="DFS"
                title="full stack development"
                period="part-time"
                image="https://storage.googleapis.com/tera-site/dfs/logo_dsf.svg"
                progress={50}
                userHasCourse={true}
            />
        )
        expect(screen.getByText('full stack development')).toBeInTheDocument()
        expect(screen.getByText('Remoto (part-time)')).toBeInTheDocument()
        expect(screen.getByTestId('test-link').getAttribute('href')).toBe('/course/DFS')
    })

    it('CardCourse renders correctly without userHasCourse', () => {
        render(
            <CourseCard
                slug="dfs"
                alternativeSlug="https://somostera.com/cursos/full-stack-development"
                title="full stack development"
                period="part-time"
                image="https://storage.googleapis.com/tera-site/dfs/logo_dsf.svg"
                progress={50}
                userHasCourse={false}
            />
        )
        expect(screen.getByText('full stack development')).toBeInTheDocument()
        expect(screen.getByText('Remoto (part-time)')).toBeInTheDocument()
        expect(screen.getByTestId('test-link').getAttribute('href')).not.toBe('/course/DFS')
    })
})