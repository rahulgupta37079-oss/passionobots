// Cloudflare Worker Bindings
export type Bindings = {
  DB: D1Database;
}

// Contact form submission
export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  source?: string;
}

// Course enrollment
export interface EnrollmentSubmission {
  name: string;
  email: string;
  phone: string;
  course_slug: string;
  course_name: string;
  college?: string;
  graduation_year?: string;
  experience_level?: string;
  hear_about_us?: string;
}

// Course inquiry (WhatsApp, etc.)
export interface CourseInquiry {
  name?: string;
  email?: string;
  phone?: string;
  course_slug: string;
  course_name: string;
  inquiry_type?: string;
  message?: string;
}
