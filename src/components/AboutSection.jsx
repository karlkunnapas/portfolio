import { Code, Monitor, Database, Wrench } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 content-start">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Software Development Student at TalTech
                    </h3>

                    <p className="text-muted-foreground">
                        I am a hardworking and eager-to-learn young person who is open to new opportunities for professional development. I have a strong interest in both hardware and software aspects of technology, particularly in developing automation solutions. As a person, I am systematic, responsible, and often strive for perfection.
                    </p>

                    <p className="text-muted-foreground">
                        In high school, I took elective courses in basic web development, and during my military service, I specialized slightly in networking and communications. I am currently in my second year of bachelor’s studies with a very strong GPA, driven by a deep interest in my chosen field. In recognition of my academic performance, I was named to the School of <a className='underline hover:no-underline' href='https://taltech.ee/en/book-honour' target='_blank'>Information Technologies’ Book of Honour (Dean’s List)</a> in the autumn semester of the previous academic year.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6">

                    <h3 className="text-2xl font-semibold"> Skills
                    </h3>

                    <div className="gradient-border p-3 card-hover">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4> Java, C#, PHP, Python + Selenium WebDriver </h4>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-3 card-hover">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Monitor className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4> JavaScript, TypeScript, React, Vite, Vue, Tailwind CSS, Bootstrap, HTML </h4>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-3 card-hover">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Database className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4> Oracle SQL, SQLite, MySQL </h4>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-3 card-hover">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Wrench className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4> Git (GitHub, GitLab, Bitbucket), Kilo Code </h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
}