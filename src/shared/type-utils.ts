
/**
 * Remove passed fields from type
 */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/**
 * Arguments types of function
 */
type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;

export { Omit, ArgumentTypes };
