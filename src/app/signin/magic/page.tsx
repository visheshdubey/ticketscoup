'use client';

import { signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Spinner from '@/components/spinner';

type Props = {};

const MagicLinkPage = (props: Props) => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const credentialsAction = () => {
        if (!token) {
            return;
        }

        signIn('credentials', { token, redirectTo: '/' });
    };

    useEffect(() => {
        credentialsAction();
    }, [token]);

    return (
        <>
            <main className="h-screen flex flex-col gap-12">
                <div className="md:max-w-[1024px] gap-10 mx-auto px-4 flex flex-col justify-center items-center grow h-full w-full">
                    <div className="flex flex-col max-w-80 w-full items-center justify-center gap-4">
                        <span className="font-clashGrotesk text-center font-semibold text-[40px] leading-[49px] text-[#0057CC]">
                            Ticketscoup
                        </span>
                        <p className="font-satoshi text-center text-sm leading-5 font-medium text-[#5C5C5C]">
                            Please wait while we sign you in, with{' '}
                            <span className="font-satoshi font-bold text-sm leading-5 text-center">
                                ankitjiganwal@gmail.com
                            </span>
                        </p>
                    </div>

                    <div className="flex items-center border border-solid border-[#DEE5EE] justify-center rounded-lg  px-6 py-[11px]">
                        <Spinner size="xs" />
                    </div>
                </div>
            </main>
        </>
    );
};

export default MagicLinkPage;
