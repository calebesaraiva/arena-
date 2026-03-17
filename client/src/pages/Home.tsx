import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  MapPin,
  ShieldCheck,
  Sparkles,
  Store,
  Trophy,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "framer-motion";

const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/VgW3dLPRRGwiHLKgJ438ag/arena-hero-RzvYNYVXKfTLoKZ6WbZ8C6.webp";
const barImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/VgW3dLPRRGwiHLKgJ438ag/arena-bar-area-4zCYfmK68buXVEU46QNNYU.webp";
const convenienceImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/VgW3dLPRRGwiHLKgJ438ag/arena-convenience-MEeuAkdUPUHn3AgLqVbpAg.webp";
const structureImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/VgW3dLPRRGwiHLKgJ438ag/arena-structure-night-8dtEyBoo7PZkfnDheKESqs.webp";
const projectPdfUrl =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/VgW3dLPRRGwiHLKgJ438ag/arena-green-beer-projeto-completo_04be9001.pdf";
const whatsappUrl =
  "https://wa.me/559984027548?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20comprar%20a%20Arena%20Green%20Beer%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es.";

const currentArenaGallery = [
  {
    title: "Campo coberto em operação",
    description: "Visão lateral do campo atual, com cobertura metálica, gramado sintético e fechamento escuro que reforça a identidade da arena.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/VgW3dLPRRGwiHLKgJ438ag/IMG_9945_c5ba978d.PNG",
    span: "md:col-span-2",
  },
  {
    title: "Perspectiva longitudinal do campo",
    description: "Enquadramento aberto do espaço esportivo já finalizado, valorizando profundidade, cobertura e condição atual de uso.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/VgW3dLPRRGwiHLKgJ438ag/IMG_9947_635ea71c.PNG",
    span: "",
  },
  {
    title: "Vista frontal da arena",
    description: "Imagem que evidencia a relação entre campo, fachada interna e o segundo pavimento integrado ao conjunto.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/VgW3dLPRRGwiHLKgJ438ag/IMG_9949_708dfb2a.PNG",
    span: "",
  },
  {
    title: "Gol, fachada e circulação",
    description: "Registro atual que destaca iluminação, guarda-corpo e a leitura arquitetônica do espaço já construído.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/VgW3dLPRRGwiHLKgJ438ag/IMG_9950_c232611a.PNG",
    span: "md:col-span-2",
  },
  {
    title: "Área interna com mezanino",
    description: "Foto do ambiente principal mostrando pé-direito alto, passarela superior e amplitude interna da estrutura.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/VgW3dLPRRGwiHLKgJ438ag/IMG_9957_868eb78b.PNG",
    span: "",
  },
  {
    title: "Área bruta em fase atual",
    description: "Espaço interno já executado, pronto para receber ambientação, operação e evolução comercial do projeto.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/VgW3dLPRRGwiHLKgJ438ag/IMG_9958_22c2ad55.PNG",
    span: "",
  },
  {
    title: "Setor coberto de apoio",
    description: "Ambiente complementar da estrutura atual, útil para apoio operacional, estoque ou futuras ativações internas.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/VgW3dLPRRGwiHLKgJ438ag/IMG_9960_f2589c40.PNG",
    span: "",
  },
  {
    title: "Segundo pavimento e circulação superior",
    description: "Imagem que reforça a existência dos dois andares e a robustez da implantação já executada na arena.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/VgW3dLPRRGwiHLKgJ438ag/IMG_9956_3e8bd5bf.PNG",
    span: "",
  },
];

const highlights = [
  {
    title: "Arena, bar e convivência",
    text: "Um conceito pensado para unir esporte, gastronomia, encontros e permanência qualificada em um único endereço.",
    icon: Trophy,
  },
  {
    title: "Estrutura com 2 andares",
    text: "Hoje a Arena Green Beer conta com dois andares, ampliando a leitura de porte, versatilidade e presença do empreendimento.",
    icon: Building2,
  },
  {
    title: "Dimensões que chamam atenção",
    text: "Terreno de 12,5 x 55, campo de 12,5 x 30 e o restante em área construída, criando uma operação pronta para esporte, convivência e expansão comercial.",
    icon: MapPin,
  },
  {
    title: "Identidade visual marcante",
    text: "Arquitetura escura, iluminação verde e linguagem industrial que reforçam presença, desejo e diferenciação.",
    icon: Sparkles,
  },
];

