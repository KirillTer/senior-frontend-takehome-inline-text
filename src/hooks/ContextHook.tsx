import React, { createContext, useContext, useState, FC, SetStateAction, Dispatch, ReactNode } from "react";

export interface ContextProviderProps {
  children: ReactNode;
}

export interface ContextStateProps {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

export const InputContext = createContext<ContextStateProps>({
  inputValue: "",
  setInputValue: () => {}
});

export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
};

export function useCont() {
  return useContext(InputContext);
}