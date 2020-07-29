import { Dispatch, SetStateAction } from 'react';

export function useStateIfMounted<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
