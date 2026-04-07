-- ResumeAI Database Schema
-- Run this in your MySQL client

CREATE DATABASE IF NOT EXISTS resume_builder CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE resume_builder;

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) DEFAULT '',   -- empty for Google OAuth users
  role ENUM('user', 'admin') DEFAULT 'user',
  avatar VARCHAR(500),
  provider VARCHAR(50) DEFAULT 'credentials',  -- 'google' or 'credentials'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email)
);

-- Resumes table
CREATE TABLE IF NOT EXISTS resumes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL DEFAULT 'Untitled Resume',
  template VARCHAR(50) DEFAULT 'modern',
  theme_color VARCHAR(20) DEFAULT '#8b5cf6',
  data LONGTEXT,  -- JSON blob of all resume content
  is_draft BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_id (user_id)
);

-- Sample admin user (password: Admin@123)
INSERT IGNORE INTO users (name, email, password, role) VALUES (
  'Admin',
  'admin@resumeai.com',
  '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj4J/HS.iK2e',
  'admin'
);
