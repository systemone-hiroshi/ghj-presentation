// Galaxy family detail modal
const GalaxyFamilyDetailModal = () => {
  if (!selectedGalaxyFamily) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6 sticky top-0 bg-white py-2 border-b border-amber-200 z-10">
          <h2 className="text-2xl font-bold text-amber-600">{selectedGalaxyFamily.name}種族</h2>
          <button 
            onClick={closeGalaxyFamilyDetail}
            className="bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-700"
          >
            閉じる
          </button>
        </div>
        
        <div className="space-y-6 pb-6">
          <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-amber-600">基本情報</h3>
            <p className="mb-4">{selectedGalaxyFamily.description}</p>
            
            <h3 className="text-lg font-bold mb-2 text-amber-600">特性</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedGalaxyFamily.traits.map(trait => (
                <span key={trait} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full">
                  {trait}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2 text-amber-600">強み</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedGalaxyFamily.strengths.map(strength => (
                    <li key={strength}>{strength}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2 text-rose-500">課題</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedGalaxyFamily.challenges.map(challenge => (
                    <li key={challenge}>{challenge}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-3 text-amber-600">あなたの中にある{selectedGalaxyFamily.name}の要素</h3>
            <p className="mb-4">この種族の特性が強く出ている方は、以下のような特徴が見られます：</p>
            <ul className="space-y-3">
              {selectedGalaxyFamily.name === "シリウス" && (
                <>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>全体の調和を重視し、統合に向けて働くことを好む</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>知識欲が強く、真理を追求する</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>奉仕の精神が強い</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>長期的な視点で物事を考える</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>他者を導くリーダーシップがある</span>
                  </li>
                </>
              )}
              {selectedGalaxyFamily.name === "プレアデス" && (
                <>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>感受性が高く、他者の感情に敏感</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>芸術的な才能や創造性に富む</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>平和と調和を重視する</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>美しさや癒しに惹かれる</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>時に感情の波に翻弄されることがある</span>
                  </li>
                </>
              )}
              {selectedGalaxyFamily.name === "オリオン" && (
                <>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>情熱的で行動力がある</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>困難に立ち向かう強さを持つ</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>目標達成に向けて粘り強く進む</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>時に支配的になることがある</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>闘争や対立の中で成長するタイプ</span>
                  </li>
                </>
              )}
              {selectedGalaxyFamily.name === "アンドロメダ" && (
                <>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>革新的なアイデアを生み出す能力</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>精神性と実用性のバランスを重視</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>先見性があり、未来志向</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>柔軟に適応する能力がある</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>時に現実から離れた考え方をすることも</span>
                  </li>
                </>
              )}
              {selectedGalaxyFamily.name === "リラ" && (
                <>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>開拓者精神があり、新しいことに挑戦する</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>拡大と発展を重視する</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>リーダーシップがあり、人を導く</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>時に支配的になりがち</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>強い目的意識と行動力がある</span>
                  </li>
                </>
              )}
              {selectedGalaxyFamily.name === "ゼータレティクル" && (
                <>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>論理的思考が得意で分析力に優れる</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>効率と秩序を重視する</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>科学や技術に関心がある</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>時に感情表現が苦手なことがある</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>集合意識や全体性を理解する力がある</span>
                  </li>
                </>
              )}
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-5 rounded-xl">
            <h3 className="text-lg font-bold mb-3 text-amber-600">自己理解のヒント</h3>
            <p className="mb-4">この種族の特性が強く現れている場合、以下のポイントを意識すると、より調和した生き方ができるでしょう：</p>
            
            {selectedGalaxyFamily.name === "シリウス" && (
              <div className="bg-white p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>知識だけでなく、実践も大切にする</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>完璧を求めすぎず、プロセスを楽しむ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>奉仕と同時に自分自身を大切にする</span>
                  </li>
                </ul>
              </div>
            )}
            
            {selectedGalaxyFamily.name === "プレアデス" && (
              <div className="bg-white p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>感情に溺れず、バランスを取る</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>闇の部分も受け入れ、統合する</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>平和を求めつつも、必要な対立も避けない</span>
                  </li>
                </ul>
              </div>
            )}
            
            {selectedGalaxyFamily.name === "オリオン" && (
              <div className="bg-white p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>力と支配ではなく、影響力と協力を意識する</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>情熱を建設的な方向に向ける</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>競争よりも共創の視点を取り入れる</span>
                  </li>
                </ul>
              </div>
            )}
            
            {selectedGalaxyFamily.name === "アンドロメダ" && (
              <div className="bg-white p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>アイデアを現実世界に落とし込む実践力を育てる</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>他者との繋がりを大切にする</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>抽象と具体のバランスを意識する</span>
                  </li>
                </ul>
              </div>
            )}
            
            {selectedGalaxyFamily.name === "リラ" && (
              <div className="bg-white p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>拡大だけでなく、深化も大切にする</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>自由と規律のバランスを取る</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>他者の意見や感情に耳を傾ける</span>
                  </li>
                </ul>
              </div>
            )}
            
            {selectedGalaxyFamily.name === "ゼータレティクル" && (
              <div className="bg-white p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>論理だけでなく、感情も大切にする</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>個性と多様性を尊重する</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>効率だけでなく、プロセスの価値も見出す</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* Always visible footer button */}
        <div className="sticky bottom-0 py-4 bg-white border-t flex justify-center">
          <button 
            onClick={closeGalaxyFamilyDetail}
            className="px-6 py-2 bg-gradient-to-r from-amber-400 to-rose-400 text-white rounded-lg hover:shadow-md"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};                      <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <h5 className="text-sm font-bold text-green-700 mb-1">調和状態</h5>
                      <p>{element.positive}</p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                      <h5 className="text-sm font-bold text-red-700 mb-1">不調和状態</h5>
                      <p>{element.negative}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
今ここ』に在るあなたです。</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-3 text-amber-600">リーディングの活用</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-amber-700">自己理解のツール</h4>
                <p className="text-sm">天津金木のリーディングは、現在のあなたの状態を客観的に見つめるための道具です。自分が気づいていない側面や、意識していない課題を明らかにするのに役立ちます。</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-rose-600">バランスの確認</h4>
                <p className="text-sm">四大源力のバランスを確認することで、どの要素を強化し、どの要素を調整すべきかが見えてきます。これにより、より調和のとれた生き方を実現できます。</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-amber-700">理想の在り方へのヒント</h4>
                <p className="text-sm">現在の状態を知ることは、理想の状態へと向かうための第一歩です。リーディングから見えてきた課題に取り組むことで、より本来の自分らしい生き方に近づけます。</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-rose-600">日常への活用</h4>
                <p className="text-sm">リーディングで得た気づきを日常生活に取り入れ、少しずつ実践していくことで、徐々に変化が現れてきます。一度きりではなく、定期的に自分を見つめる習慣を作りましょう。</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Always visible footer button */}
        <div className="sticky bottom-0 py-4 bg-white border-t flex justify-center">
          <button 
            onClick={toggleAmatsuKanagiDetail}
            className="px-6 py-2 bg-gradient-to-r from-amber-400 to-rose-400 text-white rounded-lg hover:shadow-md"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};

return (
  <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 to-rose-50">
    {/* Header - Fixed */}
    <header className="fixed top-0 left-0 right-0 z-20 bg-white shadow-md py-3 px-5 flex justify-between items-center">
      <h1 className="text-xl font-bold bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">
        GREAT HERO'S JOURNEY
      </h1>
      <div className="flex items-center gap-3">
        <div className="text-sm text-gray-600 hidden sm:block">
          2025.3.30 ワークショップ
        </div>
        <button
          onClick={toggleWorksheetMode}
          className="bg-gradient-to-r from-amber-400 to-rose-400 text-white px-3 py-1 rounded-full text-sm hover:shadow-md transition-all"
        >
          ワークシート
        </button>
      </div>
    </header>
    
    {/* Main content - Adjusted padding to account for header and footer */}
    <main className="flex-1 flex pt-16 pb-20">
      {/* Side navigation */}
      <div className="w-56 bg-white shadow-md hidden md:block p-4 overflow-y-auto">
        <div className="mb-6">
          <h2 className="font-bold text-amber-700 mb-2">スライド一覧</h2>
          <nav className="space-y-1">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  currentSlide === index 
                    ? 'bg-gradient-to-r from-amber-400 to-rose-400 text-white' 
                    : 'hover:bg-amber-50'
                }`}
              >
                {index + 1}. {slide.title}
              </button>
            ))}
          </nav>
        </div>
        
        <div>
          <h2 className="font-bold text-amber-700 mb-2">ツール</h2>
          <button 
            onClick={toggleWorksheetMode}
            className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-amber-50 transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            ワークシートを開く
          </button>
        </div>
      </div>
      
      {/* Slide area */}
      <div className="flex-1 p-4 md:p-6">
        <div className="bg-white rounded-xl shadow-xl h-full overflow-hidden flex flex-col">
          {/* Slide title */}
          <div className="bg-gradient-to-r from-amber-400 to-rose-400 text-white p-4 sticky top-0 z-10">
            <h2 className="text-xl font-bold">{slides[currentSlide].title}</h2>
            <p className="text-sm opacity-90">{slides[currentSlide].subtitle}</p>
          </div>
          
          {/* Slide content */}
          <div className="flex-1 p-6 overflow-y-auto" ref={contentRef}>
            {/* Debug info */}
            <div className="text-xs text-gray-400 mb-2">スライド {currentSlide + 1} / {slides.length}</div>
            
            {/* Slide content */}
            <div className="h-full">
              {slides[currentSlide].content}
            </div>
          </div>
        </div>
      </div>
    </main>
    
    {/* Navigation footer - Fixed */}
    <div className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t p-4 flex justify-between items-center">
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className={`px-4 py-2 rounded-lg ${
          currentSlide === 0 
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
            : 'bg-gradient-to-r from-amber-400 to-amber-500 text-white hover:shadow-md transition-all'
        }`}
      >
        前へ
      </button>
      
      <div className="hidden sm:flex">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full mx-1 ${
              currentSlide === index 
                ? 'bg-gradient-to-r from-amber-400 to-rose-400' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`スライド ${index + 1} へ移動`}
          />
        ))}
      </div>
      
      <button
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className={`px-4 py-2 rounded-lg ${
          currentSlide === slides.length - 1 
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
            : 'bg-gradient-to-r from-rose-400 to-rose-500 text-white hover:shadow-md transition-all'
        }`}
      >
        次へ
      </button>
    </div>
    
    {/* Mobile slide selection button */}
    <div className="md:hidden fixed right-4 bottom-20 z-20">
      <button 
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
        className="bg-gradient-to-r from-amber-400 to-rose-400 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    
    {/* Mobile navigation panel */}
    {mobileNavOpen && (
      <div className="md:hidden fixed inset-0 z-30 bg-black/70 flex items-end">
        <div className="bg-white w-full rounded-t-xl p-5 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-xl text-amber-600">スライド選択</h3>
            <button 
              onClick={() => setMobileNavOpen(false)}
              className="text-gray-500 text-2xl"
            >
              ×
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index);
                  setMobileNavOpen(false);
                }}
                className={`p-3 rounded-lg text-left ${
                  currentSlide === index 
                    ? 'bg-gradient-to-r from-amber-400 to-rose-400 text-white' 
                    : 'bg-amber-50 hover:bg-amber-100'
                }`}
              >
                <div className="text-xs">{index + 1}</div>
                <div className="font-medium">{slide.title}</div>
              </button>
            ))}
          </div>
          <div className="mt-4">
            <button 
              onClick={() => {
                toggleWorksheetMode();
                setMobileNavOpen(false);
              }}
              className="w-full py-3 bg-gradient-to-r from-amber-400 to-rose-400 text-white rounded-lg"
            >
              ワークシートを開く
            </button>
          </div>
        </div>
      </div>
    )}
    
    {/* Modals */}
    {worksheetMode && <WorksheetComponent />}
    {galaxyFamilyDetailMode && <GalaxyFamilyDetailModal />}
    {amatsuKanagiDetailMode && <AmatsuKanagiDetailModal />}
  </div>
);
}; from-amber-400 to-rose-400 text-white px-3 py-1 rounded-full text-sm hover:shadow-md transition-all"
        >
          ワークシート
        </button>
      </div>
    </header>
    
    {/* Main content - Adjusted padding to account for header and footer */}
    <main className="flex-1 flex pt-16 pb-20">
      {/* Side navigation */}
      <div className="w-56 bg-white shadow-md hidden md:block p-4 overflow-y-auto">
        <div className="mb-6">
          <h2 className="font-bold text-amber-700 mb-2">スライド一覧</h2>
          <nav className="space-y-1">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  currentSlide === index 
                    ? 'bg-gradient-to-r from-amber-400 to-rose-400 text-white' 
                    : 'hover:bg-amber-50'
                }`}
              >
                {index + 1}. {slide.title}
              </button>
            ))}
          </nav>
        </div>
        
        <div>
          <h2 className="font-bold text-amber-700 mb-2">ツール</h2>
          <button 
            onClick={toggleWorksheetMode}
            className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-amber-50 transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            ワークシートを開く
          </button>
        </div>
      </div>
      
      {/* Slide area */}
      <div className="flex-1 p-4 md:p-6">
        <div className="bg-white rounded-xl shadow-xl h-full overflow-hidden flex flex-col">
          {/* Slide title */}
          <div className="bg-gradient-to-r from-amber-400 to-rose-400 text-white p-4 sticky top-0 z-10">
            <h2 className="text-xl font-bold">{slides[currentSlide].title}</h2>
            <p className="text-sm opacity-90">{slides[currentSlide].subtitle}</p>
          </div>
          
          {/* Slide content */}
          <div className="flex-1 p-6 overflow-y-auto" ref={contentRef}>
            {/* Debug info */}
            <div className="text-xs text-gray-400 mb-2">スライド {currentSlide + 1} / {slides.length}</div>
            
            {/* Slide content */}
            <div className="h-full">
              {slides[currentSlide].content}
            </div>
          </div>
        </div>
      </div>
    </main>
    
    {/* Navigation footer - Fixed */}
    <div className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t p-4 flex justify-between items-center">
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className={`px-4 py-2 rounded-lg ${
          currentSlide === 0 
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
            : 'bg-gradient-to-r from-amber-400 to-amber-500 text-white hover:shadow-md transition-all'
        }`}
      >
        前へ
      </button>
      
      <div className="hidden sm:flex">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full mx-1 ${
              currentSlide === index 
                ? 'bg-gradient-to-r from-amber-400 to-rose-400' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`スライド ${index + 1} へ移動`}
          />
        ))}
      </div>
      
      <button
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className={`px-4 py-2 rounded-lg ${
          currentSlide === slides.length - 1 
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
            : 'bg-gradient-to-r from-rose-400 to-rose-500 text-white hover:shadow-md transition-all'
        }`}
      >
        次へ
      </button>
    </div>
    
    {/* Mobile slide selection button */}
    <div className="md:hidden fixed right-4 bottom-20 z-20">
      <button 
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
        className="bg-gradient-to-r from-amber-400 to-rose-400 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    
    {/* Mobile navigation panel */}
    {mobileNavOpen && (
      <div className="md:hidden fixed inset-0 z-30 bg-black/70 flex items-end">
        <div className="bg-white w-full rounded-t-xl p-5 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-xl text-amber-600">スライド選択</h3>
            <button 
              onClick={() => setMobileNavOpen(false)}
              className="text-gray-500 text-2xl"
            >
              ×
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index);
                  setMobileNavOpen(false);
                }}
                className={`p-3 rounded-lg text-left ${
                  currentSlide === index 
                    ? 'bg-gradient-to-r from-amber-400 to-rose-400 text-white' 
                    : 'bg-amber-50 hover:bg-amber-100'
                }`}
              >
                <div className="text-xs">{index + 1}</div>
                <div className="font-medium">{slide.title}</div>
              </button>
            ))}
          </div>
          <div className="mt-4">
            <button 
              onClick={() => {
                toggleWorksheetMode();
                setMobileNavOpen(false);
              }}
              className="w-full py-3 bg-gradient-to-r from-amber-400 to-rose-400 text-white rounded-lg"
            >
              ワークシートを開く
            </button>
          </div>
        </div>
      </div>
    )}
    
    {/* Modals */}
    {worksheetMode && <WorksheetComponent />}
    {galaxyFamilyDetailMode && <GalaxyFamilyDetailModal />}
    {amatsuKanagiDetailMode && <AmatsuKanagiDetailModal />}
  </div>
);
};

