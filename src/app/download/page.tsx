import { Suspense } from "react";


export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DownloadContent />
    </Suspense>
  );
}
function DownloadContent() {
  // Add logic to check for a valid download, show a button, etc.
  return (
    <div>
      <h1>Download your eBook</h1>
      <a href="https://www.youtube.com/watch?v=wYG3iv9qgHE" target="_blank" rel="noopener noreferrer">
  
        <button>watch Video</button>
      </a>
    </div>
  );
}
