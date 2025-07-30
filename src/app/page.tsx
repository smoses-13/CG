'use client'
export default function Home() {
  const handleCheckout = () => {
    fetch('/api/checkout', { method: 'POST' })
      .then(res => res.json())
      .then(data => window.location.href = data.url)
      .catch(err => console.error('Error:', err))
  }

  return (
    <button 
      onClick={handleCheckout}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Buy Now
    </button>
  )
}
const handleCheckout = async () => {
  const res = await fetch('/api/checkout', { method: 'POST' });
  const data = await res.json();
  
  if (data.url) {
    window.location.href = data.url; // Force full redirect
  } else {
    alert('Payment failed: ' + (data.error || 'No URL received'));
  }
};