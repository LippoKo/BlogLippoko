import { signIn, signOut, useSession } from 'next-auth/react';

function HomePage() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Home Page</h1>
      {!session ? (
        <button onClick={() => signIn('google')}>Entrar com Google</button>
      ) : (
        <button onClick={() => signOut()}>Sair</button>
      )}
    </div>
  );
}

export default HomePage;
