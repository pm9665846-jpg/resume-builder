-- Pages table for dynamic Privacy Policy and About Us content
USE resume_builder;

CREATE TABLE IF NOT EXISTS pages (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  slug       VARCHAR(100) NOT NULL UNIQUE,
  title      VARCHAR(255) NOT NULL,
  content    LONGTEXT NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Default Privacy Policy content
INSERT IGNORE INTO pages (slug, title, content) VALUES (
  'privacy-policy',
  'Privacy Policy',
  'We take your privacy seriously. This policy explains what data we collect, how we use it, and the choices you have.\n\n## Information We Collect\nWhen you register, we collect your name, email address, and password (stored as a secure bcrypt hash). All resume content you enter is stored securely in our database.\n\n## How We Use Your Information\nYour data is used to create, store, and export your resumes. We never sell, rent, or trade your personal information to third parties.\n\n## Data Storage & Security\nYour data is stored in a secured MySQL database. Passwords are hashed using bcrypt and are never stored in plain text.\n\n## Cookies\nWe use session cookies to keep you logged in. We do not use third-party advertising or tracking cookies.\n\n## Your Rights\nYou can view, update, and delete your data at any time from your dashboard.\n\n## Contact Us\nFor privacy-related queries, contact us at: privacy@resumebuilder.com'
);

-- Default About Us content
INSERT IGNORE INTO pages (slug, title, content) VALUES (
  'about',
  'About Us',
  'Resume Builder was created with a simple belief — everyone deserves a great resume, regardless of their design skills or budget.\n\n## Our Mission\nTo democratize professional resume creation. We believe a polished, well-designed resume should not require expensive designers or complicated software.\n\n## What We Built\n- 200+ professional resume templates\n- AI-powered writing suggestions\n- One-click PDF export\n- Live preview editor\n- ATS-optimized formatting\n\n## Our Values\n**Built for Results** — Every feature is designed with one goal: helping you land your dream job faster.\n\n**User First** — We listen to our users. Every update comes from real feedback from real job seekers.\n\n**Privacy by Design** — Your resume data is yours. We never sell your information.\n\n## Contact\nReach us at: hello@resumebuilder.com'
);

-- Default Terms & Conditions content
INSERT IGNORE INTO pages (slug, title, content) VALUES (
  'terms',
  'Terms & Conditions',
  'Please read these Terms and Conditions carefully before using Resume Builder. By accessing or using the Service, you agree to be bound by these terms.\n\n## 1. Acceptance of Terms\nBy using Resume Builder, you agree to these Terms. If you do not agree, please do not use the Service. You must be at least 13 years old to use this Service.\n\n## 2. Account Registration\nYou agree to provide accurate information during registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.\n\n## 3. Your Content\nAll resume data you create remains your property. By using the Service, you grant us a limited license to store and process your content solely to provide the Service.\n\n## 4. Prohibited Activities\n- Using the Service for any unlawful purpose\n- Attempting unauthorized access to our systems\n- Uploading malicious code or viruses\n- Creating resumes with fraudulent credentials\n\n## 5. Free Plan & Paid Features\nThe Service offers a free plan with core features. Certain advanced features may require a paid subscription. Pricing will be clearly communicated before purchase.\n\n## 6. Intellectual Property\nThe Service, including templates, design, and code, is protected by copyright. Resume templates are licensed for personal use only.\n\n## 7. Disclaimers\nWe do not guarantee that using our Service will result in job interviews or employment. The Service is provided as-is without warranties of any kind.\n\n## 8. Termination\nWe may suspend or terminate your access for violations of these Terms. You may stop using the Service at any time.\n\n## 9. Contact\nFor legal queries, contact us at: legal@resumebuilder.com'
);
