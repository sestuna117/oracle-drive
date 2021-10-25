export type Nullable<T> = T | null | undefined;

export function isNullOrUndefined<T>(obj: T | null | undefined) {
    return obj === null || obj === undefined;
}