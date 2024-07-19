import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome To ToDoList</h1>
      <Link href="/todolist">ToDoList page</Link>
    </main>
  );
}
