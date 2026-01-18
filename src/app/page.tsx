import Image from "next/image";

export default function Home() {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 font-sans dark:from-gray-900 dark:to-gray-800">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-16 px-8 text-center">
        
        {/* Celebration Header */}
        <div className="mb-8 animate-bounce">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Congratulations!
          </h1>
        </div>

        {/* Achievement Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 max-w-2xl border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            You Successfully Deployed Next.js on EC2! 🚀
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
            Today, <span className="font-semibold text-blue-600 dark:text-blue-400">{today}</span>, 
            marks a significant milestone in your development journey. You've mastered the art of 
            deploying a Next.js application to AWS EC2 - from local development to production infrastructure!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-sm font-medium text-blue-800 dark:text-blue-300">Next.js Mastery</div>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
              <div className="text-2xl mb-2">☁️</div>
              <div className="text-sm font-medium text-orange-800 dark:text-orange-300">AWS EC2 Deployment</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-sm font-medium text-green-800 dark:text-green-300">Production Ready</div>
            </div>
          </div>
        </div>

        {/* Next.js Logo */}
        <div className="mb-8">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={36}
            priority
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 text-base font-medium">
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 text-white transition-all hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-lg"
            href="https://nextjs.org/docs/deployment"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Learn More Deployment
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600 px-8 transition-all hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 dark:hover:border-blue-400"
            href="https://aws.amazon.com/ec2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore AWS EC2
          </a>
        </div>

        {/* Footer Message */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Keep building amazing things! Your journey in cloud deployment has just begun. 🌟
          </p>
        </div>
      </main>
    </div>
  );
}
