# Kitchen Hand Guideline - BangPop Melbourne

A bilingual (Thai/English) internal guideline web application for Kitchen Hand staff at BangPop Melbourne. Built with React, Vite, Tailwind CSS, and Google Gemini AI.

## Features

- **Bilingual Content**: Seamlessly toggle between Thai (source of truth) and English.
- **Searchable Guidelines**: Quickly find specific duties, checklists, or priorities.
- **Interactive Checklists**: Check off tasks for Morning, Evening, and Closing shifts.
- **AI Assistant**: Ask questions about the guidelines and get concise, accurate answers powered by Gemini AI.
- **Mobile-First Design**: Optimized for readability and ease of use on mobile devices during shifts.
- **API Key Rotation**: Robust server-side logic to handle API key quotas and rate limits.

## Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS v4, Lucide React
- **Backend/API**: Express (Local Dev), Vercel Serverless Functions (Production)
- **AI Integration**: `@google/genai` SDK

## Local Development Setup

1. **Clone the repository** (or download the source code).
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment variables**:
   Create a `.env` file in the root directory based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Add your Gemini API keys to the `.env` file.

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## Deployment to Vercel

This project is configured to be deployed easily on Vercel.

1. **Push your code to GitHub**.
2. **Log in to Vercel** and click "Add New..." -> "Project".
3. **Import your GitHub repository**.
4. **Configure Environment Variables** in the Vercel dashboard before deploying:
   - `API_KEY_1`: Your primary Gemini API key
   - `API_KEY_2`: Your secondary Gemini API key (optional)
   - `API_KEY_3`: Your tertiary Gemini API key (optional)
   - `GEMINI_API_KEY`: Fallback API key (optional)
5. **Deploy**: Vercel will automatically detect the Vite project and build it. The serverless function in `api/chat.ts` will handle the AI requests.

## API Key Rotation System

The application uses a server-side API key rotation system to ensure high availability of the AI assistant. 
It reads up to 4 keys from environment variables (`API_KEY_1`, `API_KEY_2`, `API_KEY_3`, `GEMINI_API_KEY`).
If a request fails (e.g., due to quota limits), it automatically retries with the next available key in the pool.
This logic is implemented in `src/server/ai.ts` (for local dev) and `api/chat.ts` (for Vercel).

## Future Improvements

- **User Authentication**: Add login for staff members.
- **Progress Tracking**: Save checklist progress to a database (e.g., Firebase or Supabase) so managers can review completed tasks.
- **Push Notifications**: Remind staff of closing duties or urgent tasks.
- **Offline Mode**: Implement a Service Worker to allow reading guidelines without an internet connection.
