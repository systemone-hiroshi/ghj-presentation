import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GHJPresentation = () => {
  // 状態
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('contact');
  const [expanded, setExpanded] = useState(null);
  const [journeyStep, setJourneyStep] = useState(0);
  
  // アニメーション効果のための状態
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // スライド変更時にアニメーションをリセット
    return () => setIsVisible(false);
  }, [currentSlide]);
  
  // 銀河ファミリーデータ
  const galaxyFamilies = [
    {
      name: "シリウス",
      description: "シリウスの長老たちは、統合を目指す高度な存在たちです。彼らは地球と深い関わりを持ち、地球人の育成に大きく貢献してきました。",
      traits: ["知恵", "調和", "奉仕", "使命感", "統合力"],
    },
    {
      name: "プレアデス",
      description: "プレアデス人は感受性が高く、愛と調和を重視します。彼らは地球人との遺伝子的なつながりが深く、深い愛で見守っています。",
      traits: ["感受性", "愛", "調和", "平和", "芸術性"],
    },
    {
      name: "オリオン",
      description: "オリオンでは長い対立の歴史がありました。拡大志向と安定志向、全体主義と個人主義の葛藤が特徴です。",
      traits: ["情熱", "力強さ", "意志力", "戦略的思考", "変革力"],
    },
    {
      name: "アンドロメダ",
      description: "アンドロメダの存在たちは、精神性と技術の調和を体現しています。彼らは創造性と革新を重視します。",
      traits: ["革新性", "創造力", "技術力", "調和", "精神性"],
    },
    {
      name: "リラ",
      description: "リラはヒューマノイドの発祥地であり、拡大と発展を重視する文明です。支配的な面もありますが、宇宙文明の発展に大きく貢献しました。",
      traits: ["拡大志向", "開拓精神", "行動力", "支配力", "情熱"],
    },
    {
      name: "ゼータレティクル",
      description: "ゼータレティクル人は高度な科学技術を持ちますが、感情を抑制し集合意識となりました。現在は地球人を通じて多様性を取り戻そうとしています。",
      traits: ["分析力", "論理性", "効率性", "集合意識", "技術力"],
    }
  ];

  // 天津金木データ
  const amatsuKanagi = {
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
    ]
  };
  
  // ヒーローズジャーニー12のステップ
  const heroJourneySteps = [
    {
      name: "日常世界",
      description: "主人公が日常の世界で生活している状態。何か欠けているものや変化の必要性を感じ始めています。",
      icon: "🏠"
    },
    {
      name: "冒険への召喚",
      description: "主人公に変化や冒険への招待が訪れます。新しい可能性や挑戦への呼びかけです。",
      icon: "📜"
    },
    {
      name: "拒絶",
      description: "主人公は最初、変化への恐れから冒険を拒みます。現状維持を望む気持ちと葛藤します。",
      icon: "🚫"
    },
    {
      name: "導師との出会い",
      description: "主人公を導き、援助してくれる人物や力との出会い。知恵や勇気を得る機会です。",
      icon: "🧙"
    },
    {
      name: "第一の関門突破",
      description: "主人公が冒険を受け入れ、日常世界を離れて未知の世界へ踏み出す瞬間です。",
      icon: "🚪"
    },
    {
      name: "試練・協力者・敵対者",
      description: "新しい世界での試練や挑戦。協力者や敵対者との出会いを通じて成長します。",
      icon: "⚔️"
    },
    {
      name: "洞窟への接近",
      description: "最大の試練や恐怖の中心地へと近づきます。自己と向き合う準備をします。",
      icon: "🕳️"
    },
    {
      name: "最大の試練",
      description: "主人公が最大の恐怖や挑戦と向き合う瞬間。死と再生のプロセスを象徴します。",
      icon: "🔥"
    },
    {
      name: "報酬",
      description: "試練を乗り越えた後に得られる報酬。知恵、力、和解など、価値あるものを手に入れます。",
      icon: "🏆"
    },
    {
      name: "帰路",
      description: "変容を遂げた主人公が日常世界への帰還を決意する段階です。",
      icon: "🛤️"
    },
    {
      name: "復活",
      description: "最後の試練を乗り越え、完全に変容する瞬間。学びを統合し、真の自己へと目覚めます。",
      icon: "✨"
    },
    {
      name: "宝を持っての帰還",
      description: "変容した主人公が宝（知恵や気づき）を持って日常世界に戻り、社会に貢献します。",
      icon: "💎"
    },
  ];
  
  // モーダルを開く関数
  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };
  
  // アコーディオンの開閉を切り替える関数
  const toggleExpanded = (id) => {
    if (expanded === id) {
      setExpanded(null);
    } else {
      setExpanded(id);
    }
  };
  
  // ヒーローズジャーニーのステップを進める/戻す関数
  const navigateJourneyStep = (direction) => {
    if (direction === 'next' && journeyStep < heroJourneySteps.length - 1) {
      setJourneyStep(journeyStep + 1);
    } else if (direction === 'prev' && journeyStep > 0) {
      setJourneyStep(journeyStep - 1);
    }
  };
  
  // スライドコンテンツ
  const slides = [
    {
      title: "光の柱を立てる",
      content: (
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-orange-500">光の柱を立てる</h1>
            <h2 className="text-2xl mb-6 text-orange-400">魂の解放を促すワークショップ</h2>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 mb-6 flex items-center justify-center"
          >
            <span className="text-white text-6xl">✧</span>
          </motion.div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 1, duration: 0.8 }}
            className="space-y-2"
          >
            <p className="text-xl">Great Hero's Journey</p>
            <p className="text-lg mt-2">2025年3月30日（日）in世田谷</p>
            <p className="italic text-amber-600 mt-3">"Only Love Is REAL — 全ては一つであり愛である"</p>
          </motion.div>
        </div>
      )
    },
    {
      title: "このドキュメントの使い方",
      content: (
        <div>
          <motion.div 
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-orange-500">このドキュメントの使い方</h2>
          </motion.div>
          
          <motion.div 
            initial={{ x: -20, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white p-4 rounded-lg shadow mb-4"
          >
            <p>このドキュメントはワークショップにご参加の皆様にお送りしております。ワークショップの内容に関する補足情報や、事前にご確認いただきたい内容を掲載しています。</p>
          </motion.div>
          
          <motion.div 
            initial={{ x: 20, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-orange-50 p-4 rounded-lg"
          >
            <h3 className="font-bold mb-2 text-orange-600">ワークショップご案内</h3>
            <p>日時：2025年3月30日（日）13時〜16時</p>
            <p>会場：台所たまねぎ（2階スペース）</p>
            <p>参加費：現地参加 3,000円／オンラインZoom参加 1,000円</p>
          </motion.div>
        </div>
      )
    },
    {
      title: "Great Hero's Journeyとは？",
      content: (
        <div className="space-y-6">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-orange-500">Great Hero's Journeyとは？</h2>
            <div className="bg-white p-5 rounded-lg shadow-md mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-orange-500 to-amber-400 text-white text-2xl">
                  ✧
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orange-600">魂の解放を促す上映プロジェクト</h3>
                  <p className="text-gray-600">音楽と映像、そして生のナレーションを通し、観る人の魂に眠る記憶を起こし、使命を立ち上がらせます</p>
                </div>
              </div>
              <p className="mb-4">
                「Great Hero's Journey（グレイト・ヒーローズ・ジャーニー）」は、古神道の叡智と宇宙からのメッセージを織り交ぜながら、私たち一人ひとりが本来持っている力と可能性を目覚めさせるためのプロジェクトです。
              </p>
              <p>
                私たち自身が「ヒーロー（主人公）」となって人生という旅路を歩むことの意味と喜びを、音楽と映像、そして語りを通して体験します。
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6"
          >
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-3xl mx-auto mb-3">
                  🎵
                </div>
                <h3 className="font-bold text-orange-500 mb-2">宇宙の音楽</h3>
              </div>
              <p className="text-sm">
                宇宙の星々からのメッセージやエネルギーを音に変換し、その音楽を通して魂の眠りを覚ます癒しの音楽です。ソルフェジオ周波数を織り込み、聴く人の魂を揺さぶります。
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-3xl mx-auto mb-3">
                  🎬
                </div>
                <h3 className="font-bold text-orange-500 mb-2">壮大な映像</h3>
              </div>
              <p className="text-sm">
                宇宙創造の物語から銀河の歴史、そして私たち一人ひとりの魂の旅までを映し出す映像。視覚的な体験を通して、忘れていた記憶が蘇ります。
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-3xl mx-auto mb-3">
                  🗣️
                </div>
                <h3 className="font-bold text-orange-500 mb-2">生のナレーション</h3>
              </div>
              <p className="text-sm">
                古神道の叡智と宇宙からのメッセージを、生のナレーションでお届けします。言葉の振動が、観る人の魂に直接響きかけます。
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-4 text-orange-600">ヒーローズジャーニーの根源</h3>
            
            <div className="mb-4">
              <p className="mb-2">
                「ヒーローズジャーニー」とは、神話学者ジョセフ・キャンベルが提唱した「千の顔を持つ英雄」の旅のパターンです。世界中の神話や物語に共通する主人公の成長過程を描いています。
              </p>
            </div>
            
            <div className="relative">
              <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow cursor-pointer" onClick={() => toggleExpanded('journey')}>
                <h4 className="font-bold text-orange-600">ヒーローズジャーニーの12のステップ</h4>
                <span>{expanded === 'journey' ? '▲' : '▼'}</span>
              </div>
              
              {expanded === 'journey' && (
                <div className="bg-white p-4 rounded-b-lg shadow -mt-1 relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <button 
                      onClick={() => navigateJourneyStep('prev')}
                      className={`p-2 rounded-full ${journeyStep === 0 ? 'text-gray-300' : 'text-orange-500 hover:bg-orange-100'}`}
                      disabled={journeyStep === 0}
                    >
                      ◀
                    </button>
                    
                    <div className="flex-1 text-center">
                      <div className="text-3xl mb-1">{heroJourneySteps[journeyStep].icon}</div>
                      <h5 className="font-bold text-orange-500">{heroJourneySteps[journeyStep].name}</h5>
                    </div>
                    
                    <button 
                      onClick={() => navigateJourneyStep('next')}
                      className={`p-2 rounded-full ${journeyStep === heroJourneySteps.length - 1 ? 'text-gray-300' : 'text-orange-500 hover:bg-orange-100'}`}
                      disabled={journeyStep === heroJourneySteps.length - 1}
                    >
                      ▶
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{heroJourneySteps[journeyStep].description}</p>
                  
                  <div className="flex justify-center">
                    <div className="flex space-x-1">
                      {heroJourneySteps.map((_, index) => (
                        <div 
                          key={index}
                          className={`w-2 h-2 rounded-full ${journeyStep === index ? 'bg-orange-500' : 'bg-gray-300'}`}
                          onClick={() => setJourneyStep(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow cursor-pointer" onClick={() => toggleExpanded('ghj')}>
                <h4 className="font-bold text-orange-600">Great Hero's Journeyの特徴</h4>
                <span>{expanded === 'ghj' ? '▲' : '▼'}</span>
              </div>
              
              {expanded === 'ghj' && (
                <div className="bg-white p-4 rounded-b-lg shadow -mt-1 relative z-10">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✦</span>
                      <p><span className="font-bold">超太古の記憶：</span>古神道を通して伝わる根源のメッセージと宇宙創造の真理を伝えます</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✦</span>
                      <p><span className="font-bold">銀河ファミリー：</span>シリウス、プレアデス、アンドロメダなど、私たちを見守る宇宙の仲間たちとの繋がりを思い出します</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✦</span>
                      <p><span className="font-bold">魂の統合：</span>天と地、神と人の統合を通して、真の自己に目覚め、光の柱を立てることを支援します</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✦</span>
                      <p><span className="font-bold">実践的ワーク：</span>上映だけでなく、古神道の秘技や宇宙の叡智を活用したワークを通して、実際の人生に活かせる変容を促します</p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block bg-orange-100 px-6 py-3 rounded-full font-medium text-orange-800 border border-orange-200">
              "Only Love Is REAL — 全ては一つであり愛である"
            </div>
          </motion.div>
        </div>
      )
    },
    {
      title: "上映会の概要",
      content: (
        <div>
          <motion.div 
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-orange-500">上映会の概要</h2>
            <p className="mb-4">Great Hero's Journeyの上映会では、宇宙創造の物語から銀河の歴史、そして天の岩戸開きまでの壮大なストーリーを体験します。</p>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
          >
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold text-orange-500 mb-2">第1章：アメツチワカレ</h3>
              <p className="text-sm mb-2">無から有への創造の始まり</p>
              <ul className="text-xs space-y-1 list-disc pl-4">
                <li>無の世界と意志の発動</li>
                <li>火と水の創造</li>
                <li>高天原の形成</li>
                <li>宇宙創造の始まり</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold text-orange-500 mb-2">第2章：銀河の歴史</h3>
              <p className="text-sm mb-2">銀河ファミリーの旅</p>
              <ul className="text-xs space-y-1 list-disc pl-4">
                <li>創造の礎と黄金の泉</li>
                <li>シリウス・プレアデス・オリオン</li>
                <li>アンドロメダ・リラ・ゼータレティクル</li>
                <li>地球人類創生プロジェクト</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold text-orange-500 mb-2">第3章：天の岩戸開き</h3>
              <p className="text-sm mb-2">統合への道</p>
              <ul className="text-xs space-y-1 list-disc pl-4">
                <li>創造の礎の帰還</li>
                <li>火と水の統合</li>
                <li>神と人の統合</li>
                <li>全宇宙の統合</li>
                <li>Only Love Is REAL</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-orange-50 p-4 rounded-lg"
          >
            <h3 className="font-bold mb-2 text-orange-600">ワークショップでのシナリオ活用</h3>
            <p>上映会のシナリオを元に、ワークショップでは自分自身を振り返ります。これまでの人生を棚卸しし、これからどんな生き方をしていくのかを見つめ直します。</p>
          </motion.div>
        </div>
      )
    },
    {
      title: "3/30開催ワークショップの内容",
      content: (
        <div>
          <motion.div 
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-orange-500">3/30開催ワークショップの内容</h2>
            <div className="bg-white p-4 rounded-lg shadow mb-4">
              <h3 className="font-bold mb-2 text-orange-600">テーマ：『光の柱を立てる』</h3>
              <p>天と地が繋がることは統合であり、そこには天と地の間に光の柱が立ちます。魂の解放とは、地上で『有限』だと思い込んでいた人類が『無限』の可能性に目醒めること。</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ x: -20, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-2 gap-4 mb-4"
          >
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-orange-600">体験できること</h3>
              <ul className="space-y-1">
                <li>• 上映会のシナリオ解説</li>
                <li>• 銀河ファミリーマッピング</li>
                <li>• 天津金木リーディング</li>
                <li>• 『光の柱を立てる』誘導瞑想</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-orange-600">当日のプログラム</h3>
              <ol className="space-y-1">
                <li>1. GHJについての説明</li>
                <li>2. 銀河ファミリーマッピング</li>
                <li>3. 天津金木リーディング</li>
                <li>4. 統合ワーク</li>
                <li>5. 誘導瞑想</li>
              </ol>
            </div>
          </motion.div>
        </div>
      )
    },
    {
      title: "銀河ファミリー",
      content: (
        <div>
          <motion.div 
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-orange-500">銀河ファミリー</h2>
            <p className="mb-4">
              銀河ファミリーとは、私たち地球人を含む宇宙の様々な存在たちのことです。それぞれの種族はそれぞれの特性を持っており、私たちのDNAには様々な星の特性が組み込まれています。
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
          >
            {galaxyFamilies.map((family, index) => (
              <motion.div 
                key={family.name}
                initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => openModal(`galaxy-${family.name}`)}
              >
                <h3 className="font-bold text-orange-500 mb-2">{family.name}種族</h3>
                <p className="text-sm mb-2">{family.description.substring(0, 100)}...</p>
                <div className="flex flex-wrap gap-1">
                  {family.traits.map(trait => (
                    <span key={trait} className="px-2 py-1 text-xs bg-orange-100 rounded-full">{trait}</span>
                  ))}
                </div>
                <div className="mt-2 text-right">
                  <span className="text-xs text-orange-500">詳細を見る →</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-orange-50 p-4 rounded-lg"
          >
            <h3 className="font-bold mb-2 text-orange-600">ワークショップでのマッピング</h3>
            <p>ワークショップでは、銀河ファミリーマッピングにより、あなた自身がどの種族の特性を持っているかを探ります。自分の中の様々な特性を知ることで、より調和した生き方を見つけることができます。</p>
          </motion.div>
        </div>
      )
    },
    {
      title: "天津金木リーディング",
      content: (
        <div>
          <motion.div 
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-orange-500">天津金木リーディング</h2>
            <div className="bg-white p-4 rounded-lg shadow mb-4">
              <h3 className="font-bold mb-2 text-orange-600">天津金木とは</h3>
              <p className="mb-2">{amatsuKanagi.description}</p>
              <button 
                onClick={() => openModal('amatsu-kanagi')}
                className="text-orange-500 text-sm"
              >
                詳細を見る →
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
          >
            {amatsuKanagi.elements.map((element, index) => (
              <motion.div 
                key={element.name}
                initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                className="bg-white p-4 rounded-lg shadow"
              >
                <h3 className="font-bold text-orange-500 mb-2">{element.name}</h3>
                <p className="text-sm mb-3">{element.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-green-100 p-2 rounded">
                    <p className="text-xs font-bold text-green-700 mb-1">調和状態</p>
                    <p className="text-xs">{element.positive}</p>
                  </div>
                  <div className="bg-red-100 p-2 rounded">
                    <p className="text-xs font-bold text-red-700 mb-1">不調和状態</p>
                    <p className="text-xs">{element.negative}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-orange-50 p-4 rounded-lg"
          >
            <h3 className="font-bold mb-2 text-orange-600">ワークショップでのリーディング</h3>
            <p>ワークショップでは、天津金木を使用して現在の自分の状態を見つめるリーディングを行います。自分を見つめることで課題を浮き彫りにし、理想的な生き方を考えるきっかけとなります。</p>
          </motion.div>
        </div>
      )
    },
    {
      title: "ワークの前に考えてみましょう",
      content: (
        <div>
          <motion.div 
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-orange-500">ワークの前に考えてみましょう</h2>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white p-5 rounded-lg shadow mb-4"
          >
            <h3 className="font-bold mb-3 text-orange-600">自分自身を見つめる質問</h3>
            <div className="space-y-4">
              <div className="p-3 bg-orange-50 rounded-lg">
                <p className="font-bold mb-1">1. あなたの中にある宇宙との繋がり</p>
                <p className="text-sm mb-2">宇宙や自然と特別に繋がりを感じる瞬間はありますか？それはどのような時ですか？</p>
                <div className="border-l-4 border-orange-300 pl-3 italic text-sm">
                  例：星空を見上げた時、深い森の中で過ごす時、瞑想中、音楽を聴いている時...
                </div>
              </div>
              
              <div className="p-3 bg-orange-50 rounded-lg">
                <p className="font-bold mb-1">2. あなたの特性</p>
                <p className="text-sm mb-2">自分の中に特に強く感じる特性や性質は何ですか？</p>
                <div className="border-l-4 border-orange-300 pl-3 italic text-sm">
                  例：直感的、論理的、創造的、共感力が高い、行動力がある、瞑想的...
                </div>
              </div>
              
              <div className="p-3 bg-orange-50 rounded-lg">
                <p className="font-bold mb-1">3. 今の人生における課題</p>
                <p className="text-sm mb-2">あなたが現在直面している、または乗り越えようとしている課題は何ですか？</p>
                <div className="border-l-4 border-orange-300 pl-3 italic text-sm">
                  例：自分の使命を見つけられない、内面と外面の調和がとれない、感情に振り回される...
                </div>
              </div>
              
              <div className="p-3 bg-orange-50 rounded-lg">
                <p className="font-bold mb-1">4. 魂の喜びを感じる時</p>
                <p className="text-sm mb-2">あなたが心から喜びや充実感を感じるのはどんな時ですか？</p>
                <div className="border-l-4 border-orange-300 pl-3 italic text-sm">
                  例：他者を助けている時、創作活動をしている時、自然の中にいる時...
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-orange-50 p-4 rounded-lg"
          >
            <h3 className="font-bold mb-2 text-orange-600">ワークショップでの気づき</h3>
            <p className="mb-3">これらの質問について事前に考えておくことで、ワークショップでの体験がより深まります。必ずしも「正解」を見つける必要はなく、自分自身に問いかけるプロセスそのものが大切です。</p>
            <p>ノートに書き留めたり、静かな時間に内省してみたりしてください。もちろん、ワークショップ当日に初めて考えることになっても大丈夫です。</p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-4 bg-white p-5 rounded-lg shadow"
          >
            <h3 className="font-bold mb-3 text-orange-600">ワークショップ参加に向けて</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-orange-50 rounded-lg">
                <p className="font-bold mb-1 text-center">心の準備</p>
                <ul className="text-sm space-y-1 list-disc pl-4">
                  <li>オープンなマインドで参加する</li>
                  <li>自分を大切に扱う</li>
                  <li>先入観を手放す</li>
                </ul>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <p className="font-bold mb-1 text-center">体の準備</p>
                <ul className="text-sm space-y-1 list-disc pl-4">
                  <li>前日は十分な睡眠をとる</li>
                  <li>リラックスできる服装で参加</li>
                  <li>水分を十分に摂る</li>
                </ul>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <p className="font-bold mb-1 text-center">持ち物</p>
                <ul className="text-sm space-y-1 list-disc pl-4">
                  <li>筆記用具（任意）</li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )
    },
    {
      title: "よくある質問",
      content: (
        <div>
          <motion.div 
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-orange-500">よくある質問</h2>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4"
          >
            {[
              {
                q: "Great Hero's Journeyの上映会はどのように行われますか？",
                a: "音楽と映像、そして生のナレーションを組み合わせ、参加者の魂に眠る記憶を呼び覚ます体験型イベントです。通常の映画鑑賞とは異なり、より参加型の要素が含まれています。"
              },
              {
                q: "銀河ファミリーとは具体的に何ですか？",
                a: "銀河ファミリーとは、私たち地球人を含む宇宙の様々な存在たちのことです。シリウス、プレアデス、オリオンなど、それぞれの種族はそれぞれの特性を持っており、私たちのDNAには様々な星の特性が組み込まれています。"
              },
              {
                q: "初めてでも参加できますか？",
                a: "はい、初めての方も大歓迎です！「Great Hero's Journeyってなあに？」という説明から始まり、参加型のワークショップを通して体験していただけます。上映会を観ていない方、宇宙や古神道に詳しくない方も安心してご参加いただけます。"
              },
              {
                q: "天津金木とは何ですか？",
                a: "天津金木（あまつかなぎ）は、古神道に伝わる秘儀の一つで「持ち歩く神社」とも言われる神具です。宇宙の四大源力（天・火・水・地）に基づいて、現在のあなたの在り方が宇宙創造の法則に則っているかを示します。"
              },
              {
                q: "誘導瞑想は初めてでも大丈夫ですか？",
                a: "はい、初めての方でも大丈夫です。難しいテクニックは必要ありません。ただリラックスして、ガイド役の声に耳を傾けるだけでOKです。自分のペースで参加できますので、無理なくご体験ください。"
              },
              {
                q: "オンライン参加と現地参加の違いは何ですか？",
                a: "現地参加では会場の雰囲気を直接体感できる他、参加者同士の交流も可能です。オンライン参加では、ご自宅など快適な環境で参加でき、移動の必要がありません。どちらも同じ内容のワークを体験できるよう設計されています。"
              },
              {
                q: "ワークショップ後もサポートはありますか？",
                a: "はい、ワークショップ後もオンラインコミュニティでのつながりやフォローアップのセッションなどを予定しています。また、質問や気づきがあれば個別にお問い合わせいただくこともできます。"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                className="bg-white p-4 rounded-lg shadow"
              >
                <h3 className="font-bold mb-2 text-orange-600">Q. {item.q}</h3>
                <p>A. {item.a}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-4 bg-orange-50 p-4 rounded-lg text-center"
          >
            <p className="font-bold mb-2">さらに質問がある場合は</p>
            <button 
              onClick={() => openModal('contact')}
              className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-400 text-white rounded-lg hover:from-orange-600 hover:to-amber-500 transition-colors shadow hover:shadow-md"
            >
              お問い合わせフォームを開く
            </button>
          </motion.div>
        </div>
      )
    },
    {
      title: "お問い合わせ",
      content: (
        <div>
          <motion.div 
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-orange-500">お問い合わせ</h2>
            <div className="bg-white p-4 rounded-lg shadow mb-4">
              <h3 className="font-bold mb-2 text-orange-600">ワークショップ詳細</h3>
              <p>2025年3月30日（日）13時〜16時</p>
              <p>会場：台所たまねぎ（2階スペース）</p>
              <p>参加費：現地参加 3,000円／オンライン 1,000円</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-orange-50 p-8 rounded-lg text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-50 opacity-50"></div>
            <div className="relative z-10">
              <h3 className="font-bold mb-4 text-xl text-orange-700">Great Hero's Journey事務局</h3>
              <p className="mb-6 text-gray-700">info@greatherosjourney.jp</p>
              <button 
                onClick={() => openModal('contact')}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-400 text-white rounded-lg hover:from-orange-600 hover:to-amber-500 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300"
              >
                お問い合わせフォームを開く
              </button>
            </div>
          </motion.div>
        </div>
      )
    }
  ];
  
  // モーダル
  const Modal = () => {
    // 問い合わせフォーム
    if (modalContent === 'contact') {
      return (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg w-full max-w-md p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-orange-600">お問い合わせフォーム</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">お名前</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">メールアドレス</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">メッセージ</label>
                <textarea className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" rows={4}></textarea>
              </div>
              <button 
                type="button"
                className="w-full py-2 bg-gradient-to-r from-orange-500 to-amber-400 text-white rounded hover:from-orange-600 hover:to-amber-500 transition-colors"
                onClick={() => setShowModal(false)}
              >
                送信する
              </button>
            </form>
          </motion.div>
        </motion.div>
      );
    }
    
    // 天津金木詳細
    if (modalContent === 'amatsu-kanagi') {
      return (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-orange-600">{amatsuKanagi.title}</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-orange-600">天津金木とは</h4>
                <p className="mb-2">{amatsuKanagi.description}</p>
                <p>古神道の思想にある宇宙の四大源力になぞらえて、現在の在り方が宇宙創造の法則に則っているのかを指し示します。</p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-orange-600">四大源力について</h4>
                <div className="space-y-4">
                  {amatsuKanagi.elements.map(element => (
                    <div key={element.name} className="bg-white p-4 rounded-lg">
                      <h5 className="font-bold mb-2 text-orange-500">{element.name}</h5>
                      <p className="mb-3">{element.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-green-100 rounded-md">
                          <p className="text-sm font-bold text-green-700 mb-1">調和状態</p>
                          <p>{element.positive}</p>
                        </div>
                        <div className="p-3 bg-red-100 rounded-md">
                          <p className="text-sm font-bold text-red-700 mb-1">不調和状態</p>
                          <p>{element.negative}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-orange-600">古神道的な考え方</h4>
                <p className="mb-2">一人一人がどう意識して人生を創造していくか考える。己を見つめ。己を見出して己自身を向上する。そして、身の回りの方々と共に幸せになろうと生きていく。一人一人が『創造主』である事を体現していく。</p>
                <p>そしてどの『在り方』も全てが尊い。そこに『正解』も『間違い』もありません。『真実』も『嘘』もありません。『光』も『闇』もありません。只存在するのは『今ここ』に在るあなたです。</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      );
    }
    
    // 銀河ファミリー詳細
    if (modalContent.startsWith('galaxy-')) {
      const familyName = modalContent.split('-')[1];
      const family = galaxyFamilies.find(f => f.name === familyName);
      
      if (!family) return null;
      
      // 特定の種族に関する特徴リストを生成する関数
      const renderFamilyTraits = (name) => {
        switch (name) {
          case "シリウス":
            return (
              <>
                <li>全体の調和を重視し、統合に向けて働くことを好む</li>
                <li>知識欲が強く、真理を追求する</li>
                <li>奉仕の精神が強い</li>
                <li>長期的な視点で物事を考える</li>
                <li>他者を導くリーダーシップがある</li>
              </>
            );
          case "プレアデス":
            return (
              <>
                <li>感受性が高く、他者の感情に敏感</li>
                <li>芸術的な才能や創造性に富む</li>
                <li>平和と調和を重視する</li>
                <li>美しさや癒しに惹かれる</li>
                <li>時に感情の波に翻弄されることがある</li>
              </>
            );
          case "オリオン":
            return (
              <>
                <li>情熱的で行動力がある</li>
                <li>困難に立ち向かう強さを持つ</li>
                <li>目標達成に向けて粘り強く進む</li>
                <li>時に支配的になることがある</li>
                <li>闘争や対立の中で成長するタイプ</li>
              </>
            );
          case "アンドロメダ":
            return (
              <>
                <li>革新的なアイデアを生み出す能力</li>
                <li>精神性と実用性のバランスを重視</li>
                <li>先見性があり、未来志向</li>
                <li>柔軟に適応する能力がある</li>
                <li>時に現実から離れた考え方をすることも</li>
              </>
            );
          case "リラ":
            return (
              <>
                <li>開拓者精神があり、新しいことに挑戦する</li>
                <li>拡大と発展を重視する</li>
                <li>リーダーシップがあり、人を導く</li>
                <li>時に支配的になりがち</li>
                <li>強い目的意識と行動力がある</li>
              </>
            );
          case "ゼータレティクル":
            return (
              <>
                <li>論理的思考が得意で分析力に優れる</li>
                <li>効率と秩序を重視する</li>
                <li>科学や技術に関心がある</li>
                <li>時に感情表現が苦手なことがある</li>
                <li>集合意識や全体性を理解する力がある</li>
              </>
            );
          default:
            return <li>情報が見つかりません</li>;
        }
      };
      
      return (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-xl">
                  {family.name === "シリウス" ? "🌟" : 
                   family.name === "プレアデス" ? "💫" : 
                   family.name === "オリオン" ? "⚔️" : 
                   family.name === "アンドロメダ" ? "🌌" : 
                   family.name === "リラ" ? "🔥" : 
                   family.name === "ゼータレティクル" ? "🧠" : "✨"}
                </div>
                <h3 className="text-xl font-bold text-orange-600">{family.name}種族</h3>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-orange-600">基本情報</h4>
                <p>{family.description}</p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-orange-600">特性</h4>
                <div className="flex flex-wrap gap-2">
                  {family.traits.map(trait => (
                    <span key={trait} className="px-3 py-1 bg-orange-200 rounded-full">{trait}</span>
                  ))}
                </div>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-orange-600">あなたの中にある{family.name}の要素</h4>
                <p className="mb-2">この種族の特性が強く出ている方は、以下のような特徴が見られます：</p>
                <ul className="list-disc pl-5 space-y-1">
                  {renderFamilyTraits(family.name)}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      );
    }
    
    return null;
  };

  // ナビゲーション
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // スライド切り替えアニメーション
  const slideVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 to-yellow-100 flex flex-col">
      {/* ヘッダー */}
      <header className="bg-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-orange-500">Great Hero's Journey</h1>
          <p className="text-sm text-gray-600">光の柱を立てる</p>
        </div>
      </header>
      
      {/* メインコンテンツ */}
      <main className="flex-1 p-6 flex flex-col items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl overflow-hidden">
          {/* スライドタイトル */}
          <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white p-3 flex justify-between items-center">
            <h2 className="text-xl">{slides[currentSlide].title}</h2>
            <div className="text-sm">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
          
          {/* スライドコンテンツ */}
          <div className="p-6 overflow-y-auto max-h-[70vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideVariants}
                transition={{ duration: 0.3 }}
              >
                {slides[currentSlide].content}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* ナビゲーションボタン */}
          <div className="p-4 flex justify-between">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`px-4 py-2 rounded-lg shadow transition-all ${
                currentSlide === 0 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-orange-500 to-amber-400 text-white hover:from-orange-600 hover:to-amber-500'
              }`}
            >
              前へ
            </button>
            
            <div className="flex items-center gap-1">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index 
                    ? 'bg-orange-500 transform scale-125' 
                    : 'bg-gray-300 hover:bg-orange-300'
                  }`}
                  aria-label={`スライド ${index + 1} に移動`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`px-4 py-2 rounded-lg shadow transition-all ${
                currentSlide === slides.length - 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-orange-500 to-amber-400 text-white hover:from-orange-600 hover:to-amber-500'
              }`}
            >
              次へ
            </button>
          </div>
        </div>
      </main>
      
      {/* フッター */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-3 text-center text-sm">
        <p>© 2025 Great Hero's Journey | <span className="text-orange-300">Only Love Is REAL</span></p>
      </footer>
      
      {/* モーダル */}
      {showModal && <Modal />}
    </div>
  );
};

export default GHJPresentation;