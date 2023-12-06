"use client";

import { useRouter } from "next/navigation";

export default function NewPage() {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const data = { title, description };

        const res = await fetch("/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const json = await res.json();
        console.log(json);

        router.push("/");
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <form
                className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2"
                onSubmit={onSubmit}
            >
                <label htmlFor="title" className="font-bold text-sm">
                    Titulo de la tarea
                </label>
                <input
                    id="title"
                    type="text"
                    className="border border-gray-400 p-2 mb-4 w-full text-black"
                    placeholder="Titulo"
                />

                <label htmlFor="description" className="font-bold text-sm">
                    Descripcion de la tarea
                </label>
                <textarea
                    id="description"
                    rows="3"
                    className="border border-gray-400 p-2 mb-4 w-full text-black"
                    placeholder="Describe tu tarea"
                ></textarea>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Crear
                </button>
            </form>
        </div>
    );
}
