export function isEmpty<T>(value: T): boolean {
    if (value == null) {
        return true;
    }

    if (
        typeof value === 'boolean' ||
        typeof value === 'number' ||
        typeof value === 'bigint' ||
        typeof value === 'function'
    ) {
        return false;
    }

    if (typeof value === 'string' || Array.isArray(value)) {
        return value.length === 0;
    }

    if (value instanceof Map || value instanceof Set) {
        return value.size === 0;
    }

    if (typeof value === 'object') {
        return Object.keys(value as object).length === 0 && !(value as object).valueOf();
    }

    return false;
}
