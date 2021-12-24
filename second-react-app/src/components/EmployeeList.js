import React, { useContext } from 'react';
import Employee from './Employee';
import { EmployeeContext } from './EmployeeContext';

export default function EmployeeList() {

    const [EmployeeList, newEmployeeList] = useContext(EmployeeContext);
    return (
        <div>
        { EmployeeList && EmployeeList.map((employee, id) => {
            
             return(
                <Employee employeeName={employee.employeeName} email={employee.email} />
             )
        })}
            
        </div>
    )
}
