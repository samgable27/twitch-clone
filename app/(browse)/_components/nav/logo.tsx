import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const font = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
          <Image src="/spooky.svg" width="32" height="32" alt="Gamehub" />
        </div>
        <div className={cn('hidden lg:block', font.className)}>
          <p className="text-lg font-semibold">Gamehub</p>
          <p className="text-xs text-muted-foreground">Watch Anywhere&trade;</p>
        </div>
      </div>
    </Link>
  );
};
