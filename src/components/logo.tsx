import Link from 'next/link';
import { Crown } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Crown className="h-6 w-6 text-primary" />
      <span className="text-xl font-extrabold text-foreground uppercase tracking-wider">Reign</span>
    </div>
  );
}
