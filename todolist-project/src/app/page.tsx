import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/todolist" style={{ background: "salmon" }}>
        ToDoList page
      </Link>
    </main>
  );
}
