import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, User } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-sky-100">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-serif text-red-900">Lectio</h1>
          <div className="flex gap-4">
            <Link href="/auth/signin">
              <Button variant="ghost" className="text-red-900 hover:text-red-800">
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </Link>
          </div>
        </header>

        <main className="flex flex-col items-center justify-center space-y-8">
          <div className="max-w-2xl text-center space-y-4">
            <h2 className="text-3xl font-serif text-red-900">
              Deepen Your Biblical Understanding
            </h2>
            <p className="text-lg text-neutral-700">
              Engage in meaningful Socratic dialogue as you study Scripture, guided by your preferred biblical scholars and translations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
            <div className="bg-cream-50 p-8 rounded-lg border border-gold-200 shadow-lg">
              <h3 className="text-xl font-serif text-red-900 mb-4">
                Personalized Study
              </h3>
              <p className="text-neutral-700 mb-4">
                Create your profile, select your preferred Bible translation, and specify the biblical scholars that influence your study.
              </p>
              <Link href="/profile">
                <Button className="w-full bg-red-900 hover:bg-red-800 text-cream-50">
                  Create Profile
                </Button>
              </Link>
            </div>

            <div className="bg-cream-50 p-8 rounded-lg border border-gold-200 shadow-lg">
              <h3 className="text-xl font-serif text-red-900 mb-4">
                Start Reading
              </h3>
              <p className="text-neutral-700 mb-4">
                Begin your guided Scripture reading with AI-powered Socratic dialogue based on your preferences.
              </p>
              <Link href="/chat">
                <Button className="w-full bg-red-900 hover:bg-red-800 text-cream-50">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Begin Reading
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}