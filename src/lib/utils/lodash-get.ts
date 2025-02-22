type Path<T> = T extends object
    ? {
          [K in keyof T]: K extends string | number ? `${K}` | `${K}.${Path<T[K]>}` : never;
      }[keyof T]
    : never;

export function get<T, K extends Path<T>>(obj: T, path: K, defaultValue?: any): any {
    if (!obj) return defaultValue;

    const keys = (Array.isArray(path) ? path : path.replace(/\[(\d+)\]/g, '.$1').split('.')) as string[];

    let result: any = obj;
    for (const key of keys) {
        if (result && typeof result === 'object' && key in result) {
            result = result[key];
        } else {
            return defaultValue;
        }
    }

    return result;
}
