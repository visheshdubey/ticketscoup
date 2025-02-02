'use client';

import { Button } from '@/components/ui/button';
import ProviderIcon from '@/features/auth/comps/ProviderIcon';
import { ProvidersType } from '../types/next-auth';
import { signIn } from 'next-auth/react';

type OAuthProviderButtonProps = {
    provider: ProvidersType;
    className?: string;
};

const OAuthProviderButton = ({ provider, className = '' }: OAuthProviderButtonProps) => {
    return (
        <div className="w-full">
            <Button
                onClick={() => signIn(provider.id)}
                className={`h-9 flex rounded-md py-2 justify-center gap-2 items-center text-white  w-full ${className}`}
                variant="outline"
            >
                <ProviderIcon provider={provider.id} className="w-[18px] h-[18px]" />
                <span>Continue with {provider.name}</span>
            </Button>
        </div>
    );
};

export default OAuthProviderButton;
