import type { IEmployee } from "@/src/shared/types/employee.interface";
import { PAGES } from "@/src/config/pages.config";
import Link from "next/link";
import Image from "next/image";

interface Props {
  employee: IEmployee;
}

export function Employee({ employee }: Props) {
  return (
    <div className="border border-white/10 rounded-xl bg-black text-white shadow-md hover:bg-white/10 transition">
      <Link className="block" href={PAGES.EMPLOYEEPAGE(employee.id)}>
        <div className="grid grid-cols-[80px_1fr_auto] gap-x-6 gap-y-3 items-center p-4">
          <div className="w-20 h-20">
            <Image
              src={employee.photoUrl}
              alt={employee.name}
              width={100}
              height={100}
              className="rounded-full object-cover border-2 border-gray-100"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{employee.name}</h3>

            {employee.position && (
              <p className="text-sm text-white/70">{employee.position}</p>
            )}
            {employee.department && (
              <p className="text-sm text-white/70">{employee.department}</p>
            )}
          </div>

          <div className="text-sm text-right whitespace-nowrap">
            <p>Возраст: {employee.age}</p>
            <p>Город: {employee.city}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
