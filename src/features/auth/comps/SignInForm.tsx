'use client';

import OAuthProviderButton from '@/features/auth/comps/OAuthProviderButton';
import { ProvidersType } from '../types/next-auth';
import { Button } from '@/components/ui/button';
import { hc } from 'hono/client';
import { AppType } from '@/server/app';
import { useState } from 'react';

type Props = {
    providers: ProvidersType | null;
};

const SignInForm = ({ providers }: Props) => {
    const [email, setEmail] = useState('');

    const handleSubmit = async () => {
        // TODO: client to moved to common location
        const client = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL);
        const res = await client.api.signin['magic-link'].$post({ json: { email } });
        const data = await res.json();
    };

    return (
        <>
            <div className="hidden md:flex md:max-w-5xl flex-col mx-auto px-4 pt-[27px] grow w-full items-start justify-start">
                <span className="font-clashGrotesk font-semibold text-base leading-[19px] text-[#0057CC]">
                    Ticketscoup
                </span>
            </div>
            <div className="md:max-w-5xl flex flex-col mx-auto px-4 grow h-full w-full items-center justify-center">
                <div className="md:shadow-[0px_4px_4px_rgba(0,0,0,0.04)] z-20 max-w-sm w-full rounded-xl md:border md:border-[#DEE5EE] p-6 flex items-center justify-center flex-col">
                    <div className="flex flex-col font-satoshi text-center gap-2 font-medium text-base leading-[23px]">
                        <span> Welcome to</span>
                        <span className="font-clashGrotesk font-semibold text-2xl leading-[29px] text-[#0057CC]">
                            Ticketscoup
                        </span>
                    </div>

                    <div className="w-full pt-10">
                        {providers && (
                            <OAuthProviderButton
                                key={`oauth-button-${providers['github'].name}`}
                                provider={providers['github']}
                                className="shrink-0 grow-0 w-full bg-[#050C16] hover:bg-[#2c2c2c] hover:text-white text-sm font-satoshi font-medium leading-5"
                            />
                        )}
                    </div>
                    <div className="flex flex-col text-center mx-auto gap-2 w-full pt-2">
                        <p className="font-satoshi text-sm leading-5"> or</p>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-5 h-[34px] border text-sm leading-5 font-medium font-satoshi placeholder:text-[#596980] placeholder:text-sm placeholder:font-medium border-[#DEE5EE] rounded-md"
                            placeholder="m@example.com"
                        />
                        <Button
                            variant={'default'}
                            onClick={handleSubmit}
                            className="border flex items-center border-[#DEE5EE] rounded-md text-sm leading-5 font-satoshi font-medium shadow-none px-5 h-9 bg-white mt-2 text-[#050C16] hover:bg-[#0057CC] hover:text-white"
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
