-- ── ADVERTISEMENTS TABLE ──────────────────────────────────
CREATE TABLE IF NOT EXISTS advertisements (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  title       VARCHAR(255)  NOT NULL,
  description VARCHAR(500)  DEFAULT '',
  image_url   VARCHAR(1000) DEFAULT '',
  link_url    VARCHAR(1000) DEFAULT '',
  link_text   VARCHAR(100)  DEFAULT 'Learn More',
  position    ENUM('top','footer','sidebar') NOT NULL DEFAULT 'top',
  bg_color    VARCHAR(20)   DEFAULT '#1e1b4b',
  text_color  VARCHAR(20)   DEFAULT '#ffffff',
  accent_color VARCHAR(20)  DEFAULT '#8b5cf6',
  is_active   TINYINT(1)    NOT NULL DEFAULT 1,
  clicks      INT           DEFAULT 0,
  impressions INT           DEFAULT 0,
  created_at  TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_position (position),
  INDEX idx_active   (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Sample ads
INSERT IGNORE INTO advertisements (title, description, image_url, link_url, link_text, position, bg_color, accent_color) VALUES
('Upgrade to Pro', 'Get unlimited resumes, premium templates & AI suggestions. No limits.', '', 'https://example.com/pro', 'Upgrade Now', 'top', '#0f0a1e', '#8b5cf6'),
('Download as PDF Free', 'Export your resume in one click. Professional PDF format, ATS-friendly.', '', 'https://example.com/export', 'Try Free', 'footer', '#0a1628', '#3b82f6');
