import { render, screen } from '@testing-library/react'
import { ClassContentCard } from './ClassContentCard'

describe('ClassContentCard', () => {
    it('renders correctly if content is video', () => {
        render(<ClassContentCard title='aula-teste' type='video' size={5} />)
        const icon = screen.getByTestId('test-icon-video')

        expect(screen.getByText('aula-teste')).toBeInTheDocument();
        expect(screen.getByText('5h')).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
    })
    it('renders correctly if content is pdf', () => {
        render(<ClassContentCard title='aula-teste' type='pdf' size={5} />)
        const icon = screen.getByTestId('test-icon-pdf')

        expect(screen.getByText('aula-teste')).toBeInTheDocument();
        expect(screen.getByText('5mb')).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
    })
    it('renders correctly if content is code', () => {
        render(<ClassContentCard title='aula-teste' type='code' size={5} />)
        const icon = screen.getByTestId('test-icon-code')

        expect(screen.getByText('aula-teste')).toBeInTheDocument();
        expect(screen.getByText('5mb')).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
    })
})