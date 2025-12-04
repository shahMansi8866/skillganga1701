# SkillGanga - Job Portal Platform

A modern full-stack job portal connecting job seekers with employers. Built with Next.js, React, Node.js/Express, and SQLite.

## 🚀 Features

### For Job Seekers
- **Browse Jobs**: View all available jobs posted by employers
- **Job Details**: Click any job to see full details, requirements, location, and salary
- **Save Jobs**: Bookmark interesting jobs to view later
- **My Bookmarks**: Access all saved jobs in one place
- **Application Tracking**: Monitor status of submitted applications
- **Resume Builder**: Build and manage your resume
- **Interview Coach**: Get interview preparation tips
- **Modern Dashboard**: Profile header with progress ring, stats overview, and quick actions

### For Employers
- **Post Jobs**: Create and publish job listings with full details
- **Manage Jobs**: View, edit, and delete posted jobs
- **Track Applications**: See who applied and manage applicant status
- **Application Review**: Mark applications as reviewed or rejected
- **Employer Dashboard**: Quick access to jobs posted and applications received
- **Copy Job ID**: Easy job ID copying for sharing

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js (App Router)
- **UI Library**: React with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **State Management**: React Hooks + localStorage

### Backend
- **Runtime**: Node.js (v22.14.0)
- **Framework**: Express.js
- **Database**: SQLite (better-sqlite3)
- **Authentication**: JWT (jsonwebtoken)
- **File Upload**: Multer
- **Password Security**: bcryptjs
- **Environment**: dotenv
- **CORS**: cors middleware

## 📁 Project Structure

```
project 6sem/
├── app/                          # Next.js App Router
│   ├── dashboard/               # Dashboard routes
│   ├── job/[id]/               # Dynamic job detail page
│   └── page.tsx                # Home page
├── backend/                      # Express API server
│   ├── src/
│   │   ├── config/             # Database & email config
│   │   ├── controllers/        # API request handlers
│   │   ├── middleware/         # Auth & role middleware
│   │   ├── models/             # Database models
│   │   ├── routes/             # API routes
│   │   └── utils/              # Helper functions
│   ├── data/                   # SQLite database
│   ├── uploads/                # Resume uploads
│   └── server.js               # Express entry point
├── components/                  # React components
│   ├── dashboards/             # Seeker & employer dashboards
│   ├── auth/                   # Login & signup forms
│   ├── modals/                 # Modal dialogs
│   └── ui/                     # UI component library
├── lib/                         # Utilities & helpers
├── public/                      # Static assets
└── styles/                      # Global CSS

```

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

#### Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in `backend/`:
```env
PORT=5000
JWT_SECRET=your_secret_key_here
DATABASE_PATH=./data/sqlite.db
```

#### Frontend Setup
```bash
cd ..
npm install
# or
pnpm install
```

Create `.env.local` file in project root:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Running the Application

#### Terminal 1 - Backend Server
```bash
cd backend
npm run dev
```
Backend runs on `http://localhost:5000`

#### Terminal 2 - Frontend Dev Server
```bash
npm run dev
# or
pnpm dev
```
Frontend runs on `http://localhost:3000`

## 📡 API Endpoints

### Jobs
- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/:jobId` - Get job details
- `POST /api/jobs` - Create job (employer)
- `PUT /api/jobs/:id` - Update job
- `DELETE /api/jobs/:id` - Delete job
- `GET /api/jobs/employer/:employerId` - Get employer's jobs

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Applications
- `POST /api/applications/:jobId/apply` - Apply to job
- `GET /api/applications/me` - Get my applications
- `PUT /api/applications/:id/status` - Update application status

### Bookmarks
- `POST /api/bookmarks` - Toggle bookmark
- `GET /api/bookmarks/:userId` - Get user's bookmarks

## 🔐 Authentication

The app uses JWT (JSON Web Tokens) for authentication:
1. User registers or logs in
2. Server returns JWT token
3. Token stored in localStorage with user role
4. Token sent in `Authorization: Bearer <token>` header for protected routes
5. Middleware validates token and role

### User Roles
- **jobseeker**: Can browse, save, and apply to jobs
- **employer**: Can post, manage jobs, and review applications

## 🎨 UI/UX Features

### Modern Dashboard Header
- Gradient background cover
- Circular progress ring (profile strength indicator)
- Avatar display
- User name, handle, and organization
- Edit profile button
- Responsive on mobile and desktop

### Color Scheme
- **Primary**: Teal/Cyan (#0ea5a4, #06b6d4)
- **Secondary**: Sky Blue
- **Accent**: Chart colors for data visualization
- Light and dark mode support

## 📊 Database Schema

### Users Table
- id, email, password (hashed), name, role, createdAt

### Jobs Table
- id, employerId, title, company, description, type, salary, location, requirements (JSON), createdAt

### Applications Table
- id, jobId, applicantId, status, resumeUrl, createdAt

### Bookmarks Table
- id, userId, jobId, createdAt

## 🔄 Data Flow

### Post Job Flow
1. Employer fills job form on dashboard
2. Clicks "Post Job"
3. Frontend sends `POST /api/jobs` with job details
4. Backend saves to SQLite database
5. Job appears in seeker dashboard

### View & Save Job Flow
1. Job seeker sees job in dashboard (fetched from `GET /api/jobs`)
2. Clicks "View Details"
3. Navigates to `/job/[id]` page
4. Full job details load from `GET /api/jobs/:jobId`
5. Clicks "Save" button
6. Bookmark saved to database via `POST /api/bookmarks`
7. Save button shows as "Saved" (persists on refresh)

## 🛡️ Security Features

- **Password Hashing**: bcryptjs for secure password storage
- **JWT Auth**: Stateless authentication
- **CORS**: Configured to allow frontend requests
- **Role-based Access Control**: Separate endpoints for seekers and employers
- **File Upload**: Multer validation for resume uploads
- **Environment Variables**: Sensitive data in .env files

## 🚧 Future Enhancements

- [ ] Email notifications for new applications
- [ ] Advanced job filtering and search
- [ ] User profile customization
- [ ] Rating and review system
- [ ] Payment integration for job postings
- [ ] Real-time notifications
- [ ] Analytics dashboard for employers
- [ ] Mobile app (React Native)

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 👥 Support

For issues or questions:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Contact the development team

## 📞 Contact

**SkillGanga Team**
- Email:
- GitHub: [SkillGanga Repository]

---

**Last Updated**: December 2025
**Status**: Active Development 🚀
