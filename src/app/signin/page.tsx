'use client';

import { useEffect, useState } from 'react';

import { ProvidersType } from '@/features/auth/types/next-auth';
import SignInForm from '@/features/auth/components/SignInForm';
import { apiClient } from '@/lib/api-client';
import { getProviders } from 'next-auth/react';

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
        const res = await apiClient.post({ path: '/api/signin/magic-link', data: { email } });

        alert(res.data);
    };
    return (
        <main className="h-[calc(100vh_-_64px_-_10vh)] flex flex-col gap-12">
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border border-red-500"
            />
            <button onClick={handleSubmit}>Click</button>
            <SignInForm providers={providers} />
        </main>
    );
};

export default SigninPage;
