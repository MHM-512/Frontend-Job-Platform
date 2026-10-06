# DevHire — Developer Job Platform

DevHire is a modern, full-featured job recruitment platform built with **React, TypeScript, and a modern frontend technology stack**.

The platform connects job seekers, employers, and administrators through a responsive and scalable interface. Candidates can search and apply for jobs, employers can create and manage job postings, and administrators can manage users, companies, jobs, and applications.

The project was designed with a **feature-based and scalable architecture**, with a strong focus on type safety, server-state management, form handling, reusable UI components, and automated testing.

---

## 🚀 Features

### 👤 Authentication & Authorization

* User registration and login
* Logout functionality
* Role-based access control
* Candidate, Employer, and Admin roles
* Protected routes
* Persistent authentication state
* Role-based dashboards
* Form validation for authentication fields

---

## 💼 Job Management

### Job Search

Users can:

* Browse available jobs
* Search jobs by title or keyword
* Filter jobs by location
* Filter by employment type
* Sort job results
* Navigate through paginated results
* View detailed job information

### Job Details

Each job contains:

* Job title
* Company information
* Location
* Employment type
* Salary range
* Description
* Requirements
* Skills
* Posting date
* Application status

---

## 📝 Job Applications

Candidates can:

* Apply for jobs
* Submit application forms
* Add a cover letter
* View submitted applications
* Track application status
* Cancel applications when applicable

Application statuses include:

* Pending
* Accepted
* Rejected

---

## ⭐ Saved Jobs

Candidates can:

* Save jobs
* Remove saved jobs
* View all saved jobs
* Quickly access previously saved opportunities

---

## 👨‍💼 Employer Dashboard

Employers have access to a dedicated dashboard where they can:

* Create job postings
* Edit existing jobs
* Delete job postings
* View active jobs
* View applicants
* Review applications
* Update application status
* Manage company information

---

## 🏢 Company Management

Employers can manage their company profile, including:

* Company name
* Company description
* Company logo
* Website
* Location
* Company information

Users can also view company profiles and their available job postings.

---

## 🛠️ Admin Dashboard

Administrators have access to a dedicated management dashboard.

Admin features include:

### User Management

* View users
* Search users
* Manage user accounts
* View user roles

### Company Management

* View companies
* Manage company information
* Review registered companies

### Job Management

* View all job postings
* Manage job postings
* Remove inappropriate or invalid jobs

### Application Management

* View applications
* Monitor application statuses
* Manage recruitment activity

---

# 📊 Dashboard

The application includes role-specific dashboards with useful statistics and information.

Dashboard statistics can include:

* Total users
* Active jobs
* Registered companies
* Total applications
* Recent jobs
* Recent applications

The dashboard uses reusable UI components and responsive layouts.

---

# 🔎 Advanced Job Filtering

The job search system supports multiple filters and URL-based search parameters.

Example:

```text
/jobs?search=react&location=remote&type=full-time
```

This allows users to:

* Share filtered search URLs
* Refresh the page without losing filters
* Navigate using browser history
* Keep search state synchronized with the URL

---

# 📱 Responsive Design

The application is designed to work across different screen sizes:

* Desktop
* Tablet
* Mobile

The UI uses responsive layouts and Material UI components to provide a consistent user experience.

---

# 🎨 Material UI

Material UI is used as the primary UI component library.

The project uses reusable components such as:

* Buttons
* Text Fields
* Selects
* Cards
* Dialogs
* Tables
* Drawers
* Menus
* Tabs
* Alerts
* Snackbars
* Chips
* Pagination
* Loading indicators

A custom MUI theme is also used to maintain consistent:

* Colors
* Typography
* Spacing
* Component styling

---

# 🧭 TanStack Router

**TanStack Router** is used for application routing.

The project uses:

* Nested routes
* Dynamic routes
* Search parameters
* Route-based layouts
* Protected routes
* Role-based routing
* Type-safe navigation

Example route structure:

```text
/
├── jobs
│   ├── index
│   └── $jobId
│
├── companies
│   └── $companyId
│
├── login
├── register
│
├── profile
├── applications
├── saved-jobs
│
├── dashboard
│   ├── jobs
│   ├── applicants
│   ├── company
│   └── settings
│
└── admin
    ├── users
    ├── companies
    ├── jobs
    └── applications
```

---

# 🔄 TanStack Query

**TanStack Query** is used for server-state management and API communication.

The application uses:

* `useQuery`
* `useMutation`
* `useQueryClient`
* Query caching
* Query invalidation
* Loading states
* Error handling
* Mutation handling
* Automatic refetching

Example use cases:

```text
GET    /jobs
GET    /jobs/:id
POST   /jobs
PATCH  /jobs/:id
DELETE /jobs/:id

GET    /companies
GET    /applications
POST   /applications
```

