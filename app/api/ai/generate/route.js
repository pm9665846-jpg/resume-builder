import { NextResponse } from 'next/server'

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent'

const PROMPTS = {
  summary: ({ name, jobTitle }) =>
    `Write a professional resume summary for ${name || 'a professional'} who is a ${jobTitle || 'professional'}. 
     Keep it 2-3 sentences, impactful, and ATS-friendly. Only return the summary text, no extra explanation.`,

  experience: ({ role, company }) =>
    `Write 3-4 bullet points for a resume job description for the role of "${role || 'Professional'}" at "${company || 'a company'}".
     Each bullet should start with a strong action verb, include metrics where possible, and be ATS-friendly.
     Format: each bullet on a new line starting with "• ". Only return the bullet points, nothing else.`,

  project: ({ name, tech }) =>
    `Write 2-3 bullet points describing a software project called "${name || 'a project'}" built with "${tech || 'modern technologies'}".
     Focus on what it does, key features, and impact. Start each with "• ". Only return the bullet points.`,

  skills: ({ jobTitle }) =>
    `List 10 relevant technical skills for a "${jobTitle || 'Software Developer'}" resume.
     Return only a comma-separated list of skill names, nothing else.`,

  custom: ({ prompt }) => prompt,
}

export async function POST(req) {
  try {
    const { type, context, customPrompt } = await req.json()

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey || apiKey === 'your_gemini_api_key_here') {
      return NextResponse.json({ error: 'Gemini API key not configured. Add GEMINI_API_KEY to .env.local' }, { status: 500 })
    }

    const promptFn = PROMPTS[type] || PROMPTS.custom
    const prompt = type === 'custom' ? PROMPTS.custom({ prompt: customPrompt }) : promptFn(context || {})

    const res = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 500 },
      }),
    })

    if (!res.ok) {
      const err = await res.json()
      return NextResponse.json({ error: err.error?.message || 'Gemini API error' }, { status: res.status })
    }

    const data = await res.json()
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || ''
    return NextResponse.json({ result: text.trim() })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
