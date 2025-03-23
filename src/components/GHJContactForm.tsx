import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  interests: string[];
  message: string;
}

const GHJContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    interests: [],
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const interestOptions = [
    { id: 'workshop', label: 'ワークショップへの参加' },
    { id: 'screening', label: '上映会への参加' },
    { id: 'collaboration', label: 'コラボレーションの提案' },
    { id: 'hosting', label: '上映会・ワークショップの開催' },
    { id: 'newsletter', label: 'ニュースレターの購読' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        interests: [...formData.interests, value]
      });
    } else {
      setFormData({
        ...formData,
        interests: formData.interests.filter(interest => interest !== value)
      });
    }
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setErrorMessage('お名前を入力してください');
      return false;
    }
    
    if (!formData.email.trim()) {
      setErrorMessage('メールアドレスを入力してください');
      return false;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('有効なメールアドレスを入力してください');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Option 1: Submit to Google Forms
      // Replace with your actual Google Form action URL
      // This is the prefilled URL approach
      const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
      
      // Map your form fields to Google Form field names (entry.xxxxxxx)
      const formParams = new URLSearchParams({
        'entry.123456789': formData.name,
        'entry.987654321': formData.email,
        'entry.555555555': formData.phone,
        'entry.111111111': formData.interests.join(', '),
        'entry.222222222': formData.message,
      });
      
      // Option 2: Submit to a custom API endpoint that integrates with Notion
      // const response = await fetch('https://your-backend-api.com/submit-to-notion', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      
      // if (!response.ok) {
      //   throw new Error('サーバーエラーが発生しました');
      // }

      // Note: For demonstration - in a real app, you would use one of the approaches above
      // For this demo, we're just simulating a successful submission
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          interests: [],
          message: ''
        });
      }, 1500);
      
    } catch (error) {
      setErrorMessage('フォームの送信中にエラーが発生しました。後でもう一度お試しください。');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-[#ff7e5f]">お問い合わせ</h2>
      
      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg">
          <p className="font-medium">送信完了</p>
          <p>お問い合わせいただきありがとうございます。担当者より折り返しご連絡させていただきます。</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {errorMessage && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-4">
              {errorMessage}
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-[#4a3933] font-medium mb-1">お名前 <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#feb47b] focus:border-transparent"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#4a3933] font-medium mb-1">メールアドレス <span className="text-red-500">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#feb47b] focus:border-transparent"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-[#4a3933] font-medium mb-1">電話番号</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#feb47b] focus:border-transparent"
            />
          </div>
          
          <div className="mb-4">
            <p className="block text-[#4a3933] font-medium mb-2">ご興味のある項目（複数選択可）</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {interestOptions.map(option => (
                <div key={option.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={option.id}
                    name="interests"
                    value={option.id}
                    checked={formData.interests.includes(option.id)}
                    onChange={handleCheckboxChange}
                    className="mr-2 h-4 w-4 text-[#ff7e5f] focus:ring-[#feb47b]"
                  />
                  <label htmlFor={option.id} className="text-[#4a3933]">{option.label}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-[#4a3933] font-medium mb-1">メッセージ</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#feb47b] focus:border-transparent"
              placeholder="ご質問やご要望などをご記入ください"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium ${isSubmitting ? 'bg-[#ff7e5f]/60' : 'bg-[#ff7e5f] hover:bg-[#ff7e5f]/90'}`}
          >
            {isSubmitting ? '送信中...' : '送信する'}
          </button>
        </form>
      )}
    </div>
  );
};

export default GHJContactForm;