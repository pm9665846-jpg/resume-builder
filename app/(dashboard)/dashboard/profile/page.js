'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { User, Mail, Lock, Camera, Save } from 'lucide-react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import GlowCard from '@/components/ui/GlowCard'
import FloatingBackground from '@/components/ui/FloatingBackground'

export default function ProfilePage() {
  const [profile, setProfile] = useState({ name: 'xyz', email: 'abc@gmail.com', phone: '', location: '', bio: '' })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  async function handleSave(e) {
    e.preventDefault()
    setSaving(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="relative min-h-screen p-8">
      <FloatingBackground />
      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-black text-white mb-2">Profile Settings</h1>
          <p className="text-slate-400 mb-8">Manage your account information</p>

          <GlowCard tilt={false} className="mb-6">
            {/* Avatar */}
            <div className="flex items-center gap-5 mb-8 pb-8 border-b border-white/5">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-3xl font-black text-white">
                  {profile.name.charAt(0)}
                </div>
                <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-purple-500 flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Camera size={13} className="text-white" />
                </button>
              </div>
              <div>
                <p className="text-white font-bold text-lg">{profile.name}</p>
                <p className="text-slate-400 text-sm">{profile.email}</p>
                <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Free Plan
                </span>
              </div>
            </div>

            <form onSubmit={handleSave} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <User size={14} className="absolute left-3 top-[38px] text-slate-500 z-10" />
                  <Input label="Full Name" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="pl-9" />
                </div>
                <div className="relative">
                  <Mail size={14} className="absolute left-3 top-[38px] text-slate-500 z-10" />
                  <Input label="Email" type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} className="pl-9" />
                </div>
              </div>
              <Input label="Bio" textarea placeholder="Tell us about yourself..." value={profile.bio} onChange={(e) => setProfile({ ...profile, bio: e.target.value })} />

              <div className="flex items-center gap-3 pt-2">
                <Button type="submit" loading={saving} icon={<Save size={15} />}>
                  {saved ? 'Saved!' : 'Save Changes'}
                </Button>
                {saved && (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-sm">
                    ✓ Profile updated
                  </motion.span>
                )}
              </div>
            </form>
          </GlowCard>

          {/* Change Password */}
          <GlowCard tilt={false} glowColor="#ec4899">
            <h2 className="text-white font-bold mb-5 flex items-center gap-2">
              <Lock size={16} className="text-pink-400" /> Change Password
            </h2>
            <div className="space-y-4">
              <Input label="Current Password" type="password" placeholder="••••••••" />
              <Input label="New Password" type="password" placeholder="••••••••" />
              <Input label="Confirm New Password" type="password" placeholder="••••••••" />
              <Button variant="outline">Update Password</Button>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </div>
  )
}
