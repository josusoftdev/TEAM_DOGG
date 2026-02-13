import { MemberCard } from "../components/MemberCard";

const teamMembers = [
  {
    name: "Julio Guzzo Kuster",
    role: "Tech Lead e Mestre de Sprint",
    githubUrl: "https://github.com/julio-kuster",
    imageurl: "https://github.com/julio-kuster.png",
  },
  {
    name: "Andrew Bertelli",
    role: "Front-end Lead",
    githubUrl: "https://github.com/AndrewBertelli",
    imageurl: "https://avatars.githubusercontent.com/u/105380583?v=4",
  },
  {
    name: "Felipe Hyczy",
    role: "Quality Assurance Lead",
    githubUrl: "https://github.com/felipehyczy",
    imageurl: "https://github.com/felipehyczy.png",
  },
  {
    name: "Josué Farah",
    role: "Back-end Developer e Lead de Arquitetura",
    githubUrl: "https://github.com/josusoftdev",
    imageurl: "https://github.com/josusoftdev.png",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <header className="mx-auto mb-10 max-w-5xl">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-400">Team Dogg - Desenvolvolvimento Fullstack</p>
        <h1 className="text-3xl font-extrabold md:text-4xl">Team DOGG</h1>
        <p className="mt-2 text-slate-400">Página oficial do team dogg da matéria de Desenvolvimento Fullstack</p>
        <p className="mt-2 text-slate-400">Prof. Me Giovane Galvão</p>
      </header>

      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
        {teamMembers.map((member) => (
          <MemberCard
            key={member.githubUrl}
            name={member.name}
            role={member.role}
            githubUrl={member.githubUrl}
            imageUrl={member.imageurl}
          />
        ))}
      </section>
    </main>
  );
}
