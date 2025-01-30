'use client';

import { useEffect, useState } from 'react';

import { ProvidersType } from '@/features/auth/next-auth';
import SignInForm from '@/features/auth/components/SignInForm';
import { getProviders } from 'next-auth/react';

type Props = {};

const SigninPage = (props: Props) => {
    const [providers, setProviders] = useState<ProvidersType | null>(null);

    useEffect(() => {
        (async () => {
            const oAuthProviders = await getProviders();
            setProviders(oAuthProviders);
        })();
    }, []);

    return (
        <main className="h-[calc(100vh_-_64px_-_10vh)]">
            <SignInForm providers={providers} />
        </main>
    );
};

export default SigninPage;
