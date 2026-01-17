import type { IEmployee } from "@/shared/types/employee.interface";

interface Props {
  employee: IEmployee;
}

export function Employee({ employee }: Props) {
  return (
    <div className="border border-white/10 rounded-xl p-4 bg-black text-white shadow-md">
      <h1>{employee.name}</h1>
      <h2>{employee.age}</h2>
      <h2>{employee.experience}</h2>
    </div>
  );
}
