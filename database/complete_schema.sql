-- ============================================================
-- Resume Builder — Complete MySQL Schema
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

-- ── SEED DATA ──────────────────────────────────────────────

-- Admin user  (password: Admin@123)
INSERT IGNORE INTO users (name, email, password, role) VALUES (
  'Admin',
  'admin@resumeai.com',
  '$2b$12$D16iLwRj5Cw1SanCn5CCR.3zqitqD7KVaupuJyCH7D7KAv1bxsztO',
  'admin'
);

-- Sample ads
INSERT IGNORE INTO advertisements (title, description, image_url, link_url, link_text, position, bg_color, accent_color) VALUES
('Upgrade to Pro', 'Get unlimited resumes, premium templates & AI suggestions.', '', 'https://example.com/pro', 'Upgrade Now', 'top', '#0f0a1e', '#8b5cf6'),
('Export as PDF Free', 'Download your resume in one click. ATS-friendly PDF format.', '', 'https://example.com/export', 'Try Free', 'footer', '#0a1628', '#3b82f6');
