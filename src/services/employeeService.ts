import type { IEmployee } from "../shared/types/employee.interface";
import type { RandomUserApiResponse } from "../shared/randomUserApi.interface";

export async function fetchEmployees(count = 10): Promise<IEmployee[]> {

  const positions = ['Frontend-разработчик', 'Backend-разработчик', 'Системный аналитик', 'Android-разработчик']

  const response = await fetch(
    `https://randomuser.me/api/?results=${count}&inc=name,dob,picture,email,phone,location,login`,
    {
      cache: "force-cache",
    },
  );

  if (!response.ok) {
    throw new Error("Ошибка загрузки сотрудников");
  }

  const data: RandomUserApiResponse = await response.json();

  return data.results.map((user, index) => ({
    id: user.login.uuid,
    name: `${user.name.first} ${user.name.last}`,
    age: user.dob.age,
    position: positions[index % positions.length],
    department: "IT департамент",
    photoUrl: user.picture.large,
    email: user.email,
    phone: user.phone,
    city: user.location.city,
  }));
}

export async function fetchEmployeeById(id: string): Promise<IEmployee | null> {
  const employees = await fetchEmployees(10);

  return employees.find((employee) => employee.id === id) ?? null;
}
