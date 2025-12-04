"use client";

import Image from "next/image";
import { useState } from "react";

type FormModalProps = {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
};

function FormModal({ table, type, data, id }: FormModalProps) {
  const [open, setOpen] = useState(false);

  const Form = 
     type === "delete" && id ? (<form className="p-4 flex flex-col gap-4 "  >
        <span className="text-center font-medium ">All data will be lost. Are you sure you want to delete this {table} </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md w-max self-center ">Delete</button>
    </form>) : ("Create or Update form")
  

  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${size} ${bgColor} flex items-center justify-center rounded-full cursor-pointer `}
      >
        <Image src={`/${type}.png`} width={16} height={16} alt={type} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black opacity-85  z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] ">
            <div onClick={()=>setOpen(false)} className="absolute top-4 right-4 cursor-pointer  ">
              <Image src="/close.png" width={14} height={14} alt="close" />
            </div>
            {Form}
          </div>
        </div>
      )}
    </>
  );
}

export default FormModal;
