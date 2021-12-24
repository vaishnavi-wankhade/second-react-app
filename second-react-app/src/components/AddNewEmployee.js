import React, { useContext, useState } from 'react';
import { EmployeeContext } from './EmployeeContext';

export default function AddNewEmployee() {

    const[EmployeeList, newEmployeeList] = useContext(EmployeeContext)
    
    const [employeeName, newEmployeeName] = useState(" ");
    const [email, newEmail] = useState(" ");

    const addEmployee = () => {

        newEmployeeList((prev) => [...prev , {employeeName:employeeName , email:email}])
        

    }

    return (
        <div>
        <input
        type="text"
        placeholder="add name"
        value={employeeName}
        onChange={(e) => newEmployeeName(e.target.value)} />

        <input
        type="text"
        placeholder="add email"
        value={email}
        onChange={(e) => newEmail(e.target.value)} />

        <button onClick={addEmployee}>Add Employee</button>
            
        </div>
    )
}
