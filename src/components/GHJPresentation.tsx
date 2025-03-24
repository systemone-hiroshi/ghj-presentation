// FAQスライド
const FAQSlide: React.FC = () => {
  const [openQuestions, setOpenQuestions] = useState<boolean[]>(Array(5).fill(false));
  
  const toggleQuestion = (index: number) => {
    const newOpenQuestions = [...openQuestions];
    newOpenQuestions[index] = !newOpenQuestions[index];
    setOpenQuestions(newOpenQuestions);
  };
  
  const questions = [
    {
      question: "GHJの上映会はどのように行われますか？",
      answer: "上映会では、音楽と映像、そして生のナレーションを通して、宇宙創造の物語や銀河ファミリーの歴史を体験していただきます。「無から有へ」から始まり、銀河の歴史、天の岩戸開きという3部構成で、参加者の魂に眠る記憶を呼び覚まし、本来の使命を思い出すきっかけとなります。特別に作曲された音楽により、深いリラクゼーション状態で物語を体験できます。"
    },
    {
      question: "銀河ファミリーとは具体的に何ですか？",
      answer: "銀河ファミリーとは、私たち地球人を含む宇宙の様々な存在たちのことです。シリウスの長老たち、プレアデス人、オリオンの存在たちなど、様々な星の存在たちと共に経験してきた歴史があり、私たちは皆、根源である「黄金の泉」から生まれた存在です。これら様々な星々の特性が私たちのDNAにも刻まれており、ワークショップではそれらの特性を探るマッピングを行います。"
    },
    {
      question: "このワークショップでは何が体験できますか？",
      answer: "このワークショップでは、GHJの概要説明、銀河ファミリーマッピング、天津金木リーディング、統合についてのワーク、そして「光の柱を立てる」をテーマにした誘導瞑想を体験していただけます。自分自身と向き合い、これからの生き方を考える機会となります。特に今回のワークショップでは、書き下ろしの音源を使用した「根源に繋がる」誘導瞑想も予定しています。この瞑想を通して、天と地がつながり、光の柱を立てる体験ができます。"
    },
    {
      question: "初めてでも参加できますか？",
      answer: "はい、初めての方も大歓迎です！「グレイトヒーローズジャーニーってなあに？」という説明から始まり、誰でも参加しやすい内容になっています。このイベントは、宗教や排他的な思想に基づくものでは一切なく、どなたでもご参加いただけます。古神道やヒーリング音楽が好きな方もぜひお越しください。主催者とお知り合いでなくても全く問題ございませんので、ピンと来た方はお気軽にご参加ください。"
    },
    {
      question: "天津金木とは何ですか？",
      answer: "天津金木（あまつかなぎ）は、古神道に伝わる秘儀の一つとして伝わる神具です。「持ち歩く神社」とも言われ宇宙の力を集める事が出来るとされています。現在のあなたを知るための補助として活用します。天（魂）・火（靈）・水（心）・地（身体）という宇宙の四大源力になぞらえて、現在の在り方が宇宙創造の法則に則っているのかを指し示します。ワークショップでは、このリーディングを通して自分自身を見つめ直す機会を提供します。"
    }
  ];
  
  return (
    <div className="flex flex-col h-full overflow-y-auto">
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
              <span>{openQuestions[index] ? '▲' : '▼'}</span>
            </button>
            <AnimatePresence>
              {openQuestions[index] && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 border-t border-[#ffbe76]/50">
                    <p>{q.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// お問い合わせスライド
const ContactSlide: React.FC = () => (
  <div className="flex flex-col h-full overflow-y-auto">
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
    
    <motion.div 
      className="mt-6 p-4 bg-white rounded-lg shadow-md text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h3 className="text-xl font-bold mb-2 text-[#feb47b]">イベント詳細</h3>
      <p className="mb-2">日時: 2025年3月30日（日）13:00〜16:00</p>
      <p className="mb-2">会場: 台所たまねぎ（2階スペース）</p>
      <p className="mb-2">会場参加: 3,000円（1ドリンク込み）</p>
      <p>オンライン参加: 1,000円</p>
    </motion.div>
  </div>
);

// ワークシートコンポーネント
const WorksheetComponent: React.FC<{onClose: () => void}> = ({ onClose }) => {
  const [worksheetIndex, setWorksheetIndex] = useState(0);
  const [userWorksheet, setUserWorksheet] = useState<WorksheetItem[][]>(
    worksheetData.map(section => section.items.map(item => ({ ...item })))
  );
  
  const handleWorksheetChange = (sectionIndex: number, itemIndex: number, value: string) => {
    const newWorksheet = [...userWorksheet];
    newWorksheet[sectionIndex][itemIndex].answer = value;
    setUserWorksheet(newWorksheet);
  };
  
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
              onClick={onClose}
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

// 銀河ファミリー詳細モーダル
const GalaxyFamilyDetailModal: React.FC<{family: GalaxyFamily, onClose: () => void}> = ({ family, onClose }) => {
  return (
    <motion.div 
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
      >
        <div className="flex justify-between items-center mb-6 sticky top-0 bg-white py-2 border-b border-[#ffbe76]/30">
          <h2 className="text-2xl font-bold text-[#ff7e5f]">{family.name}種族</h2>
          <button 
            onClick={onClose}
            className="bg-[#4a3933] text-white px-3 py-1 rounded-full hover:bg-[#4a3933]/80"
          >
            閉じる
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="bg-[#fff9f5] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-[#feb47b]">基本情報</h3>
            <p className="mb-4">{family.description}</p>
            
            <h3 className="text-lg font-bold mb-2 text-[#feb47b]">特性</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {family.traits.map(trait => (
                <span key={trait} className="px-3 py-1 bg-[#ffbe76]/30 rounded-full">
                  {trait}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-bold mb-2 text-[#feb47b]">強み</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {family.strengths.map(strength => (
                    <li key={strength}>{strength}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-[#feb47b]">課題</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {family.challenges.map(challenge => (
                    <li key={challenge}>{challenge}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-[#fff9f5] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-[#feb47b]">あなたの中にある{family.name}の要素</h3>
            <p className="mb-4">この種族の特性が強く出ている方は、以下のような特徴が見られます：</p>
            <ul className="list-disc pl-5 space-y-2">
              {family.name === "シリウス" && (
                <>
                  <li>全体の調和を重視し、統合に向けて働くことを好む</li>
                  <li>知識欲が強く、真理を追求する</li>
                  <li>奉仕の精神が強い</li>
                  <li>長期的な視点で物事を考える</li>
                  <li>他者を導くリーダーシップがある</li>
                </>
              )}
              {family.name === "プレアデス" && (
                <>
                  <li>感受性が高く、他者の感情に敏感</li>
                  <li>芸術的な才能や創造性に富む</li>
                  <li>平和と調和を重視する</li>
                  <li>美しさや癒しに惹かれる</li>
                  <li>時に感情の波に翻弄されることがある</li>
                </>
              )}
              {family.name === "オリオン" && (
                <>
                  <li>情熱的で行動力がある</li>
                  <li>困難に立ち向かう強さを持つ</li>
                  <li>目標達成に向けて粘り強く進む</li>
                  <li>時に支配的になることがある</li>
                  <li>闘争や対立の中で成長するタイプ</li>
                </>
              )}
              {family.name === "アンドロメダ" && (
                <>
                  <li>革新的なアイデアを生み出す能力</li>
                  <li>精神性と実用性のバランスを重視</li>
                  <li>先見性があり、未来志向</li>
                  <li>柔軟に適応する能力がある</li>
                  <li>時に現実から離れた考え方をすることも</li>
                </>
              )}
              {family.name === "リラ" && (
                <>
                  <li>開拓者精神があり、新しいことに挑戦する</li>
                  <li>拡大と発展を重視する</li>
                  <li>リーダーシップがあり、人を導く</li>
                  <li>時に支配的になりがち</li>
                  <li>強い目的意識と行動力がある</li>
                </>
              )}
              {family.name === "ゼータレティクル" && (
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
      </motion.div>
    </motion.div>
  );
};import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 型定義
interface Question {
  question: string;
  isOpen: boolean;
}

interface WorksheetItem {
  question: string;
  answer: string;
}

interface GalaxyFamily {
  name: string;
  description: string;
  traits: string[];
  strengths: string[];
  challenges: string[];
}

interface SlideProps {
  title: string;
  subtitle: string;
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
const amatsuKanagiData = {
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

// お問い合わせフォームコンポーネント
const GHJContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    participationType: 'venue'
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理（実際の実装時に追加）
    alert(`お問い合わせありがとうございます。\n名前: ${formData.name}\nメール: ${formData.email}\n参加タイプ: ${formData.participationType}\nメッセージ: ${formData.message}`);
    // フォームリセット
    setFormData({
      name: '',
      email: '',
      message: '',
      participationType: 'venue'
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-1">お名前 <span className="text-red-500">*</span></label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7e5f]"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">メールアドレス <span className="text-red-500">*</span></label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7e5f]"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="participationType" className="block text-sm font-medium mb-1">参加タイプ</label>
        <select
          id="participationType"
          name="participationType"
          value={formData.participationType}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7e5f]"
        >
          <option value="venue">会場参加</option>
          <option value="online">オンライン参加</option>
          <option value="inquiry">お問い合わせのみ</option>
        </select>
      </div>
      
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium mb-1">メッセージ</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
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
  );
};

// 各スライドのコンポーネント
// タイトルスライド
const TitleSlide: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <div className="relative w-full max-w-4xl mb-6">
      <img 
        src="/api/placeholder/800/450"
        alt="グレイトヒーローズジャーニー" 
        className="w-full h-auto rounded-xl shadow-lg"
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
);

// GHJとは？スライド
const AboutGHJSlide: React.FC = () => (
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
);

// 始まりの物語スライド
const OriginStorySlide: React.FC = () => (
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
);

// 重要な概念のスライド
const KeyConceptsSlide: React.FC = () => (
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
);

// 上映会シナリオの紹介
const ScenarioSlide: React.FC = () => (
  <div className="flex flex-col h-full overflow-y-auto">
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
);

// 銀河ファミリー解説
const GalaxyFamilySlide: React.FC<{onShowDetail: (family: GalaxyFamily) => void, onOpenWorksheet: () => void}> = ({ onShowDetail, onOpenWorksheet }) => (
  <div className="flex flex-col h-full overflow-y-auto">
    <h2 className="text-3xl font-bold mb-6 text-[#ff7e5f]">銀河ファミリー</h2>
    <motion.p 
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      銀河ファミリーとは、私たち地球人を含む宇宙の様々な存在たちのことです。それぞれの種族はそれぞれの特性を持っており、私たちのDNAには様々な星の特性が組み込まれています。ワークショップでは、自分がどの種族の特性を持っているかを探るマッピングを行います。
    </motion.p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {galaxyFamiliesData.map((family, index) => (
        <motion.div 
          key={family.name}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.1 }}
          onClick={() => onShowDetail(family)}
          whileHover={{ scale: 1.02 }}
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
        </motion.div>
      ))}
    </div>
    
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h3 className="text-xl font-bold mb-3 text-[#feb47b]">ワークショップでのマッピングについて</h3>
      <p className="mb-4">ワークショップでは、それぞれの銀河ファミリーの特性を詳しく解説し、自分がどの種族の特性を持っているかを探っていきます。</p>
      <p className="mb-4">人はそれぞれ複数の種族の特性を持っており、その組み合わせがユニークな個性となっています。自分の中のさまざまな特性を知ることで、自分の強みや課題に気づき、より調和した生き方を見つけることができます。</p>
      <p>ワークショップでは、直感的なエクササイズやチェックリストを使って、自分の中の銀河種族の特性を探ります。興味が湧いた方は、ワークシートを開いて事前に考えてみてください。</p>
    </motion.div>
    
    <motion.div 
      className="mt-6 flex justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
    >
      <button 
        onClick={onOpenWorksheet}
        className="px-6 py-3 bg-[#feb47b] text-white rounded-full hover:bg-[#ff7e5f] transition-colors shadow-md"
      >
        ワークシートを開く
      </button>
    </motion.div>
  </div>
);

// 天津金木リーディング
const AmatsuKanagiSlide: React.FC<{onShowDetail: () => void, onOpenWorksheet: () => void}> = ({ onShowDetail, onOpenWorksheet }) => (
  <div className="flex flex-col h-full overflow-y-auto">
    <h2 className="text-3xl font-bold mb-6 text-[#ff7e5f]">天津金木リーディング</h2>
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h3 className="text-xl font-bold mb-3 text-[#feb47b]">天津金木（あまつかなぎ）とは</h3>
      <p className="mb-2">{amatsuKanagiData.description}</p>
      <p className="mb-2">古神道の思想にある宇宙の四大源力になぞらえて、現在の在り方が宇宙創造の法則に則っているのかを指し示します。</p>
      <button 
        onClick={onShowDetail}
        className="mt-2 px-4 py-2 bg-[#ffbe76]/30 hover:bg-[#ffbe76]/50 rounded-lg transition-colors text-sm"
      >
        詳細を見る
      </button>
    </motion.div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {amatsuKanagiData.elements.map((element, index) => (
        <motion.div 
          key={element.name}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          whileHover={{ scale: 1.02 }}
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
        </motion.div>
      ))}
    </div>
    
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
    >
      <h3 className="text-xl font-bold mb-3 text-[#feb47b]">ワークショップでのリーディングについて</h3>
      <p className="mb-4">ワークショップでは、天津金木を使用した現在の自分の状態を見つめるリーディングを行います。このリーディングにより、現在のあなたが宇宙の法則にどう調和しているかを知ることができます。</p>
      <p>自分を見つめることで課題を浮き彫りにし、理想的な生き方を考えるきっかけとなります。天と地をつなぐ「光の柱」を立てるためには、まず現在の自分の状態を知ることが大切です。</p>
    </motion.div>
    
    <motion.div 
      className="mt-6 flex justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <button 
        onClick={onOpenWorksheet}
        className="px-6 py-3 bg-[#feb47b] text-white rounded-full hover:bg-[#ff7e5f] transition-colors shadow-md"
      >
        ワークシートを開く
      </button>
    </motion.div>
  </div>
);

// ワークショッププログラム
const ProgramSlide: React.FC<{onOpenWorksheet: () => void}> = ({ onOpenWorksheet }) => (
  <div className="flex flex-col h-full overflow-y-auto">
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
        onClick={onOpenWorksheet}
        className="px-6 py-3 bg-[#feb47b] text-white rounded-full hover:bg-[#ff7e5f] transition-colors shadow-md"
      >
        ワークシートを開く
      </button>
    </motion.div>
  </div>
);

// ビジョンと展望
const VisionSlide: React.FC = () => (
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
);

// プロジェクトメンバー
const TeamMembersSlide: React.FC = () => (
  <div className="flex flex-col h-full overflow-y-auto">
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
        <p className="text-sm italic mt-auto">大阪での上映会を主催した経験から、GHJの魅力に惹かれてコアメンバーに加わりました。愛と光のエネルギーを広げることに情熱を持ち、ワークショップの企画・運営を担当しています。</p>
      </motion.div>
      <motion.div 
        className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-xl font-bold mb-2 text-[#feb47b]">アーユルヴェーダセラピスト YUKI</h3>
        <p className="mb-2">上映会ナレーションとGHJの事務局担当</p>
        <p className="text-sm italic mt-auto">世界最古の自然医療アーユルヴェーダの智慧をベースに心身の健やかさを取り戻すセラピーを行います。天音明日花の実の妹で、上映会ではナレーションも担当しています。</p>
      </motion.div>
    </div>
    
    <motion.div 
      className="mt-6 p-6 bg-white rounded-lg shadow-md text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h3 className="text-xl font-bold mb-3 text-[#feb47b]">コアメンバーとサポーター</h3>
      <p>上記のコアメンバーを中心に、活動をサポートする新生地球の仲間たちで構成されています。私たちは共に学び、共に成長し、銀河ファミリーの一員としての使命を果たしていきます。</p>
    </motion.div>
  </div>
);