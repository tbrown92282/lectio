'use client'

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Save, User } from 'lucide-react'

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const [scholars, setScholars] = useState<string[]>([])
  const [newScholar, setNewScholar] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-sky-100 flex items-center justify-center">
        <Card className="p-6 bg-cream-50 border-gold-200">
          <div className="text-red-900">Loading...</div>
        </Card>
      </div>
    )
  }

  if (status === "unauthenticated") {
    redirect("/auth/signin")
  }

  const addScholar = () => {
    if (newScholar.trim()) {
      setScholars([...scholars, newScholar.trim()])
      setNewScholar("")
    }
  }

  const removeScholar = (index: number) => {
    setScholars(scholars.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-sky-100 py-8">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-cream-50 border-gold-200">
          <CardHeader className="border-b border-gold-200">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-red-900 text-cream-50 flex items-center justify-center">
                <User className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-2xl font-serif text-red-900">Profile Settings</CardTitle>
                <p className="text-sm text-neutral-600">{session?.user?.email}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label htmlFor="version" className="text-red-900">Preferred Bible Version</Label>
              <Select>
                <SelectTrigger className="border-gold-200">
                  <SelectValue placeholder="Select version" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kjv">King James Version (KJV)</SelectItem>
                  <SelectItem value="niv">New International Version (NIV)</SelectItem>
                  <SelectItem value="esv">English Standard Version (ESV)</SelectItem>
                  <SelectItem value="nrsv">New Revised Standard Version (NRSV)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-red-900">Influential Biblical Scholars</Label>
              <div className="flex gap-2">
                <Input
                  value={newScholar}
                  onChange={(e) => setNewScholar(e.target.value)}
                  placeholder="Add a scholar"
                  className="border-gold-200"
                />
                <Button 
                  onClick={addScholar}
                  className="bg-red-900 hover:bg-red-800 text-cream-50"
                >
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {scholars.map((scholar, index) => (
                  <div
                    key={index}
                    className="bg-gold-100 text-red-900 px-3 py-1 rounded-full flex items-center gap-2"
                  >
                    <span>{scholar}</span>
                    <button
                      onClick={() => removeScholar(index)}
                      className="text-red-900 hover:text-red-800"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full bg-red-900 hover:bg-red-800 text-cream-50">
              <Save className="mr-2 h-4 w-4" />
              Save Preferences
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}