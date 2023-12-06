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
                    <div className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer" key={task.id}>
                        <h3 className="font-bold text-2xl mb-2">{task.title}</h3>
                        <p>{task.description}</p>
                        <p>{new Date(task.createdAt).toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
