/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  Lock, 
  Target, 
  Flame, 
  Hammer, 
  Gift, 
  ShieldCheck, 
  ArrowRight, 
  BookOpen, 
  Sparkles,
  ChevronDown,
  Quote,
  Clock,
  Zap
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 59, seconds: 59 });
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans">
      {/* Urgency Bar */}
      <div className="bg-gold-500 text-stone-950 py-2 px-4 text-center text-sm font-bold sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-center gap-4">
          <span className="hidden sm:inline">OFERTA POR TEMPO LIMITADO:</span>
          <div className="flex gap-2 tabular-nums">
            <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
            <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
            <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
          </div>
        </div>
      </div>

      {/* Floating CTA Mobile */}
      <AnimatePresence>
        {showFloatingCTA && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-6 left-4 right-4 z-50 sm:hidden"
          >
            <a 
              href="https://pay.kiwify.com.br/amMiTv8" 
              className="gold-gradient text-stone-950 font-bold py-4 px-6 rounded-full shadow-2xl flex items-center justify-center gap-2 text-lg active:scale-95 transition-transform"
            >
              INICIAR MINHA VIRADA
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-stone-950 text-white py-20 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=2000" 
            alt="Spiritual Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/50 via-stone-950/80 to-stone-950"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-400 text-sm font-semibold tracking-widest uppercase mb-6">
              Método Virada Espiritual
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              30 Dias Para Romper <span className="text-gold-400">Bloqueios Espirituais</span> e Ativar as Promessas Bíblicas
            </h1>
            <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Um método prático, estruturado e 100% fundamentado na Palavra para transformar sua mente, fortalecer sua fé e alinhar você ao propósito de Deus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://pay.kiwify.com.br/amMiTv8" 
                className="gold-gradient hover:brightness-110 text-stone-950 font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-lg shadow-lg shadow-gold-500/20"
              >
                QUERO COMEÇAR MINHA VIRADA AGORA
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-16 text-stone-500"
          >
            <ChevronDown className="mx-auto w-8 h-8" />
          </motion.div>
        </div>
      </header>

      {/* Pain Points Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-800 mb-4">Você sente que...</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { text: "Ora, mas parece que suas orações não passam do teto?", icon: <Flame className="text-gold-600" /> },
              { text: "Lê a Bíblia, mas não consegue aplicar na prática?", icon: <BookOpen className="text-gold-600" /> },
              { text: "Vive ciclos repetitivos de derrota?", icon: <Zap className="text-gold-600" /> },
              { text: "Está sempre ansioso, desanimado ou espiritualmente travado?", icon: <Target className="text-gold-600" /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-stone-100"
              >
                <div className="p-3 bg-gold-50 rounded-xl">
                  {item.icon}
                </div>
                <p className="text-lg text-stone-700 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="mt-16 text-center bg-stone-100 p-8 rounded-3xl border border-stone-200">
            <p className="text-xl text-stone-600 italic">
              "Você não está em pecado grave... Mas também não está vivendo a vida abundante que Jesus prometeu. E isso dói. Porque no fundo você sabe que existe mais."
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Revelation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div {...fadeIn}>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 text-stone-900">A Grande Revelação</h2>
            <p className="text-xl text-stone-600 mb-12">
              A maioria das pessoas tenta resolver bloqueios espirituais apenas com motivação. Mas transformação verdadeira exige:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 text-left mb-12">
              {[
                "Renovação de mente",
                "Alinhamento de identidade",
                "Ativação prática da fé",
                "Consolidação de disciplina espiritual"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-stone-50 rounded-xl border border-stone-100">
                  <CheckCircle2 className="text-gold-600 w-6 h-6 flex-shrink-0" />
                  <span className="font-semibold text-stone-800">{text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-2xl font-serif italic text-gold-700">
              E é exatamente isso que o Método Virada Espiritual faz em 30 dias.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Method - Modules */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">O Que é o Método Virada Espiritual?</h2>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Não é apenas um devocional. É um plano estruturado de 30 dias, dividido em 4 módulos estratégicos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Módulo 1", 
                subtitle: "Desbloqueio Espiritual", 
                desc: "Renove sua mente e quebre mentalidade de derrota.",
                icon: <Lock className="w-8 h-8" />
              },
              { 
                title: "Módulo 2", 
                subtitle: "Alinhamento com o Propósito", 
                desc: "Descubra sua identidade em Cristo e ajuste suas prioridades.",
                icon: <Target className="w-8 h-8" />
              },
              { 
                title: "Módulo 3", 
                subtitle: "Ativação da Fé", 
                desc: "Aprenda a orar com fé, agir em fé e vencer dúvidas.",
                icon: <Flame className="w-8 h-8" />
              },
              { 
                title: "Módulo 4", 
                subtitle: "Consolidação", 
                desc: "Construa disciplina espiritual que sustenta sua transformação.",
                icon: <Hammer className="w-8 h-8" />
              }
            ].map((module, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-stone-800 border border-stone-700 hover:border-gold-500/50 transition-colors group"
              >
                <div className="mb-6 p-4 bg-stone-700 rounded-2xl w-fit group-hover:bg-gold-500 group-hover:text-stone-950 transition-colors">
                  {module.icon}
                </div>
                <h3 className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-2">{module.title}</h3>
                <h4 className="text-xl font-bold mb-4">{module.subtitle}</h4>
                <p className="text-stone-400 leading-relaxed">{module.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-stone-800 border border-stone-700">
              <Clock className="text-gold-500 w-5 h-5" />
              <span className="text-stone-300">Cada dia leva apenas <strong>20 a 30 minutos</strong>.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Bonuses */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-stone-900">O Que Você Vai Receber</h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Guia completo de 30 dias",
                  "Exercícios práticos diários",
                  "Versículos estratégicos aplicados",
                  "Declarações de fé",
                  "Checklists de posicionamento espiritual"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg text-stone-700">
                    <CheckCircle2 className="text-green-600 w-6 h-6" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-stone-500 italic">Ferramentas poderosas para ativar fé e identidade.</p>
            </motion.div>

            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-gold-50 border border-gold-100">
                <div className="flex items-center gap-3 mb-6">
                  <Gift className="text-gold-600 w-8 h-8" />
                  <h3 className="text-2xl font-bold text-stone-900">Bônus Exclusivos</h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    { title: "7 Orações Estratégicas", desc: "Para momentos de crise, proteção e quebra de ciclos." },
                    { title: "Checklist Diário", desc: "Para começar e terminar seus dias alinhado com Deus." },
                    { title: "Plano de Leitura Bíblica", desc: "30 dias para aprofundar sua imersão na Palavra." },
                    { title: "21 Declarações Proféticas", desc: "Baseadas inteiramente nas Escrituras." }
                  ].map((bonus, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-200 text-gold-800 flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-900">{bonus.title}</h4>
                        <p className="text-stone-600 text-sm">{bonus.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-stone-900 rounded-2xl text-white border-l-4 border-gold-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="text-gold-400 w-5 h-5" />
                    <span className="font-bold text-gold-400 uppercase tracking-tighter text-xs">Bônus Secreto</span>
                  </div>
                  <h4 className="font-bold">Ecossistema de Produtividade com IA</h4>
                  <p className="text-stone-400 text-xs mt-1">Painel profissional com +100 ferramentas premium prontas para uso.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Promised */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div {...fadeIn}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-stone-900">Imagine como será daqui a 30 dias...</h2>
            
            <div className="grid sm:grid-cols-2 gap-4 text-left mb-12">
              {[
                "Não viver mais dominado por ansiedade",
                "Entender claramente seu propósito",
                "Orar com convicção",
                "Agir com fé",
                "Ter paz mesmo em meio às lutas",
                "Romper ciclos espirituais repetitivos"
              ].map((text, idx) => (
                <div key={idx} className="p-4 bg-white rounded-xl shadow-sm flex items-center gap-3">
                  <Sparkles className="text-gold-500 w-5 h-5" />
                  <span className="text-stone-700 font-medium">{text}</span>
                </div>
              ))}
            </div>

            <p className="text-2xl font-serif italic text-stone-600">
              "Não é emoção. É método + Palavra + constância."
            </p>
          </motion.div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=1000" 
                alt="Transformation" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-stone-900">Esse Método é Para Você Que:</h2>
              <ul className="space-y-6">
                {[
                  "Está cansado de viver abaixo das promessas de Deus",
                  "Quer disciplina espiritual prática",
                  "Busca direção clara e fundamentada na Bíblia",
                  "Deseja romper ciclos espirituais"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 bg-gold-100 p-1 rounded-full">
                      <CheckCircle2 className="text-gold-600 w-5 h-5" />
                    </div>
                    <span className="text-lg text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-6 bg-stone-900 text-white rounded-2xl">
                <p className="font-bold">Atenção:</p>
                <p className="text-stone-400">Não é para quem quer apenas inspiração momentânea. É para quem quer transformação real.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority */}
      <section className="py-20 bg-stone-950 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div {...fadeIn}>
            <Quote className="w-12 h-12 text-gold-500 mx-auto mb-8 opacity-50" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Fundamentado na Rocha</h2>
            <p className="text-xl text-stone-400 mb-12">O método não é baseado em opiniões humanas, mas nos princípios eternos das Escrituras:</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { ref: "Romanos 12", label: "Renovação da Mente" },
                { ref: "Jeremias 29", label: "Propósito" },
                { ref: "Hebreus 11", label: "Fé Prática" },
                { ref: "Filipenses 4", label: "Disciplina" },
                { ref: "Efésios 2", label: "Identidade" }
              ].map((item, idx) => (
                <div key={idx} className="px-6 py-4 bg-stone-900 border border-stone-800 rounded-2xl text-center min-w-[160px]">
                  <span className="block text-gold-400 font-bold mb-1">{item.ref}</span>
                  <span className="text-xs text-stone-500 uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
            
            <p className="mt-12 text-2xl font-serif italic text-gold-500">"Não é opinião. É Bíblia aplicada."</p>
          </motion.div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="glass-card p-10 rounded-[40px] text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 gold-gradient"></div>
            <ShieldCheck className="w-16 h-16 text-gold-600 mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold mb-4 text-stone-900">Sua Satisfação é Garantida</h2>
            <p className="text-xl text-stone-600 mb-8">
              Você tem <strong>7 dias de garantia incondicional</strong>. Se você não sentir clareza, fortalecimento espiritual e direção prática nos primeiros dias, devolvemos 100% do seu investimento.
            </p>
            <p className="text-stone-500 font-medium">Sem perguntas. Sem burocracia.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">Vidas Transformadas</h2>
            <p className="text-stone-600">Veja o que dizem aqueles que já iniciaram sua virada espiritual.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Ana Paula S.", 
                text: "Eu me sentia estagnada, lia a Bíblia mas parecia que nada mudava. O Módulo 1 me abriu os olhos para bloqueios que eu nem sabia que tinha.",
                role: "Aluna do Método"
              },
              { 
                name: "Marcos Oliveira", 
                text: "A disciplina de 20 minutos por dia foi o que me salvou. Hoje minha vida de oração é constante e sinto paz de verdade.",
                role: "Aluno do Método"
              },
              { 
                name: "Cláudia Mendes", 
                text: "As declarações proféticas mudaram minha mentalidade. Parei de focar no problema e comecei a focar na promessa.",
                role: "Aluna do Método"
              }
            ].map((t, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-gold-100" />
                <p className="text-stone-600 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold text-stone-900">{t.name}</p>
                  <p className="text-sm text-gold-600 font-medium">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-stone-600">Tire suas dúvidas sobre o método.</p>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "Como recebo o acesso ao método?", 
                a: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com todos os dados de acesso à nossa plataforma exclusiva." 
              },
              { 
                q: "Preciso de muito tempo por dia?", 
                a: "Não. O método foi desenhado para quem tem rotina corrida. Você precisará de apenas 20 a 30 minutos diários." 
              },
              { 
                q: "O método serve para qualquer denominação?", 
                a: "Sim. O método é 100% fundamentado na Bíblia Sagrada, focando nos princípios do Reino de Deus que são universais para todo cristão." 
              },
              { 
                q: "Por quanto tempo terei acesso?", 
                a: "O acesso ao Guia e aos bônus é vitalício. Você pode fazer e refazer o ciclo de 30 dias sempre que sentir necessidade." 
              }
            ].map((item, idx) => (
              <details key={idx} className="group bg-stone-50 rounded-2xl border border-stone-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-stone-800 hover:bg-stone-100 transition-colors">
                  {item.q}
                  <ChevronDown className="w-5 h-5 text-gold-600 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-stone-600 leading-relaxed border-t border-stone-200/50">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="checkout" className="py-20 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div {...fadeIn}>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 text-stone-900">Sua Virada Começa Hoje</h2>
            <p className="text-xl text-stone-600 mb-12">
              Você pode continuar vivendo ciclos repetitivos... Ou pode decidir que hoje começa sua virada espiritual. Deus já começou a obra. Agora é sua vez de dar o passo.
            </p>
            
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-stone-200 relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gold-500 text-stone-950 px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase">
                Oferta Exclusiva
              </div>
              
              <div className="mb-8">
                <span className="text-stone-400 line-through text-xl block mb-2">De R$ 99,90</span>
                <span className="text-5xl md:text-7xl font-bold text-stone-900 block">R$ 19,90</span>
                <span className="text-stone-500 text-sm mt-2 block">Ou em até 12x no cartão</span>
              </div>

              <a 
                href="https://pay.kiwify.com.br/amMiTv8" 
                className="gold-gradient hover:brightness-110 text-stone-950 font-bold py-6 px-10 rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-3 text-xl md:text-2xl shadow-xl shadow-gold-500/30 w-full"
              >
                QUERO COMEÇAR MINHA VIRADA AGORA
                <ArrowRight className="w-6 h-6" />
              </a>
              
              <div className="mt-8 flex flex-wrap justify-center gap-6 opacity-60 grayscale">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" alt="Pix" className="h-6" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-950 text-stone-500 text-center border-t border-stone-900">
        <div className="container mx-auto px-4">
          <p className="mb-4">© {new Date().getFullYear()} Método Virada Espiritual. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-gold-500 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
