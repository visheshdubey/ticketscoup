'use client';

import OAuthProviderButton from '@/features/auth/components/OAuthProviderButton';
import { ProvidersType } from '../next-auth';

type Props = {
    providers: ProvidersType | null;
};

const SignInForm = ({ providers }: Props) => {
    return (
        <div className="max-w-lg flex flex-col mx-auto px-4 grow h-full w-full items-center justify-center">
            <div className="glass-card-gradient z-20 max-w-md w-full min-h-[300px] rounded-md  border border-neutral-100 p-8 flex items-center justify-center flex-col gap-4">
                <h1 className="text-sm text-center mb-3 text-slate-800/70">
                    <p className="mb-2">Welcome to </p>
                    Ticketscoup
                </h1>
                {
                    providers && (
                        // Object.values(providers)["github"].map((provider) => (
                        <OAuthProviderButton
                            key={`oauth-button-${providers['github'].name}`}
                            provider={providers['github']}
                        />
                    )
                    // ))
                }
            </div>
        </div>
    );
};

export default SignInForm;
