'use client'
import { useSearchParams } from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  return (
    <div className="min-h-screen grid place-items-center p-8">
      {sessionId ? (
        <a 
          href="/YOUR_EBOOK_FILE.pdf"  // 🚨 REPLACE THIS!
          className="text-blue-600 text-xl hover:underline"
          download
        >
          Download Your Ebook
        </a>
      ) : (
        <p className="text-red-500">Invalid session</p>
      )}
    </div>
  )
}