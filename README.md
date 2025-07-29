# 📸 InstaMock: AI Social Media Post Generator (TypeScript)

InstaMock is an AI-powered tool that helps designers, marketers, and developers quickly generate realistic-looking social media post mockups for **Instagram**, **Twitter**, and **LinkedIn** — complete with AI-generated content using OpenAI's GPT API.


## ✨ Features

- 🎨 Realistic UI mockups for **Instagram**, **Twitter**, and **LinkedIn**
- 🧠 GPT-powered smart post generator (OpenAI API)
- 🎯 Select target audience, tone, and platform
- 💾 Download mockups as **PNG** files
- ⚡ Built with **TypeScript**, **Next.js 14 App Router**, **Tailwind CSS**
- 🧱 Component-based structure for easy customization


## 📸 Screenshot

> ![screenshot](public/demo.png)  
> *Demo preview of InstaMock's post generator UI*


## 📦 Installation

```bash
git clone https://github.com/yourusername/instamock-ai-post-generator.git
cd instamock-ai-post-generator
npm install
```

## 🔑 Environment Variables

Create a `.env.local` file:

```env
OPENAI_API_KEY=your_openai_key_here
```

## 🧠 AI Post Generator

We use OpenAI’s API to generate social media post captions based on a user's prompt.

## 💾 Download as PNG

The post preview can be saved as a PNG using `html2canvas`.

## 📸 Supported Platforms

- ✅ Instagram
- ✅ Twitter
- ✅ LinkedIn

## 🧪 Development

```bash
npm run dev
```

## 📤 Deployment

We recommend deploying on [Vercel](https://vercel.com/):

```bash
vercel
```

## 📄 License

MIT
