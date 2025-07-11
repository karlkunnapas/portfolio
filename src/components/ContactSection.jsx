import {Linkedin, Mail, MapPin, Phone} from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:place-items-center pt-3">

                    <div className="space-y-8">

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                  <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors"
                                        href="mailto:karl.kunnapas@gmail.com"
                                    >
                                        karl.kunnapas@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium"> Location</h4>
                                        <a className="text-muted-foreground hover:text-primary transition-colors">
                                            Tallinn, Estonia
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="space-y-8">

                        <div className="flex items-start space-x-4">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Linkedin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> LinkedIn</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors"
                                       href="https://www.linkedin.com/in/karlkunnapas/"
                                       target="_blank"
                                    >
                                        karlkunnapas
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <SiGithub className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> GitHub</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors"
                                       href="https://github.com/karlkunnapas"
                                       target="_blank"
                                    >
                                        karlkunnapas
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}