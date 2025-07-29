import { useState } from 'react'
import { generatePost } from '../utils/gpt'
import { PostCard } from '../components/PostCard'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [content, setContent] = useState('')
  const [platform, setPlatform] = useState('instagram')

  const handleGenerate = async () => {
    const result = await generatePost(prompt)
    setContent(result)
  }

  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📸 InstaMock</h1>
      <textarea
        className="w-full border p-2 mb-2"
        rows={3}
        placeholder="Describe the post..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="mb-2">
        <select
          className="border p-2"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="instagram">Instagram</option>
          <option value="twitter">Twitter</option>
          <option value="linkedin">LinkedIn</option>
        </select>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 mb-4" onClick={handleGenerate}>
        Generate Post
      </button>
      <PostCard content={content} platform={platform} />
    </main>
  )
}
