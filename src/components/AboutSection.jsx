import { Code } from "lucide-react"
import { PythonPlain } from "devicons-react";
import { JavaPlain } from "devicons-react";

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
                        I am a hardworking and eager-to-learn young person who is open to new opportunities for professional development. I have a strong interest in both hardware and software aspects of technology. As a person, I am systematic, responsible, and often strive for perfection.
                    </p>

                    <p className="text-muted-foreground">
                        In high school, I took elective courses in basic web development, and during my military service, I specialized slightly in networking and communications. As of now, I have successfully completed the first year of my bachelor's degree with a very good GPA, thanks to my deep interest in the field.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6">

                    <h3 className="text-2xl font-semibold"> Skills
                    </h3>

                    <div className="gradient-border p-3 card-hover">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <PythonPlain className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4> Python</h4>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-3 card-hover">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <JavaPlain className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4> Java</h4>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-3 card-hover">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4> JavaScript/HTML/CSS</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
}