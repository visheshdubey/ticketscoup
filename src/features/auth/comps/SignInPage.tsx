'use client';

import { useEffect, useState } from 'react';
import { ProvidersType } from '../types/next-auth';
import SignInForm from './SignInForm';
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
        <main className="h-[calc(100vh_-_64px_-_10vh)] flex flex-col gap-12">
            <SignInForm providers={providers} />
        </main>
    );
};

export default SigninPage;
