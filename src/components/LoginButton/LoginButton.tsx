import { Spinner } from "@chakra-ui/react";
import classNames from "classnames";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

interface LoginButtonProps {
    state?: string;
}

export function LoginButton({ state }: LoginButtonProps) {
    return (
        <button 
            className={classNames("flex p-2 justify-between items-center border-2 border-gray-500 rounded-lg hover:-translate-y-1 transition hover:shadow-xl", {
                "pointer-events-none bg-gray-50 border-none": state == "disabled"
            })}
            onClick={() => signIn('google')}
            >
            <FcGoogle size={32}/>
            <span className='flex-grow text-base font-bold uppercase'>
                {
                    state == "disabled" ? <Spinner mt={1.5} mr={5} /> : "Entrar com o google"
                }
            </span>
        </button>
    )
}