'use client';

import OAuthProviderButton from '@/features/auth/comps/OAuthProviderButton';
import { ProvidersType } from '../types/next-auth';
import Image from 'next/image';
import Github from '@/../public/icons/ic_github.svg';
import { Button } from '@/components/ui/button';

type Props = {
    providers: ProvidersType | null;
};

const SignInForm = ({ providers }: Props) => {
    return (
        <>
            <div className="flex md:max-w-[1024px] flex-col mx-auto px-4 pt-[27px] grow w-full items-start justify-start">
                <span className="font-clashGrotesk font-semibold text-2xl leading-[29px] text-[#0057CC]">
                    Ticketscoup
                </span>
            </div>
            <div className="md:max-w-[1024px] flex flex-col mx-auto px-4 grow h-full w-full items-center justify-center">
                <div className="glass-card-gradient md:shadow-[0px_4px_4px_rgba(0,0,0,0.04)] z-20 max-w-sm w-full min-h-[300px] rounded-xl   md:border md:border-[#DEE5EE] p-6 flex items-center justify-center flex-col gap-4">
                    <div className="flex flex-col font-satoshi text-center gap-2 font-medium text-base leading-[23px]">
                        Welcome to
                        <span className="font-clashGrotesk font-semibold text-2xl leading-[29px] text-[#0057CC]">
                            Ticketscoup
                        </span>
                    </div>

                    <div className="w-full pt-6">
                        {providers && (
                            <OAuthProviderButton
                                key={`oauth-button-${providers['github'].name}`}
                                provider={providers['github']}
                                className="shrink-0 grow-0 w-full"
                            />
                        )}
                    </div>
                    <div className="flex flex-col text-center mx-auto gap-2 w-full">
                        <p className="font-satoshi text-sm leading-5"> or</p>
                        <input
                            type="email"
                            required
                            className="px-5 py-[7px] border border-[#DEE5EE] rounded-md"
                            placeholder="m@example.com"
                        />
                        <Button
                            variant={'default'}
                            className="border flex items-center border-[#DEE5EE] rounded-md shadow-none px-5 py-5 bg-white mt-2 text-[#050C16] hover:bg-[#0057CC] hover:text-white"
                        >
                            Continue with Email
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignInForm;