After mutations, relevant queries are invalidated to keep the UI synchronized with the latest server data.

---

# 📝 React Hook Form

**React Hook Form** is used for form management and validation.

Forms include:

* Login
* Registration
* Job creation
* Job editing
* Profile management
* Company management
* Job applications
* Settings

The project uses features such as:

* `register`
* `handleSubmit`
* `control`
* `formState`
* Validation rules
* Custom validation
* Error messages
* Form state management

Example:

```tsx
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<JobForm>();
```

---

# 🧪 Vitest

**Vitest** is used for unit and component testing.

Tests cover important application logic such as:

* Utility functions
* Data transformation
* Salary formatting
* Validation logic
* Business logic
* Component behavior

Example:

```text
src/
└── utils/
    ├── formatSalary.ts
    └── formatSalary.test.ts
```

Tests can be executed with:

```bash
npm run test
```

---

# 🎭 Playwright

**Playwright** is used for End-to-End testing.

E2E tests simulate real user interactions with the application.

Example scenarios:

### Authentication Flow

```text
Open application
      ↓
Register
      ↓
Login
      ↓
Access dashboard
```

### Job Application Flow

```text
Login
  ↓
Open Jobs
  ↓
Search for a job
  ↓
Open Job Details
  ↓
Apply
  ↓
Open Applications
  ↓
Verify application status
```

### Employer Flow

```text
Login as Employer
      ↓
Open Dashboard
      ↓
Create Job
      ↓
Edit Job
      ↓
View Applicants
      ↓
Update Application Status
```

Playwright tests can be executed with:

```bash
npx playwright test
```

---

# 🏗️ Project Architecture

The project follows a **Feature-Based Architecture**.

