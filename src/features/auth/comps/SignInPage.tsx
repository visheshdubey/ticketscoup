'use client';

import { useEffect, useState } from 'react';

import { AppType } from '@/server/app';
import { ProvidersType } from '../types/next-auth';
import SignInForm from './SignInForm';
import { getProviders } from 'next-auth/react';
import { hc } from 'hono/client';

type Props = {};

const SigninPage = (props: Props) => {
    const [providers, setProviders] = useState<ProvidersType | null>(null);
    const [email, setEmail] = useState('');

    useEffect(() => {
        (async () => {
            const oAuthProviders = await getProviders();
            setProviders(oAuthProviders);
        })();
    }, []);

    const handleSubmit = async () => {
        const client = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL);
        const res = await client.api.signin['magic-link'].$post({ json: { email } });
        const data = await res.json();
    };

    return (
        <main className="h-[calc(100vh_-_64px_-_10vh)] flex flex-col gap-12">
            <SignInForm providers={providers} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
        </main>
    );
};

export default SigninPage;