const sectors = [
  {
    number: "01",
    title: "Conveniência integrada",
    text: "Expositores, balcão caixa, freezers e organização visual pensados para apoiar consumo, circulação e operação com leitura moderna.",
    image: convenienceImage,
  },
  {
    number: "02",
    title: "Bar + área de mesas",
    text: "Um ambiente de permanência com banco reservado, mesas, balcão, atmosfera noturna e acabamento que transforma visita em experiência.",
    image: barImage,
  },
  {
    number: "03",
    title: "Estrutura de apoio",
    text: "Cozinha, vestiários, lavabos, escritório e suíte compõem uma proposta robusta, preparada para atender diferentes necessidades do espaço.",
    image: structureImage,
  },
];

const differentiators = [
  "Linguagem arquitetônica com influência industrial e esportiva",
  "Acabamentos em preto, grafite, vidro e iluminação verde cênica",
  "Espaço com potencial para encontros, eventos e operação comercial forte",
  "Projeto com presença visual para valorizar marca e percepção de qualidade",
];

const experiencePillars = [
  {
    title: "Receber bem",
    description:
      "A composição dos ambientes cria uma jornada que acolhe o público com conforto visual, circulação clara e personalidade própria.",
    icon: ShieldCheck,
  },
  {
    title: "Vender melhor",
    description:
      "A setorização favorece exposição, consumo, permanência e operação, fortalecendo a leitura comercial do empreendimento.",
    icon: Store,
  },
  {
    title: "Marcar presença",
    description:
      "A combinação entre esporte, vida noturna e acabamento contemporâneo faz a Arena Green Beer ser percebida como destino, não apenas ponto comercial.",
    icon: UtensilsCrossed,
  },
];

