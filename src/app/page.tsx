import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-purple-900 to-green-800 min-h-screen text-white font-retro">
      <header className="w-full bg-black bg-opacity-50 p-6 border-b-4 border-neon-green">
        <h1 className="text-5xl font-bold text-center text-neon-purple glow">Chris的复古未来</h1>
      </header>

      <section className="flex flex-col items-center mt-16">
        <div className="relative w-48 h-48 mb-8">
          <Image src="/retro-profile.jpg" alt="Profile Picture" layout="fill" className="rounded-full border-4 border-neon-green glow" />
        </div>
        <h2 className="text-3xl font-semibold mb-4 text-neon-green glow">你好,我是Chris</h2>
        <p className="text-xl text-center max-w-md">UX设计师 | 复古未来主义者 | 像素艺术家</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 p-8">
        <div className="bg-black bg-opacity-50 p-6 rounded-lg border-2 border-neon-purple hover:border-neon-green transition-colors duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-neon-purple">复古UI设计</h3>
          <p className="text-gray-300">融合80年代科幻美学与现代用户体验。</p>
        </div>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg border-2 border-neon-purple hover:border-neon-green transition-colors duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-neon-purple">像素艺术创作</h3>
          <p className="text-gray-300">用现代工具重现经典像素艺术的魅力。</p>
        </div>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg border-2 border-neon-purple hover:border-neon-green transition-colors duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-neon-purple">复古未来交互设计</h3>
          <p className="text-gray-300">创造令人惊叹的复古风格交互体验。</p>
        </div>
      </section>

      <footer className="w-full bg-black bg-opacity-50 p-6 mt-16 border-t-4 border-neon-green">
        <p className="text-center text-neon-purple">© 2023 Chris | 用复古设计连接过去与未来</p>
      </footer>
    </main>
  );
}
