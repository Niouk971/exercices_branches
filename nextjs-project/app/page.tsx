import Link from "next/link";

export default function Home() {
    const projects = [
        {
            slug: "google",
            title: "Google",
            demoUrl: "https://google.com",
            githubUrl: "https://github.com/google/google.git",
        },
        {
            slug: "facebook",
            title: "Facebook",
            demoUrl: "https://facebook.com",
            githubUrl: "https://github.com/meta/facebook.git",
        },
        {
            slug: "le-bon-coin",
            title: "Le bon coin",
            demoUrl: "https://leboncoin.com",
            githubUrl: "https://github.com/leboncoin/leboncoin.git",
        },
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl">Mes projects</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.slug} className="text-blue-400">
                        <Link href={`/project/${project.slug}`}>{project.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}