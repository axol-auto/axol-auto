import { createContext } from 'react';

export const Context = createContext({
  userId: null,
  setUserId: () => {}
});