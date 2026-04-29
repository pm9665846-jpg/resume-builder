-- ============================================================
-- Resume Builder — Complete MySQL Schema (Latest)
-- Run: mysql -u root -p < complete_schema.sql
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
-- All resume data (personalInfo, experience, education, skills,
-- projects, certifications, languages, interests, achievements,
-- achievementsList, activities, publications, references,
-- additionalInfo, enabledOptionalSections) is stored as JSON
-- in the `data` LONGTEXT column. No schema change needed for
-- adding new sections — just update the JSON.
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

-- ── PASSWORD RESET TOKENS ──────────────────────────────────
CREATE TABLE IF NOT EXISTS password_reset_tokens (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  email      VARCHAR(255)  NOT NULL,
  token      VARCHAR(10)   NOT NULL,
  used       TINYINT(1)    DEFAULT 0,
  expires_at TIMESTAMP     NOT NULL,
  created_at TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email_token (email, token)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ── ADVERTISEMENTS ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS advertisements (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  title        VARCHAR(255)   NOT NULL,
  description  VARCHAR(500)   DEFAULT '',
  image_url    VARCHAR(1000)  DEFAULT '',
  link_url     VARCHAR(1000)  DEFAULT '',
  link_text    VARCHAR(100)   DEFAULT 'Learn More',
  position     ENUM('top','footer','sidebar') NOT NULL DEFAULT 'top',
  bg_color     VARCHAR(20)    DEFAULT '#1e1b4b',
  text_color   VARCHAR(20)    DEFAULT '#ffffff',
  accent_color VARCHAR(20)    DEFAULT '#8b5cf6',
  is_active    TINYINT(1)     NOT NULL DEFAULT 1,
  clicks       INT            DEFAULT 0,
  impressions  INT            DEFAULT 0,
  created_at   TIMESTAMP      DEFAULT CURRENT_TIMESTAMP,
  updated_at   TIMESTAMP      DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_position (position),
  INDEX idx_active   (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ── PAGES (Dynamic content — Privacy Policy, About, Terms) ─
CREATE TABLE IF NOT EXISTS pages (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  slug       VARCHAR(100) NOT NULL UNIQUE,
  title      VARCHAR(255) NOT NULL,
  content    LONGTEXT     NOT NULL,
  updated_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ── FEATURES (Dynamic landing page feature cards) ──────────
CREATE TABLE IF NOT EXISTS features (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  icon        VARCHAR(50)  NOT NULL DEFAULT 'Zap',
  title       VARCHAR(255) NOT NULL,
  description TEXT         NOT NULL,
  color       VARCHAR(20)  NOT NULL DEFAULT '#8b5cf6',
  sort_order  INT          NOT NULL DEFAULT 0,
  is_active   TINYINT(1)   NOT NULL DEFAULT 1,
  INDEX idx_sort   (sort_order),
  INDEX idx_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- SEED DATA
-- ============================================================

-- Admin user (password: Admin@123)
INSERT IGNORE INTO users (name, email, password, role) VALUES (
  'Admin',
  'admin@resumeai.com',
  '$2b$12$D16iLwRj5Cw1SanCn5CCR.3zqitqD7KVaupuJyCH7D7KAv1bxsztO',
  'admin'
);

-- Default Pages
INSERT IGNORE INTO pages (slug, title, content) VALUES
(
  'privacy-policy',
  'Privacy Policy',
  'We take your privacy seriously. This policy explains what data we collect, how we use it, and the choices you have.\n\n## Information We Collect\nWhen you register, we collect your name, email address, and password (stored as a secure bcrypt hash). All resume content you enter is stored securely in our database.\n\n## How We Use Your Information\nYour data is used to create, store, and export your resumes. We never sell, rent, or trade your personal information to third parties.\n\n## Data Storage & Security\nYour data is stored in a secured MySQL database. Passwords are hashed using bcrypt and are never stored in plain text.\n\n## Cookies\nWe use session cookies to keep you logged in. We do not use third-party advertising or tracking cookies.\n\n## Your Rights\nYou can view, update, and delete your data at any time from your dashboard.\n\n## Contact Us\nFor privacy-related queries, contact us at: privacy@resumebuilder.com'
),
(
  'about',
  'About Us',
  'Resume Builder was created with a simple belief — everyone deserves a great resume, regardless of their design skills or budget.\n\n## Our Mission\nTo democratize professional resume creation. We believe a polished, well-designed resume should not require expensive designers or complicated software.\n\n## What We Built\n- 200+ professional resume templates\n- AI-powered writing suggestions\n- One-click PDF export\n- Live preview editor\n- ATS-optimized formatting\n\n## Our Values\n**Built for Results** — Every feature is designed with one goal: helping you land your dream job faster.\n\n**User First** — We listen to our users. Every update comes from real feedback from real job seekers.\n\n**Privacy by Design** — Your resume data is yours. We never sell your information.\n\n## Contact\nReach us at: hello@resumebuilder.com'
),
(
  'terms',
  'Terms & Conditions',
  'Please read these Terms and Conditions carefully before using Resume Builder.\n\n## 1. Acceptance of Terms\nBy using Resume Builder, you agree to these Terms. You must be at least 13 years old to use this Service.\n\n## 2. Account Registration\nYou agree to provide accurate information during registration. You are responsible for maintaining the confidentiality of your account credentials.\n\n## 3. Your Content\nAll resume data you create remains your property. By using the Service, you grant us a limited license to store and process your content solely to provide the Service.\n\n## 4. Prohibited Activities\n- Using the Service for any unlawful purpose\n- Attempting unauthorized access to our systems\n- Creating resumes with fraudulent credentials\n\n## 5. Free Plan & Paid Features\nThe Service offers a free plan with core features. Certain advanced features may require a paid subscription.\n\n## 6. Disclaimers\nWe do not guarantee that using our Service will result in job interviews or employment.\n\n## 7. Contact\nFor legal queries, contact us at: legal@resumebuilder.com'
);

-- Default Features
INSERT IGNORE INTO features (icon, title, description, color, sort_order) VALUES
('Wand2',    'AI-Powered Writing',  'Smart suggestions that tailor your resume to any job description automatically.',  '#8b5cf6', 1),
('Layout',   'Premium Templates',   '200+ professionally designed templates crafted by top designers.',                '#3b82f6', 2),
('Eye',      'Live Preview',        'See every change in real-time with our split-screen editor.',                     '#06b6d4', 3),
('Download', 'One-Click Export',    'Export to PDF or DOCX with perfect formatting, every time.',                     '#ec4899', 4),
('Palette',  'Theme Customizer',    'Personalize colors, fonts, and layouts to match your style.',                    '#f59e0b', 5),
('Shield',   'ATS Optimized',       'Beat applicant tracking systems with our smart formatting engine.',              '#10b981', 6),
('Zap',      'Auto Save',           'Never lose your work. Every keystroke is saved automatically.',                  '#8b5cf6', 7),
('Globe',    'Drag & Drop',         'Reorder sections effortlessly with intuitive drag and drop.',                    '#3b82f6', 8);

-- Sample Ads
INSERT IGNORE INTO advertisements (title, description, image_url, link_url, link_text, position, bg_color, accent_color) VALUES
('Upgrade to Pro', 'Get unlimited resumes, premium templates & AI suggestions.', '', 'https://example.com/pro', 'Upgrade Now', 'top', '#0f0a1e', '#8b5cf6'),
('Export as PDF Free', 'Download your resume in one click. ATS-friendly PDF format.', '', 'https://example.com/export', 'Try Free', 'footer', '#0a1628', '#3b82f6');