```text
devhire/
│
├── public/
│   ├── images/
│   │   ├── logos/
│   │   ├── companies/
│   │   └── avatars/
│   │
│   └── favicon.svg
│
├── src/
│   │
│   ├── app/
│   │   ├── router/
│   │   │   ├── __root.tsx
│   │   │   ├── index.tsx
│   │   │   │
│   │   │   ├── jobs/
│   │   │   │   ├── index.tsx
│   │   │   │   └── $jobId.tsx
│   │   │   │
│   │   │   ├── companies/
│   │   │   │   ├── index.tsx
│   │   │   │   └── $companyId.tsx
│   │   │   │
│   │   │   ├── login.tsx
│   │   │   ├── register.tsx
│   │   │   │
│   │   │   ├── profile.tsx
│   │   │   ├── applications.tsx
│   │   │   ├── saved-jobs.tsx
│   │   │   │
│   │   │   ├── dashboard/
│   │   │   │   ├── index.tsx
│   │   │   │   │
│   │   │   │   ├── jobs/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── create.tsx
│   │   │   │   │   └── $jobId/
│   │   │   │   │       └── edit.tsx
│   │   │   │   │
│   │   │   │   ├── applicants/
│   │   │   │   │   └── index.tsx
│   │   │   │   │
│   │   │   │   ├── company/
│   │   │   │   │   └── index.tsx
│   │   │   │   │
│   │   │   │   └── settings.tsx
│   │   │   │
│   │   │   └── admin/
│   │   │       ├── index.tsx
│   │   │       ├── users.tsx
│   │   │       ├── companies.tsx
│   │   │       ├── jobs.tsx
│   │   │       └── applications.tsx
│   │   │
│   │   ├── providers/
│   │   │   ├── QueryProvider.tsx
│   │   │   ├── ThemeProvider.tsx
│   │   │   └── AuthProvider.tsx
│   │   │
│   │   ├── config/
│   │   │   ├── env.ts
│   │   │   └── constants.ts
│   │   │
│   │   └── App.tsx
│   │
│   ├── components/
│   │   │
│   │   ├── ui/
│   │   │   ├── Button/
│   │   │   ├── Input/
│   │   │   ├── Select/
│   │   │   ├── Modal/
│   │   │   ├── Loading/
│   │   │   ├── EmptyState/
│   │   │   └── ErrorMessage/
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar/
│   │   │   ├── Sidebar/
│   │   │   ├── Footer/
│   │   │   └── DashboardLayout/
│   │   │
│   │   └── common/
│   │       ├── SearchBar/
│   │       ├── Pagination/
│   │       ├── ConfirmDialog/
│   │       └── ProtectedRoute/
│   │
│   ├── features/
│   │   │
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   └── RegisterForm.tsx
│   │   │   │
│   │   │   ├── hooks/
│   │   │   │   └── useAuth.ts
│   │   │   │
│   │   │   ├── api/
│   │   │   │   └── authApi.ts
│   │   │   │
│   │   │   ├── schemas/
│   │   │   │   └── authSchemas.ts
│   │   │   │
│   │   │   └── types.ts
│   │   │
│   │   ├── jobs/
│   │   │   ├── components/
│   │   │   │   ├── JobCard.tsx
│   │   │   │   ├── JobList.tsx
│   │   │   │   ├── JobFilters.tsx
│   │   │   │   ├── JobSearch.tsx
│   │   │   │   ├── JobDetails.tsx
│   │   │   │   └── JobForm.tsx
│   │   │   │
│   │   │   ├── hooks/
│   │   │   │   ├── useJobs.ts
│   │   │   │   ├── useJob.ts
│   │   │   │   ├── useCreateJob.ts
│   │   │   │   ├── useUpdateJob.ts
│   │   │   │   └── useDeleteJob.ts
│   │   │   │
│   │   │   ├── api/
│   │   │   │   └── jobsApi.ts
│   │   │   │
│   │   │   ├── schemas/
│   │   │   │   └── jobSchemas.ts
│   │   │   │
│   │   │   └── types.ts
│   │   │
│   │   ├── companies/
│   │   │   ├── components/
│   │   │   │   ├── CompanyCard.tsx
│   │   │   │   ├── CompanyDetails.tsx
│   │   │   │   └── CompanyForm.tsx
│   │   │   │
│   │   │   ├── hooks/
│   │   │   │   └── useCompanies.ts
│   │   │   │
│   │   │   ├── api/
│   │   │   │   └── companiesApi.ts
│   │   │   │
│   │   │   └── types.ts
│   │   │
│   │   ├── applications/
│   │   │   ├── components/
│   │   │   │   ├── ApplicationForm.tsx
│   │   │   │   ├── ApplicationCard.tsx
│   │   │   │   └── ApplicationTable.tsx
│   │   │   │
│   │   │   ├── hooks/
│   │   │   │   ├── useApplications.ts
│   │   │   │   ├── useApplyJob.ts
│   │   │   │   └── useUpdateApplication.ts
│   │   │   │
│   │   │   ├── api/
│   │   │   │   └── applicationsApi.ts
│   │   │   │
│   │   │   └── types.ts
│   │   │
│   │   ├── users/
│   │   │   ├── components/
│   │   │   │   ├── UserCard.tsx
│   │   │   │   ├── UserTable.tsx
│   │   │   │   └── ProfileForm.tsx
│   │   │   │
│   │   │   ├── hooks/
│   │   │   │   └── useUsers.ts
│   │   │   │
│   │   │   ├── api/
│   │   │   │   └── usersApi.ts
│   │   │   │
│   │   │   └── types.ts
│   │   │
│   │   ├── savedJobs/
│   │   │   ├── hooks/
│   │   │   │   └── useSavedJobs.ts
│   │   │   ├── api/
│   │   │   │   └── savedJobsApi.ts
│   │   │   └── types.ts
│   │   │
│   │   └── dashboard/
│   │       ├── components/
│   │       │   ├── StatsCard.tsx
│   │       │   ├── RecentJobs.tsx
│   │       │   └── RecentApplications.tsx
│   │       │
│   │       └── types.ts
│   │
│   ├── services/
│   │   ├── apiClient.ts
│   │   ├── storage.ts
│   │   └── errorHandler.ts
│   │
│   ├── types/
│   │   ├── api.ts
│   │   ├── pagination.ts
│   │   └── common.ts
│   │
│   ├── utils/
│   │   ├── formatDate.ts
│   │   ├── formatSalary.ts
│   │   ├── cn.ts
│   │   └── validation.ts
│   │
│   ├── theme/
│   │   ├── theme.ts
│   │   ├── colors.ts
│   │   └── typography.ts
│   │
│   ├── mocks/
│   │   ├── db.json
│   │   ├── seed.ts
│   │   └── handlers/
│   │
│   ├── test/
│   │   ├── setup.ts
│   │   ├── utils.tsx
│   │   └── mocks.ts
│   │
│   ├── assets/
│   │   └── images/
│   │
│   ├── main.tsx
│   └── index.css
│
├── tests/
│   ├── e2e/
│   │   ├── auth.spec.ts
│   │   ├── jobs.spec.ts
│   │   ├── applications.spec.ts
│   │   └── employer.spec.ts
│   │
│   └── fixtures/
│       └── auth.fixture.ts
│
├── .env
├── .env.example
├── .gitignore
├── eslint.config.js
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
├── playwright.config.ts
├── package.json
├── README.md
└── db.json
```

Each feature contains its own:

* Components
* Hooks
* API functions
* Types
* Validation schemas

This structure keeps the codebase modular and easier to maintain as the application grows.

---

# 🔌 API Layer

The frontend communicates with a REST-style API.

Example endpoints:

