import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useCreateMessage } from "@/hooks/use-messages";
import { Navigation } from "@/components/Navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowRight, 
  Download, 
  Microchip, 
  Leaf, 
  Palette, 
  GraduationCap, 
  Award, 
  FlaskConical, 
  MonitorCheck,
  Languages,
  Mail,
  Linkedin,
  Github,
  Trophy
} from "lucide-react";

// Images (Static Imports)
import heroImg from "@assets/542722712_2794173940937597_1599503023019672381_n_1770899164089.jpg";
import aboutImg from "@assets/512775554_2720457451642580_4069362693063244609_n_1770958779875.jpg";
import contactImg from "@assets/485993787_2625588594462800_4171523904716513340_n_1770899164082.jpg";

// CV File
import cvFile from "@assets/Academic_CV_1770899073232.pdf";

const projects = [
  {
    title: "Zero-Virgin-Cotton Sustainable Denim",
    category: "Thesis / Final Year Project",
    desc: "Development of a High-Performance 100% Sustainable Denim Yarn by blending mechanical cotton waste with Lyocell fibers. Focused on circular fashion economy.",
    tags: ["Sustainability", "Circular Economy", "R&D"],
    icon: Leaf
  },
  {
    title: "AI-Integrated Smart Textiles",
    category: "Research Proposal",
    desc: "A proposal for smart textiles capable of real-time behavior prediction and personalization using integrated AI systems.",
    tags: ["AI", "Smart Fabrics", "Machine Learning"],
    icon: Microchip
  },
  {
    title: "Innovations in Textile Membrane Tech",
    category: "Review Paper",
    desc: "A comprehensive review paper exploring recent innovations and applications in textile membrane technology.",
    tags: ["Membrane Tech", "Material Science", "Review"],
    icon: FlaskConical
  },
  {
    title: "AI in Wastewater Treatment",
    category: "Review Paper",
    desc: "Researching the use of Artificial Intelligence in textile wastewater treatment methods to improve environmental impact.",
    tags: ["AI", "Sustainability", "Environment"],
    icon: MonitorCheck
  }
];

