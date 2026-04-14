# Resume Builder — Complete API cURL Collection

Base URL: `http://localhost:3000`

> **Note:** Protected routes require a valid session cookie.
> After login, use `-b "session_user=..."` or let curl handle cookies with `-c cookies.txt -b cookies.txt`.

---

## 1. AUTH APIs

---

### 1.1 Register (Sign Up)

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "Password@123"
  }'
```

**Success Response:**
```json
{ "success": true, "user": { "id": 1, "name": "John Doe", "email": "john@example.com" } }
```

---

### 1.2 Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -c cookies.txt \
  -d '{
    "email": "john@example.com",
    "password": "Password@123"
  }'
```

**Success Response:**
```json
{ "success": true, "user": { "id": 1, "name": "John Doe", "email": "john@example.com" } }
```

> Cookie `session_user` is set automatically. Use `-c cookies.txt -b cookies.txt` in subsequent requests.

---

### 1.3 Logout

```bash
curl -X POST http://localhost:3000/api/auth/logout \
  -b cookies.txt
```

**Success Response:**
```json
{ "success": true }
```

---

### 1.4 Forgot Password (Send OTP)

```bash
curl -X POST http://localhost:3000/api/auth/forgot-password \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com"
  }'
```

**Success Response:**
```json
{ "success": true }
```

> OTP is sent to the email. Valid for 15 minutes.

---

### 1.5 Verify OTP

```bash
curl -X POST http://localhost:3000/api/auth/verify-otp \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "otp": "123456"
  }'
```

**Success Response:**
```json
{ "success": true, "message": "OTP verified." }
```

---

### 1.6 Reset Password

```bash
curl -X POST http://localhost:3000/api/auth/reset-password \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "otp": "123456",
    "password": "NewPassword@123"
  }'
```

**Success Response:**
```json
{ "success": true, "message": "Password reset successfully." }
```

---

### 1.7 NextAuth Session (Get current session)

```bash
curl -X GET http://localhost:3000/api/auth/session \
  -b cookies.txt
```

**Success Response:**
```json
{
  "user": {
    "id": "1",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  },
  "expires": "2026-05-13T..."
}
```

---

## 2. RESUME APIs

> All resume APIs require authentication (session cookie).

---

### 2.1 Get All Resumes (for logged-in user)

```bash
curl -X GET http://localhost:3000/api/resumes \
  -b cookies.txt
```

**Success Response:**
```json
{
  "success": true,
  "resumes": [
    {
      "id": 1,
      "title": "Software Engineer Resume",
      "template": "modern",
      "themeColor": "#8b5cf6",
      "isDraft": false,
      "createdAt": "2026-04-01T10:00:00.000Z",
      "updatedAt": "2026-04-10T12:00:00.000Z"
    }
  ]
}
```

---

### 2.2 Create Resume

```bash
curl -X POST http://localhost:3000/api/resumes \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{
    "title": "Software Engineer Resume",
    "template": "modern",
    "themeColor": "#8b5cf6",
    "fontFamily": "Arial, Helvetica, sans-serif",
    "isDraft": false,
    "data": {
      "personalInfo": {
        "name": "John Doe",
        "jobTitle": "Software Engineer",
        "email": "john@example.com",
        "phone": "+91 98765 43210",
        "location": "Mumbai, India",
        "website": "johndoe.dev",
        "linkedin": "linkedin.com/in/johndoe",
        "github": "github.com/johndoe",
        "summary": "Experienced software engineer with 5+ years building scalable web apps.",
        "photo": ""
      },
      "experience": [
        {
          "id": "exp1",
          "company": "Google",
          "role": "Senior Engineer",
          "location": "Bengaluru",
          "startDate": "2022-01",
          "endDate": "",
          "current": true,
          "description": "• Built microservices handling 10M+ requests/day"
        }
      ],
      "education": [
        {
          "id": "edu1",
          "school": "IIT Bombay",
          "degree": "B.Tech",
          "field": "Computer Science",
          "startDate": "2015",
          "endDate": "2019",
          "gpa": "9.0",
          "achievements": "Dean List"
        }
      ],
      "skills": [
        { "id": "sk1", "name": "JavaScript", "level": 90, "category": "Technical" },
        { "id": "sk2", "name": "React", "level": 85, "category": "Technical" }
      ],
      "projects": [
        {
          "id": "prj1",
          "name": "ResumeAI",
          "description": "AI-powered resume builder",
          "tech": "Next.js, MySQL",
          "link": "resumeai.vercel.app",
          "github": "github.com/johndoe/resumeai"
        }
      ],
      "certifications": [
        {
          "id": "cert1",
          "name": "AWS Solutions Architect",
          "issuer": "Amazon",
          "date": "2023-04",
          "credentialId": "AWS-001",
          "url": ""
        }
      ],
      "languages": [
        { "id": "lang1", "name": "English", "proficiency": "Fluent" },
        { "id": "lang2", "name": "Hindi", "proficiency": "Native" }
      ],
      "achievements": [
        { "id": "ach1", "text": "Reduced latency by 40%" }
      ]
    }
  }'
```

