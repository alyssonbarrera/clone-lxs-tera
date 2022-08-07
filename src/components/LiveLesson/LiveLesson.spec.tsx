import { render, screen } from '@testing-library/react';
import { LiveLesson } from './LiveLesson';

describe('LiveLesson', () => {
    it('renders correctly', () => {
        render(
            <LiveLesson
                slug='/test'
                title='Introdução'
                day={'2'}
                month={'fevereiro'}
                startTime={10}
                endTime={12}
                teacherImage='fake-image'
                teacherName={'John Doe'}
            />
        );
        
        expect(screen.getByText('Introdução')).toBeInTheDocument();
        expect(screen.getByText('Com: John Doe')).toBeInTheDocument();
        expect(screen.getByTestId('test-liveLesson').getAttribute('href')).toBe('/test');
        expect(screen.getByText('10h - 12h')).toBeInTheDocument();
    })
})