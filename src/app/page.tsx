export default function Home() {
  return (
    <div className="bg-gradient-to-t from-[var(--color-back-secondary)] to-[var(--color-back-primary)] h-100%">
      <nav className="h-screen">
        <header className="flex ml-8 mt-8 pb-8">
          <h1>
            <div className="font-mono text-5xl ">Emily Goodwin</div>
            <div className="font-mono text-xl">full-stack developer</div>
          </h1>

          <div className="flex ml-8">
            <div className="flex gap-6">
              {/* GitHub Logo */}
              <a
                href="https://github.com/egoodwinx"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-110"
                aria-label="Visit GitHub Profile"
              >
                <div className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-gray-500/25">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="pl-2">
              <a
                href="https://linkedin.com/in/emily-y-goodwin"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-110"
                aria-label="Visit LinkedIn Profile"
              >
                <div className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </header>
        <div className="flex">
          <div className="box ml-8 mt-8 w-1/3">
            <p>Hello!</p>
            <br />
            <p>
              I am a full-stack software developer who loves solving a variety
              of complex problems. With experience in various industries from
              healthcare, to customer service, to transportation management I am
              suited to find a solution to any problems I may face.
            </p>
            <br />
            <p>
              In my free time, I love contributing to open-source projects like
              Hive, helping small businesses through consulting, and
              volunteering in my community.
            </p>
          </div>

          <div className="flex">
            <div>
              <section className="mb-8">
                <h3 className="text-2xl mb-4 pb-2">Work Experience</h3>
                <div className="space-y-6">
                  {/* Job 1 */}
                  <div className=" pl-4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h4 className="text-xl font-semibold ">
                          Software Development Engineer II{" "}
                        </h4>
                        <p className="">Software Development Engineer</p>
                        <p className="font-medium">Amazon</p>
                      </div>
                      <div className="box">
                        <span className="font-medium">2024 - Present</span>
                        <br />
                        <span className="">2022 - 2024</span>
                      </div>
                    </div>
                    <ul className="space-y-1 ml-4">
                      <li>
                        • Core developer of Quick Commerce application in Java,
                        leveraging AWS services to dynamically provide 1000s of
                        provider availability to other services
                      </li>
                      <li>
                        • Lead engineer for zero-downtime migration supporting
                        dozens of Elastic Container Services in AWS
                      </li>
                      <li>
                        • Co-lead development of a web application; improved
                        developer debugging speed by roughly 30%
                      </li>
                      <li>
                        • Increased security in 100s of code packages (utilizing
                        AST-Grep); resulting in 100s of developer hours saved
                      </li>
                    </ul>
                  </div>

                  {/* Job 2 */}
                  {/* Job 1 */}
                  <div className=" pl-4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h4 className="text-xl font-semibold ">
                          Software Developer Co-op
                        </h4>
                        <p className="">
                          Software Verification Specialist Co-op
                        </p>
                        <p className="font-medium">Siemens Healthineers</p>
                      </div>
                      <div className="box">
                        <span className="font-medium">Sep 2018 – Sep 2019</span>
                        <br />
                        <span className="">May 2018 – Sep 2018</span>
                      </div>
                    </div>
                    <ul className="space-y-1 ml-4">
                      <li>
                        • Developed and deployed code revisions based on provided
                        feedback for a variety of projects with C#, Java, and
                        JavaScript
                      </li>
                      <li>
                        • Reduced Quality Assurance time loss for nonvalue-added
                        activities through automation of downloading updates and
                        upgrading the server
                      </li>
                      <li>
                        • Logged over 1200 development hours: C#, Java, GWT, SQL
                        Server, Postgres, Node JS, and Angular
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <div>
                <section>
                  <h3 className="text-2xl mb-4 pb-2">Education</h3>
                  <div className="space-y-6">
                    {/* Job 1 */}
                    <div className=" pl-4">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div>
                          <h4 className="text-xl font-semibold ">
                            Bachelors of Technology, Software Engineering
                          </h4>
                          <p className="font-medium">McMaster University</p>
                        </div>
                        <div className="box">
                          <span className="font-medium">2020 - 2022</span>
                        </div>
                      </div>
                      <ul className="space-y-1 ml-4">
                        <li>
                          {" "}
                          • Utilized TensorFlow and SciPy to develop a
                          rudimentary Neural Network to recognize faces.
                        </li>
                        <li>
                          • Developed a prototype full-stack application to help
                          students study flashcards
                        </li>
                        <li>
                          • Assisted Operating Systems teacher in their classes
                          as the Teacher’s Assistant
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <footer className="flex pt-10 flex-wrap items-center justify-center">
        <div className="flex">
          <div className="w-12 h-12 bg-[var(--color-back-primary)]"></div>
          <div className="w-12 h-12 bg-[var(--color-back-secondary)]"></div>
          <div className="w-12 h-12 bg-[var(--color-front-primary)]"></div>
          <div className="w-12 h-12 bg-[var(--color-front-secondary)]"></div>
        </div>
      </footer>
    </div>
  );
}
