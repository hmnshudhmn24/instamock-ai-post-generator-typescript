import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY })
const openai = new OpenAIApi(config)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt } = req.body
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    })
    const content = completion.data.choices[0].message?.content
    res.status(200).json({ content })
  } catch (e) {
    res.status(500).json({ error: 'Failed to generate post' })
  }
}
