'use client';

import Image from "next/image";
import { useEffect } from 'react';
import { initCursorEffect } from './cursorEffect';

export default function Home() {
  // useEffect(() => {
  //   initCursorEffect();
  // }, []);

  return (
    <main className="bg-emerald-50 min-h-screen font-serif">
      <header className="p-8 text-center">
        <h1 className="text-4xl font-bold text-purple-800 hover-underline-animation">艾米丽的设计世界</h1>
      </header>

      <section className="flex justify-center items-center my-16">
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-emerald-600 hover-rotate">
          <Image 
            src="https://via.placeholder.com/256" 
            alt="艾米丽的照片" 
            fill 
            style={{ objectFit: 'cover' }} 
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">优雅简约，以人为本</h2>
        <p className="text-emerald-800 leading-relaxed">
          我是艾米丽，一位专注于创造优雅简约用户体验的UX设计师。
          我的设计灵感源自文艺复兴时期的极简主义，追求形式与功能的完美平衡。
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto my-16 px-4">
        {[1, 2, 3].map((project) => (
          <div key={project} className="bg-white p-6 rounded-lg shadow-lg hover-lift">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">项目 {project}</h3>
            <p className="text-emerald-700">这是项目{project}的简要描述，展示了我的设计理念和解决方案。</p>
          </div>
        ))}
      </section>

      <footer className="text-center p-8 text-emerald-700">
        <p>© 2023 艾米丽的设计工作室 | 优雅 • 简约 • 人性化</p>
      </footer>
    </main>
  );
}
