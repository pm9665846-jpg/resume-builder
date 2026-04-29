# Resume Builder — Complete API Collection
> Base URL: `http://localhost:3000`  
> Replace `YOUR_COOKIE` with session cookie after login

---

## 🔐 AUTH APIs

### Register
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"Password@123"}'
```

### Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -c cookies.txt \
  -d '{"email":"john@example.com","password":"Password@123"}'
```

### Logout
```bash
curl -X POST http://localhost:3000/api/auth/logout \
  -b cookies.txt
```

### Forgot Password (Send OTP)
```bash
curl -X POST http://localhost:3000/api/auth/forgot-password \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com"}'
```

### Verify OTP
```bash
curl -X POST http://localhost:3000/api/auth/verify-otp \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","otp":"123456"}'
```

### Reset Password
```bash
curl -X POST http://localhost:3000/api/auth/reset-password \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","token":"123456","newPassword":"NewPass@123"}'
```

---

## 📄 RESUME APIs

### Get All Resumes
```bash
curl http://localhost:3000/api/resumes \
  -b cookies.txt
```

### Create Resume
```bash
curl -X POST http://localhost:3000/api/resumes \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{
    "title": "My Resume",
    "template": "modern",
    "themeColor": "#8b5cf6",
    "fontFamily": "Arial, Helvetica, sans-serif",
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
        "summary": "Experienced software engineer with 5+ years.",
        "photo": ""
      },
      "experience": [
        {
          "id": "e1",
          "company": "Google",
          "role": "Senior Engineer",
          "location": "Bengaluru",
          "startDate": "Jan 2022",
          "endDate": "",
          "current": true,
          "description": "• Built scalable microservices"
        }
      ],
      "education": [
        {
          "id": "ed1",
          "school": "IIT Bombay",
          "degree": "B.Tech Computer Science",
          "field": "CS",
          "startDate": "2015",
          "endDate": "2019",
          "gpa": "9.1",
          "achievements": "Dean List"
        }
      ],
      "skills": [
        {"id": "s1", "name": "React", "level": 90, "category": "Technical"},
        {"id": "s2", "name": "Node.js", "level": 85, "category": "Technical"}
      ],
      "projects": [
        {
          "id": "p1",
          "name": "Resume Builder",
          "description": "AI-powered resume builder",
          "tech": "Next.js, MySQL",
          "link": "resumebuilder.vercel.app",
          "github": "github.com/user/resume"
        }
      ],
      "certifications": [
        {"id": "c1", "name": "AWS Solutions Architect", "issuer": "Amazon", "date": "2023-04", "credentialId": "", "url": ""}
      ],
      "languages": [
        {"id": "l1", "name": "English", "proficiency": "Fluent"},
        {"id": "l2", "name": "Hindi", "proficiency": "Native"}
      ],
      "achievements": [],
      "interests": [
        {"id": "i1", "name": "Photography"},
        {"id": "i2", "name": "Hiking"}
      ]
    }
  }'
```

### Get Single Resume
```bash
curl http://localhost:3000/api/resumes/1 \
  -b cookies.txt
```

### Update Resume
```bash
curl -X PUT http://localhost:3000/api/resumes/1 \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{
    "title": "Updated Resume",
    "template": "executive",
    "themeColor": "#06b6d4",
    "fontFamily": "Georgia, serif",
    "data": {
      "personalInfo": {"name": "John Doe", "jobTitle": "Lead Engineer"},
      "experience": [],
      "education": [],
      "skills": [],
      "projects": [],
      "certifications": [],
      "languages": [],
      "achievements": [],
      "interests": []
    }
  }'
```

### Delete Resume
```bash
curl -X DELETE http://localhost:3000/api/resumes/1 \
  -b cookies.txt
```

---

## 👤 USER / PROFILE APIs

### Get User Stats
```bash
curl http://localhost:3000/api/user/stats \
  -b cookies.txt
```

### Get Profile
```bash
curl http://localhost:3000/api/profile \
  -b cookies.txt
```

### Update Profile (Name/Avatar)
```bash
curl -X PUT http://localhost:3000/api/profile \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{"name":"John Updated","avatar":"avatar.jpg"}'
```

### Change User Password
```bash
curl -X PUT http://localhost:3000/api/profile/password \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{"currentPassword":"OldPass@123","newPassword":"NewPass@123"}'
```

---

## 📤 UPLOAD API

### Upload Photo
```bash
curl -X POST http://localhost:3000/api/upload \
  -b cookies.txt \
  -F "file=@/path/to/photo.jpg"
```
**Response:** `{"success":true,"fileName":"1234567890-abc.jpg"}`

Photo URL: `http://localhost:3000/uploads/1234567890-abc.jpg`

---

## 🤖 AI API

### Generate AI Content
```bash
curl -X POST http://localhost:3000/api/ai/generate \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{
    "type": "summary",
    "context": {
      "name": "John Doe",
      "jobTitle": "Software Engineer",
      "experience": "5 years"
    }
  }'
```

---

## 📢 ADS APIs

### Get Ads by Position
```bash
# Positions: top | footer | sidebar
curl "http://localhost:3000/api/ads?position=top"
```

### Track Impression/Click
```bash
curl -X POST http://localhost:3000/api/ads \
  -H "Content-Type: application/json" \
  -d '{"id":1,"type":"impression"}'

curl -X POST http://localhost:3000/api/ads \
  -H "Content-Type: application/json" \
  -d '{"id":1,"type":"click"}'
```

