import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-[#0a1628] min-h-screen overflow-hidden">
      <Navbar />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0f3460] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#16213e] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#2d3a4d] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-block animate-fadeInUp">
              <span className="text-[#8b95a5] text-sm uppercase tracking-widest">Bem-vindo ao meu portfólio</span>
            </div>

            {/* Profile Photo */}
            <div className="flex justify-center animate-fadeInUp animation-delay-100">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#0f3460] shadow-lg shadow-[#0f3460]/50 hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/profile.jpg" 
                  alt="João Silva"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-[#c9c5ba] via-[#8b95a5] to-[#c9c5ba] bg-clip-text text-transparent animate-fadeInUp animation-delay-200 leading-tight">
              João Silva
            </h2>
            
            <p className="text-xl md:text-2xl text-[#8b95a5] max-w-3xl mx-auto animate-fadeInUp animation-delay-400 leading-relaxed">
              Analista de Dados | Entusiasta de <span className="text-[#c9c5ba] font-semibold">Inteligência Artificial</span> e <span className="text-[#c9c5ba] font-semibold">Ciencia de Dados</span>
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap animate-fadeInUp animation-delay-600">
              <a 
                href="https://www.linkedin.com/in/joão-silva-99153a271/" 
                target="_blank" 
                className="group relative px-8 py-4 bg-gradient-to-r from-[#0f3460] to-[#16213e] text-[#c9c5ba] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#0f3460]/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#16213e] to-[#0f3460] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="https://github.com/heijsilva/" 
                target="_blank" 
                className="group relative px-8 py-4 bg-gradient-to-r from-[#16213e] to-[#2d3a4d] text-[#c9c5ba] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#16213e]/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2d3a4d] to-[#16213e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp animation-delay-800 pt-4">
              <a 
                href="mailto:profissionaljsilva@gmail.com"
                className="flex items-center gap-2 text-[#8b95a5] hover:text-[#c9c5ba] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">profissionaljsilva@gmail.com</span>
              </a>
              
              <span className="hidden sm:block text-[#2d3a4d]">|</span>
              
              <a 
                href="tel:+5581985176292"
                className="flex items-center gap-2 text-[#8b95a5] hover:text-[#c9c5ba] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">(81) 98517-6292</span>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg className="w-6 h-6 text-[#8b95a5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="relative py-20 px-6 bg-gradient-to-b from-[#0a1628] to-[#16213e]">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#c9c5ba] to-[#8b95a5] bg-clip-text text-transparent">
            Sobre Mim
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-[#0a1628]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#2d3a4d] hover:border-[#0f3460] transition-all duration-300 hover:shadow-lg hover:shadow-[#0f3460]/20">
                <h4 className="text-2xl font-bold text-[#c9c5ba] mb-4">
                  Quem sou eu
                </h4>
                <p className="text-[#8b95a5] leading-relaxed mb-4">
                  Me chamo João, tenho 21 anos e sou apaixonado por tecnologia e inovação. Sou uma pessoa tranquila que valoriza momentos de lazer ouvindo música e assistindo séries.
                </p>
                <p className="text-[#8b95a5] leading-relaxed">
                  Possuo um enorme entusiasmo pela área de dados, especialmente em inteligência artificial e machine learning. Busco constantemente desenvolver soluções que impactem positivamente a sociedade através da tecnologia.
                </p>
              </div>
              
              <div className="bg-[#0a1628]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#2d3a4d] hover:border-[#0f3460] transition-all duration-300 hover:shadow-lg hover:shadow-[#0f3460]/20">
                <h4 className="text-2xl font-bold text-[#c9c5ba] mb-6">
                  Formação
                </h4>
                <div className="space-y-4">
                  <div className="pl-4 border-l-2 border-[#0f3460]">
                    <p className="font-semibold text-[#c9c5ba] mb-1">Análise e Desenvolvimento de Sistemas</p>
                    <p className="text-sm text-[#8b95a5]">Faculdade Senac - Programa Embarque Digital</p>
                    <p className="text-xs text-[#8b95a5] mt-1">Porto Digital & Prefeitura do Recife</p>
                  </div>
                  <div className="pl-4 border-l-2 border-[#0f3460]">
                    <p className="font-semibold text-[#c9c5ba] mb-1">Sistemas para Internet</p>
                    <p className="text-sm text-[#8b95a5]">Universidade Católica de Pernambuco</p>
                    <p className="text-xs text-[#8b95a5] mt-1">Em andamento</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className="bg-[#0a1628]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#2d3a4d] hover:border-[#0f3460] transition-all duration-300 hover:shadow-lg hover:shadow-[#0f3460]/20">
              <h4 className="text-2xl font-bold text-[#c9c5ba] mb-6">
                Habilidades
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Comunicação Avançada',
                  'Trabalho em Equipe',
                  'Gestão de Projetos',
                  'Análise de Dados',
                  'Tratamento de Dados',
                  'Plotagem de Gráficos',
                  'Prototipagem de Telas',
                  'UI/UX Design'
                ].map((skill, index) => (
                  <div 
                    key={index} 
                    className="group bg-[#16213e] px-4 py-3 rounded-lg border border-[#2d3a4d] hover:border-[#0f3460] transition-all duration-300 hover:translate-x-2 cursor-default"
                  >
                    <p className="text-[#c9c5ba]">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="relative py-20 px-6 bg-gradient-to-b from-[#16213e] to-[#0a1628]">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#c9c5ba] to-[#8b95a5] bg-clip-text text-transparent">
            Projetos
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Horus Project */}
            <div className="group bg-gradient-to-br from-[#16213e] to-[#0a1628] rounded-2xl overflow-hidden border border-[#2d3a4d] hover:border-[#0f3460] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#0f3460]/30">
              <div className="relative bg-gradient-to-br from-[#2d3a4d] to-[#16213e] h-48 flex items-center justify-center overflow-hidden">
                <div className="relative w-32 h-32">
                  <Image 
                    src="/horus-logo.png" 
                    alt="Horus Project"
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-[#c9c5ba] mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#c9c5ba] group-hover:to-[#8b95a5] group-hover:bg-clip-text transition-all duration-300">
                  Horus
                </h4>
                <p className="text-[#8b95a5] mb-4 leading-relaxed">
                  Sistema de monitoramento inteligente que observa, monitora e rastreia o descarte inadequado de lixo pela cidade, identificando responsáveis, armazenando provas e prevenindo o acúmulo de resíduos.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-[#0f3460] text-[#c9c5ba] px-3 py-1 rounded-full">Machine Learning</span>
                  <span className="text-xs bg-[#0f3460] text-[#c9c5ba] px-3 py-1 rounded-full">Computer Vision</span>
                </div>
              </div>
            </div>

            {/* BBTStock Project */}
            <div className="group bg-gradient-to-br from-[#16213e] to-[#0a1628] rounded-2xl overflow-hidden border border-[#2d3a4d] hover:border-[#0f3460] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#0f3460]/30">
              <div className="relative bg-gradient-to-br from-[#2d3a4d] to-[#16213e] h-48 flex items-center justify-center">
                <div className="w-20 h-20 border-2 border-[#8b95a5] rounded-lg opacity-50 flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#8b95a5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-[#c9c5ba] mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#c9c5ba] group-hover:to-[#8b95a5] group-hover:bg-clip-text transition-all duration-300">
                  BBTStock
                </h4>
                <p className="text-[#8b95a5] mb-4 leading-relaxed">
                  Plataforma inteligente de gestão de estoque com IA preditiva, mapa logístico, distribuição de centros de coleta e rotas inteligentes de entrega.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-[#0f3460] text-[#c9c5ba] px-3 py-1 rounded-full">IA Preditiva</span>
                  <span className="text-xs bg-[#0f3460] text-[#c9c5ba] px-3 py-1 rounded-full">Logística</span>
                </div>
              </div>
            </div>

            {/* Placeholder Project */}
            <div className="group bg-gradient-to-br from-[#16213e] to-[#0a1628] rounded-2xl overflow-hidden border border-[#2d3a4d] hover:border-[#0f3460] transition-all duration-500">
              <div className="relative bg-gradient-to-br from-[#2d3a4d] to-[#16213e] h-48 flex items-center justify-center">
                <div className="w-20 h-20 border-2 border-[#8b95a5] rounded-lg opacity-30"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#c9c5ba] mb-2">Em breve</h4>
                <p className="text-[#8b95a5]">Mais projetos em desenvolvimento...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="relative py-20 px-6 bg-gradient-to-b from-[#0a1628] to-[#16213e]">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#c9c5ba] to-[#8b95a5] bg-clip-text text-transparent">
            Hackathons
          </h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {/* HackerCidadão */}
            <div className="bg-[#0a1628]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#2d3a4d] hover:border-[#0f3460] transition-all duration-300 hover:shadow-lg hover:shadow-[#0f3460]/20 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0f3460] to-[#16213e] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-[#c9c5ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#c9c5ba] mb-3 text-center">HackerCidadão 12.0</h4>
              <p className="text-[#8b95a5] text-center text-sm mb-4">Prefeitura do Recife com EMPREL</p>
              <p className="text-[#8b95a5] text-sm leading-relaxed mb-4">
                Desenvolvemos o Horus, uma solução para limpeza urbana que monitora e rastreia o descarte inadequado de lixo, identificando responsáveis, armazenando provas e prevenindo pontos críticos. Conquistamos o primeiro lugar e participamos do Ciclo de Inovação do EITA Recife.
              </p>
              <div className="mt-4 pt-4 border-t border-[#2d3a4d]">
                <span className="block text-center text-[#c9c5ba] font-semibold">🏆 Vencedor</span>
              </div>
            </div>

            {/* HackEnergy */}
            <div className="bg-[#0a1628]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#2d3a4d] hover:border-[#0f3460] transition-all duration-300 hover:shadow-lg hover:shadow-[#0f3460]/20 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0f3460] to-[#16213e] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-[#c9c5ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#c9c5ba] mb-3 text-center">HackEnergy</h4>
              <p className="text-[#8b95a5] text-center text-sm mb-4">Neoenergia</p>
              <p className="text-[#8b95a5] text-sm leading-relaxed mb-4">
                Criamos uma solução para identificar furtos de energia (gatos de energia) utilizando IA para detectar fraudes através de câmeras acopladas aos funcionários durante medições. O sistema cruza dados e gera alertas de possíveis fraudes elétricas.
              </p>
              <div className="mt-4 pt-4 border-t border-[#2d3a4d]">
                <span className="block text-center text-[#c9c5ba] font-semibold">🏆 Vencedor</span>
              </div>
            </div>

            {/* Hackathon BBTS */}
            <div className="bg-[#0a1628]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#2d3a4d] hover:border-[#0f3460] transition-all duration-300 hover:shadow-lg hover:shadow-[#0f3460]/20 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0f3460] to-[#16213e] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-[#c9c5ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#c9c5ba] mb-3 text-center">Hackathon BBTS</h4>
              <p className="text-[#8b95a5] text-center text-sm mb-4">Banco do Brasil</p>
              <p className="text-[#8b95a5] text-sm leading-relaxed mb-4">
                Desenvolvemos o BBTStock, uma plataforma que aproveita 12 anos de planilhas, prevê necessidade de aquisição de peças com alertas inteligentes, organiza dados estruturadamente e fornece mapa logístico com distribuição de centros, rotas inteligentes e sugestões de compras.
              </p>
              <div className="mt-4 pt-4 border-t border-[#2d3a4d]">
                <span className="block text-center text-[#c9c5ba] font-semibold">🏆 Vencedor</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}