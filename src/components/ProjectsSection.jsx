import { ArrowRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

const projects = [
    {
        id: 1,
        title: "SQLite Database Webpage",
        description: "Flask-based web app with a SQLite database of TalTech campus cafes. Allows users to view data and interact with the database via a simple UI, styled with CSS.",
        image: "/portfolio/projects/Web_app_screenshot.png",
        tags: ["SQLite", "Python", "Flask", "CSS"],
        githubUrl: "https://github.com/karlkunnapas/SQLite-Database-Webpage",
    },
    {
        id: 2,
        title: "Statistics Estonia Scraper",
        description: "A program that navigates to the Statistics Estonia main indicators page and saves the names and numerical values of all main indicators to a file. Then, it asks the user which indicator they want to know about and outputs it to the console.",
        image: "/portfolio/projects/statisticsBot.png",
        tags: ["Python", "Selenium"],
        githubUrl: "https://github.com/karlkunnapas/Statistics-scraper-project",
    },
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span> </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Personal projects I have made and published in GitHub.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image}
                                 alt={project.title}
                                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) =>
                                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                )}
                            </div>


                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.githubUrl}
                                       className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                       target="_blank"
                                    >
                                        <SiGithub/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    href={"https://github.com/karlkunnapas"}
                    target={"_blank"}
                >
                    My GitHub <ArrowRight size={16}/>
                </a>
            </div>
        </div>


    </section>
}