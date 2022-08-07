import { render, screen } from '@testing-library/react';
import { LessonCard } from './LessonCard';

describe("Lesson Card", () => {
    it("renders correctly", () => {
        render(<LessonCard id={'1'} slug='slug-teste' title='aula-teste' duration={2} numberOfVideos={2} />)

        expect(screen.getByText('aula-teste')).toBeInTheDocument();
        expect(screen.getByText('2 vídeos')).toBeInTheDocument();
        expect(screen.getByTestId('test-card').getAttribute('href')).toBe('/slug-teste')
    })
})