import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-24">

        {/* Hero Section */}
        <section className="mb-24">
          <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4 mb-4">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
              <Image
                src="/profilpic.jpg"
                alt="Haiyang Liu (Aurora)"
                fill
                className="rounded-full object-cover shadow-sm border border-gray-100"
                priority
              />
            </div>
            <div>
              <h1 className="text-5xl sm:text-6xl font-light text-gray-900 mb-3 tracking-tight">
                Haiyang Liu (Aurora)
              </h1>
              <p className="text-lg text-gray-500 font-light">
                Full-stack & Web3 builder
              </p>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section className="border-t border-gray-100 pt-24 mb-24">
          <h2 className="text-base font-normal text-gray-500 mb-4">
            About
          </h2>
          <div className="text-gray-600 space-y-5 leading-7 text-lg">
            <p>
              I'm a developer who cares about building tools that actually help people.
              Graduated from McGill University in 2024, now working across full-stack development
              and Web3, trying to figure out where technology can make things easier instead of
              more complicated.
            </p>
            <p>
              I'm drawn to problems that involve automation, accessibility, and making technical
              systems more approachable. Most of my work happens in the overlap between practical
              applications and emerging tech.
            </p>
          </div>
        </section>

        {/* Now Section */}
        <section className="border-t border-gray-100 pt-24 mb-24">
          <h2 className="text-base font-normal text-gray-500 mb-4">
            Right Now
          </h2>
          <div className="text-gray-600 space-y-5 leading-7 text-lg">
            <p>
              Building AutoJobAI to help job seekers automate the tedious parts of applications,
              and QuantumForAll to make quantum computing less intimidating for people who want
              to learn.
            </p>
            <p>
              Looking for opportunities to work on projects that combine technical depth with
              real-world impact, especially in hackathons and collaborative environments.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="border-t border-gray-100 pt-24 mb-24">
          <h2 className="text-base font-normal text-gray-500 mb-6">
            Projects
          </h2>

          <div>
            {/* AutoJobAI */}
            <div className="mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-tight">
                AutoJobAI
              </h3>
              <p className="text-gray-600 mb-4 leading-7 text-lg">
                AI-powered job application automation. Helps job seekers streamline their
                application process with intelligent matching and personalized submissions.
              </p>
              <a
                href="https://github.com/AuroraLiuTeaConsumer/AutoJobAI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 text-sm tracking-wide"
              >
                GitHub →
              </a>
            </div>

            {/* QuantumForAll */}
            <div className="mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-tight">
                QuantumForAll
              </h3>
              <p className="text-gray-600 mb-4 leading-7 text-lg">
                Making quantum computing accessible through educational tools and simplified
                frameworks for developers new to quantum programming.
              </p>
              <a
                href="https://github.com/AuroraLiuTeaConsumer/QuantumForAll"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 text-sm tracking-wide"
              >
                GitHub →
              </a>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="border-t border-gray-100 pt-24 mb-24">
          <h2 className="text-base font-normal text-gray-500 mb-4">
            Outside of Code
          </h2>
          <p className="text-gray-600 leading-7 text-lg">
            I spend time traveling when I can, practicing pilates to balance out too many
            hours at a desk, and learning mixology because making a good drink is surprisingly
            similar to debugging—precision, patience, and knowing when to start over.
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-100 pt-12">
          <div className="flex flex-col sm:flex-row gap-4 text-gray-500 text-sm">
            <a
              href="https://github.com/AuroraLiuTeaConsumer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700"
            >
              github.com/AuroraLiuTeaConsumer
            </a>
            <span className="hidden sm:inline text-gray-300">·</span>
            <a
              href="mailto:auroraliu39@gmail.com"
              className="hover:text-gray-700"
            >
              auroraliu39@gmail.com
            </a>
          </div>
        </footer>

      </div>
    </main>
  );
}
