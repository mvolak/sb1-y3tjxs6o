'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Award, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

interface WelcomeCardProps {
  employeeName?: string;
  department?: string;
}

export function WelcomeCard({ 
  employeeName = "Sarah",
  department = "Design"
}: WelcomeCardProps) {
  const [activeSection, setActiveSection] = useState<string>('main');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto"
    >
      <Card className="relative overflow-hidden backdrop-blur-md bg-background/40 shadow-lg border border-white/10 before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:via-secondary/5 before:to-background/5">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 mix-blend-overlay" />
        </div>
        
        <div className="relative p-6 sm:p-8">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-3xl font-bold tracking-tight">
                  Welcome back, {employeeName}! 👋
                </h1>
                <p className="text-muted-foreground">
                  {department} Department
                </p>
              </motion.div>
            </div>
            
            <Avatar className="w-16 h-16 border-4 border-background">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="Profile"
                className="object-cover"
              />
            </Avatar>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-3">
            <InfoCard
              icon={<Calendar className="w-5 h-5" />}
              title="Upcoming Events"
              content="Team Building Workshop"
              date="Next Tuesday"
            />
            <InfoCard
              icon={<Users className="w-5 h-5" />}
              title="New Team Members"
              content="2 people joined this week"
              date="Welcome them!"
            />
            <InfoCard
              icon={<Award className="w-5 h-5" />}
              title="Employee Spotlight"
              content="Alex won Employee of the Month"
              date="Congratulations!"
            />
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Company Updates</h2>
              <Badge variant="secondary">New</Badge>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 space-y-4"
            >
              <UpdateItem
                title="New Office Opening"
                description="We're expanding to Downtown!"
                date="2 days ago"
              />
              <UpdateItem
                title="Q2 Goals Achieved"
                description="Team exceeded targets by 15%"
                date="1 week ago"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <Button variant="default" className="group">
              View All Updates
              <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}

function InfoCard({ icon, title, content, date }: {
  icon: React.ReactNode;
  title: string;
  content: string;
  date: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, backgroundColor: "hsl(var(--card))" }}
      className="p-4 rounded-lg backdrop-blur-sm bg-gradient-to-br from-card/20 via-card/30 to-card/20 border border-white/20 shadow-md ring-1 ring-white/10 transition-all duration-300 hover:bg-card/40 hover:border-white/30"
    >
      <div className="flex items-center space-x-3">
        <div className="p-2 rounded-full bg-primary/10 text-primary backdrop-blur-sm ring-1 ring-white/20">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-primary">{title}</h3>
          <p className="text-sm text-muted-foreground">{content}</p>
          <p className="text-xs text-muted-foreground/80">{date}</p>
        </div>
      </div>
    </motion.div>
  );
}

function UpdateItem({ title, description, date }: {
  title: string;
  description: string;
  date: string;
}) {
  return (
    <motion.div
      whileHover={{ backgroundColor: "hsl(var(--muted))" }}
      className="flex items-center justify-between p-4 transition-all duration-300 rounded-lg backdrop-blur-sm bg-gradient-to-r from-white/5 via-white/8 to-white/5 border border-white/20 shadow-md ring-1 ring-white/10 hover:bg-white/10 hover:border-white/30"
    >
      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <span className="text-xs text-muted-foreground">{date}</span>
    </motion.div>
  );
}