**Success Response:**
```json
{ "success": true, "id": 1, "message": "Resume created successfully" }
```

---

### 2.3 Get Resume by ID

```bash
curl -X GET http://localhost:3000/api/resumes/1 \
  -b cookies.txt
```

**Success Response:**
```json
{
  "success": true,
  "resume": {
    "id": 1,
    "title": "Software Engineer Resume",
    "template": "modern",
    "themeColor": "#8b5cf6",
    "isDraft": false,
    "createdAt": "...",
    "updatedAt": "...",
    "data": {
      "personalInfo": { ... },
      "experience": [ ... ],
      "education": [ ... ],
      "skills": [ ... ],
      "projects": [ ... ],
      "certifications": [ ... ],
      "languages": [ ... ],
      "achievements": [ ... ]
    }
  }
}
```

---

### 2.4 Update Resume

```bash
curl -X PUT http://localhost:3000/api/resumes/1 \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{
    "title": "Updated Resume Title",
    "template": "executive",
    "themeColor": "#3b82f6",
    "isDraft": false,
    "data": {
      "personalInfo": {
        "name": "John Doe",
        "jobTitle": "Lead Engineer",
        "email": "john@example.com",
        "phone": "+91 98765 43210",
        "location": "Bengaluru, India",
        "summary": "Updated summary here."
      },
      "skills": [
        { "id": "sk1", "name": "TypeScript", "level": 92, "category": "Technical" }
      ]
    }
  }'
```

**Success Response:**
```json
{ "success": true, "message": "Resume updated successfully" }
```

---

### 2.5 Delete Resume

```bash
curl -X DELETE http://localhost:3000/api/resumes/1 \
  -b cookies.txt
```

**Success Response:**
```json
{ "success": true, "message": "Resume deleted successfully" }
```

---

## 3. AI GENERATE API

---

### 3.1 Generate Summary

```bash
curl -X POST http://localhost:3000/api/ai/generate \
  -H "Content-Type: application/json" \
  -d '{
    "type": "summary",
    "context": {
      "name": "John Doe",
      "jobTitle": "Software Engineer"
    }
  }'
```

---

### 3.2 Generate Experience Bullets

```bash
curl -X POST http://localhost:3000/api/ai/generate \
  -H "Content-Type: application/json" \
  -d '{
    "type": "experience",
    "context": {
      "role": "Senior Software Engineer",
      "company": "Google"
    }
  }'
```

---

### 3.3 Generate Project Description

```bash
curl -X POST http://localhost:3000/api/ai/generate \
  -H "Content-Type: application/json" \
  -d '{
    "type": "project",
    "context": {
      "name": "ResumeAI",
      "tech": "Next.js, MySQL, OpenAI"
    }
  }'
```

---

### 3.4 Generate Skills List

```bash
curl -X POST http://localhost:3000/api/ai/generate \
  -H "Content-Type: application/json" \
  -d '{
    "type": "skills",
    "context": {
      "jobTitle": "Full Stack Developer"
    }
  }'
```

---

### 3.5 Custom AI Prompt

```bash
curl -X POST http://localhost:3000/api/ai/generate \
  -H "Content-Type: application/json" \
  -d '{
    "type": "custom",
    "customPrompt": "Write a cover letter opening for a Software Engineer applying to Google."
  }'
```

**Success Response (all AI endpoints):**
```json
{ "result": "Generated text here..." }
```

---

## 4. ADS APIs (Public)

---

### 4.1 Get Active Ads (all positions)

```bash
curl -X GET http://localhost:3000/api/ads
```

---

### 4.2 Get Ad by Position

```bash
# top banner
curl -X GET "http://localhost:3000/api/ads?position=top"

# footer banner
curl -X GET "http://localhost:3000/api/ads?position=footer"

# sidebar
curl -X GET "http://localhost:3000/api/ads?position=sidebar"
```

