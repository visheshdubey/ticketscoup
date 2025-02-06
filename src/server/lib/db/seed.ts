import prisma from './prisma';

export const seedDB = async () => {
    await seedFirstUser();
    await seedTeam();
    await seedFirstTeamAdminProfile();
};

const seedTeam = async () => {
    const team = await prisma.team.findMany({});

    if (team.length > 0) {
        return;
    }

    await prisma.team.create({
        data: {
            name: process.env.DEFAULT_TEAM_NAME,
            isActive: true,
        },
    });
};

const seedFirstUser = async () => {
    const user = await prisma.user.findMany({});

    if (user.length > 0) {
        return;
    }

    await prisma.user.create({
        data: {
            name: process.env.DEFAULT_TEAM_DEVELOPER_USER_NAME,
            email: process.env.DEFAULT_TEAM_DEVELOPER_USER_EMAIL,
        },
    });
};

const seedFirstTeamAdminProfile = async () => {
    const team = await prisma.team.findMany({});
    const user = await prisma.user.findMany({});

    if (team.length <= 0) {
        throw new Error(' ⨯ No Team found! There should be a Team created before assigning Developers.');
    }

    if (user.length <= 0) {
        throw new Error(' ⨯ No User found! There should be a User created before assigning it as Developer.');
    }

    const admin = await prisma.teamUserProfile.findMany({
        where: {
            AND: {
                teamId: team[0].id,
                userId: user[0].id,
                role: 'DEVELOPER',
            },
        },
    });

    if (admin.length > 0) {
        return;
    }

    console.info(' - No admins found for', team[0].name);
    console.info(' - Creating Developer profile for', team[0].name);

    await prisma.teamUserProfile.create({
        data: {
            userId: user[0].id,
            teamId: team[0].id,
            role: 'DEVELOPER',
        },
    });
};
