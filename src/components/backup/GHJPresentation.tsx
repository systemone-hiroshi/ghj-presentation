import React, { useState, useEffect, useCallback } from 'react';

// 型定義
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

// 銀河ファミリーデータ
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

// 天津金木データ
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

// ワークシートデータ
const worksheetData = [
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

// GHJPresentationコンポーネント
const GHJPresentation: React.FC = () => {
  // State管理
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

  // イベントハンドラ
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

  // ナビゲーション
  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  }, []);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  // キーボードナビゲーション
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

  // スライド定義
  const slides = [
    // スライド1: タイトル
    {
      title: "グレイトヒーローズジャーニー",
      subtitle: "魂の解放を促すワークショップ",
      content: (
        <div className="flex flex-col h-full items-center justify-center text-center">
          <h1 className="text-5xl font-bold mb-4 text-[#ff7e5f]">
            グレイトヒーローズジャーニー
          </h1>
          <h2 className="text-3xl mb-8 text-[#feb47b]">
            魂の解放を促すワークショップ
          </h2>
          <div className="mb-10">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#ff7e5f] to-[#feb47b] shadow-lg mb-4"></div>
            <p className="text-xl">2025年3月30日（日）in世田谷</p>
          </div>
          <p className="text-lg max-w-2xl">
            宇宙の視点から自分の光を見つけていく、参加型ワークショップ＆お話会
          </p>
        </div>
      )
    },
    
    // スライド2: GHJとは？
    {
      title: "GHJとは？",
      subtitle: "魂の解放を促す上映プロジェクト",
      content: (
        <div className="flex flex-col h-full overflow-y-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#ff7e5f]">グレイトヒーローズジャーニーとは？</h2>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-6">
            <p className="mb-4">グレイトヒーローズジャーニーは、2024年に発足した「魂の解放」を促す上映プロジェクトです。</p>
            <p className="mb-4">音楽と映像、そして生のナレーションを通し、観る人の魂に眠る記憶を起こし、使命を立ち上がらせています。</p>
            <p>超太古から伝わる根源のメッセージと、長い年月をかけて宇宙創造を営み地球のアセンションを見守る銀河の仲間たちーーシリウス、プレアデス、アンドロメダなどの叡智ーのガイドたちによって構成されています。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-[#feb47b]">音楽</h3>
              <p className="text-sm">宇宙の星々からメッセージやエネルギーを受け取り、魂に直接語りかける癒しの音楽。</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-[#feb47b]">映像</h3>
              <p className="text-sm">壮大な宇宙の物語を視覚的に表現し、直感に訴える美しい映像表現。</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-[#feb47b]">ナレーション</h3>
              <p className="text-sm">古神道の叡智と宇宙のメッセージを伝える、心に響く生のナレーション。</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-[#feb47b]">GHJプロジェクトの目的</h3>
            <p className="mb-4">個々のヒーローズジャーニーの実現は、また大いなる意志のヒーローズジャーニーの実現であり、全ては一つであり愛であることを関わる全ての方々と表現し、実現させるというのがこのプロジェクトの目的です。</p>
            <div className="p-3 bg-[#fff9f5] rounded-lg">
              <p className="text-center font-bold italic">Only Love Is REAL — 全ては一つであり愛である</p>
            </div>
          </div>
        </div>
      )
    },
    
    // スライド3: 今日のワークショップについて
    {
      title: "今日のワークショップ",
      subtitle: "『光の柱を立てる』",
      content: (
        <div className="flex flex-col h-full overflow-y-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#ff7e5f]">今日のワークショップ</h2>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-6">
            <h3 className="text-xl font-bold mb-3 text-[#feb47b]">テーマ：『光の柱を立てる』</h3>
            <p className="mb-4">天と地が繋がることは統合であり、神と人が繋がることもまた統合です。それはまさに己自身が創造主であると目覚めることでもあり、そこには天と地の間に光の柱が立つと言えます。</p>
            <p>魂の解放とは、地上で『有限』だと思い込んでいた人類が天と繋がることで『無限』の可能性があることに目醒める、ということ。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-[#feb47b]">体験できること</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#ff7e5f] mr-2">•</span>
                  <span>上映会のシナリオ解説</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff7e5f] mr-2">•</span>
                  <span>銀河ファミリーとしてのルーツを探るマッピング</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff7e5f] mr-2">•</span>
                  <span>古神道秘儀【天津金木】を使ったリーディング</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff7e5f] mr-2">•</span>
                  <span>『光の柱を立てる』ことをテーマにした誘導瞑想</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-[#feb47b]">キーワード</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#ffbe76]/30 rounded-full text-sm">愛とは？</span>
                <span className="px-3 py-1 bg-[#ffbe76]/30 rounded-full text-sm">銀河ファミリー</span>
                <span className="px-3 py-1 bg-[#ffbe76]/30 rounded-full text-sm">無から有</span>
                <span className="px-3 py-1 bg-[#ffbe76]/30 rounded-full text-sm">ヒーローズとは</span>
                <span className="px-3 py-1 bg-[#ffbe76]/30 rounded-full text-sm">創造のエネルギー</span>
                <span className="px-3 py-1 bg-[#ffbe76]/30 rounded-full text-sm">天岩戸開き</span>
                <span className="px-3 py-1 bg-[#ffbe76]/30 rounded-full text-sm">自分のルーツ</span>
                <span className="px-3 py-1 bg-[#ffbe76]/30 rounded-full text-sm">魂の歓び</span>
                <span className="px-3 py-1 bg-[#ffbe76]/30 rounded-full text-sm">統合</span>
              </div>
            </div>
          </div>
          
          <div className="bg-[#fff9f5] p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2 text-[#ff7e5f]">今日の流れ</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#feb47b] flex items-center justify-center text-white font-bold mr-3">1</div>
                <span>GHJについての説明・上映会の内容について</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#feb47b] flex items-center justify-center text-white font-bold mr-3">2</div>
                <span>銀河ファミリーマッピングワーク</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#feb47b] flex items-center justify-center text-white font-bold mr-3">3</div>
                <span>天津金木リーディング</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#feb47b] flex items-center justify-center text-white font-bold mr-3">4</div>
                <span>在り方を見つめる統合ワーク</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#feb47b] flex items-center justify-center text-white font-bold mr-3">5</div>
                <span>『光の柱を立てる』誘導瞑想</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // スライド4: シナリオ解説
    {
      title: "シナリオ解説",
      subtitle: "GHJ上映会の内容",
      content: (
        <div className="flex flex-col h-full overflow-y-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#ff7e5f]">シナリオ解説</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="md:col-span-3 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">GHJ上映会の3つの章</h3>
              <p className="mb-4">グレイトヒーローズジャーニーの上映会では、宇宙創造の物語から銀河の歴史、そして天の岩戸開きまでの壮大なストーリーを体験します。</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-[#feb47b]">第1章：アメツチワカレ</h3>
              <p className="text-sm mb-2">無から有への創造の始まり</p>
              <ul className="text-xs space-y-1 pl-4 list-disc">
                <li>無の世界と意志の発動</li>
                <li>火と水の創造</li>
                <li>高天原の形成</li>
                <li>宇宙創造の始まり</li>
                <li>天の岩戸隠れ</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-[#feb47b]">第2章：銀河の歴史</h3>
              <p className="text-sm mb-2">銀河ファミリーの旅</p>
              <ul className="text-xs space-y-1 pl-4 list-disc">
                <li>創造の礎と黄金の泉</li>
                <li>シリウス・プレアデス・オリオン</li>
                <li>アンドロメダ・リラ・ゼータレティクル</li>
                <li>地球人類創生プロジェクト</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-[#feb47b]">第3章：天の岩戸開き</h3>
              <p className="text-sm mb-2">統合への道</p>
              <ul className="text-xs space-y-1 pl-4 list-disc">
                <li>創造の礎の帰還</li>
                <li>火と水の統合</li>
                <li>神と人の統合</li>
                <li>全宇宙の統合</li>
                <li>Only Love Is REAL</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-[#feb47b]">今日のワークショップでのシナリオ活用</h3>
            <p className="mb-4">上映会のシナリオを元に、今日のワークショップでは自分自身を振り返ります。これまでの幸せな時や辛い時、山あり谷あり乗り越えてきた人生を振り返り、棚卸ししてみましょう！</p>
            <p>そして、これからどんな生き方をしていくのかを見つめ直してみましょう。</p>
          </div>
        </div>
      )
    },
    
    // スライド5: よくある質問
    {
      title: "よくある質問",
      subtitle: "GHJについてのQ&A",
      content: (
        <div className="flex flex-col h-full overflow-y-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#ff7e5f]">よくある質問</h2>
          <div className="space-y-4">
            {[
              {
                question: "GHJの上映会はどのように行われますか？",
                answer: "GHJの上映会では、音楽と映像、そして生のナレーションを組み合わせ、参加者の魂に眠る記憶を呼び覚ます体験を提供します。通常の映画鑑賞とは異なり、より体験型・参加型のイベントとなっています。"
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
                answer: "はい、初めての方も大歓迎です！「グレイトヒーローズジャーニーってなあに？」という説明から始まり、参加型のワークショップを通して体験していただけます。上映会を観ていない方、宇宙や古神道に詳しくない方も安心してご参加いただけます。"
              },
              {
                question: "天津金木とは何ですか？",
                answer: "天津金木（あまつかなぎ）は、古神道に伝わる秘儀の一つで「持ち歩く神社」とも言われる神具です。宇宙の四大源力（天・火・水・地）に基づいて、現在のあなたの在り方が宇宙創造の法則に則っているかを示します。"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold text-[#4a3933]">{item.question}</h3>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    
    // スライド6: 銀河ファミリー
    {
      title: "銀河ファミリー",
      subtitle: "宇宙の仲間たちの特性",
      content: (
        <div className="flex flex-col h-full overflow-y-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#ff7e5f]">銀河ファミリー</h2>
          <p className="mb-6">
            銀河ファミリーとは、私たち地球人を含む宇宙の様々な存在たちのことです。それぞれの種族はそれぞれの特性を持っており、私たちのDNAには様々な星の特性が組み込まれています。ワークショップでは、自分がどの種族の特性を持っているかを探るマッピングを行います。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {galaxyFamiliesData.map((family, index) => (
              <div 
                key={family.name}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => showGalaxyFamilyDetail(family)}
              >
                <h3 className="text-lg font-bold mb-2 text-[#feb47b]">{family.name}</h3>
                <p className="text-sm mb-2">{family.description.slice(0, 100)}...</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {family.traits.slice(0, 3).map(trait => (
                    <span key={trait} className="px-2 py-1 text-xs bg-[#ffbe76]/30 rounded-full">
                      {trait}
                    </span>
                  ))}
                  {family.traits.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-[#ffbe76]/30 rounded-full">
                      +{family.traits.length - 3}
                    </span>
                  )}
                </div>
                <div className="mt-3 text-right">
                  <span className="text-xs text-[#ff7e5f]">詳細を見る →</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-[#feb47b]">ワークショップでのマッピングについて</h3>
            <p className="mb-4">ワークショップでは、それぞれの銀河ファミリーの特性を詳しく解説し、自分がどの種族の特性を持っているかを探っていきます。</p>
            <p className="mb-4">人はそれぞれ複数の種族の特性を持っており、その組み合わせがユニークな個性となっています。自分の中のさまざまな特性を知ることで、自分の強みや課題に気づき、より調和した生き方を見つけることができます。</p>
            <p>ワークショップでは、直感的なエクササイズやチェックリストを使って、自分の中の銀河種族の特性を探ります。興味が湧いた方は、ワークシートを開いて事前に考えてみてください。</p>
          </div>
          
          <div className="mt-6 flex justify-center">
            <button 
              onClick={toggleWorksheetMode}
              className="px-6 py-3 bg-[#feb47b] text-white rounded-full hover:bg-[#ff7e5f] transition-colors shadow-md"
            >
              ワークシートを開く
            </button>
          </div>
        </div>
      )
    },
    
    // スライド7: 天津金木リーディング
    {
      title: "天津金木リーディング",
      subtitle: "古神道に伝わる秘儀",
      content: (
        <div className="flex flex-col h-full overflow-y-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#ff7e5f]">天津金木リーディング</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-[#feb47b]">天津金木（あまつかなぎ）とは</h3>
            <p className="mb-2">{amatsuKanagiData.description}</p>
            <p className="mb-2">古神道の思想にある宇宙の四大源力になぞらえて、現在の在り方が宇宙創造の法則に則っているのかを指し示します。</p>
            <button 
              onClick={toggleAmatsuKanagiDetail}
              className="mt-2 px-4 py-2 bg-[#ffbe76]/30 hover:bg-[#ffbe76]/50 rounded-lg transition-colors text-sm"
            >
              詳細を見る
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {amatsuKanagiData.elements.map((element, index) => (
              <div 
                key={element.name}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold mb-2 text-[#feb47b]">{element.name}</h3>
                <p className="text-sm mb-3">{element.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-green-100 p-2 rounded-md">
                    <h4 className="text-xs font-bold text-green-700 mb-1">調和状態</h4>
                    <p className="text-xs">{element.positive}</p>
                  </div>
                  <div className="bg-red-100 p-2 rounded-md">
                    <h4 className="text-xs font-bold text-red-700 mb-1">不調和状態</h4>
                    <p className="text-xs">{element.negative}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-[#feb47b]">ワークショップでのリーディングについて</h3>
            <p className="mb-4">ワークショップでは、天津金木を使用した現在の自分の状態を見つめるリーディングを行います。このリーディングにより、現在のあなたが宇宙の法則にどう調和しているかを知ることができます。</p>
            <p>自分を見つめることで課題を浮き彫りにし、理想的な生き方を考えるきっかけとなります。天と地をつなぐ「光の柱」を立てるためには、まず現在の自分の状態を知ることが大切です。</p>
          </div>
          
          <div className="mt-6 flex justify-center">
            <button 
              onClick={toggleWorksheetMode}
              className="px-6 py-3 bg-[#feb47b] text-white rounded-full hover:bg-[#ff7e5f] transition-colors shadow-md"
            >
              ワークシートを開く
            </button>
          </div>
        </div>
      )
    },
    
    // スライド8: ワークショッププログラム
    {
      title: "ワークショッププログラム",
      subtitle: "魂の解放を目指すカリキュラム",
      content: (
        <div className="flex flex-col h-full overflow-y-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#ff7e5f]">本日のワークショッププログラム</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">1. GHJについて</h3>
              <p className="mb-2">・GHJとは何か、始めた経緯の説明</p>
              <p className="mb-2">・上映会の内容について説明・質疑応答</p>
              <p>・これからのGHJについて・コンセプト・目的</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">2. 銀河ファミリーマッピングワーク</h3>
              <p className="mb-2">・銀河ファミリーマッピングの説明</p>
              <p className="mb-2">・参加者それぞれがどの属性にあるのかを考える</p>
              <p>・それぞれの特性を見て自分にどんな癖がありどんなふうに変えていきたいか考える</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">3. 自分を見つめる天津金木リーディング</h3>
              <p className="mb-2">・出てくる象意によって現在の意識の持ち方を見つめる</p>
              <p className="mb-2">・自分を見つめる事で課題を浮き彫りにしていく</p>
              <p>・理想的な生き方とは？を考える</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">4. 在り方を見つめる統合ワーク</h3>
              <p className="mb-2">・統合とは？についての古神道的考察</p>
              <p className="mb-2">・統合を考えるワークシート</p>
              <p>・自分自身の在り方を見つめるワーク</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-[#feb47b]">5. 光の柱を立てる誘導瞑想</h3>
            <p className="mb-2">・現地＆Zoom参加者同時に行う瞑想</p>
            <p className="mb-2">・音楽によるヒーリング</p>
            <p className="mb-2">・大いなる愛と繋がり己を思い出す</p>
            <p>・大いなる意志と己の魂が一つとなりどう生きるかを考える</p>
          </div>
          <div className="mt-6 flex justify-center">
            <button 
              onClick={toggleWorksheetMode}
              className="px-6 py-3 bg-[#feb47b] text-white rounded-full hover:bg-[#ff7e5f] transition-colors shadow-md"
            >
              ワークシートを開く
            </button>
          </div>
        </div>
      )
    },
    
    // スライド9: これからのGHJ
    {
      title: "これからのGHJ",
      subtitle: "ビジョンと展望",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold mb-6 text-[#ff7e5f]">これからのGHJ</h2>
          <div className="flex flex-col md:flex-row gap-6 flex-1">
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">私たちのビジョン</h3>
              <p className="mb-4">個々のヒーローズジャーニーの実現は、また大いなる意志のヒーローズジャーニーの実現であり、全ては一つであり愛であることを関わる全ての方々と表現し、実現させることがこのプロジェクトの目的です。</p>
              <p className="mb-4">誰もが人生そのものと言える輝かしいヒーローズジャーニーを歩んでいます。どんな人にも約束されている輝かしいヒーローズジャーニーを実現することが出来るのです。</p>
              <p>私たちはそのことを大切な方々に伝え、みんなと輝かしい人生を共有することで輝かしい世界を創造できると考えています。</p>
            </div>
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">今後の展開</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="hover:text-[#ff7e5f] transition-colors">定期的な上映会の開催</li>
                <li className="hover:text-[#ff7e5f] transition-colors">ワークショップの全国展開</li>
                <li className="hover:text-[#ff7e5f] transition-colors">オンラインコミュニティの形成</li>
                <li className="hover:text-[#ff7e5f] transition-colors">オラクルカードの作成</li>
                <li className="hover:text-[#ff7e5f] transition-colors">銀河ファミリーマッピングの深化</li>
                <li className="hover:text-[#ff7e5f] transition-colors">ヒーリング音楽の制作・配信</li>
                <li className="hover:text-[#ff7e5f] transition-colors">個人の魂の開放をサポートする活動</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 rounded-lg text-center bg-[#ffbe76]/40 hover:bg-[#ffbe76]/60 transition-all">
            <p className="font-bold">Only Love Is REAL ―― 全ては一つであり愛である</p>
          </div>
        </div>
      )
    },
    
    // スライド10: お問い合わせ
    {
      title: "お問い合わせ",
      subtitle: "ワークショップ参加申し込み",
      content: (
        <div className="flex flex-col h-full overflow-y-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#ff7e5f]">お問い合わせ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#feb47b]">ワークショップ詳細</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#4a3933] mb-1">日時</h4>
                  <p>2025年3月30日（日）13時〜16時</p>
                  <p className="text-sm text-gray-600">15分前（12:45）からお入りいただけます</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#4a3933] mb-1">会場</h4>
                  <p>台所たまねぎ（2階スペース）</p>
                  <p className="text-sm text-gray-600">東京都世田谷区奥沢３丁目３１−１０</p>
                  <p className="text-sm text-gray-600">東急目黒線「奥沢駅」 徒歩3分</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#4a3933] mb-1">参加費</h4>
                  <p>現地参加（1ドリンク込み）：3,000円</p>
                  <p>オンラインZoom参加：1,000円</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#4a3933] mb-1">お申し込み方法</h4>
                  <p>下記フォームまたはメールにてお申し込みください</p>
                  <p className="text-sm text-gray-600">定員：会場10名／オンライン20名</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#feb47b]">お問い合わせフォーム</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">お名前 <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7e5f]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">メールアドレス <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7e5f]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="participationType" className="block text-sm font-medium mb-1">参加タイプ</label>
                  <select
                    id="participationType"
                    name="participationType"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7e5f]"
                  >
                    <option value="venue">会場参加</option>
                    <option value="online">オンライン参加</option>
                    <option value="inquiry">お問い合わせのみ</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">メッセージ</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7e5f]"
                    placeholder="ご質問や参加希望の日時などをご記入ください"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-[#ff7e5f] text-white rounded-md hover:bg-[#ff7e5f]/80 transition-colors"
                >
                  送信する
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-6 p-5 bg-[#fff9f5] rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold mb-2 text-[#ff7e5f]">お問い合わせ先</h3>
            <p className="mb-1">グレイトヒーローズジャーニー事務局</p>
            <p>info@greatherosjourney.jp</p>
          </div>
        </div>
      )
    }
  ];

  // ワークシートコンポーネント
  const WorksheetComponent = () => {
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6">
          <div className="flex justify-between items-center mb-6 sticky top-0 bg-white py-2 border-b border-[#ffbe76]/30">
            <h2 className="text-2xl font-bold text-[#ff7e5f]">ワークシート: {worksheetData[worksheetIndex].title}</h2>
            <div className="flex space-x-2">
              {worksheetData.map((section, idx) => (
                <button
                  key={idx}
                  onClick={() => setWorksheetIndex(idx)}
                  className={`px-3 py-1 rounded-full text-sm ${worksheetIndex === idx ? 'bg-[#ff7e5f] text-white' : 'bg-[#ffbe76]/30 hover:bg-[#ffbe76]/50'}`}
                >
                  {idx + 1}
                </button>
              ))}
              <button 
                onClick={toggleWorksheetMode}
                className="ml-4 bg-[#4a3933] text-white px-3 py-1 rounded-full hover:bg-[#4a3933]/80"
              >
                閉じる
              </button>
            </div>
          </div>
          
          <div className="space-y-6 pb-20">
            {userWorksheet[worksheetIndex].map((item, idx) => (
              <div key={idx} className="bg-[#fff9f5] p-4 rounded-lg">
                <h3 className="font-bold mb-2 text-[#4a3933]">{item.question}</h3>
                <textarea
                  value={item.answer}
                  onChange={(e) => handleWorksheetChange(worksheetIndex, idx, e.target.value)}
                  className="w-full p-3 border border-[#ffbe76]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7e5f] min-h-[100px]"
                  placeholder="ここに記入してください..."
                />
              </div>
            ))}
          </div>
          
          <div className="sticky bottom-0 mt-8 py-4 bg-white border-t flex justify-between">
            <button
              onClick={() => worksheetIndex > 0 && setWorksheetIndex(worksheetIndex - 1)}
              className={`px-4 py-2 rounded-lg ${worksheetIndex > 0 ? 'bg-[#feb47b] text-white hover:bg-[#ff7e5f]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              disabled={worksheetIndex === 0}
            >
              前のセクション
            </button>
            <button
              onClick={() => worksheetIndex < worksheetData.length - 1 && setWorksheetIndex(worksheetIndex + 1)}
              className={`px-4 py-2 rounded-lg ${worksheetIndex < worksheetData.length - 1 ? 'bg-[#feb47b] text-white hover:bg-[#ff7e5f]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              disabled={worksheetIndex === worksheetData.length - 1}
            >
              次のセクション
            </button>
          </div>
        </div>
      </div>
    );
  };

  // 銀河ファミリー詳細モーダル
  const GalaxyFamilyDetailModal = () => {
    if (!selectedGalaxyFamily) return null;

    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6">
          <div className="flex justify-between items-center mb-6 sticky top-0 bg-white py-2 border-b border-[#ffbe76]/30 z-10">
            <h2 className="text-2xl font-bold text-[#ff7e5f]">{selectedGalaxyFamily.name}種族</h2>
            <button 
              onClick={closeGalaxyFamilyDetail}
              className="bg-[#4a3933] text-white px-3 py-1 rounded-full hover:bg-[#4a3933]/80"
            >
              閉じる
            </button>
          </div>
          
          <div className="space-y-6 pb-20">
            <div className="bg-[#fff9f5] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">基本情報</h3>
              <p className="mb-4">{selectedGalaxyFamily.description}</p>
              
              <h3 className="text-lg font-bold mb-2 text-[#feb47b]">特性</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedGalaxyFamily.traits.map(trait => (
                  <span key={trait} className="px-3 py-1 bg-[#ffbe76]/30 rounded-full">
                    {trait}
                  </span>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-bold mb-2 text-[#feb47b]">強み</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedGalaxyFamily.strengths.map(strength => (
                      <li key={strength}>{strength}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-[#feb47b]">課題</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedGalaxyFamily.challenges.map(challenge => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-[#fff9f5] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">あなたの中にある{selectedGalaxyFamily.name}の要素</h3>
              <p className="mb-4">この種族の特性が強く出ている方は、以下のような特徴が見られます：</p>
              <ul className="list-disc pl-5 space-y-2">
                {selectedGalaxyFamily.name === "シリウス" && (
                  <>
                    <li>全体の調和を重視し、統合に向けて働くことを好む</li>
                    <li>知識欲が強く、真理を追求する</li>
                    <li>奉仕の精神が強い</li>
                    <li>長期的な視点で物事を考える</li>
                    <li>他者を導くリーダーシップがある</li>
                  </>
                )}
                {selectedGalaxyFamily.name === "プレアデス" && (
                  <>
                    <li>感受性が高く、他者の感情に敏感</li>
                    <li>芸術的な才能や創造性に富む</li>
                    <li>平和と調和を重視する</li>
                    <li>美しさや癒しに惹かれる</li>
                    <li>時に感情の波に翻弄されることがある</li>
                  </>
                )}
                {selectedGalaxyFamily.name === "オリオン" && (
                  <>
                    <li>情熱的で行動力がある</li>
                    <li>困難に立ち向かう強さを持つ</li>
                    <li>目標達成に向けて粘り強く進む</li>
                    <li>時に支配的になることがある</li>
                    <li>闘争や対立の中で成長するタイプ</li>
                  </>
                )}
                {selectedGalaxyFamily.name === "アンドロメダ" && (
                  <>
                    <li>革新的なアイデアを生み出す能力</li>
                    <li>精神性と実用性のバランスを重視</li>
                    <li>先見性があり、未来志向</li>
                    <li>柔軟に適応する能力がある</li>
                    <li>時に現実から離れた考え方をすることも</li>
                  </>
                )}
                {selectedGalaxyFamily.name === "リラ" && (
                  <>
                    <li>開拓者精神があり、新しいことに挑戦する</li>
                    <li>拡大と発展を重視する</li>
                    <li>リーダーシップがあり、人を導く</li>
                    <li>時に支配的になりがち</li>
                    <li>強い目的意識と行動力がある</li>
                  </>
                )}
                {selectedGalaxyFamily.name === "ゼータレティクル" && (
                  <>
                    <li>論理的思考が得意で分析力に優れる</li>
                    <li>効率と秩序を重視する</li>
                    <li>科学や技術に関心がある</li>
                    <li>時に感情表現が苦手なことがある</li>
                    <li>集合意識や全体性を理解する力がある</li>
                  </>
                )}
              </ul>
            </div>
          </div>
          
          {/* 常に表示されるフッターボタン */}
          <div className="sticky bottom-0 py-4 bg-white border-t flex justify-center">
            <button 
              onClick={closeGalaxyFamilyDetail}
              className="px-6 py-2 bg-[#ff7e5f] text-white rounded-lg"
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    );
  };

  // 天津金木詳細モーダル
  const AmatsuKanagiDetailModal = () => {
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6">
          <div className="flex justify-between items-center mb-6 sticky top-0 bg-white py-2 border-b border-[#ffbe76]/30 z-10">
            <h2 className="text-2xl font-bold text-[#ff7e5f]">{amatsuKanagiData.title}</h2>
            <button 
              onClick={toggleAmatsuKanagiDetail}
              className="bg-[#4a3933] text-white px-3 py-1 rounded-full hover:bg-[#4a3933]/80"
            >
              閉じる
            </button>
          </div>
          
          <div className="space-y-6 pb-20">
            <div className="bg-[#fff9f5] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">天津金木とは</h3>
              <p className="mb-4">{amatsuKanagiData.description}</p>
              <p className="mb-4">古神道の思想にある宇宙の四大源力になぞらえて、現在の在り方が宇宙創造の法則に則っているのかを指し示します。</p>
              <p>{amatsuKanagiData.philosophy}</p>
            </div>
            
            <div className="bg-[#fff9f5] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">四大源力について</h3>
              <div className="space-y-4">
                {amatsuKanagiData.elements.map(element => (
                  <div key={element.name} className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-bold mb-2 text-[#feb47b]">{element.name}</h4>
                    <p className="mb-3">{element.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3 bg-green-100 rounded-md">
                        <h5 className="text-sm font-bold text-green-700 mb-1">調和状態</h5>
                        <p>{element.positive}</p>
                      </div>
                      <div className="p-3 bg-red-100 rounded-md">
                        <h5 className="text-sm font-bold text-red-700 mb-1">不調和状態</h5>
                        <p>{element.negative}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#fff9f5] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">古神道的な考え方</h3>
              <p className="mb-4">一人一人がどう意識して人生を創造していくか考える。己を見つめ。己を見出して己自身を向上する。そして、身の回りの方々と共に幸せになろうと生きていく。一人一人が『創造主』である事を体現していく。</p>
              <p className="mb-4">そしてどの『在り方』も全てが尊い。そこに『正解』も『間違い』もありません。『真実』も『嘘』もありません。『光』も『闇』もありません。</p>
              <p>只存在するのは『今ここ』に在るあなたです。</p>
            </div>
          </div>
          
          {/* 常に表示されるフッターボタン */}
          <div className="sticky bottom-0 py-4 bg-white border-t flex justify-center">
            <button 
              onClick={toggleAmatsuKanagiDetail}
              className="px-6 py-2 bg-[#ff7e5f] text-white rounded-lg"
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#ffe8dc] to-[#ffcab0]">
      {/* ヘッダー - 固定 */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md py-3 px-5 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#ff7e5f]">
          グレイトヒーローズジャーニー
        </h1>
        <div className="text-sm text-gray-600">
          2025.3.30 ワークショップ
        </div>
      </header>
      
      {/* メインコンテンツ - ヘッダーとフッターの高さを考慮したパディング */}
      <main className="flex-1 flex pt-16 pb-20">
        {/* サイドナビゲーション */}
        <div className="w-56 bg-white shadow-md hidden md:block p-4 overflow-y-auto">
          <div className="mb-6">
            <h2 className="font-bold text-[#4a3933] mb-2">スライド一覧</h2>
            <nav className="space-y-1">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    currentSlide === index 
                      ? 'bg-[#ff7e5f] text-white' 
                      : 'hover:bg-[#ffbe76]/20'
                  }`}
                >
                  {index + 1}. {slide.title}
                </button>
              ))}
            </nav>
          </div>
          
          <div>
            <h2 className="font-bold text-[#4a3933] mb-2">ツール</h2>
            <button 
              onClick={toggleWorksheetMode}
              className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-[#ffbe76]/20 transition-colors"
            >
              ワークシートを開く
            </button>
          </div>
        </div>
        
        {/* スライドエリア */}
        <div className="flex-1 p-5">
          <div className="bg-white rounded-lg shadow-lg h-full overflow-hidden flex flex-col">
            {/* スライドタイトル */}
            <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white p-4 sticky top-0 z-10">
              <h2 className="text-xl font-bold">{slides[currentSlide].title}</h2>
              <p className="text-sm opacity-90">{slides[currentSlide].subtitle}</p>
            </div>
            
            {/* スライドコンテンツ */}
            <div className="flex-1 p-6 overflow-y-auto pb-16">
              {/* デバッグ情報 */}
              <div className="text-xs text-gray-400 mb-2">現在のスライド: {currentSlide + 1}</div>
              
              {/* スライド内容 */}
              <div className="h-full">
                {slides[currentSlide].content}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* ナビゲーションフッター - 固定 */}
      <div className="fixed bottom-0 left-0 right-0 z-10 bg-white border-t p-4 flex justify-between items-center">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`px-4 py-2 rounded-lg ${
            currentSlide === 0 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-[#feb47b] text-white hover:bg-[#ff7e5f] transition-colors'
          }`}
        >
          前へ
        </button>
        
        <div className="text-gray-600">
          {currentSlide + 1} / {slides.length}
        </div>
        
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`px-4 py-2 rounded-lg ${
            currentSlide === slides.length - 1 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-[#feb47b] text-white hover:bg-[#ff7e5f] transition-colors'
          }`}
        >
          次へ
        </button>
      </div>
      
      {/* モバイル用スライド選択ボタン */}
      <div className="md:hidden fixed right-4 bottom-20 z-20">
        <button 
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="bg-[#ff7e5f] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
        >
          <span className="text-xl">≡</span>
        </button>
      </div>
      
      {/* モバイル用ナビゲーションパネル */}
      {mobileNavOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-black/70 flex items-end">
          <div className="bg-white w-full rounded-t-xl p-5 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-xl text-[#ff7e5f]">スライド選択</h3>
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
                      ? 'bg-[#ff7e5f] text-white' 
                      : 'bg-gray-100 hover:bg-gray-200'
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
                className="w-full py-3 bg-[#feb47b] text-white rounded-lg"
              >
                ワークシートを開く
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* モーダル */}
      {worksheetMode && <WorksheetComponent />}
      {galaxyFamilyDetailMode && <GalaxyFamilyDetailModal />}
      {amatsuKanagiDetailMode && <AmatsuKanagiDetailModal />}
    </div>
  );
};

export default GHJPresentation;