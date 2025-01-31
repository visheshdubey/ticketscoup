import GithubProvider from 'next-auth/providers/github';

export const githubConfig = {
    clientId: process.env.GITHUB_CLIENT_ID || '',
    clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
};

export const GithubAuth = GithubProvider(githubConfig);
