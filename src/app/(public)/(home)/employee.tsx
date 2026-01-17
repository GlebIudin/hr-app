import type { IEmployee } from "@/shared/types/employee.interface";
import { PAGES } from "@/src/config/pages.config";
import Link from "next/link";

interface Props {
  employee: IEmployee;
}

export function Employee({ employee }: Props) {
  return (
    <div className="border border-white/10 rounded-xl p-4 bg-black text-white shadow-md">
      <Link href={PAGES.EMPLOYEEPAGE(employee.name)}>{employee.name}</Link>
      <h2>{employee.age}</h2>
      <h2>{employee.experience}</h2>
    </div>
  );
}
