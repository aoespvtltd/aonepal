import GoalAndObj from '@/components/Home/GoalAndObj'
import HeroSection from '@/components/Home/HeroSection'
import Projects from '@/components/Home/Projects'
import HomePage from '@/components/Home/tryouts/Home'
import ProjectBar from '@/components/Projects/ProjectBar'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import OurTeams from "@/components/Home/OurTeams"

function Home() {
  return (
    <div>
        <HeroSection/>
        <GoalAndObj />
        <ProjectBar />
        <OurTeams />
    </div>
  )
}

export default Home