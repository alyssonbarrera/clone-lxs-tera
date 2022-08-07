import { render, screen } from '@testing-library/react';
import { LessonMenu } from './LessonMenu';
import React from 'react';

jest.mock('next-auth/react')
jest.mock('next/router', () => ({
    useRouter: jest.fn().mockReturnValue({
      push: jest.fn(),
    }),
}))

const items = [{
    presentation: 'Introdução',
    presentationId: 'introduction',
    lessons: ['Primeira aula', 'Segunda aula'],
    quiz: 'Quiz',
    conclusion: 'Conclusão',
    conclusionId: 'conclusion',
    practice: 'Prática',
    practiceId: 'practice'
}]

const activeContent = 'Segunda aula'

describe('LessonMenu', () => {
    it('renders correctly', () => {
        render(<LessonMenu title={"Boas-vindas"} items={items} />)

        expect(screen.getByText('Boas-vindas')).toBeInTheDocument()
        expect(screen.getByText('Introdução')).toBeInTheDocument()
        expect(screen.getByText('Primeira aula')).toBeInTheDocument()
        expect(screen.getByText('Segunda aula')).toBeInTheDocument()
        expect(screen.getByText('Quiz')).toBeInTheDocument()
        expect(screen.getByText('Prática')).toBeInTheDocument()
        expect(screen.getByText('Conclusão')).toBeInTheDocument()
        expect(screen.getByText('Voltar para o curso')).toBeInTheDocument()
    })

    it('renders correctly with activeContent', () => {
        render(<LessonMenu title={"Boas-vindas"} items={items} activeContent={activeContent} />)

        const activeContentLink = screen.getByTestId(activeContent)
        
        expect(activeContentLink.getAttribute('class')).toContain('text-white')
        expect(screen.getByText('Introdução').getAttribute('class')).not.toContain('text-white')
        expect(screen.getByTestId('Primeira aula').getAttribute('class')).not.toContain('text-white')
        expect(screen.getByText('Quiz').getAttribute('class')).not.toContain('text-white')
        expect(screen.getByText('Prática').getAttribute('class')).not.toContain('text-white')
        expect(screen.getByText('Conclusão').getAttribute('class')).not.toContain('text-white')
    })
})