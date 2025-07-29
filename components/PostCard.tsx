import html2canvas from 'html2canvas'

export function PostCard({ content, platform }: { content: string, platform: string }) {
  const handleDownload = () => {
    const el = document.getElementById('post-card')
    if (!el) return
    html2canvas(el).then(canvas => {
      const link = document.createElement('a')
      link.download = 'post.png'
      link.href = canvas.toDataURL()
      link.click()
    })
  }

  return (
    <div className="border rounded p-4 bg-white shadow-md" id="post-card">
      <h2 className="font-semibold capitalize">{platform}</h2>
      <p>{content}</p>
      <button onClick={handleDownload} className="mt-2 text-sm text-blue-500">Download as PNG</button>
    </div>
  )
}
