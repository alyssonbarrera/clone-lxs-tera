import { fireEvent, render, screen } from '@testing-library/react';
import { signIn, useSession } from 'next-auth/react';
import { LoginButton } from './LoginButton';

jest.mock('next-auth/react');
jest.mock('next/router', () => ({
    useRouter: jest.fn().mockReturnValue({
      push: jest.fn(),
    }),
}))

describe('LoginButton component', () => {
    it('redirects user to sign in when not authenticated', () => {
        const useRouterMocked = jest.mocked(useSession)
        useRouterMocked.mockReturnValueOnce({
            data: null,
            status: 'loading',
        })

        const signInMocked = jest.mocked(signIn)

        render(<LoginButton />)

        const button = screen.getByText('Entrar com o google')

        fireEvent.click(button)

        expect(signInMocked).toHaveBeenCalled()
    })
})