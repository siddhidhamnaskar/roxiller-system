import { createContext, useState } from "react";


export const MonthContext=createContext({});

export function MonthContextProvider({children}){
      const [month,setMonth]=useState("March");
      

      return (
        <MonthContext.Provider value={{month,setMonth}}>
        {children}
        </MonthContext.Provider>
      );

}