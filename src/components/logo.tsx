import Link from 'next/link';
import { Crown } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Crown className="h-6 w-6 text-accent" />
      <span className="text-xl font-bold text-primary uppercase tracking-wider">Reign Jiu Jitsu</span>
    </Link>
  );
}
