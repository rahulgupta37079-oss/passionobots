-- Create contacts table for contact form submissions
CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  source TEXT DEFAULT 'contact_form',
  status TEXT DEFAULT 'new',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create enrollments table for course enrollments
CREATE TABLE IF NOT EXISTS enrollments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  course_slug TEXT NOT NULL,
  course_name TEXT NOT NULL,
  college TEXT,
  graduation_year TEXT,
  experience_level TEXT,
  hear_about_us TEXT,
  status TEXT DEFAULT 'pending',
  payment_status TEXT DEFAULT 'unpaid',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create course_inquiries table for WhatsApp/direct course inquiries
CREATE TABLE IF NOT EXISTS course_inquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  phone TEXT,
  course_slug TEXT NOT NULL,
  course_name TEXT NOT NULL,
  inquiry_type TEXT DEFAULT 'whatsapp',
  message TEXT,
  status TEXT DEFAULT 'new',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created ON contacts(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_enrollments_email ON enrollments(email);
CREATE INDEX IF NOT EXISTS idx_enrollments_course ON enrollments(course_slug);
CREATE INDEX IF NOT EXISTS idx_enrollments_status ON enrollments(status);
CREATE INDEX IF NOT EXISTS idx_enrollments_created ON enrollments(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_inquiries_phone ON course_inquiries(phone);
CREATE INDEX IF NOT EXISTS idx_inquiries_course ON course_inquiries(course_slug);
CREATE INDEX IF NOT EXISTS idx_inquiries_created ON course_inquiries(created_at DESC);
