import prisma from './prisma';

export const dbUserFindByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: { email },
    });
    return user;
};

export const dbUserCreate = async (user: any) => {
    const newUser = await prisma.user.create({
        data: {
            email: user.email,
            name: user.name,
        },
    });

    return newUser;
};

export const dbUserUpsert = async (user: any) => {};
