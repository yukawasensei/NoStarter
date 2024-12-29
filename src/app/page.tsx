'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50`}>
      <header className="bg-white dark:bg-gray-800 shadow-md py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <span className="font-bold text-xl text-purple-600 dark:text-purple-400">艾米丽的设计</span>
          <button onClick={() => setDarkMode(!darkMode)} className="bg-gray-200 dark:bg-gray-700 rounded-full p-2">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main>
        <section className="container mx-auto mt-16 px-6 text-center">
          <div className="max-w-xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
              创造卓越的用户体验
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              我是艾米丽，一位热衷于构建直观、美观且以用户为中心的数字产品的UX设计师。
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <button className="rounded-md bg-purple-600 px-5 py-3 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-purple-500 dark:hover:bg-purple-600">
                查看我的作品
              </button>
              <button className="rounded-md border border-gray-300 dark:border-gray-700 px-5 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                联系我
              </button>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-24 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">我的设计理念</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                我坚信优秀的设计能够解决复杂的问题，并提升人们的生活品质。我的方法是深入理解用户需求，结合创新思维和精湛的工艺，创造出既实用又令人愉悦的体验。
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1517245386804-18b452541f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="设计理念"
                fill
                className="rounded-lg object-cover"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-24 px-6">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-12">精选项目</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <Image
                  src={`https://source.unsplash.com/random/600x400?ux&sig=${project}`}
                  alt={`项目 ${project}`}
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">项目名称 {project}</h3>
                  <p className="text-gray-600 dark:text-gray-400">简要描述该项目的设计目标和成果。</p>
                  <a href="#" className="inline-block mt-4 text-purple-600 dark:text-purple-400 hover:underline">了解更多</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 mt-24 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">© 2023 艾米丽的设计工作室。所有权利保留。</p>
        </div>
      </footer>
    </div>
  );
}