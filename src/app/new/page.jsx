"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewPage({ params }) {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if(params.id) {
            fetch(`/api/tasks/${params.id}`)
                .then((res) => res.json())
                .then((data) => {
                    setTitle(data.title);
                    setDescription(data.description);
                });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        if(params.id) {
            await fetch(`/api/tasks/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    description,
                }),
            });
        } else {
            await fetch("/api/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    description,
                }),
            });
        }
        
        router.refresh();
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
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />

                <label htmlFor="description" className="font-bold text-sm">
                    Descripcion de la tarea
                </label>
                <textarea
                    id="description"
                    rows="3"
                    className="border border-gray-400 p-2 mb-4 w-full text-black"
                    placeholder="Describe tu tarea"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                ></textarea>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Crear
                </button>
            </form>
        </div>
    );
}
