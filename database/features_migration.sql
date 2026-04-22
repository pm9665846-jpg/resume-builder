-- Features table for dynamic landing page features section
USE resume_builder;

CREATE TABLE IF NOT EXISTS features (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  icon       VARCHAR(50)  NOT NULL DEFAULT 'Zap',
  title      VARCHAR(255) NOT NULL,
  description TEXT         NOT NULL,
  color      VARCHAR(20)  NOT NULL DEFAULT '#8b5cf6',
  sort_order INT          NOT NULL DEFAULT 0,
  is_active  TINYINT(1)   NOT NULL DEFAULT 1,
  INDEX idx_sort (sort_order),
  INDEX idx_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Default features
INSERT IGNORE INTO features (icon, title, description, color, sort_order) VALUES
('Wand2',    'AI-Powered Writing',  'Smart suggestions that tailor your resume to any job description automatically.',  '#8b5cf6', 1),
('Layout',   'Premium Templates',   '200+ professionally designed templates crafted by top designers.',                '#3b82f6', 2),
('Eye',      'Live Preview',        'See every change in real-time with our split-screen editor.',                     '#06b6d4', 3),
('Download', 'One-Click Export',    'Export to PDF or DOCX with perfect formatting, every time.',                     '#ec4899', 4),
('Palette',  'Theme Customizer',    'Personalize colors, fonts, and layouts to match your style.',                    '#f59e0b', 5),
('Shield',   'ATS Optimized',       'Beat applicant tracking systems with our smart formatting engine.',              '#10b981', 6),
('Zap',      'Auto Save',           'Never lose your work. Every keystroke is saved automatically.',                  '#8b5cf6', 7),
('Globe',    'Drag & Drop',         'Reorder sections effortlessly with intuitive drag and drop.',                    '#3b82f6', 8);
