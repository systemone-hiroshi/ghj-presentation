import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GHJContactForm from './GHJContactForm';

interface Question {
  question: string;
  isOpen: boolean;
}

interface WorksheetItem {
  question: string;
  answer: string;
}

// ワークシートデータ
const worksheetData = [
  {
    title: "銀河ファミリーマッピング",
    items: [
      { question: "あなたはどの銀河種族の特性を持っていると感じますか？", answer: "" },
      { question: "その種族の長所と短所は何だと思いますか？", answer: "" },
      { question: "あなたの人生でどのように表れていますか？", answer: "" }
    ]
  },
  {
    title: "天津金木リーディング",
    items: [
      { question: "現在のあなたの課題は何だと感じますか？", answer: "" },
      { question: "その課題を乗り越えるために必要なことは？", answer: "" },
      { question: "大いなる意志とつながるために障害となっているものは？", answer: "" }
    ]
  },
  {
    title: "光の柱を立てる",
    items: [
      { question: "あなたが地上で実現したい理想は何ですか？", answer: "" },
      { question: "魂の本質的な喜びを感じるのはどんな時ですか？", answer: "" },
      { question: "光の柱として生きるためにこれから何をしますか？", answer: "" }
    ]
  }
];

const GHJPresentation: React.FC = () => {
  // デバッグ用コード
  useEffect(() => {
    console.log("GHJPresentation mounted");
    console.log("Worksheet data initialized:", worksheetData);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [worksheetMode, setWorksheetMode] = useState(false);
  const [worksheetIndex, setWorksheetIndex] = useState(0);
  const [userWorksheet, setUserWorksheet] = useState<WorksheetItem[][]>(
    worksheetData.map(section => section.items.map(item => ({ ...item })))
  );
  const [questions, setQuestions] = useState<Question[]>([
    { question: "GHJの上映会はどのように行われますか？", isOpen: false },
    { question: "銀河ファミリーとは具体的に何ですか？", isOpen: false },
    { question: "このワークショップでは何が体験できますか？", isOpen: false },
    { question: "初めてでも参加できますか？", isOpen: false }
  ]);
  
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
  
  // トランジションエフェクト
  const slideVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };
  
  // スライドの順番を変更: 1,8,2,3,6,4,7,5,9,10
  const slides = [
    // Slide 1: Title (そのまま)
    {
      title: "グレイトヒーローズジャーニー",
      subtitle: "魂の解放を促す上映プロジェクト",
      content: () => (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="relative w-full max-w-4xl mb-6">
            <img 
              src="https://drive.google.com/uc?export=view&id=1I9bmdhN4mYO4c5XoAaNr3iIfYQBw1H-l" 
              alt="グレイトヒーローズジャーニー" 
              className="w-full h-auto rounded-xl shadow-lg"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/api/placeholder/800/450";
              }}
            />
          </div>
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-4 text-[#ff7e5f]"
          >
            GREAT HERO'S JOURNEY
          </motion.h1>
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl mb-8 text-[#feb47b]"
          >
            "光の柱"を立てよう
          </motion.h2>
          <motion.h3 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl font-bold mb-4"
          >
            ワークショップ2025年3月30日
          </motion.h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center p-4 rounded-lg shadow-md bg-[#ffbe76]/30 hover:bg-[#ffbe76]/50 transition-all"
            >
              <h3 className="text-xl font-bold mb-2">光の柱を立てる</h3>
              <p>天と地をつなぎ、無限の可能性に目覚める</p>
            </motion.div>
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center p-4 rounded-lg shadow-md bg-[#ffbe76]/30 hover:bg-[#ffbe76]/50 transition-all"
            >
              <h3 className="text-xl font-bold mb-2">愛と統合</h3>
              <p>全ては一つであり愛である</p>
            </motion.div>
          </div>
        </div>
      )
    },
    
    // Slide 8: ワークショップのカリキュラム (8→2に移動)
    {
      title: "本日のワークショッププログラム",
      subtitle: "魂の解放を目指すカリキュラム",
      content: () => (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold mb-6 text-[#ff7e5f]">本日のワークショッププログラム</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">1. GHJについて</h3>
              <p className="mb-2">・GHJとは何か、始めた経緯の説明</p>
              <p className="mb-2">・上映会の内容について説明・質疑応答</p>
              <p>・これからのGHJについて・コンセプト・目的</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">2. 銀河ファミリーマッピングワーク</h3>
              <p className="mb-2">・銀河ファミリーマッピングの説明</p>
              <p className="mb-2">・参加者それぞれがどの属性にあるのかを考える</p>
              <p>・それぞれの特性を見て自分にどんな癖がありどんなふうに変えていきたいか考える</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">3. 自分を見つめる天津金木リーディング</h3>
              <p className="mb-2">・出てくる象意によって現在の意識の持ち方を見つめる</p>
              <p className="mb-2">・自分を見つめる事で課題を浮き彫りにしていく</p>
              <p>・理想的な生き方とは？を考える</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">4. 在り方を見つめる統合ワーク</h3>
              <p className="mb-2">・統合とは？についての古神道的考察</p>
              <p className="mb-2">・統合を考えるワークシート</p>
              <p>・自分自身の在り方を見つめるワーク</p>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3 text-[#feb47b]">5. 光の柱を立てる誘導瞑想</h3>
            <p className="mb-2">・現地＆Zoom参加者同時に行う瞑想</p>
            <p className="mb-2">・音楽によるヒーリング</p>
            <p className="mb-2">・大いなる愛と繋がり己を思い出す</p>
            <p>・大いなる意志と己の魂が一つとなりどう生きるかを考える</p>
          </motion.div>
          <motion.div 
            className="mt-6 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <button 
              onClick={toggleWorksheetMode}
              className="px-6 py-3 bg-[#feb47b] text-white rounded-full hover:bg-[#ff7e5f] transition-colors shadow-md"
            >
              ワークシートを開く
            </button>
          </motion.div>
        </div>
      )
    },
    
    // Slide 2: What is GHJ? (2→3に移動)
    {
      title: "GHJとは？",
      subtitle: "グレイトヒーローズジャーニーの概要",
      content: () => (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold mb-6 text-[#ff7e5f]">GHJとは？</h2>
          <div className="flex flex-col md:flex-row gap-6 flex-1">
            <motion.div 
              className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">プロジェクトの概要</h3>
              <p className="mb-4">グレイトヒーローズジャーニーは、2024年に発足した「魂の解放」を促す上映プロジェクトです。</p>
              <p className="mb-4">音楽と映像、そして生のナレーションを通し、観る人の魂に眠る記憶を起こし、使命を立ち上がらせています。</p>
              <p>超太古から伝わる根源のメッセージと、銀河の仲間たち（シリウス、プレアデス、アンドロメダなど）の叡智によって構成されています。</p>
            </motion.div>
            <motion.div 
              className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">目的</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="hover:text-[#ff7e5f] transition-colors">人々の魂の記憶を呼び覚ます</li>
                <li className="hover:text-[#ff7e5f] transition-colors">銀河ファミリーとしての本質を思い出す</li>
                <li className="hover:text-[#ff7e5f] transition-colors">無限の可能性に目覚める</li>
                <li className="hover:text-[#ff7e5f] transition-colors">大いなる意志と統合する</li>
                <li className="hover:text-[#ff7e5f] transition-colors">愛そのものであることを思い出す</li>
              </ul>
            </motion.div>
          </div>
        </div>
      )
    },
    
    // Slide 3: Origin Story (3→4に移動)
    {
      title: "始まりの物語",
      subtitle: "GHJが誕生した経緯",
      content: () => (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold mb-6 text-[#ff7e5f]">始まりの物語</h2>
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-3 text-[#feb47b]">ヒーローズジャーニーとは</h3>
            <p className="mb-2">もともとは神話学者ジョセフ・キャンベルが提唱した、個人の成長や人生の挑戦を理解するための考え方です。</p>
            <p>主人公が日常から非日常に移行し、試練を乗り越えて帰還するというステップとその道のりを表しています。『千と千尋の神隠し』や『スターウォーズ』などの物語に見られる共通パターンです。</p>
          </motion.div>
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-3 text-[#feb47b]">プロジェクトの始まり</h3>
            <p className="mb-2">このプロジェクトのきっかけは、天音明日花のライフストーリーでした。一人の少女が作曲家としての現在に至るまでの人生の道のりを綴った小説づくりを、Soul Alchemist（魂の錬金術師）ヒロが手掛けたことから始まりました。</p>
            <p className="mb-2">明日花自身が人々のヒーローズジャーニーを実現するサポートをしたいという想いと、古神道の叡智や宇宙からのメッセージという「大いなる意志」を伝えるというヒロの使命により、『グレイトヒーローズジャーニー』という一つのプロジェクトに昇華しました。</p>
            <p>個々のヒーローズジャーニーの実現は、大いなる意志のヒーローズジャーニーの実現でもあります。全ては一つであり愛であることを、関わる全ての方々と共に表現し実現していくことがこのプロジェクトの目的です。</p>
          </motion.div>
        </div>
      )
    },
    
    // Slide 6: 上映会シナリオの紹介 (6→5に移動)
    {
      title: "上映会シナリオの紹介",
      subtitle: "魂の記憶を呼び覚ます物語",
      content: () => (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold mb-6 text-[#ff7e5f]">上映会シナリオの紹介</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <motion.div 
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-2 text-[#feb47b]">第1章：アメツチワカレ</h3>
              <p className="text-sm">無から有へ。意志の発動により創造が始まり、火と水の精霊が生まれ、高天原が創造されるまでの物語。主（ス）の意志から全てが始まりました。</p>
            </motion.div>
            <motion.div 
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-2 text-[#feb47b]">第2章：銀河の歴史</h3>
              <p className="text-sm">銀河ファミリーの旅、創造の礎と黄金の泉、エデンの園リラ、シリウス、オリオン、プレアデス、ゼータレティクル、地球人類創生プロジェクトなど、銀河の様々な存在たちの歴史を辿ります。</p>
            </motion.div>
            <motion.div 
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-bold mb-2 text-[#feb47b]">第3章：天の岩戸開き</h3>
              <p className="text-sm">創造の礎たちが身を隠した「天の岩戸隠れ」から再び姿を現す「天の岩戸開き」へと至る統合の物語。全ての存在が自らも創造主であることに目覚めていく過程です。</p>
            </motion.div>
          </div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md mb-4 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-3 text-[#feb47b]">上映会の特徴</h3>
            <p className="mb-2">上映会では、音楽と映像、生のナレーションを通じて、観る人の魂に眠る記憶を呼び起こします。ナレーションでは宇宙創造の始まりから銀河の歴史、そして現在の地球と人類の使命までを伝えています。</p>
            <p>天音明日花による特別なヒーリング音楽が使われ、参加者は深いリラクゼーション状態で物語を体験します。体験後、多くの参加者が自分自身の魂の使命を思い出したり、深い気づきを得られたと報告しています。</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-3 text-[#feb47b]">ワークショップとの関連</h3>
            <p>今回のワークショップでは、上映会シナリオの解説を行い、参加者自身の内なる旅路と結びつけていきます。「銀河ファミリーマッピング」では、自分がどの存在の特性を持っているかを探り、「光の柱を立てる」誘導瞑想で、大いなる意志との統合を体験します。上映会を観たことがない方にも、その本質を体験していただける内容です。</p>
          </motion.div>
        </div>
      )
    },
    
    // Slide 4: Key Concepts (4→6に移動)
    {
      title: "重要な概念",
      subtitle: "GHJの核となる考え方",
      content: () => (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold mb-6 text-[#ff7e5f]">重要な概念</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            <motion.div 
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">無から有へ</h3>
              <p>無の世界から意志の発動により、火の精霊と水の精霊が生み出され、すべての創造が始まりました。この二つの相反する存在の統合によって、すべてのものが産み出されています。これをアメツチワカレ（天地分かれ）と呼びます。</p>
            </motion.div>
            <motion.div 
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">銀河ファミリー</h3>
              <p>私たちは銀河ファミリーの一員です。シリウス、プレアデス、アンドロメダなど様々な星の存在たちと共に経験してきた歴史があり、それを思い出す旅がGHJの核となります。私たちのDNAにはその記憶が刻まれています。</p>
            </motion.div>
            <motion.div 
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">統合</h3>
              <p>火と水、光と闇、陽と陰など、相反するものの統合が宇宙創造の根本原理です。それが愛であり、全ては愛に通じています。「全は個にして個は全なり」という認識が重要です。</p>
            </motion.div>
            <motion.div 
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">光の柱を立てる</h3>
              <p>天と地が繋がることは統合であり、神と人が繋がることもまた統合です。それは自身が創造主であると目覚めることであり、そこには天と地の間に光の柱が立ちます。「地上で『有限』だと思い込んでいた人類が天と繋がることで『無限』の可能性があることに目醒める」ということです。</p>
            </motion.div>
          </div>
        </div>
      )
    },
    
    // Slide 7: Future Vision (7→7のまま)
    {
      title: "これからのGHJ",
      subtitle: "ビジョンと展望",
      content: () => (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold mb-6 text-[#ff7e5f]">これからのGHJ</h2>
          <div className="flex flex-col md:flex-row gap-6 flex-1">
            <motion.div 
              className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-3 text-[#feb47b]">私たちのビジョン</h3>
              <p className="mb-4">個々のヒーローズジャーニーの実現は、また大いなる意志のヒーローズジャーニーの実現であり、全ては一つであり愛であることを関わる全ての方々と表現し、実現させることがこのプロジェクトの目的です。</p>
              <p className="mb-4">誰もが人生そのものと言える輝かしいヒーローズジャーニーを歩んでいます。どんな人にも約束されている輝かしいヒーローズジャーニーを実現することが出来るのです。</p>
              <p>私たちはそのことを大切な方々に伝え、みんなと輝かしい人生を共有することで輝かしい世界を創造できると考えています。</p>
            </motion.div>
            <motion.div 
              className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
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
            </motion.div>
          </div>
          <motion.div 
            className="mt-6 p-4 rounded-lg text-center bg-[#ffbe76]/40 hover:bg-[#ffbe76]/60 transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="font-bold">Only Love Is REAL ―― 全ては一つであり愛である</p>
          </motion.div>
        </div>
      )
    },
    
    // Slide 5: Team Members (5→8に移動)
    {
      title: "プロジェクトメンバー",
      subtitle: "GHJを創り上げるチーム",
      content: () => (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold mb-6 text-[#ff7e5f]">プロジェクトメンバー</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            <motion.div 
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2 text-[#feb47b]">Soul Alchemist ヒロ</h3>
              <p className="mb-2">古神道を長年探求しながら真理を伝える</p>
              <p className="text-sm italic mt-auto">10代の頃から古神道系団体で学び、神の世界、靈の世界、人の本質である魂・靈性の向上について学ぶ。現在はどの団体にも所属せず、視野を広げながら、これまでの経験を活かして人様のお役に立つ活動をしています。</p>
            </motion.div>
            <motion.div 
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2 text-[#feb47b]">天音明日花（Asuka Amane）</h3>
              <p className="mb-2">魂の覚醒を促す作曲家</p>
              <p className="text-sm italic mt-auto">宇宙から直接降ろされた音とソルフェジオ周波数を織り込んだ音楽を届けています。2022年より壮大な銀河ストーリーの開示とともに生まれた『惑星と繋がる癒しの旅』シリーズをリリースし、聴く人の魂を揺さぶり覚醒を促しています。</p>
            </motion.div>
            <motion.div 
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-2 text-[#feb47b]">宇宙系ライトウォーリア MAAYA</h3>
              <p className="mb-2">大阪開催オーガナイザーを経て、愛と光を広げるGHJの乗組員に参加</p>
            </motion.div>
            <motion.div 
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-2 text-[#feb47b]">アーユルヴェーダセラピスト YUKI</h3>
              <p className="mb-2">上映会ナレーションとGHJの事務局担当</p>
              <p className="text-sm italic mt-auto">世界最古の自然医療アーユルヴェーダの智慧をベースに心身の健やかさを取り戻すセラピーを行います。</p>
            </motion.div>
          </div>
        </div>
      )
    },
    
    // Slide 9: Interactive Q&A
    {
      title: "質問コーナー",
      subtitle: "みなさんの疑問にお答えします",
      content: () => {
        const toggleQuestion = (index: number) => {
          const newQuestions = [...questions];
          newQuestions[index].isOpen = !newQuestions[index].isOpen;
          setQuestions(newQuestions);
        };
        
        return (
          <div className="flex flex-col h-full">
            <h2 className="text-3xl font-bold mb-6 text-[#ff7e5f]">よくある質問</h2>
            <div className="space-y-4">
              {questions.map((q, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <button 
                    className="w-full p-4 text-left font-bold flex justify-between items-center text-[#4a3933] hover:bg-[#ffbe76]/10 transition-colors"
                    onClick={() => toggleQuestion(index)}
                  >
                    {q.question}
                    <span>{q.isOpen ? '▲' : '▼'}</span>
                  </button>
                  <AnimatePresence>
                    {q.isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 border-t border-[#ffbe76]/50">
                          {index === 0 && (
                            <p>上映会では、音楽と映像、そして生のナレーションを通して、宇宙創造の物語や銀河ファミリーの歴史を体験していただきます。「無から有へ」から始まり、銀河の歴史、天の岩戸開きという3部構成で、参加者の魂に眠る記憶を呼び覚まし、本来の使命を思い出すきっかけとなります。特別に作曲された音楽により、深いリラクゼーション状態で物語を体験できます。</p>
                          )}
                          {index === 1 && (
                            <p>銀河ファミリーとは、私たち地球人を含む宇宙の様々な存在たちのことです。シリウスの長老たち、プレアデス人、オリオンの存在たちなど、様々な星の存在たちと共に経験してきた歴史があり、私たちは皆、根源である「黄金の泉」から生まれた存在です。これら様々な星々の特性が私たちのDNAにも刻まれており、ワークショップではそれらの特性を探るマッピングを行います。</p>
                          )}
                          {index === 2 && (
                            <p>このワークショップでは、GHJの概要説明、銀河ファミリーマッピング、天津金木リーディング、統合についてのワーク、そして「光の柱を立てる」をテーマにした誘導瞑想を体験していただけます。自分自身と向き合い、これからの生き方を考える機会となります。特に今回のワークショップでは、書き下ろしの音源を使用した「根源に繋がる」誘導瞑想も予定しています。この瞑想を通して、天と地がつながり、光の柱を立てる体験ができます。</p>
                          )}
                          {index === 3 && (
                            <p>はい、初めての方も大歓迎です！「グレイトヒーローズジャーニーってなあに？」という説明から始まり、誰でも参加しやすい内容になっています。このイベントは、宗教や排他的な思想に基づくものでは一切なく、どなたでもご参加いただけます。古神道やヒーリング音楽が好きな方もぜひお越しください。主催者とお知り合いでなくても全く問題ございませんので、ピンと来た方はお気軽にご参加ください。</p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        );
      }
    },
    
    // Slide 10: Contact Form
    {
      title: "お問い合わせ",
      subtitle: "ご質問・お申し込みはこちらから",
      content: () => (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold mb-6 text-[#ff7e5f]">お問い合わせ</h2>
          <motion.p 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            GHJプロジェクトに興味を持っていただきありがとうございます。ワークショップや上映会についてのご質問、ご参加のお申し込み、コラボレーションのご提案など、お気軽にお問い合わせください。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GHJContactForm />
          </motion.div>
        </div>
      )
    }
  ];
  
  // ワークシートコンポーネント
  const WorksheetComponent = () => {
    return (
      <motion.div 
        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6"
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
        >
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
          
          <div className="space-y-6">
            {userWorksheet[worksheetIndex].map((item, idx) => (
              <motion.div 
                key={idx}
                className="bg-[#fff9f5] p-4 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.1 }}
              >
                <h3 className="font-bold mb-2 text-[#4a3933]">{item.question}</h3>
                <textarea
                  value={item.answer}
                  onChange={(e) => handleWorksheetChange(worksheetIndex, idx, e.target.value)}
                  className="w-full p-3 border border-[#ffbe76]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7e5f] min-h-[100px]"
                  placeholder="ここに記入してください..."
                />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-8 flex justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
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
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };
  
  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col bg-[#fff9f5] text-[#4a3933]">
      {/* Main content */}
      <div className="flex-1 p-8 overflow-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            {slides[currentSlide].content()}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Navigation controls */}
      <div className="p-4 border-t border-[#ffbe76]/30 flex justify-between items-center bg-white/80 backdrop-blur-sm">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`px-4 py-2 rounded-lg text-white ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-80'} bg-[#ff7e5f] transition-all`}
        >
          前へ
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${currentSlide === index ? 'scale-125 shadow-lg' : 'scale-100'}`}
              style={{ 
                backgroundColor: currentSlide === index ? '#ff7e5f' : 'rgba(255, 190, 118, 0.5)'
              }}
              aria-label={`スライド ${index + 1} へ`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`px-4 py-2 rounded-lg text-white ${currentSlide === slides.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-80'} bg-[#ff7e5f] transition-all`}
        >
          次へ
        </button>
      </div>
      
      {/* Worksheet modal */}
      <AnimatePresence>
        {worksheetMode && <WorksheetComponent />}
      </AnimatePresence>
    </div>
  );
};

export default GHJPresentation;