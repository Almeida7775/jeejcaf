import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Ensure Wistia scripts are loaded
    const checkWistia = () => {
      if (window.Wistia) {
        window.Wistia.ready(() => {
          console.log('Wistia is ready');
        });
      } else {
        setTimeout(checkWistia, 100);
      }
    };
    checkWistia();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
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