**Success Response:**
```json
{
  "success": true,
  "ads": [
    {
      "id": 1,
      "title": "Upgrade to Pro",
      "description": "Get unlimited resumes...",
      "image_url": "https://...",
      "link_url": "https://example.com/pro",
      "link_text": "Upgrade Now",
      "position": "top",
      "bg_color": "#0f0a1e",
      "text_color": "#ffffff",
      "accent_color": "#8b5cf6",
      "is_active": 1,
      "clicks": 42,
      "impressions": 500
    }
  ]
}
```

---

### 4.3 Track Ad Click

```bash
curl -X POST http://localhost:3000/api/ads \
  -H "Content-Type: application/json" \
  -d '{ "id": 1, "type": "click" }'
```

---

### 4.4 Track Ad Impression

```bash
curl -X POST http://localhost:3000/api/ads \
  -H "Content-Type: application/json" \
  -d '{ "id": 1, "type": "impression" }'
```

**Success Response:**
```json
{ "success": true }
```

---

## 5. ADMIN APIs

> All admin APIs require admin session (login as admin first).

---

### 5.1 Admin Login

```bash
curl -X POST http://localhost:3000/api/admin/login \
  -H "Content-Type: application/json" \
  -c admin_cookies.txt \
  -d '{
    "email": "admin@resumeai.com",
    "password": "Admin@123"
  }'
```

**Success Response:**
```json
{ "success": true }
```

---

### 5.2 Admin Logout

```bash
curl -X POST http://localhost:3000/api/admin/logout \
  -b admin_cookies.txt
```

---

### 5.3 Get Admin Info (me)

```bash
curl -X GET http://localhost:3000/api/admin/me \
  -b admin_cookies.txt
```

**Success Response:**
```json
{ "name": "Admin", "email": "admin@resumeai.com" }
```

---

### 5.4 Get Platform Stats

```bash
curl -X GET http://localhost:3000/api/admin/stats \
  -b admin_cookies.txt
```

**Success Response:**
```json
{
  "success": true,
  "stats": {
    "totalUsers": 25,
    "totalResumes": 48,
    "totalDrafts": 12,
    "newUsersThisWeek": 5,
    "newResumesThisWeek": 8,
    "templateStats": [
      { "template": "modern", "count": 15 },
      { "template": "executive", "count": 10 }
    ],
    "recentUsers": [ { "id": 1, "name": "John", "email": "john@example.com", "role": "user", "created_at": "..." } ],
    "recentResumes": [ { "id": 1, "title": "My Resume", "template": "modern", "user_name": "John", "is_draft": 0, "created_at": "..." } ]
  }
}
```

---

### 5.5 Get All Users (non-admin only)

```bash
curl -X GET http://localhost:3000/api/admin/users \
  -b admin_cookies.txt
```

**Success Response:**
```json
{
  "success": true,
  "users": [
    {
      "id": 2,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user",
      "avatar": null,
      "created_at": "...",
      "resume_count": 3
    }
  ]
}
```

---

### 5.6 Update User Role (Promote / Demote)

```bash
# Promote to admin
curl -X PATCH http://localhost:3000/api/admin/users \
  -H "Content-Type: application/json" \
  -b admin_cookies.txt \
  -d '{ "id": 2, "role": "admin" }'

# Demote to user
curl -X PATCH http://localhost:3000/api/admin/users \
  -H "Content-Type: application/json" \
  -b admin_cookies.txt \
  -d '{ "id": 2, "role": "user" }'
```

**Success Response:**
```json
{ "success": true }
```

---

### 5.7 Delete User

```bash
curl -X DELETE http://localhost:3000/api/admin/users \
  -H "Content-Type: application/json" \
  -b admin_cookies.txt \
  -d '{ "id": 2 }'
```

**Success Response:**
```json
{ "success": true }
```

---

### 5.8 Get All Resumes (Admin — paginated)

```bash
# Page 1
curl -X GET "http://localhost:3000/api/admin/resumes?page=1" \
  -b admin_cookies.txt

# Page 2
curl -X GET "http://localhost:3000/api/admin/resumes?page=2" \
  -b admin_cookies.txt
```

**Success Response:**
```json
{
  "success": true,
  "resumes": [
    {
      "id": 1,
      "title": "My Resume",
      "template": "modern",
      "is_draft": 0,
      "created_at": "...",
      "user_name": "John Doe",
      "user_email": "john@example.com"
    }
  ],
  "total": 48,
  "page": 1,
  "limit": 20
}
```

---

### 5.9 Delete Resume (Admin)

