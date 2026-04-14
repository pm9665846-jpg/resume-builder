import { create } from 'zustand'
import { generateId } from '@/lib/utils'

const defaultResume = {
  id: null,
  title: 'My Resume',
  template: 'modern',
  themeColor: '#8b5cf6',
  fontFamily: 'Arial',
  personalInfo: {
    name: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
    github: '',
    summary: '',
    photo: '',
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
  languages: [],
  achievements: [],
}

export const useResumeStore = create((set) => ({
  resume: { ...defaultResume },
  isDirty: false,
  isSaving: false,
  lastSaved: null,

  setResume: (resume) => set({ resume, isDirty: false }),
  setResumeId: (id) => set((state) => ({ resume: { ...state.resume, id } })),

  updatePersonalInfo: (field, value) =>
    set((state) => ({
      resume: { ...state.resume, personalInfo: { ...state.resume.personalInfo, [field]: value } },
      isDirty: true,
    })),

  updateTemplate: (template) =>
    set((state) => ({ resume: { ...state.resume, template }, isDirty: true })),

  updateThemeColor: (themeColor) =>
    set((state) => ({ resume: { ...state.resume, themeColor }, isDirty: true })),

  updateFontFamily: (fontFamily) =>
    set((state) => ({ resume: { ...state.resume, fontFamily }, isDirty: true })),

  // Experience
  addExperience: () =>
    set((state) => ({
      resume: {
        ...state.resume,
        experience: [...state.resume.experience, { id: generateId(), company: '', role: '', location: '', startDate: '', endDate: '', current: false, description: '' }],
      },
      isDirty: true,
    })),
  updateExperience: (id, field, value) =>
    set((state) => ({
      resume: { ...state.resume, experience: state.resume.experience.map(e => e.id === id ? { ...e, [field]: value } : e) },
      isDirty: true,
    })),
  removeExperience: (id) =>
    set((state) => ({
      resume: { ...state.resume, experience: state.resume.experience.filter(e => e.id !== id) },
      isDirty: true,
    })),

  // Education
  addEducation: () =>
    set((state) => ({
      resume: {
        ...state.resume,
        education: [...state.resume.education, { id: generateId(), school: '', degree: '', field: '', startDate: '', endDate: '', gpa: '', achievements: '' }],
      },
      isDirty: true,
    })),
  updateEducation: (id, field, value) =>
    set((state) => ({
      resume: { ...state.resume, education: state.resume.education.map(e => e.id === id ? { ...e, [field]: value } : e) },
      isDirty: true,
    })),
  removeEducation: (id) =>
    set((state) => ({
      resume: { ...state.resume, education: state.resume.education.filter(e => e.id !== id) },
      isDirty: true,
    })),

  // Skills
  addSkill: (skill, category = 'Technical') =>
    set((state) => ({
      resume: { ...state.resume, skills: [...state.resume.skills, { id: generateId(), name: skill, level: 80, category }] },
      isDirty: true,
    })),
  updateSkillLevel: (id, level) =>
    set((state) => ({
      resume: { ...state.resume, skills: state.resume.skills.map(s => s.id === id ? { ...s, level } : s) },
      isDirty: true,
    })),
  removeSkill: (id) =>
    set((state) => ({
      resume: { ...state.resume, skills: state.resume.skills.filter(s => s.id !== id) },
      isDirty: true,
    })),

  // Projects
  addProject: () =>
    set((state) => ({
      resume: {
        ...state.resume,
        projects: [...state.resume.projects, { id: generateId(), name: '', description: '', tech: '', link: '', github: '' }],
      },
      isDirty: true,
    })),
  updateProject: (id, field, value) =>
    set((state) => ({
      resume: { ...state.resume, projects: state.resume.projects.map(p => p.id === id ? { ...p, [field]: value } : p) },
      isDirty: true,
    })),
  removeProject: (id) =>
    set((state) => ({
      resume: { ...state.resume, projects: state.resume.projects.filter(p => p.id !== id) },
      isDirty: true,
    })),

  // Certifications
  addCertification: () =>
    set((state) => ({
      resume: {
        ...state.resume,
        certifications: [...state.resume.certifications, { id: generateId(), name: '', issuer: '', date: '', credentialId: '', url: '' }],
      },
      isDirty: true,
    })),
  updateCertification: (id, field, value) =>
    set((state) => ({
      resume: { ...state.resume, certifications: state.resume.certifications.map(c => c.id === id ? { ...c, [field]: value } : c) },
      isDirty: true,
    })),
  removeCertification: (id) =>
    set((state) => ({
      resume: { ...state.resume, certifications: state.resume.certifications.filter(c => c.id !== id) },
      isDirty: true,
    })),

  // Languages
  addLanguage: (name, proficiency = 'Professional') =>
    set((state) => ({
      resume: { ...state.resume, languages: [...state.resume.languages, { id: generateId(), name, proficiency }] },
      isDirty: true,
    })),
  removeLanguage: (id) =>
    set((state) => ({
      resume: { ...state.resume, languages: state.resume.languages.filter(l => l.id !== id) },
      isDirty: true,
    })),

  // Achievements
  addAchievement: (text) =>
    set((state) => ({
      resume: { ...state.resume, achievements: [...state.resume.achievements, { id: generateId(), text }] },
      isDirty: true,
    })),
  removeAchievement: (id) =>
    set((state) => ({
      resume: { ...state.resume, achievements: state.resume.achievements.filter(a => a.id !== id) },
      isDirty: true,
    })),

  reorderSections: (newOrder) =>
    set((state) => ({ resume: { ...state.resume, sectionOrder: newOrder }, isDirty: true })),

  resetResume: (overrides = {}) => set({ resume: { ...defaultResume, id: null, ...overrides }, isDirty: false }),
  setIsSaving: (isSaving) => set({ isSaving }),
  setLastSaved: (lastSaved) => set({ lastSaved }),
}))
