import { getSelfByUsername } from '@/lib/auth-service';
import { redirect } from 'next/navigation';
import { Nav } from './_components/nav';
import Sidebar from './_components/sidebar';
import { Container } from './_components/container';

interface CreatorLayoutProps {
  params: {
    username: string;
  };
  children: React.ReactNode;
}

const CreatorLayout = async ({ params, children }: CreatorLayoutProps) => {
  const self = await getSelfByUsername(params.username);

  if (!self) {
    redirect('/');
  }

  return (
    <>
      <Nav />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default CreatorLayout;
