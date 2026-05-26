export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f2937,transparent_60%)]"></div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-yellow-500/30">
            CG
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-wide">CoinGridAI</h1>
            <p className="text-sm text-gray-400">AI + Blockchain Evolution</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-yellow-400 transition">Sobre</a>
          <a href="#features" className="hover:text-yellow-400 transition">Tecnologia</a>
          <a href="#roadmap" className="hover:text-yellow-400 transition">Roadmap</a>
          <a href="#token" className="hover:text-yellow-400 transition">Token</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-8 py-24 lg:py-32 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm mb-6">
            ⚡ Powered by Artificial Intelligence
          </div>

          <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
            O Futuro da
            <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent block">
              Cripto Inteligente
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
            CoinGridAI é um projeto focado em inteligência artificial distribuída, mineração inteligente e integração blockchain para criar uma nova geração de ativos digitais escaláveis.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold shadow-xl shadow-yellow-500/30 hover:scale-105 transition">
              Comprar Token
            </button>

            <button className="px-8 py-4 rounded-2xl border border-gray-700 hover:border-yellow-400 hover:text-yellow-300 transition">
              Whitepaper
            </button>
          </div>

          <div className="flex gap-8 mt-10 text-sm text-gray-400">
            <div>
              <p className="text-3xl font-bold text-white">+120K</p>
              <span>Usuários</span>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">99.9%</p>
              <span>Segurança</span>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">24/7</p>
              <span>IA Ativa</span>
            </div>
          </div>
        </div>

        {/* Hero Card */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-96 h-96 bg-yellow-500/20 blur-3xl rounded-full"></div>

          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-[32px] p-10 shadow-2xl shadow-yellow-500/20 w-full max-w-lg">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-gray-400 text-sm">Token</p>
                <h3 className="text-3xl font-bold">CGAI</h3>
              </div>

              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 flex items-center justify-center text-black font-black text-2xl shadow-lg shadow-yellow-500/40">
                AI
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-black/40 rounded-2xl p-5 border border-gray-800">
                <div className="flex justify-between mb-2 text-sm text-gray-400">
                  <span>Rede Inteligente</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 rounded-2xl p-5 border border-gray-800">
                  <p className="text-gray-400 text-sm mb-1">Blockchain</p>
                  <h4 className="text-xl font-bold">GridChain</h4>
                </div>

                <div className="bg-black/40 rounded-2xl p-5 border border-gray-800">
                  <p className="text-gray-400 text-sm mb-1">IA Nodes</p>
                  <h4 className="text-xl font-bold">12.5K</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 px-8 py-24 border-t border-gray-800 bg-black/40">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-black mb-6">O que é CoinGridAI?</h3>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Um ecossistema digital criado para unir inteligência artificial, mineração descentralizada e blockchain escalável. O objetivo é permitir que usuários comuns possam participar da evolução da IA utilizando computadores domésticos.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 px-8 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black mb-4">Tecnologia Inteligente</h3>
          <p className="text-gray-400">Recursos principais do ecossistema CoinGridAI</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl p-8 hover:border-yellow-500/40 transition">
            <div className="text-5xl mb-6">🤖</div>
            <h4 className="text-2xl font-bold mb-4">IA Distribuída</h4>
            <p className="text-gray-400 leading-relaxed">
              Utilize notebooks e computadores comuns para alimentar a rede inteligente.
            </p>
          </div>

          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl p-8 hover:border-yellow-500/40 transition">
            <div className="text-5xl mb-6">⛓️</div>
            <h4 className="text-2xl font-bold mb-4">Blockchain Própria</h4>
            <p className="text-gray-400 leading-relaxed">
              Sistema rápido e escalável focado em segurança e inteligência computacional.
            </p>
          </div>

          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl p-8 hover:border-yellow-500/40 transition">
            <div className="text-5xl mb-6">⚡</div>
            <h4 className="text-2xl font-bold mb-4">Baixo Consumo</h4>
            <p className="text-gray-400 leading-relaxed">
              Projeto otimizado para funcionar até mesmo em hardware doméstico.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative z-10 px-8 py-24 border-t border-gray-800 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black mb-4">Roadmap</h3>
            <p className="text-gray-400">Evolução planejada do projeto</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                phase: 'Fase 1',
                title: 'Lançamento',
                desc: 'Criação do site, identidade visual e comunidade.'
              },
              {
                phase: 'Fase 2',
                title: 'Token CGAI',
                desc: 'Implementação do token e primeiros testes de rede.'
              },
              {
                phase: 'Fase 3',
                title: 'AI Grid',
                desc: 'Integração da inteligência artificial distribuída.'
              },
              {
                phase: 'Fase 4',
                title: 'Expansão Global',
                desc: 'Listagem em exchanges e expansão internacional.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl p-6 hover:border-yellow-500/40 transition">
                <span className="text-yellow-400 font-bold text-sm">{item.phase}</span>
                <h4 className="text-2xl font-bold mt-3 mb-4">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="token" className="relative z-10 px-8 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black mb-4">Tokenomics</h3>
          <p className="text-gray-400">Estrutura inicial do token CoinGridAI</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8">
            <h4 className="text-2xl font-bold mb-6">Distribuição</h4>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Comunidade</span>
                  <span>40%</span>
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="w-[40%] h-full bg-yellow-400 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Desenvolvimento</span>
                  <span>25%</span>
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="w-[25%] h-full bg-orange-400 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Liquidez</span>
                  <span>20%</span>
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="w-[20%] h-full bg-yellow-300 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Marketing</span>
                  <span>15%</span>
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="w-[15%] h-full bg-yellow-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-3xl p-8 flex flex-col justify-center">
            <h4 className="text-3xl font-black mb-6">
              “A próxima evolução da inteligência artificial descentralizada.”
            </h4>

            <p className="text-gray-300 leading-relaxed mb-8">
              CoinGridAI foi criado para transformar computadores comuns em uma rede inteligente global.
            </p>

            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold hover:scale-105 transition w-fit">
              Entrar na Comunidade
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 px-8 py-10 text-center text-gray-500 text-sm">
        © 2026 CoinGridAI • Todos os direitos reservados.
      </footer>
    </div>
  )
}
