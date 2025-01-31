'use client';

import { signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

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

    return <div>Loader.. Signing you in!</div>;
};

export default MagicLinkPage;
