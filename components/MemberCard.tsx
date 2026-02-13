interface MemberProps { /** Interface que define propriedades dos cards */
  name: string;
  role: string;
  githubUrl: string;
  imageUrl: string;
}

export function MemberCard({ name, role, githubUrl, imageUrl }: MemberProps) { /* Componente que representa um card nosso */
  return (
    <article className="rounded-lg border border-slate-800 bg-slate-900 p-4 transition-colors hover:border-blue-500">
    <img 
        src={imageUrl} 
        alt={`Foto de ${name}`} 
        className="w-42 h-42 rounded-full object-cover mb-4 border-2 border-slate-700"
      />

      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="mb-3 text-slate-400">{role}</p>
      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="underline text-blue-400 transition-colors hover:text-blue-300"
      >
        Ver GitHub
      </a>
    </article>
  );
}
