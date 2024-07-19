"use client";

import TodoList from "@/app/components/todolist";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Todolist() {
  const pathname = usePathname();
  console.log("pathname :", pathname);
  return (
    <main>
      <Link href="/todolist/edit">Edit message</Link>
      <TodoList />
      <Link href="/">Back to welcome page</Link>
    </main>
  );
}