```text
GET     /jobs
GET     /jobs/:id
POST    /jobs
PATCH   /jobs/:id
DELETE  /jobs/:id

GET     /companies
GET     /companies/:id
POST    /companies
PATCH   /companies/:id

GET     /applications
POST    /applications
PATCH   /applications/:id

GET     /users
GET     /users/:id
PATCH   /users/:id
```

The API layer is separated from UI components to keep the application maintainable and testable.

---

# 🗄️ Mock API

For development purposes, the project can use a local mock REST API.

Example:

```text
http://localhost:8000
```

Example database:

```json
{
  "users": [],
  "companies": [],
  "jobs": [],
  "applications": []
}
```

This allows the frontend to work with realistic API requests without requiring a production backend.

---

# 🔐 Role-Based Access

The application supports three main roles:

```text
Candidate
Employer
Admin
```

Each role has different permissions.

### Candidate

```text
Browse Jobs
Apply for Jobs
Save Jobs
Manage Profile
View Applications
```

### Employer

```text
Create Jobs
Edit Jobs
Delete Jobs
Manage Applicants
Manage Company
```

### Admin

```text
Manage Users
Manage Companies
Manage Jobs
Manage Applications
```

---

# ⚡ State Management

The application separates different types of state.

### Server State

Managed with:

```text
TanStack Query
```

Examples:

```text
Jobs
Companies
Applications
Users
```

### Form State

Managed with:

```text
React Hook Form
```

Examples:

```text
Login
Register
Job Forms
Application Forms
Profile Forms
```

### URL State

Managed through:

```text
TanStack Router
```

Examples:

```text
Search
Filters
Sorting
Pagination
```

### UI State

Managed using React state where appropriate.

Examples:

```text
Dialog visibility
Mobile navigation
Selected UI elements
Temporary UI state
```

---

# 🧪 Testing Strategy

The project uses multiple testing levels.

```text
                 Testing
                    │
          ┌─────────┴─────────┐
          │                   │
       Vitest              Playwright
          │                   │
    Unit/Component           E2E
       Testing              Testing
```

### Vitest

Used for isolated logic and component behavior.

### Playwright

Used for complete user workflows.

This provides better confidence in the reliability of the application.

---

# 🛡️ Error & Loading Handling

The application handles different API states:

```text
Loading
Success
Error
Empty
```

Examples:

* Loading indicators
* Skeleton components
* Error alerts
* Retry actions
* Empty states
* Form error messages
* API error handling

---

# 🌙 Theme & UI

The application uses a customized Material UI theme.

Features include:

* Consistent typography
* Reusable spacing system
* Responsive breakpoints
* Reusable UI components
* Consistent colors
* Light/Dark theme support

---

# 🛠️ Tech Stack

## Core

* React
* TypeScript
* Vite

## Routing

* TanStack Router

## Server State & Data Fetching

* TanStack Query

## Forms

* React Hook Form

## UI

* Material UI (MUI)
* Emotion

## Testing

* Vitest
* Playwright

## API / Development

* REST API
* Mock API
* JSON Server

## Development Tools

* ESLint
* TypeScript
* Git
* GitHub

---

# 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/devhire.git
```

Navigate to the project:

```bash
cd devhire
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Start the mock API:

```bash
npm run server
```

---

# 🧪 Testing

Run Vitest:

```bash
npm run test
```

Run Playwright:

```bash
npx playwright test
```

Run Playwright UI mode:

```bash
npx playwright test --ui
```

---

# 📁 Main Project Structure

```text
DevHire
│
├── Authentication
├── Job Search
├── Job Details
├── Job Applications
├── Saved Jobs
├── Candidate Dashboard
├── Employer Dashboard
├── Admin Dashboard
├── Company Management
├── User Management
├── API Layer
├── Form Validation
├── Responsive UI
├── Unit Testing
└── E2E Testing
```

---

# 🎯 Project Goals

The main goals of DevHire are to demonstrate practical frontend development skills including:

* Building a scalable React application
* Using TypeScript for type-safe development
* Managing server state with TanStack Query
* Building type-safe routing with TanStack Router
* Creating complex forms with React Hook Form
* Building reusable UI systems with Material UI
* Writing unit and component tests with Vitest
* Writing end-to-end tests with Playwright
* Designing feature-based application architecture
* Working with REST APIs
* Handling loading, error, and empty states
* Implementing role-based application flows
* Building responsive and maintainable user interfaces

---

# 📌 Future Improvements

Possible future improvements include:

* Real backend integration
* JWT authentication
* Real-time notifications
* Resume upload
* Profile completion system
* Advanced job recommendation system
* Email notifications
* Advanced analytics
* Company verification
* File upload support
* Docker deployment
* CI/CD pipeline
* Production deployment


## ⭐ If you find this project useful

Feel free to explore the source code, open issues, or suggest improvements.
