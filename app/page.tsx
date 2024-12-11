import { WelcomeCard } from '@/components/welcome/WelcomeCard';

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5"
    >
      <div className="max-w-[1280px] mx-auto p-6">
        <WelcomeCard />
      </div>
    </div>
  );
}
