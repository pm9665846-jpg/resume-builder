-- ============================================================
-- ResumeAI Complete Database Schema
-- Usage: mysql -u root -p < schema.sql
-- ============================================================

CREATE DATABASE IF NOT EXISTS resume_builder
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE resume_builder;

-- ── USERS ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  name       VARCHAR(255)  NOT NULL,
  email      VARCHAR(255)  NOT NULL UNIQUE,
  password   VARCHAR(255)  DEFAULT '',
  role       ENUM('user','admin') DEFAULT 'user',
  avatar     VARCHAR(500)  DEFAULT NULL,
  provider   VARCHAR(50)   DEFAULT 'credentials',
  created_at TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ── RESUMES ────────────────────────────────────────────────
-- All resume content is stored as JSON in the data column.
-- Fields: personalInfo{}, experience[], education[], skills[],
--         projects[], certifications[], languages[], achievements[]
CREATE TABLE IF NOT EXISTS resumes (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  user_id     INT           NOT NULL,
  title       VARCHAR(255)  NOT NULL DEFAULT 'Untitled Resume',
  template    VARCHAR(100)  NOT NULL DEFAULT 'modern',
  theme_color VARCHAR(20)   NOT NULL DEFAULT '#8b5cf6',
  font_family VARCHAR(150)  NOT NULL DEFAULT 'Arial, Helvetica, sans-serif',
  is_draft    TINYINT(1)    NOT NULL DEFAULT 0,
  data        LONGTEXT      NOT NULL,
  created_at  TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_id  (user_id),
  INDEX idx_updated  (updated_at),
  INDEX idx_template (template)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ── SEED: Admin user (password: Admin@123) ─────────────────
INSERT IGNORE INTO users (name, email, password, role) VALUES (
  'Admin',
  'admin@resumeai.com',
  '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj4J/HS.iK2e',
  'admin'
);

-- ── SEED: Demo user (password: Demo@123) ───────────────────
INSERT IGNORE INTO users (name, email, password, role) VALUES (
  'Demo User',
  'demo@resumeai.com',
  '$2a$12$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
  'user'
);

-- ── SEED: Sample resume for demo user ──────────────────────
SET @demo_id = (SELECT id FROM users WHERE email = 'demo@resumeai.com' LIMIT 1);

INSERT IGNORE INTO resumes (user_id, title, template, theme_color, font_family, is_draft, data)
VALUES (
  @demo_id,
  'My Software Engineer Resume',
  'modern',
  '#8b5cf6',
  'Arial, Helvetica, sans-serif',
  0,
  '{"personalInfo":{"name":"Prachi Mishra","jobTitle":"Senior Software Engineer","email":"prachi@email.com","phone":"+91 98765 43210","location":"Mumbai, India","website":"prachidev.com","linkedin":"linkedin.com/in/prachi","github":"github.com/prachi","summary":"Results-driven Senior Software Engineer with 4+ years building scalable full-stack applications. Led teams of 6 engineers, reduced system latency by 40%, and shipped products used by 500K+ users.","photo":""},"experience":[{"id":"exp1","company":"Google India","role":"Senior Software Engineer","location":"Bengaluru","startDate":"2022-01","endDate":"","current":true,"description":"Architected microservices handling 15M+ API requests/day using Node.js and Kubernetes. Led Payments 2.0 platform reducing transaction failures by 35%. Mentored 3 junior engineers."},{"id":"exp2","company":"Razorpay","role":"Software Engineer","location":"Bengaluru","startDate":"2020-07","endDate":"2021-12","current":false,"description":"Built merchant dashboard serving 200K+ active merchants using React and TypeScript. Optimized PostgreSQL queries from 800ms to 120ms average response time."}],"education":[{"id":"edu1","school":"IIT Bombay","degree":"B.Tech Computer Science","field":"Computer Science","startDate":"2015","endDate":"2019","gpa":"9.2 / 10","achievements":"Deans List - Best Final Year Project"}],"skills":[{"id":"sk1","name":"JavaScript","level":95,"category":"Technical"},{"id":"sk2","name":"React / Next.js","level":92,"category":"Technical"},{"id":"sk3","name":"Node.js","level":90,"category":"Technical"},{"id":"sk4","name":"Python","level":80,"category":"Technical"},{"id":"sk5","name":"PostgreSQL","level":85,"category":"Technical"},{"id":"sk6","name":"AWS / Docker","level":78,"category":"DevOps"}],"projects":[{"id":"prj1","name":"ResumeAI","description":"AI-powered resume builder SaaS with 150+ templates and PDF export. 2000+ users in first month.","tech":"Next.js, MySQL, OpenAI","link":"resumeai.vercel.app","github":"github.com/prachi/resumeai"}],"certifications":[{"id":"cert1","name":"AWS Certified Solutions Architect","issuer":"Amazon Web Services","date":"2023-04","credentialId":"AWS-SAA-2023","url":""}],"languages":[{"id":"lang1","name":"English","proficiency":"Fluent"},{"id":"lang2","name":"Hindi","proficiency":"Native"}],"achievements":[{"id":"ach1","text":"Reduced system latency by 40% through query optimization"},{"id":"ach2","text":"Led team of 6 engineers to deliver Payments 2.0 on schedule"}]}'
);

-- ── MIGRATION (run only when upgrading from older schema) ──
-- ALTER TABLE resumes ADD COLUMN IF NOT EXISTS font_family VARCHAR(150) NOT NULL DEFAULT 'Arial, Helvetica, sans-serif';
