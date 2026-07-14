import { SyntheticEvent } from "react";
type Fn<T> = (event: T, ...args: unknown[]) => void;
export declare function composeEvents<T extends SyntheticEvent<any>>(
  ...fns: (Fn<T> | undefined)[]
): (event: T, ...args: unknown[]) => void;
export {};
