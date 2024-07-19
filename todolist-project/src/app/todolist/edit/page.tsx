import TodoList from "@/app/components/todolist";
import Link from "next/link";

export default function Edit() {
  return (
    <main>
      <Link href="/todolist">Back to Todolist Page</Link>
      <TodoList />
    </main>
  );
}
