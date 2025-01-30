import prisma from './prisma';

export const findUserByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: { email },
    });
    return user;
};

export const createUser = async (user: any) => {
    const newUser = await prisma.user.create({
        data: {
            email: user.email,
            name: user.name,
        },
    });

    return newUser;
};