export default GHJPresentation;                    <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>困難に立ち向かう強さを持つ</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>目標達成に向けて粘り強く進む</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>時に支配的になることがある</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>闘争や対立の中で成長するタイプ</span>
                  </li>
                </>
              )}
              {selectedGalaxyFamily.name === "アンドロメダ" && (
                <>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>革新的なアイデアを生み出す能力</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>精神性と実用性のバランスを重視</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>先見性があり、未来志向</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>柔軟に適応する能力がある</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>時に現実から離れた考え方をすることも</span>
                  </li>
                </>
              )}
              {selectedGalaxyFamily.name === "リラ" && (
                <>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>開拓者精神があり、新しいことに挑戦する</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>拡大と発展を重視する</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>リーダーシップがあり、人を導く</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>時に支配的になりがち</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>強い目的意識と行動力がある</span>
                  </li>
                </>
              )}
              {selectedGalaxyFamily.name === "ゼータレティクル" && (
                <>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>論理的思考が得意で分析力に優れる</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>効率と秩序を重視する</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>科学や技術に関心がある</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>時に感情表現が苦手なことがある</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>集合意識や全体性を理解する力がある</span>
                  </li>
                </>
              )}
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-5 rounded-xl">
            <h3 className="text-lg font-bold mb-3 text-amber-600">自己理解のヒント</h3>
            <p className="mb-4">この種族の特性が強く現れている場合、以下のポイントを意識すると、より調和した生き方ができるでしょう：</p>
            
            {selectedGalaxyFamily.name === "シリウス" && (
              <div className="bg-white p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>知識だけでなく、実践も大切にする</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>完璧を求めすぎず、プロセスを楽しむ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>奉仕と同時に自分自身を大切にする</span>
                  </li>
                </ul>
              </div>
            )}
            
            {selectedGalaxyFamily.name === "プレアデス" && (
              <div className="bg-white p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>感情に溺れず、バランスを取る</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>闇の部分も受け入れ、統合する</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>平和を求めつつも、必要な対立も避けない</span>
                  </li>
                </ul>
              </div>
            )}
            
            {selectedGalaxyFamily.name === "オリオン" && (
              <div className="bg-white p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>力と支配ではなく、影響力と協力を意識する</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>情熱を建設的な方向に向ける</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>競争よりも共創の視点を取り入れる</span>
                  </li>
                </ul>
              </div>
            )}
            
            {selectedGalaxyFamily.name === "アンドロメダ" && (
              <div className="bg-white p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>アイデアを現実世界に落とし込む実践力を育てる</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>他者との繋がりを大切にする</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>抽象と具体のバランスを意識する</span>
                  </li>
                </ul>
              </div>
            )}
            
            {selectedGalaxyFamily.name === "リラ" && (
              <div className="bg-white p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>拡大だけでなく、深化も大切にする</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>自由と規律のバランスを取る</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>他者の意見や感情に耳を傾ける</span>
                  </li>
                </ul>
              </div>
            )}
            
            {selectedGalaxyFamily.name === "ゼータレティクル" && (
              <div className="bg-white p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>論理だけでなく、感情も大切にする</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>個性と多様性を尊重する</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>効率だけでなく、プロセスの価値も見出す</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* Always visible footer button */}
        <div className="sticky bottom-0 py-4 bg-white border-t flex justify-center">
          <button 
            onClick={closeGalaxyFamilyDetail}
            className="px-6 py-2 bg-gradient-to-r from-amber-400 to-rose-400 text-white rounded-lg hover:shadow-md"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};

// Amatsu Kanagi detail modal
const AmatsuKanagiDetailModal = () => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6 sticky top-0 bg-white py-2 border-b border-amber-200 z-10">
          <h2 className="text-2xl font-bold text-amber-600">{amatsuKanagiData.title}</h2>
          <button 
            onClick={toggleAmatsuKanagiDetail}
            className="bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-700"
          >
            閉じる
          </button>
        </div>
        
        <div className="space-y-6 pb-6">
          <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-amber-600">天津金木とは</h3>
            <p className="mb-4">{amatsuKanagiData.description}</p>
            <p className="mb-4">古神道の思想にある宇宙の四大源力になぞらえて、現在の在り方が宇宙創造の法則に則っているのかを指し示します。</p>
            <p>{amatsuKanagiData.philosophy}</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-3 text-amber-600">四大源力について</h3>
            <div className="space-y-4">
              {amatsuKanagiData.elements.map(element => (
                <div key={element.name} className="p-5 bg-gradient-to-r from-amber-50 to-rose-50 rounded-xl">
                  <h4 className="font-bold mb-2 text-amber-600 text-lg">{element.name}</h4>
                  <p className="mb-3">{element.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-4 bg-                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  会場
                </h4>
                <div className="pl-7">
                  <p>台所たまねぎ（2階スペース）</p>
                  <p>東京都世田谷区奥沢３丁目３１−１０</p>
                  <p className="text-sm text-gray-600">東急目黒線「奥沢駅」 徒歩3分</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-amber-700 mb-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  参加費
                </h4>
                <div className="pl-7">
                  <p>現地参加（1ドリンク込み）：3,000円</p>
                  <p>オンラインZoom参加：1,000円</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-amber-700 mb-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  その他
                </h4>
                <div className="pl-7">
                  <p>定員：会場10名／オンライン20名</p>
                  <p className="text-sm text-gray-600">お申し込み多数の場合は先着順となります</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-bold text-amber-700 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                お問い合わせ先
              </h4>
              <p className="pl-7">GREAT HERO'S JOURNEY事務局</p>
              <p className="pl-7">info@greatherosjourney.jp</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

// Worksheet component
const WorksheetComponent = () => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6 sticky top-0 bg-white py-2 border-b border-amber-200 z-10">
          <h2 className="text-2xl font-bold text-amber-600">ワークシート: {worksheetData[worksheetIndex].title}</h2>
          <div className="flex space-x-2">
            {worksheetData.map((section, idx) => (
              <button
                key={idx}
                onClick={() => setWorksheetIndex(idx)}
                className={`px-3 py-1 rounded-full text-sm ${
                  worksheetIndex === idx 
                    ? 'bg-gradient-to-r from-amber-400 to-rose-400 text-white' 
                    : 'bg-amber-100 hover:bg-amber-200 text-amber-800'
                }`}
              >
                {idx + 1}
              </button>
            ))}
            <button 
              onClick={toggleWorksheetMode}
              className="ml-4 bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-700"
            >
              閉じる
            </button>
          </div>
        </div>
        
        <div className="space-y-6 pb-20">
          {userWorksheet[worksheetIndex].map((item, idx) => (
            <div key={idx} className="bg-gradient-to-r from-amber-50 to-rose-50 p-5 rounded-xl">
              <h3 className="font-bold mb-3 text-amber-700">{item.question}</h3>
              <textarea
                value={item.answer}
                onChange={(e) => handleWorksheetChange(worksheetIndex, idx, e.target.value)}
                className="w-full p-4 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent min-h-[120px]"
                placeholder="ここに記入してください..."
              />
            </div>
          ))}
        </div>
        
        <div className="sticky bottom-0 mt-8 py-4 bg-white border-t flex justify-between">
          <button
            onClick={() => worksheetIndex > 0 && setWorksheetIndex(worksheetIndex - 1)}
            className={`px-4 py-2 rounded-lg ${
              worksheetIndex > 0 
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-white hover:shadow-md' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            disabled={worksheetIndex === 0}
          >
            前のセクション
          </button>
          <button
            onClick={() => worksheetIndex < worksheetData.length - 1 && setWorksheetIndex(worksheetIndex + 1)}
            className={`px-4 py-2 rounded-lg ${
              worksheetIndex < worksheetData.length - 1 
                ? 'bg-gradient-to-r from-rose-400 to-rose-500 text-white hover:shadow-md' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            disabled={worksheetIndex === worksheetData.length - 1}
          >
            次のセクション
          </button>
        </div>
      </div>
    </div>
  );
}; (
              <button
                key={idx}
                onClick={() => setWorksheetIndex(idx)}
                className={`px-3 py-1 rounded-full text-sm ${
                  worksheetIndex === idx 
                    ? 'bg-gradient-to-r from-amber-400 to-rose-400 text-white' 
                    : 'bg-amber-100 hover:bg-amber-200 text-amber-800'
                }`}
              >
                {idx + 1}
              </button>
            ))}
            <button 
              onClick={toggleWorksheetMode}
              className="ml-4 bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-700"
            >
              閉じる
            </button>
          </div>
        </div>
        
        <div className="space-y-6 pb-20">
          {userWorksheet[worksheetIndex].map((item, idx) => (
            <div key={idx} className="bg-gradient-to-r from-amber-50 to-rose-50 p-5 rounded-xl">
              <h3 className="font-bold mb-3 text-amber-700">{item.question}</h3>
              <textarea
                value={item.answer}
                onChange={(e) => handleWorksheetChange(worksheetIndex, idx, e.target.value)}
                className="w-full p-4 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent min-h-[120px]"
                placeholder="ここに記入してください..."
              />
            </div>
          ))}
        </div>
        
        <div className="sticky bottom-0 mt-8 py-4 bg-white border-t flex justify-between">
          <button
            onClick={() => worksheetIndex > 0 && setWorksheetIndex(worksheetIndex - 1)}
            className={`px-4 py-2 rounded-lg ${
              worksheetIndex > 0 
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-white hover:shadow-md' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            disabled={worksheetIndex === 0}
          >
            前のセクション
          </button>
          <button
            onClick={() => worksheetIndex < worksheetData.length - 1 && setWorksheetIndex(worksheetIndex + 1)}
            className={`px-4 py-2 rounded-lg ${
              worksheetIndex < worksheetData.length - 1 
                ? 'bg-gradient-to-r from-rose-400 to-rose-500 text-white hover:shadow-md' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            disabled={worksheetIndex === worksheetData.length - 1}
          >
            次のセクション
          </button>
        </div>
      </div>
    </div>
  );
};

// Galaxy family detail modal
const GalaxyFamilyDetailModal = () => {
  if (!selectedGalaxyFamily) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6 sticky top-0 bg-white py-2 border-b border-amber-200 z-10">
          <h2 className="text-2xl font-bold text-amber-600">{selectedGalaxyFamily.name}種族</h2>
          <button 
            onClick={closeGalaxyFamilyDetail}
            className="bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-700"
          >
            閉じる
          </button>
        </div>
        
        <div className="space-y-6 pb-6">
          <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-amber-600">基本情報</h3>
            <p className="mb-4">{selectedGalaxyFamily.description}</p>
            
            <h3 className="text-lg font-bold mb-2 text-amber-600">特性</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedGalaxyFamily.traits.map(trait => (
                <span key={trait} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full">
                  {trait}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2 text-amber-600">強み</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedGalaxyFamily.strengths.map(strength => (
                    <li key={strength}>{strength}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2 text-rose-500">課題</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedGalaxyFamily.challenges.map(challenge => (
                    <li key={challenge}>{challenge}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-3 text-amber-600">あなたの中にある{selectedGalaxyFamily.name}の要素</h3>
            <p className="mb-4">この種族の特性が強く出ている方は、以下のような特徴が見られます：</p>
            <ul className="space-y-3">
              {selectedGalaxyFamily.name === "シリウス" && (
                <>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>全体の調和を重視し、統合に向けて働くことを好む</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>知識欲が強く、真理を追求する</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>奉仕の精神が強い</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>長期的な視点で物事を考える</span>
                  </li>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>他者を導くリーダーシップがある</span>
                  </li>
                </>
              )}
              {selectedGalaxyFamily.name === "プレアデス" && (
                <>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>感受性が高く、他者の感情に敏感</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>芸術的な才能や創造性に富む</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>平和と調和を重視する</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>美しさや癒しに惹かれる</span>
                  </li>
                  <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>時に感情の波に翻弄されることがある</span>
                  </li>
                </>
              )}
              {selectedGalaxyFamily.name === "オリオン" && (
                <>
                  <li className="flex items-start bg-amber-50 p-3 rounded-lg">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>情熱的で行動力がある</span>
                  </li>
                                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-700">オラクルカードの作成</h4>
                  <p className="text-sm text-gray-600">日常生活で活用できる銀河ファミリーのオラクルカード</p>
                </div>
              </li>
              
              <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mr-3 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-rose-600">ヒーリング音楽の制作・配信</h4>
                  <p className="text-sm text-gray-600">魂の解放を促すオリジナル楽曲の制作と配信</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow mb-6">
          <h3 className="text-xl font-bold mb-4 text-amber-600">GREAT HERO'S JOURNEYの理念</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-amber-700 text-center">魂の解放</h4>
              <p className="text-sm text-center">本来の自分自身に目覚め、無限の可能性を開く</p>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-rose-600 text-center">統合と調和</h4>
              <p className="text-sm text-center">対立する要素を統合し、全体性を取り戻す</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-rose-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-amber-700 text-center">愛の拡大</h4>
              <p className="text-sm text-center">全ては一つであり愛であることを体現する</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-amber-400 to-rose-400 p-6 rounded-xl shadow-lg text-white text-center">
          <p className="font-bold text-xl mb-2">Only Love Is REAL</p>
          <p className="text-lg">全ては一つであり愛である</p>
        </div>
      </div>
    )
  },
  
  // Slide 9: FAQs
  {
    title: "よくある質問",
    subtitle: "GREAT HERO'S JOURNEYについてのQ&A",
    content: (
      <div className="flex flex-col h-full overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6 text-amber-600">よくある質問</h2>
        <div className="space-y-4">
          {faqsData.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-amber-700 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-2 text-sm">Q</span>
                  {item.question}
                </h3>
              </div>
              <div className="pt-2 border-t border-gray-200">
                <p className="pl-8">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-6 bg-gradient-to-r from-amber-50 to-rose-50 rounded-xl shadow-md text-center">
          <h3 className="text-lg font-bold mb-3 text-amber-600">その他のご質問</h3>
          <p className="mb-4">ここに掲載されていないご質問がございましたら、お問い合わせフォームよりお気軽にお尋ねください。</p>
          <button 
            onClick={() => goToSlide(9)}
            className="px-6 py-3 bg-gradient-to-r from-amber-400 to-rose-400 text-white rounded-full hover:shadow-xl transition-all transform hover:scale-105"
          >
            お問い合わせはこちら
          </button>
        </div>
      </div>
    )
  },
  
  // Slide 10: Contact Form
  {
    title: "お問い合わせ",
    subtitle: "ワークショップ参加申し込み・感想フォーム",
    content: (
      <div className="flex flex-col h-full overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6 text-amber-600">お問い合わせ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md order-2 md:order-1">
            <h3 className="text-xl font-bold mb-4 text-amber-600">お問い合わせ・感想フォーム</h3>
            {formSubmitted ? (
              <div className="p-6 bg-green-50 rounded-xl text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2 text-green-700">送信完了しました</h4>
                <p className="text-green-600">お問い合わせいただき、ありがとうございます。<br />内容を確認次第、ご返信いたします。</p>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-amber-700">お名前 <span className="text-rose-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={feedbackFormData.name}
                    onChange={handleFeedbackInputChange}
                    className="w-full p-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-amber-700">メールアドレス <span className="text-rose-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={feedbackFormData.email}
                    onChange={handleFeedbackInputChange}
                    className="w-full p-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="participationType" className="block text-sm font-medium mb-1 text-amber-700">お問い合わせ種別</label>
                  <select
                    id="participationType"
                    name="participationType"
                    value={feedbackFormData.participationType}
                    onChange={handleFeedbackInputChange}
                    className="w-full p-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  >
                    <option value="venue">会場参加について</option>
                    <option value="online">オンライン参加について</option>
                    <option value="feedback">ワークショップの感想</option>
                    <option value="question">質問・その他</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-amber-700">メッセージ</label>
                  <textarea
                    id="message"
                    name="message"
                    value={feedbackFormData.message}
                    onChange={handleFeedbackInputChange}
                    rows={5}
                    className="w-full p-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="ご質問や参加希望の日時、ワークショップの感想などをご記入ください"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className={`w-full py-3 px-4 bg-gradient-to-r from-amber-400 to-rose-400 text-white rounded-lg transition-all ${
                    formSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'
                  }`}
                >
                  {formSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      送信中...
                    </div>
                  ) : '送信する'}
                </button>
              </form>
            )}
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-rose-50 p-6 rounded-xl shadow-md order-1 md:order-2">
            <h3 className="text-xl font-bold mb-4 text-amber-600">ワークショップ詳細</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-amber-700 mb-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  日時
                </h4>
                <p className="pl-7">2025年3月30日（日）13時〜16時</p>
                <p className="text-sm text-gray-600 pl-7">15分前（12:45）からお入りいただけます</p>
              </div>
              
              <div>
                <h4 className="font-bold text-amber-700 mb-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round"              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-center font-semibold mb-2 text-amber-600">強みの発見</h4>
            <p className="text-sm text-center text-gray-600">自分の中にある銀河種族の特性を知ることで、自分の強みや才能を発見できます</p>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-3 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-center font-semibold mb-2 text-rose-500">課題の理解</h4>
            <p className="text-sm text-center text-gray-600">各種族の課題を知ることで、自分が乗り越えるべき障壁を理解できます</p>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h4 className="text-center font-semibold mb-2 text-amber-600">統合と調和</h4>
            <p className="text-sm text-center text-gray-600">異なる銀河種族の特性をバランスよく統合することで、より調和のとれた生き方を実現できます</p>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <button 
            onClick={toggleWorksheetMode}
            className="px-6 py-3 bg-gradient-to-r from-amber-400 to-rose-400 text-white rounded-full hover:shadow-xl transition-all transform hover:scale-105"
          >
            ワークシートを開く
          </button>
        </div>
      </div>
    )
  },
  
  // Slide 7: Amatsu Kanagi Reading (Previous slide 7)
  {
    title: "天津金木リーディング",
    subtitle: "古神道に伝わる秘儀",
    content: (
      <div className="flex flex-col h-full overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6 text-amber-600">天津金木リーディング</h2>
        <div className="bg-white p-6 rounded-xl shadow-lg mb-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold mb-3 text-amber-600">天津金木（あまつかなぎ）とは</h3>
          <p className="mb-2">{amatsuKanagiData.description}</p>
          <p className="mb-4">古神道の思想にある宇宙の四大源力になぞらえて、現在の在り方が宇宙創造の法則に則っているのかを指し示します。</p>
          <button 
            onClick={toggleAmatsuKanagiDetail}
            className="mt-2 px-4 py-2 bg-amber-100 hover:bg-amber-200 rounded-lg transition-colors text-amber-700 inline-flex items-center"
          >
            詳細を見る
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {amatsuKanagiData.elements.map((element, index) => (
            <div 
              key={element.name}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-bold mb-2 text-amber-600">{element.name}</h3>
              <p className="text-sm mb-3">{element.description}</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                  <h4 className="text-xs font-bold text-green-700 mb-1">調和状態</h4>
                  <p className="text-sm">{element.positive}</p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                  <h4 className="text-xs font-bold text-red-700 mb-1">不調和状態</h4>
                  <p className="text-sm">{element.negative}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-3 text-amber-600">ワークショップでのリーディングについて</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">ワークショップでは、天津金木を使用した現在の自分の状態を見つめるリーディングを行います。このリーディングにより、現在のあなたが宇宙の法則にどう調和しているかを知ることができます。</p>
              <p>自分を見つめることで課題を浮き彫りにし、理想的な生き方を考えるきっかけとなります。天と地をつなぐ「光の柱」を立てるためには、まず現在の自分の状態を知ることが大切です。</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2 text-amber-600">リーディング活用のポイント</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>自分の現在地を客観的に見つめる</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>四大源力のバランスを確認する</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>不調和がある部分に意識を向ける</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>自分自身の理想の在り方を考える</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>魂の目的や使命に繋がるヒントを得る</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <button 
            onClick={toggleWorksheetMode}
            className="px-6 py-3 bg-gradient-to-r from-amber-400 to-rose-400 text-white rounded-full hover:shadow-xl transition-all transform hover:scale-105"
          >
            ワークシートを開く
          </button>
        </div>
      </div>
    )
  },
  
  // Slide 8: Vision and Future (Previous slide 9)
  {
    title: "これからのGREAT HERO'S JOURNEY",
    subtitle: "ビジョンと展望",
    content: (
      <div className="flex flex-col h-full overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6 text-amber-600">これからのGREAT HERO'S JOURNEY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-amber-600">私たちのビジョン</h3>
            <p className="mb-4">個々のヒーローズジャーニーの実現は、また大いなる意志のヒーローズジャーニーの実現であり、全ては一つであり愛であることを関わる全ての方々と表現し、実現させることがこのプロジェクトの目的です。</p>
            <p className="mb-4">誰もが人生そのものと言える輝かしいヒーローズジャーニーを歩んでいます。どんな人にも約束されている輝かしいヒーローズジャーニーを実現することが出来るのです。</p>
            <p>私たちはそのことを大切な方々に伝え、みんなと輝かしい人生を共有することで輝かしい世界を創造できると考えています。</p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-rose-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-rose-500">今後の展開</h3>
            <ul className="space-y-3">
              <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-700">定期的な上映会の開催</h4>
                  <p className="text-sm text-gray-600">東京だけでなく全国各地で上映会を開催予定</p>
                </div>
              </li>
              
              <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mr-3 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-rose-600">オンラインコミュニティの形成</h4>
                  <p className="text-sm text-gray-600">意識の高い仲間との繋がりを深める場の提供</p>
                </div>
              </li>
              
              <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                <div className="w-8 h-8 rounded-full bg-amber-と表現し、実現させるというのがこのプロジェクトの目的です。</p>
          <div className="p-3 bg-gradient-to-r from-amber-50 to-rose-50 rounded-lg">
            <p className="text-center font-bold italic text-amber-700">Only Love Is REAL — 全ては一つであり愛である</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-bold mb-3 text-rose-500">ヒーローズジャーニーとは</h3>
            <p className="text-sm mb-4">『ヒーローズジャーニー』とは、神話学者ジョセフ・キャンベルが提唱した、個人の成長や人生の挑戦を理解するための考え方です。</p>
            <p className="text-sm">これは映画や神話など物語の共通パターンであり、『千と千尋の神隠し』や『スターウォーズ』など主人公が日常から非日常に移行し、試練を乗り越えて帰還するというステップとその道のりを表しています。</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-bold mb-3 text-amber-600">魂の歓びを表現する</h3>
            <p className="text-sm mb-3">ヒーローズジャーニーは、『魂の歓びを表現する』ということから始まるのかもしれません。</p>
            <p className="text-sm">どのような人生を歩みたいのかを考えるうちに、自分自身と向き合うことが増えてくるでしょう。そんな中で様々な情報や新しい学びを求めたり、時には新しい挑戦の一歩を踏み出してみたり、成長を促してくれるメンターに出会うこともあるでしょう。</p>
          </div>
        </div>
      </div>
    )
  },
  
  // Slide 5: Scenario Explanation (Previously slide 4)
  {
    title: "シナリオ解説",
    subtitle: "GREAT HERO'S JOURNEY上映会の内容",
    content: (
      <div className="flex flex-col h-full overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6 text-amber-600">シナリオ解説</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="md:col-span-3 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-amber-600">GREAT HERO'S JOURNEY上映会の3つの章</h3>
            <p className="mb-4">GREAT HERO'S JOURNEYの上映会では、宇宙創造の物語から銀河の歴史、そして天の岩戸開きまでの壮大なストーリーを体験します。</p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-full bg-amber-500/30 text-amber-800 flex items-center justify-center font-bold text-xl mb-3 mx-auto">1</div>
            <h3 className="text-lg font-bold mb-2 text-center text-amber-700">第1章：アメツチワカレ</h3>
            <p className="text-sm mb-3 text-center text-amber-800 font-medium">無から有への創造の始まり</p>
            <ul className="text-sm space-y-2 px-4">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>無の世界と意志の発動</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>火と水の創造</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>高天原の形成</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>宇宙創造の始まり</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>天の岩戸隠れ</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-full bg-rose-500/30 text-rose-800 flex items-center justify-center font-bold text-xl mb-3 mx-auto">2</div>
            <h3 className="text-lg font-bold mb-2 text-center text-rose-700">第2章：銀河の歴史</h3>
            <p className="text-sm mb-3 text-center text-rose-800 font-medium">銀河ファミリーの旅</p>
            <ul className="text-sm space-y-2 px-4">
              <li className="flex items-start">
                <span className="text-rose-600 mr-2">•</span>
                <span>創造の礎と黄金の泉</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-600 mr-2">•</span>
                <span>シリウス・プレアデス・オリオン</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-600 mr-2">•</span>
                <span>アンドロメダ・リラ・ゼータレティクル</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-600 mr-2">•</span>
                <span>地球人類創生プロジェクト</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-rose-100 p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/30 to-rose-500/30 text-amber-800 flex items-center justify-center font-bold text-xl mb-3 mx-auto">3</div>
            <h3 className="text-lg font-bold mb-2 text-center text-amber-700">第3章：天の岩戸開き</h3>
            <p className="text-sm mb-3 text-center text-amber-800 font-medium">統合への道</p>
            <ul className="text-sm space-y-2 px-4">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>創造の礎の帰還</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>火と水の統合</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>神と人の統合</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>全宇宙の統合</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>Only Love Is REAL</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold mb-3 text-amber-600">今日のワークショップでのシナリオ活用</h3>
          <p className="mb-4">上映会のシナリオを元に、今日のワークショップでは自分自身を振り返ります。これまでの幸せな時や辛い時、山あり谷あり乗り越えてきた人生を振り返り、棚卸ししてみましょう！</p>
          <p className="mb-6">そして、これからどんな生き方をしていくのかを見つめ直してみましょう。</p>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent mb-6"></div>
          
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-4 rounded-xl max-w-md">
              <h4 className="text-center font-semibold mb-2 text-amber-700">ワークショップでのポイント</h4>
              <p className="text-sm text-center">シナリオの各章は、あなた自身の人生の旅と重ね合わせることができます。無から有への創造、様々な経験と葛藤、そして最終的な統合という流れは、私たち一人ひとりの魂の旅路でもあるのです。</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  
  // Slide 6: Galaxy Family (Previous slide 6)
  {
    title: "銀河ファミリー",
    subtitle: "宇宙の仲間たちの特性",
    content: (
      <div className="flex flex-col h-full overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6 text-amber-600">銀河ファミリー</h2>
        <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
          <p className="mb-4">
            銀河ファミリーとは、私たち地球人を含む宇宙の様々な存在たちのことです。それぞれの種族はそれぞれの特性を持っており、私たちのDNAには様々な星の特性が組み込まれています。
          </p>
          <p>
            ワークショップでは、自分がどの種族の特性を持っているかを探るマッピングを行います。自分の中のさまざまな特性を知ることで、自分の強みや課題に気づき、より調和した生き方を見つけることができます。
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {galaxyFamiliesData.map((family, index) => (
            <div 
              key={family.name}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:scale-102 cursor-pointer"
              onClick={() => showGalaxyFamilyDetail(family)}
            >
              <h3 className="text-lg font-bold mb-2 text-amber-600">{family.name}</h3>
              <p className="text-sm mb-3 line-clamp-2">{family.description}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {family.traits.slice(0, 3).map(trait => (
                  <span key={trait} className="px-2 py-1 text-xs bg-amber-100 text-amber-700 rounded-full">
                    {trait}
                  </span>
                ))}
                {family.traits.length > 3 && (
                  <span className="px-2 py-1 text-xs bg-amber-100 text-amber-700 rounded-full">
                    +{family.traits.length - 3}
                  </span>
                )}
              </div>
              <div className="text-right">
                <span className="text-xs text-rose-500 flex items-center justify-end">
                  詳細を見る
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-6 rounded-xl shadow-md mb-6">
          <h3 className="text-xl font-bold mb-3 text-amber-600">ワークショップでのマッピングについて</h3>
          <p className="mb-4">ワークショップでは、それぞれの銀河ファミリーの特性を詳しく解説し、自分がどの種族の特性を持っているかを探っていきます。</p>
          <p>人はそれぞれ複数の種族の特性を持っており、その組み合わせがユニークな個性となっています。ワークショップでは、直感的なエクササイズやチェックリストを使って、自分の中の銀河種族の特性を探ります。</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="w-12 h-import React, { useState, useEffect, useCallback, useRef } from 'react';

// Type definitions
interface GalaxyFamily {
name: string;
description: string;
traits: string[];
strengths: string[];
challenges: string[];
}

interface AmatsuKanagiElement {
name: string;
description: string;
positive: string;
negative: string;
}

interface AmatsuKanagiData {
title: string;
description: string;
elements: AmatsuKanagiElement[];
philosophy: string;
}

interface WorksheetItem {
question: string;
answer: string;
}

interface WorksheetSection {
title: string;
items: WorksheetItem[];
}

interface FeedbackFormData {
name: string;
email: string;
participationType: string;
message: string;
}

// Galaxy families data
const galaxyFamiliesData: GalaxyFamily[] = [
{
  name: "シリウス",
  description: "シリウスの長老たちは、統合を目指す高度な存在たちです。彼らは地球と深い関わりを持ち、地球人の育成に大きく貢献してきました。",
  traits: ["知恵", "調和", "奉仕", "使命感", "統合力"],
  strengths: ["高い知性と洞察力", "リーダーシップ", "長期的な視野", "多次元的な思考"],
  challenges: ["現実世界との接続", "完璧主義", "責任感の重圧"]
},
{
  name: "プレアデス",
  description: "プレアデス人は感受性が高く、愛と調和を重視します。彼らは地球人との遺伝子的なつながりが深く、深い愛で見守っています。",
  traits: ["感受性", "愛", "調和", "平和", "芸術性"],
  strengths: ["繊細な感覚", "芸術的才能", "癒しの能力", "直感力"],
  challenges: ["闇や葛藤の回避", "現実から逃避する傾向", "感情の波に振り回される"]
},
{
  name: "オリオン",
  description: "オリオンでは長い対立の歴史がありました。拡大志向と安定志向、全体主義と個人主義の葛藤が特徴です。",
  traits: ["情熱", "力強さ", "意志力", "戦略的思考", "変革力"],
  strengths: ["強い意志と決断力", "目標達成力", "エネルギッシュ", "困難を乗り越える力"],
  challenges: ["権力志向", "対立を生みやすい", "他者支配の傾向", "バランスの欠如"]
},
{
  name: "アンドロメダ",
  description: "アンドロメダの存在たちは、精神性と技術の調和を体現しています。彼らは創造性と革新を重視します。",
  traits: ["革新性", "創造力", "技術力", "調和", "精神性"],
  strengths: ["斬新なアイデア", "先見性", "適応力", "バランス感覚"],
  challenges: ["現実との乖離", "抽象的すぎる思考", "孤立感"]
},
{
  name: "リラ",
  description: "リラはヒューマノイドの発祥地であり、拡大と発展を重視する文明です。支配的な面もありますが、宇宙文明の発展に大きく貢献しました。",
  traits: ["拡大志向", "開拓精神", "行動力", "支配力", "情熱"],
  strengths: ["リーダーシップ", "先駆者精神", "実行力", "目標達成力"],
  challenges: ["支配欲", "バランスの欠如", "他者の自由を制限する傾向"]
},
{
  name: "ゼータレティクル",
  description: "ゼータレティクル人は高度な科学技術を持ちますが、感情を抑制し集合意識となりました。現在は地球人を通じて多様性を取り戻そうとしています。",
  traits: ["分析力", "論理性", "効率性", "集合意識", "技術力"],
  strengths: ["卓越した知性", "問題解決能力", "効率的な思考", "組織力"],
  challenges: ["感情の欠如", "個性の喪失", "温かみの不足", "恐れの克服"]
}
];

// Amatsu Kanagi data
const amatsuKanagiData: AmatsuKanagiData = {
title: "天津金木（あまつかなぎ）",
description: "古神道に伝わる秘儀の一つとして伝わる神具です。「持ち歩く神社」とも言われ宇宙の力を集める事が出来るとされています。現在のあなたを知るための補助として活用します。",
elements: [
  {
    name: "天（魂）",
    description: "「天命」在りて有る存在であり根本の意志",
    positive: "あなたの喜びに繋がっている",
    negative: "本来の自分を見失っている"
  },
  {
    name: "火（靈）",
    description: "「理性」によって人生の方向性を定める",
    positive: "目標と方向性が明確である",
    negative: "理想と現実のギャップに苦しんでいる"
  },
  {
    name: "水（心）",
    description: "「感情」は常に変化し流されるもの",
    positive: "自然の流れに乗っている",
    negative: "感情に振り回されている"
  },
  {
    name: "地（身体）",
    description: "「行動」により魂が顕現される",
    positive: "行動と結果が結びついている",
    negative: "努力と結果が結びついていない"
  }
],
philosophy: "一人一人がどう意識して人生を創造していくか考える。己を見つめ。己を見出して己自身を向上する。そして、身の回りの方々と共に幸せになろうと生きていく。一人一人が『創造主』である事を体現していく。"
};

// Worksheet data
const worksheetData: WorksheetSection[] = [
{
  title: "銀河ファミリーマッピング",
  items: [
    { question: "あなたはどの銀河種族の特性を持っていると感じますか？", answer: "" },
    { question: "その種族の長所と短所は何だと思いますか？", answer: "" },
    { question: "あなたの人生でどのように表れていますか？", answer: "" },
    { question: "もう一つの種族の特性も持っていると感じますか？それは何ですか？", answer: "" },
    { question: "これらの特性をどのように調和させていきたいですか？", answer: "" }
  ]
},
{
  title: "天津金木リーディング",
  items: [
    { question: "現在のあなたの課題は何だと感じますか？", answer: "" },
    { question: "天（魂）：あなたの根本的な意志や使命は何だと感じますか？", answer: "" },
    { question: "火（靈）：あなたの理性は人生をどのような方向に導いていますか？", answer: "" },
    { question: "水（心）：あなたの感情は現在どのような状態ですか？", answer: "" },
    { question: "地（身体）：あなたの行動はどのように魂を表現していますか？", answer: "" },
    { question: "これらの要素でバランスが取れていない部分はどこですか？", answer: "" }
  ]
},
{
  title: "光の柱を立てる",
  items: [
    { question: "あなたが地上で実現したい理想は何ですか？", answer: "" },
    { question: "魂の本質的な喜びを感じるのはどんな時ですか？", answer: "" },
    { question: "大いなる意志とつながるために障害となっているものは？", answer: "" },
    { question: "無限である大いなる意志と統合するには何が必要ですか？", answer: "" },
    { question: "光の柱として生きるためにこれから何をしますか？", answer: "" }
  ]
}
];

// FAQs data
const faqsData = [
{
  question: "GREAT HERO'S JOURNEYの上映会はどのように行われますか？",
  answer: "GREAT HERO'S JOURNEYの上映会では、音楽と映像、そして生のナレーションを組み合わせ、参加者の魂に眠る記憶を呼び覚ます体験を提供します。通常の映画鑑賞とは異なり、より体験型・参加型のイベントとなっています。"
},
{
  question: "銀河ファミリーとは具体的に何ですか？",
  answer: "銀河ファミリーとは、私たち地球人を含む宇宙の様々な存在たちのことです。シリウス、プレアデス、オリオンなど、それぞれの種族はそれぞれの特性を持っており、私たちのDNAには様々な星の特性が組み込まれています。"
},
{
  question: "このワークショップでは何が体験できますか？",
  answer: "このワークショップでは、上映会のシナリオ解説、銀河ファミリーマッピング、天津金木リーディング、統合ワーク、そして光の柱を立てる誘導瞑想などを体験できます。音楽とともに内側から宇宙を旅する時間を味わえます。"
},
{
  question: "初めてでも参加できますか？",
  answer: "はい、初めての方も大歓迎です！「GREAT HERO'S JOURNEYってなあに？」という説明から始まり、参加型のワークショップを通して体験していただけます。上映会を観ていない方、宇宙や古神道に詳しくない方も安心してご参加いただけます。"
},
{
  question: "天津金木とは何ですか？",
  answer: "天津金木（あまつかなぎ）は、古神道に伝わる秘儀の一つで「持ち歩く神社」とも言われる神具です。宇宙の四大源力（天・火・水・地）に基づいて、現在のあなたの在り方が宇宙創造の法則に則っているかを示します。"
}
];

// Main component
const GHJPresentation: React.FC = () => {
// State management
const [currentSlide, setCurrentSlide] = useState(0);
const [worksheetMode, setWorksheetMode] = useState(false);
const [worksheetIndex, setWorksheetIndex] = useState(0);
const [galaxyFamilyDetailMode, setGalaxyFamilyDetailMode] = useState(false);
const [selectedGalaxyFamily, setSelectedGalaxyFamily] = useState<GalaxyFamily | null>(null);
const [amatsuKanagiDetailMode, setAmatsuKanagiDetailMode] = useState(false);
const [userWorksheet, setUserWorksheet] = useState<WorksheetItem[][]>(
  worksheetData.map(section => section.items.map(item => ({ ...item })))
);
const [mobileNavOpen, setMobileNavOpen] = useState(false);
const [feedbackFormData, setFeedbackFormData] = useState<FeedbackFormData>({
  name: '',
  email: '',
  participationType: 'venue',
  message: ''
});
const [formSubmitted, setFormSubmitted] = useState(false);
const [formSubmitting, setFormSubmitting] = useState(false);

// Refs
const contentRef = useRef<HTMLDivElement>(null);

// Event handlers
const handleWorksheetChange = useCallback((sectionIndex: number, itemIndex: number, value: string) => {
  setUserWorksheet(prev => {
    const newWorksheet = [...prev];
    newWorksheet[sectionIndex][itemIndex].answer = value;
    return newWorksheet;
  });
}, []);

const toggleWorksheetMode = useCallback(() => {
  setWorksheetMode(!worksheetMode);
}, [worksheetMode]);

const showGalaxyFamilyDetail = useCallback((family: GalaxyFamily) => {
  setSelectedGalaxyFamily(family);
  setGalaxyFamilyDetailMode(true);
}, []);

const closeGalaxyFamilyDetail = useCallback(() => {
  setGalaxyFamilyDetailMode(false);
  setSelectedGalaxyFamily(null);
}, []);

const toggleAmatsuKanagiDetail = useCallback(() => {
  setAmatsuKanagiDetailMode(!amatsuKanagiDetailMode);
}, [amatsuKanagiDetailMode]);

const handleFeedbackInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setFeedbackFormData(prev => ({
    ...prev,
    [name]: value
  }));
}, []);

const handleFeedbackSubmit = useCallback((e: React.FormEvent) => {
  e.preventDefault();
  setFormSubmitting(true);
  
  // Simulate form submission
  setTimeout(() => {
    setFormSubmitting(false);
    setFormSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFeedbackFormData({
        name: '',
        email: '',
        participationType: 'venue',
        message: ''
      });
    }, 5000);
  }, 1500);
}, []);

// Navigation
const goToSlide = useCallback((index: number) => {
  if (index >= 0 && index < slides.length) {
    setCurrentSlide(index);
    
    // Scroll to top when changing slides
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }
}, []);

const nextSlide = useCallback(() => {
  if (currentSlide < slides.length - 1) {
    goToSlide(currentSlide + 1);
  }
}, [currentSlide, goToSlide]);

const prevSlide = useCallback(() => {
  if (currentSlide > 0) {
    goToSlide(currentSlide - 1);
  }
}, [currentSlide, goToSlide]);

// Keyboard navigation
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [nextSlide, prevSlide]);

// Slides definition
const slides = [
  // Slide 1: Title
  {
    title: "『光の柱を立てる』",
    subtitle: "魂の解放を促すワークショップ",
    content: (
      <div className="flex flex-col h-full items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">
          『光の柱を立てる』
        </h1>
        <h2 className="text-3xl mb-8 text-rose-400">
          魂の解放を促すワークショップ
        </h2>
        <div className="mb-10 relative">
          <div className="relative w-64 h-64 mx-auto mb-6 rounded-full shadow-xl overflow-hidden">
            <img 
              src="https://drive.google.com/uc?export=view&id=1I9bmdhN4mYO4c5XoAaNr3iIfYQBw1H-l" 
              alt="GREAT HERO'S JOURNEY" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-600/50 to-transparent"></div>
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-amber-500/20 rounded-full blur-xl"></div>
          <p className="text-xl">2025年3月30日（日）in世田谷</p>
        </div>
        <p className="text-lg max-w-2xl mb-6">
          宇宙の視点から自分の光を見つけていく、参加型ワークショップ＆お話会
        </p>
        <button 
          onClick={toggleWorksheetMode}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          ワークシートを開く
        </button>
      </div>
    )
  },
  
  // Slide 2: How to use this document
  {
    title: "このドキュメントの使い方",
    subtitle: "ワークショップご案内",
    content: (
      <div className="flex flex-col h-full overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-500">
            <h2 className="text-2xl font-bold mb-6 text-amber-600">このドキュメントの使い方</h2>
            <div className="space-y-4 text-gray-700">
              <p>このドキュメントはワークショップにご参加の皆様にお送りしております。本ドキュメントにはワークショップの内容に関する補足情報を掲載しております。</p>
              <p>当日のワークでもお話しする内容ですので、お時間があればご参考にご覧ください。</p>
              <p className="text-amber-600 font-medium">『ワークシート』として感じたこと気づいたことなどを任意で入力するフォームを設けております。こちらをお送り頂くことで他の方にシェアしたい気づきなどがありましたらご利用ください。</p>
              <p>ワークや資料につきましてご質問などがございましたら、本ドキュメントのお問い合わせフォームよりお問い合わせください。</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-rose-400">
            <h2 className="text-2xl font-bold mb-6 text-rose-500">ワークショップご案内</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center text-amber-600">
                  <span className="mr-2 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  日時
                </h3>
                <div className="ml-7 text-gray-700">
                  <p>2025年3月30日（日）13時〜16時</p>
                  <p className="text-sm text-gray-500">15分前（12:45）からお入りいただけます</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center text-amber-600">
                  <span className="mr-2 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  会場
                </h3>
                <div className="ml-7 text-gray-700">
                  <p>台所たまねぎ（2階スペース）</p>
                  <p>東京都世田谷区奥沢３丁目３１−１０</p>
                  <p className="text-sm text-gray-500">東急目黒線「奥沢駅」 徒歩3分</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center text-amber-600">
                  <span className="mr-2 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  参加費
                </h3>
                <div className="ml-7 text-gray-700">
                  <p>現地参加（1ドリンク込み）：3,000円</p>
                  <p>オンラインZoom参加：1,000円</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-6 rounded-xl shadow-md text-center">
          <h3 className="text-2xl font-bold mb-4 text-amber-600">それでは、宇宙と魂の旅へご案内いたします</h3>
          <p className="text-gray-700 mb-6">これから体験する旅は、あなた自身の内側に眠る無限の可能性への目覚めの旅。新しい発見と気づきに満ちた時間になりますように。</p>
          <button 
            onClick={toggleWorksheetMode}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            ワークシートを開く
          </button>
        </div>
      </div>
    )
  },
  
  // Slide 3: Workshop Program (Integration of previous slides 3 and 8)
  {
    title: "ワークショッププログラム",
    subtitle: "3/30開催 魂の解放を目指すカリキュラム",
    content: (
      <div className="flex flex-col h-full overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6 text-amber-600">3/30開催 ワークショッププログラム</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-amber-400 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-white font-bold mr-3 shrink-0">3</div>
              <h3 className="text-xl font-bold text-amber-600">自分を見つめる天津金木リーディング</h3>
            </div>
            <ul className="space-y-2 ml-14">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>出てくる象意によって現在の意識の持ち方を見つめる</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>自分を見つめる事で課題を浮き彫りにしていく</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>理想的な生き方とは？を考える</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-rose-400 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-rose-400 flex items-center justify-center text-white font-bold mr-3 shrink-0">4</div>
              <h3 className="text-xl font-bold text-rose-500">在り方を見つめる統合ワーク</h3>
            </div>
            <ul className="space-y-2 ml-14">
              <li className="flex items-start">
                <span className="text-rose-400 mr-2">•</span>
                <span>統合とは？についての古神道的考察</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2">•</span>
                <span>統合を考えるワークシート</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2">•</span>
                <span>自分自身の在り方を見つめるワーク</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-amber-500 hover:shadow-xl transition-shadow mb-6">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold mr-3 shrink-0">5</div>
            <h3 className="text-xl font-bold text-amber-600">光の柱を立てる誘導瞑想</h3>
          </div>
          <ul className="space-y-2 ml-14">
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>現地＆Zoom参加者同時に行う瞑想</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>音楽によるヒーリング</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>大いなる愛と繋がり己を思い出す</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>大いなる意志と己の魂が一つとなりどう生きるかを考える</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4 text-amber-600">ワークショップの特徴</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-center font-semibold mb-2 text-amber-600">参加型ワーク</h4>
              <p className="text-sm text-center text-gray-600">ただ話を聞くだけでなく、様々なワークを通して自分自身と対話する機会を提供します</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-3 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-center font-semibold mb-2 text-rose-500">音楽体験</h4>
              <p className="text-sm text-center text-gray-600">書き下ろしの音楽を使用した誘導瞑想で、魂の深い部分に触れる体験を提供します</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-center font-semibold mb-2 text-amber-600">共創空間</h4>
              <p className="text-sm text-center text-gray-600">参加者同士の繋がりを大切にし、共に創り上げる場を提供します</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <button 
            onClick={toggleWorksheetMode}
            className="px-6 py-3 bg-gradient-to-r from-amber-400 to-rose-400 text-white rounded-full hover:shadow-xl transition-all transform hover:scale-105"
          >
            ワークシートを開く
          </button>
        </div>
      </div>
    )
  },
  
  // Slide 4: What is GREAT HERO'S JOURNEY? (Previously slide 2)
  {
    title: "GREAT HERO'S JOURNEYとは？",
    subtitle: "魂の解放を促す上映プロジェクト",
    content: (
      <div className="flex flex-col h-full overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6 text-amber-600">GREAT HERO'S JOURNEYとは？</h2>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow mb-6">
          <p className="mb-4">GREAT HERO'S JOURNEYは、2024年に発足した「魂の解放」を促す上映プロジェクトです。</p>
          <p className="mb-4">音楽と映像、そして生のナレーションを通し、観る人の魂に眠る記憶を起こし、使命を立ち上がらせています。</p>
          <p>超太古から伝わる根源のメッセージと、長い年月をかけて宇宙創造を営み地球のアセンションを見守る銀河の仲間たちーーシリウス、プレアデス、アンドロメダなどの叡智ーのガイドたちによって構成されています。</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-center text-amber-600">音楽</h3>
            <p className="text-sm text-center">宇宙の星々からメッセージやエネルギーを受け取り、魂に直接語りかける癒しの音楽。</p>
          </div>
          
          <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-3 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-center text-rose-500">映像</h3>
            <p className="text-sm text-center">壮大な宇宙の物語を視覚的に表現し、直感に訴える美しい映像表現。</p>
          </div>
          
          <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-center text-amber-600">ナレーション</h3>
            <p className="text-sm text-center">古神道の叡智と宇宙のメッセージを伝える、心に響く生のナレーション。</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow mb-6">
          <h3 className="text-xl font-bold mb-3 text-amber-600">GREAT HERO'S JOURNEYプロジェクトの目的</h3>
          <p className="mb-4">個々のヒーローズジャーニーの実現は、また大いなる意志のヒーローズジャーニーの実現であり、全ては一つであり愛であることを関わる全ての方々 font-bold mr-3 shrink-0">1</div>
              <h3 className="text-xl font-bold text-amber-600">GREAT HERO'S JOURNEYについて</h3>
            </div>
            <ul className="space-y-2 ml-14">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>GREAT HERO'S JOURNEYとは何か、始めた経緯の説明</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>上映会の内容について説明・質疑応答</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>これからのGHJについて・コンセプト・目的</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-rose-400 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-rose-400 flex items-center justify-center text-white font-bold mr-3 shrink-0">2</div>
              <h3 className="text-xl font-bold text-rose-500">銀河ファミリーマッピングワーク</h3>
            </div>
            <ul className="space-y-2 ml-14">
              <li className="flex items-start">
                <span className="text-rose-400 mr-2">•</span>
                <span>銀河ファミリーマッピングの説明</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2">•</span>
                <span>参加者それぞれがどの属性にあるのかを考える</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2">•</span>
                <span>それぞれの特性を見て自分にどんな癖がありどんなふうに変えていきたいか考える</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-amber-400 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-white