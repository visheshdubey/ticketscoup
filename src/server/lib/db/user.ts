import { AuthProvider } from '@/server/lib/constants/enums';
import prisma from './prisma';

type DBUserUpsertAndFetchParams = { provider?: AuthProvider; email: string; name?: string | null };

export const dbUserFindByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: { email },
    });
    return user;
};

export const dbUserFindById = async ({ id }: { id: number }) => {
    const user = await prisma.user.findUnique({
        where: { id },
    });
    return user;
};

export const dbUserCreate = async (user: { email: string; name?: string | null; provider: AuthProvider }) => {
    const newUser = await prisma.user.create({
        data: {
            email: user.email,
            name: user.name,
        },
    });

    return newUser;
};

export const dbUserUpsertAndFetch = async ({
    provider = AuthProvider.GITHUB,
    email,
    name,
}: DBUserUpsertAndFetchParams) => {
    const dbUser = await dbUserFindByEmail(email);

    if (dbUser) {
        return dbUser;
    }

    return await dbUserCreate({ email, name, provider });
};
