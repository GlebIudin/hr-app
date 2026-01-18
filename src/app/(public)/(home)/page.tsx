import { Employee } from "./employee";

import { fetchEmployees } from "@/src/services/employeeService";

export default async function Home() {
  const employees = await fetchEmployees(10);

  return (
    <div className="min-h-screen flex justify-center px-4 py-8">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6">Домашняя страница</h1>
        <div className="space-y-6">
          {employees.map((employee) => (
            <Employee key={employee.id} employee={employee} />
          ))}
        </div>
      </div>
    </div>
  );
}
