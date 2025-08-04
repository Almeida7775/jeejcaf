import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Initialize Wistia queue if it doesn't exist
    window._wq = window._wq || [];
    
    // Push callback to Wistia queue - will execute when API is ready
    window._wq.push({
      id: "gc9ywrd50y",
      onReady: function(video: any) {
        console.log('Wistia video is ready');
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center text-amber-900">
            ☕ Protocolo Jejum com Café Preto
          </h1>
          <p className="text-center text-amber-700 mt-2 text-lg">
            Descubra o segredo para queimar gordura e aumentar sua energia
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Video Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center text-amber-900 mb-6">
            Assista ao Vídeo Completo
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="wistia_responsive_padding" style={{ paddingTop: '56.25%' }}>
              <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                <div className="wistia_embed wistia_async_gc9ywrd50y videoFoam=true" style={{ height: '100%', width: '100%' }}>&nbsp;</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-amber-900 mb-8">
              Benefícios do Café + Jejum Intermitente
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-amber-50 rounded-lg">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Queima Gordura</h3>
                <p className="text-amber-700">Acelera o metabolismo e potencializa a queima de gordura corporal</p>
              </div>
              <div className="text-center p-6 bg-amber-50 rounded-lg">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Aumenta o Foco</h3>
                <p className="text-amber-700">Melhora a concentração e clareza mental durante o jejum</p>
              </div>
              <div className="text-center p-6 bg-amber-50 rounded-lg">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Mais Energia</h3>
                <p className="text-amber-700">Proporciona energia sustentada sem quebrar o jejum</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para Transformar sua Vida?
            </h2>
            <p className="text-xl mb-6">
              Acesse agora o protocolo completo e comece sua jornada de transformação
            </p>
            <button className="bg-white text-amber-600 font-bold py-4 px-8 rounded-full text-xl hover:bg-amber-50 transition-colors duration-300 shadow-lg">
              🚀 Acesse o Café GPT Agora
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-amber-200">
            © 2025 Protocolo Jejum com Café Preto - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
          Protocolo Jejum com Café Preto
        </h1>
        
        {/* Wistia Video Player */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="wistia_responsive_padding" style={{ paddingTop: '56.25%' }}>
            <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
              <div className="wistia_embed wistia_async_gc9ywrd50y videoFoam=true" style={{ height: '100%', width: '100%' }}>&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App