```bash
curl -X DELETE http://localhost:3000/api/admin/resumes \
  -H "Content-Type: application/json" \
  -b admin_cookies.txt \
  -d '{ "id": 1 }'
```

---

### 5.10 Get All Ads (Admin)

```bash
curl -X GET http://localhost:3000/api/admin/ads \
  -b admin_cookies.txt
```

**Success Response:**
```json
{
  "success": true,
  "ads": [
    {
      "id": 1,
      "title": "Upgrade to Pro",
      "description": "...",
      "image_url": "",
      "link_url": "https://example.com/pro",
      "link_text": "Upgrade Now",
      "position": "top",
      "bg_color": "#0f0a1e",
      "text_color": "#ffffff",
      "accent_color": "#8b5cf6",
      "is_active": 1,
      "clicks": 42,
      "impressions": 500,
      "created_at": "..."
    }
  ]
}
```

---

### 5.11 Create Ad

```bash
curl -X POST http://localhost:3000/api/admin/ads \
  -H "Content-Type: application/json" \
  -b admin_cookies.txt \
  -d '{
    "title": "Try Premium Templates",
    "description": "Access 150+ professional templates.",
    "image_url": "https://example.com/banner.jpg",
    "link_url": "https://example.com/premium",
    "link_text": "Try Now",
    "position": "top",
    "bg_color": "#0f0a1e",
    "text_color": "#ffffff",
    "accent_color": "#8b5cf6"
  }'
```

**Success Response:**
```json
{ "success": true, "id": 3 }
```

---

### 5.12 Update Ad

```bash
curl -X PUT http://localhost:3000/api/admin/ads \
  -H "Content-Type: application/json" \
  -b admin_cookies.txt \
  -d '{
    "id": 1,
    "title": "Updated Ad Title",
    "description": "Updated description.",
    "image_url": "https://example.com/new-banner.jpg",
    "link_url": "https://example.com/new",
    "link_text": "Learn More",
    "position": "footer",
    "bg_color": "#0a1628",
    "text_color": "#ffffff",
    "accent_color": "#3b82f6",
    "is_active": true
  }'
```

**Success Response:**
```json
{ "success": true }
```

---

### 5.13 Delete Ad

```bash
curl -X DELETE http://localhost:3000/api/admin/ads \
  -H "Content-Type: application/json" \
  -b admin_cookies.txt \
  -d '{ "id": 1 }'
```

**Success Response:**
```json
{ "success": true }
```

---

## Quick Reference Table

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/register` | ❌ | Register new user |
| POST | `/api/auth/login` | ❌ | Login (sets cookie) |
| POST | `/api/auth/logout` | ✅ | Logout |
| POST | `/api/auth/forgot-password` | ❌ | Send OTP to email |
| POST | `/api/auth/verify-otp` | ❌ | Verify OTP |
| POST | `/api/auth/reset-password` | ❌ | Reset password with OTP |
| GET | `/api/auth/session` | ✅ | Get current session |
| GET | `/api/resumes` | ✅ | List user's resumes |
| POST | `/api/resumes` | ✅ | Create resume |
| GET | `/api/resumes/:id` | ✅ | Get resume by ID |
| PUT | `/api/resumes/:id` | ✅ | Update resume |
| DELETE | `/api/resumes/:id` | ✅ | Delete resume |
| POST | `/api/ai/generate` | ❌ | AI text generation |
| GET | `/api/ads` | ❌ | Get active ads |
| POST | `/api/ads` | ❌ | Track click/impression |
| POST | `/api/admin/login` | ❌ | Admin login |
| POST | `/api/admin/logout` | 🔴 | Admin logout |
| GET | `/api/admin/me` | 🔴 | Get admin info |
| GET | `/api/admin/stats` | 🔴 | Platform statistics |
| GET | `/api/admin/users` | 🔴 | List all users |
| PATCH | `/api/admin/users` | 🔴 | Update user role |
| DELETE | `/api/admin/users` | 🔴 | Delete user |
| GET | `/api/admin/resumes` | 🔴 | List all resumes |
| DELETE | `/api/admin/resumes` | 🔴 | Delete any resume |
| GET | `/api/admin/ads` | 🔴 | List all ads |
| POST | `/api/admin/ads` | 🔴 | Create ad |
| PUT | `/api/admin/ads` | 🔴 | Update ad |
| DELETE | `/api/admin/ads` | 🔴 | Delete ad |

> ✅ = User session required | 🔴 = Admin session required | ❌ = Public