---

## 📄 PAGES APIs (Dynamic Content)

### Get Page Content
```bash
# Slugs: privacy-policy | about | terms
curl http://localhost:3000/api/pages/privacy-policy
curl http://localhost:3000/api/pages/about
curl http://localhost:3000/api/pages/terms
```

---

## ✨ FEATURES API

### Get Landing Page Features
```bash
curl http://localhost:3000/api/features
```

---

## 🔑 ADMIN APIs

### Admin Login
```bash
curl -X POST http://localhost:3000/api/admin/login \
  -H "Content-Type: application/json" \
  -c admin_cookies.txt \
  -d '{"email":"admin@resumeai.com","password":"Admin@123"}'
```

### Check Admin Session
```bash
curl http://localhost:3000/api/admin/me \
  -b admin_cookies.txt
```

### Admin Logout
```bash
curl -X POST http://localhost:3000/api/admin/logout \
  -b admin_cookies.txt
```

### Get Platform Stats
```bash
curl http://localhost:3000/api/admin/stats \
  -b admin_cookies.txt
```

### Get All Users
```bash
curl http://localhost:3000/api/admin/users \
  -b admin_cookies.txt
```

### Delete User
```bash
curl -X DELETE http://localhost:3000/api/admin/users \
  -H "Content-Type: application/json" \
  -b admin_cookies.txt \
  -d '{"id":5}'
```

### Get All Resumes (Admin)
```bash
curl http://localhost:3000/api/admin/resumes \
  -b admin_cookies.txt
```

---

## 📢 ADMIN ADS APIs

### Get All Ads
```bash
curl http://localhost:3000/api/admin/ads \
  -b admin_cookies.txt
```

### Create Ad
```bash
curl -X POST http://localhost:3000/api/admin/ads \
  -H "Content-Type: application/json" \
  -b admin_cookies.txt \
  -d '{
    "title": "Upgrade to Pro",
    "description": "Get unlimited resumes and premium templates.",
    "image_url": "",
    "link_url": "https://example.com/pro",
    "link_text": "Upgrade Now",
    "position": "top",
    "bg_color": "#0f0a1e",
    "text_color": "#ffffff",
    "accent_color": "#8b5cf6",
    "is_active": 1
  }'
```

### Update Ad
```bash
curl -X PUT http://localhost:3000/api/admin/ads \
  -H "Content-Type: application/json" \
  -b admin_cookies.txt \
  -d '{"id":1,"title":"Updated Ad","is_active":0}'
```

### Delete Ad
```bash
curl -X DELETE http://localhost:3000/api/admin/ads \
  -H "Content-Type: application/json" \
  -b admin_cookies.txt \
  -d '{"id":1}'
```

---

## 📄 ADMIN PAGES APIs

### Get All Pages
```bash
curl http://localhost:3000/api/admin/pages \
  -b admin_cookies.txt
```

### Update Page Content
```bash
curl -X PUT http://localhost:3000/api/admin/pages \
  -H "Content-Type: application/json" \
  -b admin_cookies.txt \
  -d '{
    "slug": "privacy-policy",
    "title": "Privacy Policy",
    "content": "## Our Privacy Policy\n\nWe take your privacy seriously..."
  }'
```

---

## ✨ ADMIN FEATURES APIs

### Get All Features
```bash
curl http://localhost:3000/api/admin/features \
  -b admin_cookies.txt
```

### Create Feature
```bash
curl -X POST http://localhost:3000/api/admin/features \
  -H "Content-Type: application/json" \
  -b admin_cookies.txt \
  -d '{
    "icon": "Zap",
    "title": "Auto Save",
    "description": "Never lose your work. Every keystroke is saved automatically.",
    "color": "#8b5cf6",
    "sort_order": 7
  }'
```

### Update Feature
```bash
curl -X PUT http://localhost:3000/api/admin/features \
  -H "Content-Type: application/json" \
  -b admin_cookies.txt \
  -d '{
    "id": 1,
    "icon": "Wand2",
    "title": "AI-Powered Writing",
    "description": "Updated description here.",
    "color": "#8b5cf6",
    "sort_order": 1,
    "is_active": 1
  }'
```

### Delete Feature
```bash
curl -X DELETE http://localhost:3000/api/admin/features \
  -H "Content-Type: application/json" \
  -b admin_cookies.txt \
  -d '{"id":1}'
```

---

## 🔒 ADMIN CHANGE PASSWORD

```bash
curl -X POST http://localhost:3000/api/admin/change-password \
  -H "Content-Type: application/json" \
  -b admin_cookies.txt \
  -d '{"currentPassword":"Admin@123","newPassword":"NewAdmin@456"}'
```

---

## 📊 RESPONSE FORMATS

### Success
```json
{"success": true, "data": {...}}
```

### Error
```json
{"error": "Error message here"}
```

### Resume Object
```json
{
  "id": 1,
  "title": "My Resume",
  "template": "modern",
  "themeColor": "#8b5cf6",
  "fontFamily": "Arial",
  "isDraft": false,
  "createdAt": "2026-04-20T10:00:00.000Z",
  "updatedAt": "2026-04-20T12:00:00.000Z",
  "data": {
    "personalInfo": {...},
    "experience": [...],
    "education": [...],
    "skills": [...],
    "projects": [...],
    "certifications": [...],
    "languages": [...],
    "interests": [...]
  }
}
```
