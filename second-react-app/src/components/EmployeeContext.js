import React, { createContext, useState } from 'react';

export const EmployeeContext = createContext();
export default function EmployeeProvider(props) {

    const[EmployeeList, newEmployeeList] = useState([

        {
            employeeName: "Vaishnavi" ,
            email: "v@gmail.com"
        },

        {
            employeeName: "Swati" ,
            email: "s@gmail.com"
        }
    ]);

    return (
        <div>
        <EmployeeContext.Provider value={[EmployeeList, newEmployeeList]}>
            {props.children}
            </EmployeeContext.Provider>
        </div>
    )
}
