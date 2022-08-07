import { render, screen } from '@testing-library/react';
import { TeacherCard } from './TeacherCard';

describe('TeacherCard', () => {
    it('renders correctly', () => {
        render(
            <TeacherCard
                teacherImage='fake-image'
                teacherName='John Doe'
                teacherBio='Software engineer'
                teacherLinkedin='www.linkedin.com/in/john-doe'
            />
        );
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Software engineer')).toBeInTheDocument();
        expect(screen.getByTestId('test-teacherCard-link').getAttribute('href')).toBe('www.linkedin.com/in/john-doe');
        expect(screen.getByTestId('test-teacherCard-image').getAttribute('src')).toBe('fake-image');
    })
})