export default function Home() {
  const scrollToPresentation = () => {
    document.getElementById("apresentacao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        {/* Design philosophy: brutalismo esportivo contemporâneo, cortes fortes, contraste alto e presença institucional. Evitar suavidade excessiva. */}
        <div className="container flex items-center justify-between py-4">
          <a href="#topo" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-none border border-primary/40 bg-primary/10 shadow-[0_0_25px_rgba(124,255,34,0.15)]">
              <span className="font-display text-lg text-primary">AG</span>
            </div>
            <div>
              <p className="font-display text-2xl uppercase tracking-[0.18em] text-white">
                Arena
              </p>
              <p className="-mt-1 text-sm uppercase tracking-[0.34em] text-white/55">
                Green Beer
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a className="nav-link" href="#conceito">
              Conceito
            </a>
            <a className="nav-link" href="#setores">
              Estrutura
            </a>
            <a className="nav-link" href="#diferenciais">
              Diferenciais
            </a>
            <a className="nav-link" href="#galeria-atual">
              Galeria atual
            </a>
            <a className="nav-link" href="#localizacao">
              Localização
            </a>
          </nav>

          <Button
            onClick={scrollToPresentation}
            className="hidden rounded-none border border-primary bg-primary px-6 text-black shadow-[0_0_30px_rgba(124,255,34,0.22)] transition hover:bg-primary/90 lg:inline-flex"
          >
            Ver apresentação
          </Button>
        </div>
      </header>

      <main id="topo">
        {/* Design philosophy: hero cinematográfico com assimetria, energia noturna e leitura comercial premium. */}
        <section className="relative isolate overflow-hidden border-b border-white/10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(90deg, rgba(4,7,4,0.94) 0%, rgba(4,7,4,0.82) 42%, rgba(4,7,4,0.4) 100%), url(${heroImage})` }}
          />
          <div className="hero-grid absolute inset-0 opacity-40" />
          <div className="hero-noise absolute inset-0 opacity-20" />
          <div className="container relative py-20 md:py-28 lg:py-32">
            <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.7fr]">
              <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="max-w-3xl">
                <Badge className="mb-6 rounded-none border border-primary/30 bg-primary/10 px-4 py-2 font-body text-[11px] uppercase tracking-[0.3em] text-primary hover:bg-primary/10">
Oportunidade comercial disponível
                </Badge>
                <h1 className="font-display text-5xl uppercase leading-[0.92] text-white sm:text-6xl lg:text-8xl">
A oportunidade ideal para quem quer comprar uma arena pronta para operar, crescer e faturar.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
                  A <strong className="text-white">Arena Green Beer</strong> reúne campo coberto, estrutura com 2 andares, áreas internas construídas e uma identidade forte para quem busca um espaço com potencial real de operação esportiva, eventos, convivência e exploração comercial.
                </p>
                <p className="mt-4 max-w-2xl border-l-2 border-primary pl-4 text-sm uppercase tracking-[0.18em] text-primary/90 sm:text-base">
                  Terreno de <strong>12,5 x 55</strong>, campo de <strong>12,5 x 30</strong> e restante em <strong>área construída</strong>, com dois andares já implantados para ampliar o potencial de uso e rentabilidade.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button
                    onClick={scrollToPresentation}
                    className="group rounded-none border border-primary bg-primary px-7 py-6 text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-[0_0_30px_rgba(124,255,34,0.22)] transition hover:bg-primary/90"
                  >
                    Explorar projeto
                    <ArrowRight className="ml-2 transition group-hover:translate-x-1" />
                  </Button>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <a href="#localizacao" className="inline-flex">
                      <Button
                        variant="outline"
                        className="rounded-none border-white/20 bg-white/5 px-7 py-6 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm hover:bg-white/10"
                      >
                        Ver localização
                      </Button>
                    </a>
                    <a href={projectPdfUrl} target="_blank" rel="noreferrer" className="inline-flex">
                      <Button
                        variant="outline"
                        className="rounded-none border-primary/35 bg-primary/10 px-7 py-6 text-sm font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-sm hover:bg-primary/16"
                      >
                        Ver projeto em PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="relative ml-auto w-full max-w-md"
              >
                <div className="absolute -left-7 top-10 h-28 w-28 border-l border-t border-primary/70" />
                <div className="absolute -right-3 bottom-8 h-24 w-24 bg-primary/10 blur-3xl" />
                <div className="panel-cut border border-white/10 bg-black/55 p-7 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.35em] text-primary">Visão de posicionamento</p>
                  <div className="mt-6 space-y-6">
                    <div>
                      <p className="metric-number">01</p>
                      <p className="mt-2 text-sm leading-6 text-white/72">
                        Estrutura que combina arena, convivência e operação comercial em um mesmo imóvel pronto para gerar interesse imediato.
                      </p>
                    </div>
                    <div className="h-px bg-gradient-to-r from-primary/60 via-white/10 to-transparent" />
                    <div>
                      <p className="metric-number">02</p>
                      <p className="mt-2 text-sm leading-6 text-white/72">
                        Projeto pensado para apresentação comercial, fortalecendo percepção de estrutura, atmosfera e potencial.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-16 grid gap-4 md:grid-cols-3"
            >
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="border border-white/10 bg-white/4 p-6 backdrop-blur-sm">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-2xl uppercase text-white">{item.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-white/68">{item.text}</p>
                  </div>
                );
              })}
            </motion.div>

            <div className="mt-14 flex justify-center">
              <button
                onClick={scrollToPresentation}
                className="flex flex-col items-center gap-2 text-white/58 transition hover:text-primary"
                aria-label="Descer para apresentação"
              >
                <span className="text-[11px] uppercase tracking-[0.3em]">Scroll</span>
                <ChevronDown className="h-5 w-5 animate-bounce" />
              </button>
            </div>
          </div>
        </section>

        {/* Design philosophy: percurso institucional assimétrico, como visita guiada por setores da arena. */}
        <section id="apresentacao" className="relative border-b border-white/10 bg-[#050705] py-20 md:py-28">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="section-kicker">Conceito</p>
                <h2 className="section-title">
                  Um espaço pensado para quem procura comprar uma arena com estrutura, presença e múltiplas possibilidades de uso.
                </h2>
              </div>
              <div className="space-y-6 text-base leading-8 text-white/72">
                <p>
                  A Arena Green Beer foi estruturada para atender quem enxerga valor em um espaço versátil, com presença visual forte e capacidade de receber diferentes formatos de operação. Aqui, o comprador encontra não apenas um campo, mas um ambiente com potencial para esporte, convivência, eventos e exploração comercial.
                </p>
                <p>
                  A composição com áreas de apoio, circulação superior, ambientes internos e estrutura coberta amplia o leque de possibilidades do imóvel. O espaço pode atender desde operação esportiva até ativações de marca, eventos, experiências gastronômicas, confraternizações e uso comercial diversificado.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Design philosophy: blocos operacionais com imagem e texto alternados, lembrando setores arquitetônicos. */}
        <section id="setores" className="bg-black py-20 md:py-28">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="section-kicker">Estrutura em destaque</p>
                <h2 className="section-title">
                  Setores que constroem uma experiência completa de arena, consumo e convivência.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-white/64">
                O site foi pensado para apresentar o potencial do empreendimento com linguagem comercial, visual sofisticado e narrativa de percurso.
              </p>
            </motion.div>

            <div className="space-y-16">
              {sectors.map((sector, index) => (
                <motion.article
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  key={sector.title}
                  className="grid gap-8 border border-white/10 bg-white/[0.03] p-4 md:p-6 lg:grid-cols-2"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative h-full min-h-[320px] overflow-hidden border border-white/10">
                      <img
                        src={sector.image}
                        alt={sector.title}
                        className="h-full w-full object-cover transition duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                      <div className="absolute left-5 top-5 border border-primary/40 bg-black/60 px-3 py-2 text-xs uppercase tracking-[0.3em] text-primary backdrop-blur-sm">
                        Setor {sector.number}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center px-2 py-4 md:px-4">
                    <p className="font-display text-6xl leading-none text-primary/90">{sector.number}</p>
                    <h3 className="mt-5 font-display text-4xl uppercase leading-tight text-white">
                      {sector.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-8 text-white/70">{sector.text}</p>
                    <div className="mt-8 h-px w-full bg-gradient-to-r from-primary via-primary/10 to-transparent" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Design philosophy: área de diferenciais como painel tático de venda, firme e objetiva. */}
        <section id="diferenciais" className="relative overflow-hidden border-y border-white/10 bg-[#070a07] py-20 md:py-28">
          <div className="absolute inset-y-0 right-0 hidden w-[38%] bg-[radial-gradient(circle_at_center,rgba(124,255,34,0.12),transparent_62%)] lg:block" />
          <div className="container relative">
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="section-kicker">Diferenciais</p>
                <h2 className="section-title">
                  Um projeto com força estética, leitura comercial e vocação para se tornar referência local.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
                  A Arena Green Beer se destaca por unir acabamento contemporâneo, atmosfera esportiva e clareza de operação em uma linguagem visual
                  que favorece percepção de valor e memorabilidade.
                </p>
                <div className="mt-8 border border-primary/20 bg-primary/8 p-6">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-primary">Ponto de atenção comercial</p>
                  <p className="mt-3 text-lg leading-8 text-white">
                    Terreno com <strong className="text-primary">12,5 x 55</strong>, campo com <strong className="text-primary">12,5 x 30</strong> e restante em <strong className="text-primary">área construída</strong>, além de <strong className="text-primary">2 andares</strong> já implantados para ampliar as possibilidades de operação.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {differentiators.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: index * 0.05 }}
                    key={item}
                    className="border border-white/10 bg-black/45 p-6 backdrop-blur-sm"
                  >
                    <p className="text-[11px] uppercase tracking-[0.35em] text-primary">
                      Diferencial {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-4 text-base leading-7 text-white/76">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Design philosophy: pilares de experiência com presença institucional e leitura fácil para proposta comercial. */}
        <section className="bg-black py-20 md:py-28">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="mb-14 max-w-3xl">
              <p className="section-kicker">Proposta de valor</p>
              <h2 className="section-title">
                Três pilares para apresentar a Arena Green Beer como um investimento de presença e experiência.
              </h2>
            </motion.div>

            <div className="grid gap-5 lg:grid-cols-3">
              {experiencePillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: index * 0.08 }}
                    key={pillar.title}
                    className="group relative overflow-hidden border border-white/10 bg-[#080b08] p-8 transition hover:border-primary/35"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/30 to-transparent" />
                    <div className="mb-8 flex h-14 w-14 items-center justify-center border border-primary/30 bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-3xl uppercase text-white">{pillar.title}</h3>
                    <p className="mt-4 text-base leading-7 text-white/68">{pillar.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="galeria-atual" className="relative border-t border-white/10 bg-[#080808] py-20">
          {/* Design philosophy: galeria documental com leitura premium, valorizando o estado real da arena sem perder o tom comercial. */}
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65 }}
                className="lg:sticky lg:top-28"
              >
                <p className="section-kicker">Galeria atual</p>
                <h2 className="section-title">
                  Veja a Arena Green Beer como ela está hoje e imagine tudo o que pode ser feito aqui.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
                  As imagens mostram o estágio real da arena e ajudam você a visualizar o potencial completo do espaço, desde o uso esportivo diário até eventos, ativações, convivência e novas frentes de operação.
                </p>
                <div className="mt-8 border border-white/10 bg-white/4 p-6">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-primary">Leitura comercial</p>
                  <p className="mt-3 text-base leading-8 text-white/82">
                    As imagens evidenciam <strong className="text-primary">campo coberto</strong>, <strong className="text-primary">estrutura com 2 andares</strong>, <strong className="text-primary">ambientes internos já construídos</strong> e uma implantação que favorece uso esportivo, eventos e expansão comercial.
                  </p>
                </div>
              </motion.div>

              <div className="grid gap-5 md:grid-cols-2">
                {currentArenaGallery.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.55, delay: index * 0.04 }}
                    className={`group overflow-hidden border border-white/10 bg-white/3 ${item.span}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-black">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-90"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    </div>
                    <div className="p-5 sm:p-6">
                      <p className="text-[11px] uppercase tracking-[0.32em] text-primary">Estado atual da arena</p>
                      <h3 className="mt-3 font-display text-2xl uppercase leading-tight text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/68 sm:text-[15px]">{item.description}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Design philosophy: localização e encerramento com peso comercial, sem preço, com chamada para apresentação. */}
        <section id="localizacao" className="relative overflow-hidden bg-[#060806] py-20 md:py-28">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="border border-white/10 bg-white/[0.03] p-8 md:p-10">
                <p className="section-kicker">Localização</p>
                <h2 className="section-title max-w-2xl">
                  Endereço estratégico para apresentar a Arena Green Beer com clareza e credibilidade.
                </h2>
                <div className="mt-8 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-primary/30 bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-3 text-base leading-8 text-white/72">
                    <p>
                      <strong className="text-white">Avenida das Constelações, nº 03</strong>
                    </p>
                    <p>Após o Residencial 5 Estrelas</p>
                    <p>Bairro 5 Estrelas</p>
                  </div>
                </div>
              </div>

              <div className="panel-cut border border-primary/20 bg-primary/8 p-8 md:p-10">
                <p className="text-[11px] uppercase tracking-[0.35em] text-primary">Fale conosco</p>
                <h3 className="mt-5 font-display text-4xl uppercase leading-tight text-white">
                  Se você tem interesse em comprar a Arena Green Beer, este é o momento de entrar em contato.
                </h3>
                <p className="mt-6 text-base leading-8 text-white/72">
                  A arena oferece campo coberto, estrutura já construída, dois andares e espaço preparado para diferentes possibilidades de uso. Se você busca um imóvel com apelo esportivo, comercial e potencial de crescimento, fale conosco por WhatsApp ou e-mail e receba mais informações.
                </p>

                <div className="mt-8 border border-white/10 bg-black/30 p-5">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-primary">Dados da empresa</p>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-white/78 sm:text-base">
                    <p>
                      <strong className="text-white">WhatsApp:</strong> +55 99 8402-7548
                    </p>
                    <p>
                      <strong className="text-white">E-mail comercial:</strong> comercial@nexustecnologialtda.com.br
                    </p>
                    <p>
                      <strong className="text-white">CNPJ:</strong> 52.671.137/0001-71
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex">
                    <Button className="rounded-none border border-primary bg-primary px-7 py-6 text-sm font-semibold uppercase tracking-[0.18em] text-black hover:bg-primary/90">
                      Entrar em contato no WhatsApp
                    </Button>
                  </a>
                  <a href="#topo" className="inline-flex">
                    <Button className="rounded-none border border-primary/35 bg-primary/10 px-7 py-6 text-sm font-semibold uppercase tracking-[0.18em] text-primary hover:bg-primary/16">
                      Voltar ao topo
                    </Button>
                  </a>
                  <a href={projectPdfUrl} target="_blank" rel="noreferrer" className="inline-flex">
                    <Button
                      variant="outline"
                      className="rounded-none border-white/20 bg-white/5 px-7 py-6 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/10"
                    >
                      Abrir projeto completo em PDF
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
