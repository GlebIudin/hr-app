import { fetchEmployeeById } from "@/src/services/employeeService";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Employee({ params }: PageProps) {
  const { id } = await params;

  const employee = await fetchEmployeeById(id);

  if (!employee) {
    return notFound();
  }

  return (
    <div className="flex justify-center items-center gap-4">
      <Image
        src={employee.photoUrl}
        alt={employee.name}
        width={250}
        height={250}
        className="rounded-xl"
      />
      <div>
        <h1>{employee.name}</h1>
        <p>Должность: {employee.position}</p>
        <p>Отдел: {employee.department}</p>
        <p>Возраст: {employee.age}</p>
      </div>
    </div>
  );
}
