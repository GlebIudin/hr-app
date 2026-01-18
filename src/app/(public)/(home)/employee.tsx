import type { IEmployee } from "@/src/shared/types/employee.interface";
import { PAGES } from "@/src/config/pages.config";
import Link from "next/link";
import Image from "next/image";

interface Props {
  employee: IEmployee;
}

export function Employee({ employee }: Props) {
  return (
    <div className="border border-white/10 rounded-xl bg-black text-white shadow-md">
      <Link href={PAGES.EMPLOYEEPAGE(employee.id)}>
        <div className="grid grid-cols-6 gap-30">
          <div className="w-20 h-20 flex-shrink-0">
            <Image
              src={employee.photoUrl}
              alt={employee.name}
              width={100}
              height={100}
              className="rounded-full object-cover border-2 border-gray-100"
            />
          </div>

          <div className="">
            <h3 className="">
              {employee.name}
            </h3>
          </div>

          {employee.position && (
            <p className="">{employee.position}</p>
          )}
          {employee.department && (
            <p className="">{employee.department}</p>
          )}

          <div className="">
            <div className="">
              <span>Возраст:</span>
              <span>{employee.age}</span>
            </div>
          </div>

          {employee.city && (
            <p>
              <span>Город: </span>
              <span>{employee.city}</span>
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}
