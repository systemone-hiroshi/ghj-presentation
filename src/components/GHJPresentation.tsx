import React, { useState } from 'react';

const GHJPresentation = () => {
  // 状態
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('contact');
  
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
  
  // モーダルを開く関数
  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };
  
  // スライドコンテンツ
  const slides = [
    {
      title: "光の柱を立てる",
      content: (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-orange-500">光の柱を立てる</h1>
          <h2 className="text-2xl mb-6 text-orange-400">魂の解放を促すワークショップ</h2>
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 mb-6 flex items-center justify-center">
            <span className="text-white text-5xl">✧</span>
          </div>
          <p className="text-xl">Great Hero's Journey</p>
          <p className="mt-2">2025年3月30日（日）in世田谷</p>
        </div>
      )
    },
    {
      title: "このドキュメントの使い方",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-500">このドキュメントの使い方</h2>
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <p>このドキュメントはワークショップにご参加の皆様にお送りしております。ワークショップの内容に関する補足情報や、事前にご確認いただきたい内容を掲載しています。</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-orange-600">ワークショップご案内</h3>
            <p>日時：2025年3月30日（日）13時〜16時</p>
            <p>会場：台所たまねぎ（2階スペース）</p>
            <p>参加費：現地参加 3,000円／オンラインZoom参加 1,000円</p>
          </div>
        </div>
      )
    },
    {
      title: "Great Hero's Journeyとは？",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-500">Great Hero's Journeyとは？</h2>
          <p className="mb-4">魂の解放を促す上映プロジェクトです。音楽と映像、そして生のナレーションを通し、観る人の魂に眠る記憶を起こします。</p>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-3 rounded shadow">
              <h3 className="font-bold text-orange-500">音楽</h3>
              <p className="text-sm">宇宙の星々から受け取った癒しの音楽</p>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <h3 className="font-bold text-orange-500">映像</h3>
              <p className="text-sm">壮大な宇宙の物語を表現する映像</p>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <h3 className="font-bold text-orange-500">ナレーション</h3>
              <p className="text-sm">古神道の叡智と宇宙のメッセージ</p>
            </div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg text-center">
            <p className="font-bold italic">Only Love Is REAL — 全ては一つであり愛である</p>
          </div>
        </div>
      )
    },
    {
      title: "上映会の概要",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-500">上映会の概要</h2>
          <p className="mb-4">Great Hero's Journeyの上映会では、宇宙創造の物語から銀河の歴史、そして天の岩戸開きまでの壮大なストーリーを体験します。</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-orange-600">ワークショップでのシナリオ活用</h3>
            <p>上映会のシナリオを元に、ワークショップでは自分自身を振り返ります。これまでの人生を棚卸しし、これからどんな生き方をしていくのかを見つめ直します。</p>
          </div>
        </div>
      )
    },
    {
      title: "3/30開催ワークショップの内容",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-500">3/30開催ワークショップの内容</h2>
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <h3 className="font-bold mb-2 text-orange-600">テーマ：『光の柱を立てる』</h3>
            <p>天と地が繋がることは統合であり、そこには天と地の間に光の柱が立ちます。魂の解放とは、地上で『有限』だと思い込んでいた人類が『無限』の可能性に目醒めること。</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
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
          </div>
        </div>
      )
    },
    {
      title: "銀河ファミリー",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-500">銀河ファミリー</h2>
          <p className="mb-4">
            銀河ファミリーとは、私たち地球人を含む宇宙の様々な存在たちのことです。それぞれの種族はそれぞれの特性を持っており、私たちのDNAには様々な星の特性が組み込まれています。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {galaxyFamilies.map((family) => (
              <div key={family.name} className="bg-white p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal(`galaxy-${family.name}`)}>
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
              </div>
            ))}
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-orange-600">ワークショップでのマッピング</h3>
            <p>ワークショップでは、銀河ファミリーマッピングにより、あなた自身がどの種族の特性を持っているかを探ります。自分の中の様々な特性を知ることで、より調和した生き方を見つけることができます。</p>
          </div>
        </div>
      )
    },
    {
      title: "天津金木リーディング",
      content: (
        <div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {amatsuKanagi.elements.map((element) => (
              <div key={element.name} className="bg-white p-4 rounded-lg shadow">
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
              </div>
            ))}
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-orange-600">ワークショップでのリーディング</h3>
            <p>ワークショップでは、天津金木を使用して現在の自分の状態を見つめるリーディングを行います。自分を見つめることで課題を浮き彫りにし、理想的な生き方を考えるきっかけとなります。</p>
          </div>
        </div>
      )
    },
    {
      title: "ワークの前に考えてみましょう",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-500">ワークの前に考えてみましょう</h2>
          
          <div className="bg-white p-5 rounded-lg shadow mb-4">
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
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-orange-600">ワークショップでの気づき</h3>
            <p className="mb-3">これらの質問について事前に考えておくことで、ワークショップでの体験がより深まります。必ずしも「正解」を見つける必要はなく、自分自身に問いかけるプロセスそのものが大切です。</p>
            <p>ノートに書き留めたり、静かな時間に内省してみたりしてください。もちろん、ワークショップ当日に初めて考えることになっても大丈夫です。</p>
          </div>
          
          <div className="mt-4 bg-white p-5 rounded-lg shadow">
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
                  <li>筆記用具など(任意)</li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "よくある質問",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-500">よくある質問</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-orange-600">Q. Great Hero's Journeyの上映会はどのように行われますか？</h3>
              <p>A. 音楽と映像、そして生のナレーションを組み合わせ、参加者の魂に眠る記憶を呼び覚ます体験型イベントです。通常の映画鑑賞とは異なり、より参加型の要素が含まれています。</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-orange-600">Q. 銀河ファミリーとは具体的に何ですか？</h3>
              <p>A. 銀河ファミリーとは、私たち地球人を含む宇宙の様々な存在たちのことです。シリウス、プレアデス、オリオンなど、それぞれの種族はそれぞれの特性を持っており、私たちのDNAには様々な星の特性が組み込まれています。</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-orange-600">Q. 初めてでも参加できますか？</h3>
              <p>A. はい、初めての方も大歓迎です！「Great Hero's Journeyってなあに？」という説明から始まり、参加型のワークショップを通して体験していただけます。上映会を観ていない方、宇宙や古神道に詳しくない方も安心してご参加いただけます。</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-orange-600">Q. 天津金木とは何ですか？</h3>
              <p>A. 天津金木（あまつかなぎ）は、古神道に伝わる秘儀の一つで「持ち歩く神社」とも言われる神具です。宇宙の四大源力（天・火・水・地）に基づいて、現在のあなたの在り方が宇宙創造の法則に則っているかを示します。</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-orange-600">Q. 誘導瞑想は初めてでも大丈夫ですか？</h3>
              <p>A. はい、初めての方でも大丈夫です。難しいテクニックは必要ありません。ただリラックスして、ガイド役の声に耳を傾けるだけでOKです。自分のペースで参加できますので、無理なくご体験ください。</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-orange-600">Q. オンライン参加と現地参加の違いは何ですか？</h3>
              <p>A. 現地参加では会場の雰囲気を直接体感できる他、参加者同士の交流も可能です。オンライン参加では、ご自宅など快適な環境で参加でき、移動の必要がありません。どちらも同じ内容のワークを体験できるよう設計されています。</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-orange-600">Q. ワークショップ後もサポートはありますか？</h3>
              <p>A. はい、ワークショップ後もオンラインコミュニティでのつながりやフォローアップのセッションなどを予定しています。また、質問や気づきがあれば個別にお問い合わせいただくこともできます。</p>
            </div>
          </div>
          
          <div className="mt-4 bg-orange-50 p-4 rounded-lg text-center">
            <p className="font-bold mb-2">さらに質問がある場合は</p>
            <button 
              onClick={() => openModal('contact')}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              お問い合わせフォームを開く
            </button>
          </div>
        </div>
      )
    },
    {
      title: "お問い合わせ",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-500">お問い合わせ</h2>
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <h3 className="font-bold mb-2 text-orange-600">ワークショップ詳細</h3>
            <p>2025年3月30日（日）13時〜16時</p>
            <p>会場：台所たまねぎ（2階スペース）</p>
            <p>参加費：現地参加 3,000円／オンライン 1,000円</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg text-center">
            <p className="font-bold mb-2">Great Hero's Journey事務局</p>
            <p>info@greatherosjourney.jp</p>
            <button 
              onClick={() => openModal('contact')}
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              お問い合わせフォームを開く
            </button>
          </div>
        </div>
      )
    }
  ];
  
  // モーダル
  const Modal = () => {
    // 問い合わせフォーム
    if (modalContent === 'contact') {
      return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">お問い合わせフォーム</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">お名前</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">メールアドレス</label>
                <input type="email" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">メッセージ</label>
                <textarea className="w-full p-2 border rounded" rows={4}></textarea>
              </div>
              <button 
                type="button"
                className="w-full py-2 bg-orange-500 text-white rounded"
                onClick={() => setShowModal(false)}
              >
                送信する
              </button>
            </form>
          </div>
        </div>
      );
    }
    
    // 天津金木詳細
    if (modalContent === 'amatsu-kanagi') {
      return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{amatsuKanagi.title}</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500"
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
                      <h5 className="font-bold mb-2">{element.name}</h5>
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
          </div>
        </div>
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
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{family.name}種族</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500"
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
          </div>
        </div>
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

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 to-yellow-100 flex flex-col">
      {/* ヘッダー */}
      <header className="bg-white shadow p-4">
        <h1 className="text-xl font-bold text-orange-500">Great Hero's Journey</h1>
      </header>
      
      {/* メインコンテンツ */}
      <main className="flex-1 p-6 flex flex-col items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl">
          {/* スライドタイトル */}
          <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white p-3 rounded-t-lg">
            <h2 className="text-xl">{slides[currentSlide].title}</h2>
          </div>
          
          {/* スライドコンテンツ */}
          <div className="p-6">
            {slides[currentSlide].content}
          </div>
          
          {/* ナビゲーションボタン */}
          <div className="p-4 flex justify-between">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`px-4 py-2 rounded ${
                currentSlide === 0 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-orange-500 text-white'
              }`}
            >
              前へ
            </button>
            <div className="text-gray-500">
              {currentSlide + 1} / {slides.length}
            </div>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`px-4 py-2 rounded ${
                currentSlide === slides.length - 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-orange-500 text-white'
              }`}
            >
              次へ
            </button>
          </div>
        </div>
      </main>
      
      {/* フッター */}
      <footer className="bg-white shadow p-3 text-center text-sm text-gray-500">
        <p>© 2025 Great Hero's Journey</p>
      </footer>
      
      {/* モーダル */}
      {showModal && <Modal />}
    </div>
  );
};

export default GHJPresentation;