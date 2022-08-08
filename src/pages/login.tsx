import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { LoginButton } from '../components/LoginButton';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';

export default function Login() {

    const router = useRouter()

    const [buttonState, setButtonState] = useState("enabled");

    router?.events?.on('routeChangeComplete', () => {
        setButtonState("enabled")
    })
    
    return (
        <>
            <main className="md:bg-gradient h-[90vh] sm:h-[100vh] md:p-4">
                <div className="flex flex-col bg-white items-center w-full h-full">
                    <div
                        className='flex gap-2 flex-grow w-full flex-col justify-center max-w-xs'
                        onClick={() => {setButtonState("disabled")}}
                    >
                        <h1 className='text-7xl font-bold mx-auto'>LXS</h1>
                        <LoginButton state={buttonState} />
                    </div>
                    <footer className='mb-8 text-sm md:text-base'>
                        <p className='text-center'><a className='uppercase underline'>termos de uso</a>  •  <a className='uppercase underline'>política de privacidade</a></p>
                        <p className='text-center uppercase mt-2'>Feito com amor por Alysson</p>
                    </footer>
                </div>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req });

    if(session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}