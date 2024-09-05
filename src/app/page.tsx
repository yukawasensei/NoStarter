import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center">
      <header className="w-full bg-white shadow-md p-4">
        <h1 className="text-3xl font-bold text-center">我的个人网站</h1>
      </header>

      <section className="flex flex-col items-center mt-10">
        <Image src="/profile.jpg" alt="Profile Picture" width={150} height={150} className="rounded-full" />
        <h2 className="text-2xl font-semibold mt-4">你好，我是Chris</h2>
        <p className="text-gray-600 text-center mt-2">UX设计师 | 创意解决方案 | 用户体验专家</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">项目一</h3>
          <p className="text-gray-600">描述项目一的内容和目标。</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">项目二</h3>
          <p className="text-gray-600">描述项目二的内容和目标。</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">项目三</h3>
          <p className="text-gray-600">描述项目三的内容和目标。</p>
        </div>
      </section>

      <footer className="w-full bg-white shadow-md p-4 mt-10">
        <p className="text-center text-gray-500">© 2023 Chris. 保留所有权利。</p>
      </footer>
    </main>
  );
}