export default function Home() {
  const { mutate, isPending } = useCreateMessage();
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: InsertMessage) => {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-background min-h-screen relative selection:bg-primary/30 selection:text-primary">
      <Navigation />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary font-mono text-sm mb-6 border border-secondary/20">
              Textile Engineering Student
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6">
              Innovating for a <br />
              <span className="text-gradient">Sustainable Future</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Hi, I'm <strong className="text-foreground">Meherab Hoshen Shehab</strong>. 
              I blend technology with creativity to develop next-gen sustainable textiles. 
              Currently maintaining a <span className="text-primary font-bold">4.00 CGPA</span> at BUFT.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button size="lg" className="rounded-full px-8 h-12 text-base font-semibold shadow-xl hover:shadow-primary/25 hover:-translate-y-1 transition-all">
                  Let's Collaborate <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </ScrollLink>
              <a href={cvFile} download="Meherab_CV.pdf">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base font-semibold border-2 hover:bg-secondary/5">
                  Download CV <Download className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-muted-foreground">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="mailto:meherabshehab5@gmail.com" className="hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
              <img 
                src={heroImg} 
                alt="Meherab Hoshen Shehab" 
                className="w-full h-auto object-cover max-h-[600px]"
              />
            </div>
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 z-20 glass p-4 rounded-xl shadow-lg border border-white/40"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  <Leaf size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase">Focus</p>
                  <p className="font-bold text-foreground">Sustainability</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-12 -right-8 z-20 glass p-4 rounded-xl shadow-lg border border-white/40"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase">CGPA</p>
                  <p className="font-bold text-foreground">4.00 / 4.00</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-padding bg-white relative">
        <div className="container max-w-7xl mx-auto">
          <SectionHeader title="About Me" subtitle="Who I Am" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={aboutImg} alt="Working on designs" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white font-display text-2xl italic">"Textiles are the interface between the body and the world."</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-foreground">Passionate about <span className="text-primary">Textile Innovation</span></h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I am a dedicated Textile Engineering student at BUFT with a perfect academic record (CGPA 4.00). 
                My journey is driven by a deep fascination with the interplay of technology and creativity in fabrics.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Currently, I am focused on sustainable and high-performance materials, particularly Zero-Virgin-Cotton yarn. 
                My goal is to revolutionize the industry through eco-friendly processing and smart textile automation.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="font-bold text-4xl text-primary mb-1">4.00</p>
                  <p className="text-sm text-muted-foreground">Current CGPA</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="font-bold text-4xl text-secondary mb-1">2026</p>
                  <p className="text-sm text-muted-foreground">Graduation Year</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="container max-w-7xl mx-auto relative z-10">
          <SectionHeader title="Academic Projects" subtitle="Research & Innovation" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-8 rounded-3xl border border-white/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <project.icon size={32} />
                  </div>
                  <div>
                    <span className="text-sm font-mono text-secondary mb-2 block uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 bg-white/50 border border-border/50 rounded-full text-xs font-medium text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JOB INTERESTS */}
      <section className="section-padding bg-slate-50">
        <div className="container max-w-7xl mx-auto">
          <SectionHeader title="Research & Interests" subtitle="My Focus Areas" />
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                icon: Microchip, 
                title: "Technical Textiles", 
                desc: "Smart fabrics and nano-textiles that respond to environmental stimuli." 
              },
              { 
                icon: MonitorCheck, 
                title: "Textile Automation", 
                desc: "Integrating AI and ML in manufacturing for precision and efficiency." 
              },
              { 
                icon: Leaf, 
                title: "Sustainable Processing", 
                desc: "Eco-friendly dyeing and zero-waste production methodologies." 
              }
            ].map((interest, idx) => (
              <motion.div 
                key={idx}
                variants={item}
                className="bg-white p-8 rounded-2xl shadow-lg border border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <interest.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{interest.title}</h3>
                <p className="text-muted-foreground">{interest.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section-padding bg-white">
        <div className="container max-w-7xl mx-auto">
          <SectionHeader title="Technical Expertise" subtitle="Skills & Tools" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <FlaskConical className="text-primary" /> Technical Skills
              </h3>
              <div className="space-y-6">
                {[
                  { name: "Knitting/Weaving Machines", level: 90 },
                  { name: "Textile Testing (ISO/ASTM)", level: 85 },
                  { name: "Water Repellency Tech", level: 80 },
                  { name: "Abrasion Resistance", level: 75 },
                  { name: "Fabric Analysis", level: 95 }
                ].map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Palette className="text-secondary" /> Digital & Languages
              </h3>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-muted-foreground uppercase text-sm tracking-wider">Digital Tools</h4>
                <div className="flex flex-wrap gap-3">
                  {["MS Office (Excel Copilot)", "Canva", "Algorithm Logic", "Data Analysis", "Research Methodology"].map((tag, idx) => (
                    <span key={idx} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-muted-foreground uppercase text-sm tracking-wider">Languages</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="p-2 bg-white rounded-md shadow-sm text-primary"><Languages size={18} /></div>
                    <div className="flex-1 font-medium">English</div>
                    <div className="text-sm text-green-600 font-semibold bg-green-50 px-2 py-1 rounded">Advanced</div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="p-2 bg-white rounded-md shadow-sm text-primary"><Languages size={18} /></div>
                    <div className="flex-1 font-medium">Bengali</div>
                    <div className="text-sm text-green-600 font-semibold bg-green-50 px-2 py-1 rounded">Native</div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="p-2 bg-white rounded-md shadow-sm text-primary"><Languages size={18} /></div>
                    <div className="flex-1 font-medium">German & Chinese</div>
                    <div className="text-sm text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded">Beginner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION & EXPERIENCE */}
      <section id="education" className="section-padding bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="container max-w-7xl mx-auto relative z-10">
          <SectionHeader title="My Journey" subtitle="Education & Leadership" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education Column */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                <GraduationCap className="text-primary" /> Education
              </h3>
              <div className="relative border-l-2 border-white/10 pl-8 space-y-12">
                <div className="relative">
                  <span className="absolute -left-[41px] top-0 w-5 h-5 bg-primary rounded-full ring-4 ring-slate-900" />
                  <span className="text-sm text-primary font-mono mb-2 block">2022 - 2026 (Present)</span>
                  <h4 className="text-xl font-bold text-white mb-1">B.Sc. in Textile Engineering</h4>
                  <p className="text-white/60 mb-4">BGMEA University of Fashion & Technology</p>
                  <div className="inline-block px-4 py-2 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                    <span className="text-white font-bold">CGPA: 4.00 / 4.00</span>
                  </div>
                </div>
                
                <div className="relative">
                  <span className="absolute -left-[41px] top-0 w-5 h-5 bg-slate-600 rounded-full ring-4 ring-slate-900" />
                  <span className="text-sm text-slate-400 font-mono mb-2 block">2020 - 2022</span>
                  <h4 className="text-xl font-bold text-white mb-1">Higher Secondary Certificate</h4>
                  <p className="text-white/60 mb-4">Chandpur Govt. College</p>
                  <div className="inline-block px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-white/80">GPA: 5.00 / 5.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership/Experience Column */}
            <div id="experience">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                <Trophy className="text-secondary" /> Leadership & Awards
              </h3>
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-secondary/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-white">Executive Member</h4>
                    <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded">Leadership</span>
                  </div>
                  <p className="text-white/60">BUFT Debate Club</p>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-secondary/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-white">Organizer</h4>
                    <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded">Management</span>
                  </div>
                  <p className="text-white/60">Textile Club & Career Development Club</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-4 rounded-xl border border-primary/20">
                    <Trophy className="text-primary mb-3" />
                    <h5 className="font-bold text-white">Top 10</h5>
                    <p className="text-sm text-white/60">Textile Quiz Competition</p>
                  </div>
                  <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 p-4 rounded-xl border border-secondary/20">
                    <Award className="text-secondary mb-3" />
                    <h5 className="font-bold text-white">3rd Place</h5>
                    <p className="text-sm text-white/60">Skill Catalyst Quiz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section-padding bg-slate-50 relative">
        <div className="container max-w-7xl mx-auto">
          <SectionHeader title="Get In Touch" subtitle="Contact Me" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-border">
            <div className="p-8 md:p-12 lg:p-16">
              <h3 className="text-3xl font-bold mb-6">Let's start a conversation</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, research opportunities, or partnerships in textile innovation.
              </p>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input 
                      placeholder="Your Name" 
                      {...form.register("name")}
                      className="h-12 rounded-xl bg-slate-50 border-border focus:border-primary focus:ring-4 focus:ring-primary/10" 
                    />
                    {form.formState.errors.name && (
                      <span className="text-xs text-destructive">{form.formState.errors.name.message}</span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input 
                      placeholder="email@example.com" 
                      type="email"
                      {...form.register("email")}
                      className="h-12 rounded-xl bg-slate-50 border-border focus:border-primary focus:ring-4 focus:ring-primary/10" 
                    />
                    {form.formState.errors.email && (
                      <span className="text-xs text-destructive">{form.formState.errors.email.message}</span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="How can I help you?" 
                    className="min-h-[150px] rounded-xl bg-slate-50 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 resize-none"
                    {...form.register("message")}
                  />
                  {form.formState.errors.message && (
                    <span className="text-xs text-destructive">{form.formState.errors.message.message}</span>
                  )}
                </div>

                <Button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full h-12 rounded-xl text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  {isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            <div className="relative hidden lg:block">
              <img src={contactImg} alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm p-12 flex flex-col justify-center text-white">
                <h4 className="text-2xl font-bold mb-8">Contact Info</h4>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Email</p>
                      <p className="font-medium">meherabshehab5@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">LinkedIn</p>
                      <p className="font-medium">Meherab Hoshen Shehab</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">University</p>
                      <p className="font-medium">BUFT, Dhaka</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-12 border-t border-white/10">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-display font-bold mb-6">MHS.</h2>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-primary transition-colors">ResearchGate</a>
          </div>
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Meherab Hoshen Shehab. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
