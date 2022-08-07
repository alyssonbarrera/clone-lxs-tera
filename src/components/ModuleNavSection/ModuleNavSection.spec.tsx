import { render, screen } from '@testing-library/react';
import { ModuleNavSection } from './ModuleNavSection';

describe('ModuleNavSection', () => {
    it('renders correctly', () => {
        render(
            <ModuleNavSection
                currentSection={1}
                modulesQuantity={2}
            />
        )
        expect(screen.getByText('01')).toBeInTheDocument();
        expect(screen.getByText('02')).toBeInTheDocument();
    })
})