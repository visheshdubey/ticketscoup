import prisma from './prisma';

export const dbUserFindByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: { email },
    });
    return user;
};

export const dbUserCreate = async (user: { email: string; name?: string }) => {
    const newUser = await prisma.user.create({
        data: {
            email: user.email,
            name: user.name,
        },
    });

    return newUser;
};

export const dbUserUpsertAndFetch = async (user: { email: string; name?: string }) => {
    const dbUser = await dbUserFindByEmail(user.email);

    if (dbUser) {
        return dbUser;
    }

    const newUser = await dbUserCreate(user);

    return newUser;
};
