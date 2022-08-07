import { render, fireEvent, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import { Header } from './Header';

jest.mock('next-auth/react')

describe('Header', () => {
    it('open popover by clicking on the image', () => {
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

        render(<Header />);

        const image = screen.getByTestId('test-button');
        fireEvent.click(image);

        expect(screen.getByText('Sair')).toBeInTheDocument();
    })
})