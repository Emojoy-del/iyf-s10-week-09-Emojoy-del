# CommunityHub Frontend 🎉

A fully functional community platform built with React, React Router, and CSS Modules. Users can browse posts, create new posts, like content, and search through the community feed.

## 🚀 Features Implemented

- **React Router Navigation** - Multi-page SPA with seamless routing
- **JSONPlaceholder API Integration** - Fetches real posts from API
- **Search & Filter** - Real-time search functionality for posts
- **Create Posts** - Form to create new posts with local storage persistence
- **Like System** - Like/unlike posts with state persistence
- **Loading States** - User feedback while data loads
- **Error Handling** - Graceful error messages
- **Responsive Design** - Works on desktop and mobile
- **Custom Hooks** - `useFetch` and `useLocalStorage` for reusability
- **Reusable Components** - Button, Input, Card components
- **CSS Modules** - Scoped styling to prevent conflicts

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.jsx          # Navigation bar
│   │   ├── Header.module.css
│   │   ├── Sidebar.jsx         # Community stats sidebar
│   │   ├── Sidebar.module.css
│   │   ├── Footer.jsx          # Footer
│   │   └── Footer.module.css
│   ├── Post/
│   │   ├── PostCard.jsx        # Individual post card
│   │   ├── PostCard.module.css
│   │   ├── PostList.jsx        # List with search
│   │   ├── PostList.module.css
│   │   ├── CreatePostForm.jsx  # Form component
│   │   └── CreatePostForm.module.css
│   └── shared/
│       ├── Button.jsx          # Reusable button
│       ├── Button.module.css
│       ├── Input.jsx           # Reusable input
│       ├── Input.module.css
│       ├── Card.jsx            # Reusable card
│       └── Card.module.css
├── hooks/
│   ├── useFetch.js             # API fetching hook
│   └── useLocalStorage.js      # Local storage hook
├── pages/
│   ├── Home.jsx                # Welcome + recent posts
│   ├── Home.module.css
│   ├── Posts.jsx               # All posts list
│   ├── Posts.module.css
│   ├── PostDetail.jsx          # Single post view
│   ├── PostDetail.module.css
│   ├── CreatePost.jsx          # Create post page
│   ├── CreatePost.module.css
│   ├── About.jsx               # About page
│   └── About.module.css
├── App.jsx                     # Main app with routing
├── App.css                     # Global layout styles
├── main.jsx                    # Entry point
└── index.css                   # Global styles
```

## 🛠️ Technology Stack

- **React 19.2** - UI library
- **React Router DOM 7.14** - Client-side routing
- **Vite 8.0** - Build tool & dev server
- **CSS Modules** - Component-scoped styling
- **JSONPlaceholder API** - Mock API for posts

## 📦 Installation

1. Navigate to the project directory:

```bash
cd iyf-s10-week-09-Emojoy-del
```

2. Install dependencies:

```bash
npm install
```

## 🚀 Running the Project

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Check code quality
- `npm run preview` - Preview production build

## 📄 Pages Overview

### Home (`/`)

- Welcome section with call-to-action
- Displays 5 most recent posts
- Navigation to all posts

### Posts (`/posts`)

- Full list of all posts (API + local)
- Real-time search functionality
- Filter by title or body text
- Like/unlike capability

### Post Detail (`/posts/:id`)

- Full post view with complete content
- Like button with counter
- Back navigation button

### Create Post (`/create`)

- Form to create new posts
- Title and body fields
- Auto-redirects to posts page after creation
- Posts stored in localStorage

### About (`/about`)

- Information about the platform
- Features list

## 🎨 Components

### Shared Components

- **Button** - Variants: primary, secondary, danger
- **Input** - Text input with validation
- **Card** - Container component with shadow

### Layout Components

- **Header** - Navigation with routes
- **Sidebar** - Community stats and activity
- **Footer** - Copyright information

### Post Components

- **PostCard** - Individual post preview with like button
- **PostList** - List with search functionality
- **CreatePostForm** - Form for creating posts

## 🪝 Custom Hooks

### useFetch(url)

Fetches data from an API endpoint with loading and error states.

```jsx
const { data, loading, error } = useFetch(url);
```

### useLocalStorage(key, initialValue)

Persists state to localStorage automatically.

```jsx
const [value, setValue] = useLocalStorage("key", initialValue);
```

## 💾 Data Persistence

- New posts are saved to localStorage
- Likes are persisted across sessions
- Uses `useLocalStorage` hook for state management

## 🎯 Key Features

1. **API Integration** - Fetches posts from JSONPlaceholder
2. **Search** - Filter posts by title or body
3. **CRUD Operations** - Read from API, Create locally
4. **State Management** - Combined API + localStorage
5. **Responsive** - Mobile-friendly design
6. **Error Handling** - User-friendly error messages
7. **Loading States** - Visual feedback during data fetch

## 🔍 Linting

The project follows ESLint best practices. Run linting with:

```bash
npm run lint
```

## 📱 Responsive Breakpoints

- Desktop (>1024px) - Full layout with sidebar
- Tablet (768px-1024px) - Adjusted spacing
- Mobile (<768px) - Stacked layout, sidebar becomes part of main content

## 🚀 Deployment

Build for production:

```bash
npm run build
```

The `dist/` folder contains optimized files ready for deployment.

## 📝 Notes

- Posts created locally are stored with a timestamp ID
- All likes are tracked per post across sessions
- Search is case-insensitive
- API posts are combined with locally created posts
- Responsive design tested on common breakpoints

---

**Built with React and Vite** ✨
