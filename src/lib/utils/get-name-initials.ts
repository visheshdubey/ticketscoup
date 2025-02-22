export function getNameInitials(name: string) {
    const splitName = name.toUpperCase().split(' ');
    const initials = splitName[0][0] + splitName[1][0];

    return initials;
}
