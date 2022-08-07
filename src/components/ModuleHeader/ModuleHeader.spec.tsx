import { render, screen } from '@testing-library/react';
import { ModuleHeader } from './ModuleHeader';

describe('ModuleHeader', () => {
    it('renders correctly', () => {
        render(
            <ModuleHeader
                title='test title'
                variant='class'
                day='2'
                month='fevereiro'
                year={2022}
                startTime={19}
                endTime={22}
            />
        )
        expect(screen.getByText('test title')).toBeInTheDocument();
        expect(screen.getByText('2 de fevereiro de 2022 19h - 22h')).toBeInTheDocument();
    })
})