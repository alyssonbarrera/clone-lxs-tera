import { Avatar, Button, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { memo } from "react";

function HeaderComponent() {

  const { data: session } = useSession()

  return (
    <header className="flex justify-center shadow-lg sticky top-0 bg-white z-30">
        <div className="flex items-center justify-between w-full max-w-6xl p-2">
            <Link href={"/"}>
                <a>
                    <strong className="text-4xl px-3 text-white bg-black">T</strong>
                </a>
            </Link>
            <div className="flex items-center gap-10">
                <p className="text-sm font-sans cursor-pointer">AJUDA</p>
                <Popover isLazy>
                  <PopoverTrigger>
                    <Button width={"0.5"} borderRadius={"3xl"}><Avatar data-testid="test-button" size={"md"} name={session?.user?.name} src={session?.user?.image} /></Button>
                  </PopoverTrigger>
                  <PopoverContent border={"none"} width={"40"} mt={2}>
                    <PopoverArrow />
                    <PopoverBody cursor={"pointer"} display={"flex"} justifyContent={"center"}>
                      <Button onClick={() => signOut()} textColor={"#00b5dd"} textTransform={"uppercase"} colorScheme={"white"} w={"full"} fontSize={"sm"}>Sair</Button>
                    </PopoverBody>
                  </PopoverContent>
              </Popover>
            </div>
        </div>
    </header>
  );
}

export const Header = memo(HeaderComponent)