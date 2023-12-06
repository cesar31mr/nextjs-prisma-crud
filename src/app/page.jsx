import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

async function loadTask() {
    // const res = await fetch("http://localhost:3000/api/tasks");
    // const json = await res.json();
    // console.log(json);

    return await prisma.task.findMany();
}

export default async function HomePage() {
    const tasks = await loadTask();
    return (
        <section className="container mx-auto">
            <div className="grid grid-cols-3 gap-3 mt-10">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </section>
    );
}
