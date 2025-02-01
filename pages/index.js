import React, { useState } from 'react';
import { Search } from 'lucide-react';

const GeneticInfoWebsite = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = {
    'cognition': 'شناخت و یادگیری',
    'personality': 'شخصیت و انگیزه',
    'stress': 'استرس و انعطاف‌پذیری ذهنی',
    'motor': 'مهارت‌های حرکتی و خلاقیت',
    'memory': 'حافظه و تصمیم‌گیری',
    'creativity': 'خلاقیت و نوآوری'
  };

  const genes = [
    // Cognition and Learning
    { category: 'cognition', name: 'BDNF', rs: 'rs6265', description: 'مرتبط با نوروتروفین‌ها و حافظه' },
    { category: 'cognition', name: 'COMT', rs: 'rs4680', description: 'تأثیر بر عملکرد اجرایی و پردازش شناختی' },
    { category: 'cognition', name: 'DRD2', rs: 'rs1800497', description: 'مرتبط با انگیزه و یادگیری' },
    { category: 'cognition', name: 'DRD4', rs: 'rs1800955', description: 'مرتبط با خلاقیت و ریسک‌پذیری' },
    { category: 'cognition', name: 'GRIN2B', rs: 'rs1806201', description: 'تأثیر بر حافظه و یادگیری' },
    { category: 'cognition', name: 'CHRNA4', rs: 'rs1044396', description: 'تأثیر بر یادگیری و حافظه' },
    { category: 'cognition', name: 'SNAP25', rs: 'rs363050', description: 'مرتبط با پردازش اطلاعات و هوش' },
    { category: 'cognition', name: 'FOXP2', rs: 'rs2396753', description: 'مرتبط با توانایی‌های زبانی' },
    { category: 'cognition', name: 'KIBRA', rs: 'rs17070145', description: 'تأثیر بر حافظه اپیزودیک' },
    { category: 'cognition', name: 'NRXN1', rs: 'rs1045881', description: 'تأثیر بر عملکرد شناختی' },

    // Personality and Motivation
    { category: 'personality', name: 'SLC6A4', rs: 'rs25531', description: 'تأثیر بر میزان استرس و تنظیم سروتونین' },
    { category: 'personality', name: 'HTR2A', rs: 'rs6311', description: 'مرتبط با رفتارهای اجتماعی' },
    { category: 'personality', name: 'MAOA', rs: 'rs909525', description: 'مرتبط با کنترل تکانه‌ها و رفتارهای پرخاشگرانه' },
    { category: 'personality', name: 'OXTR', rs: 'rs53576', description: 'مرتبط با هوش هیجانی و تعاملات اجتماعی' },
    { category: 'personality', name: 'AVPR1A', rs: 'rs10877969', description: 'تأثیر بر همکاری و رفتارهای اجتماعی' },
    { category: 'personality', name: 'CDH13', rs: 'rs4329505', description: 'مرتبط با تنظیم رفتارهای پرخاشگرانه' },
    { category: 'personality', name: 'TAS2R38', rs: 'rs713598', description: 'تأثیر بر ادراک مزه‌ها و رفتارهای غذایی' },
    { category: 'personality', name: 'CLOCK', rs: 'rs1801260', description: 'مرتبط با ریتم شبانه‌روزی و بهره‌وری در ساعات مختلف روز' },
    { category: 'personality', name: 'NPSR1', rs: 'rs324981', description: 'مرتبط با تحمل استرس و اضطراب' },
    { category: 'personality', name: 'PER3', rs: 'rs57875989', description: 'تأثیر بر ریتم خواب و عملکرد شناختی' },

    // Stress and Mental Flexibility
    { category: 'stress', name: 'CRHR1', rs: 'rs110402', description: 'تأثیر بر واکنش به استرس' },
    { category: 'stress', name: 'FKBP5', rs: 'rs1360780', description: 'مرتبط با تحمل استرس و ریکاوری پس از استرس' },
    { category: 'stress', name: 'NR3C1', rs: 'rs6198', description: 'مرتبط با تنظیم پاسخ‌های هورمونی به استرس' },
    { category: 'stress', name: 'TPH2', rs: 'rs4570625', description: 'مرتبط با تولید سروتونین و کنترل خلق‌وخو' },
    { category: 'stress', name: 'GRM3', rs: 'rs274622', description: 'تأثیر بر انعطاف‌پذیری شناختی' },
    { category: 'stress', name: 'ADCYAP1R1', rs: 'rs2267735', description: 'مرتبط با حساسیت به اضطراب' },

    // Motor Skills and Creativity
    { category: 'motor', name: 'ACTN3', rs: 'rs1815739', description: 'مرتبط با عملکرد عضلانی و استقامت' },
    { category: 'motor', name: 'DCDC2', rs: 'rs2274305', description: 'مرتبط با پردازش زبان و مهارت‌های خواندن' },
    { category: 'motor', name: 'ROBO1', rs: 'rs7631357', description: 'مرتبط با توانایی‌های زبانی و حرکتی' },
    { category: 'motor', name: 'DTNBP1', rs: 'rs760761', description: 'تأثیر بر هماهنگی حرکتی و شناختی' },
    { category: 'motor', name: 'GRIA1', rs: 'rs4958351', description: 'مرتبط با پردازش اطلاعات حسی' },

    // Memory and Decision Making
    { category: 'memory', name: 'CNR1', rs: 'rs2023239', description: 'تأثیر بر حافظه و انگیزه' },
    { category: 'memory', name: 'APOE', rs: ['rs429358', 'rs7412'], description: 'تأثیر بر عملکرد حافظه و پردازش اطلاعات' },
    { category: 'memory', name: 'PLCB1', rs: 'rs1047383', description: 'تأثیر بر تصمیم‌گیری و عملکرد اجرایی' },
    { category: 'memory', name: 'CHRM2', rs: 'rs8191992', description: 'مرتبط با پردازش شناختی و هوش سیال' },

    // Creativity and Innovation
    { category: 'creativity', name: 'CREB1', rs: 'rs4675690', description: 'تأثیر بر انعطاف‌پذیری شناختی و یادگیری' },
    { category: 'creativity', name: 'GCH1', rs: 'rs8007267', description: 'مرتبط با تنظیم دوپامین و خلاقیت' },
    { category: 'creativity', name: 'PPP1R1B', rs: 'rs907094', description: 'تأثیر بر پردازش شناختی' },
    { category: 'creativity', name: 'FADS2', rs: 'rs174575', description: 'مرتبط با پردازش اطلاعات و عملکرد مغزی' },
    { category: 'creativity', name: 'KATNAL2', rs: 'rs2535629', description: 'مرتبط با هوش عمومی و توانایی‌های شناختی' }
  ];

  const filteredGenes = genes.filter(gene => 
    (selectedCategory === 'all' || gene.category === selectedCategory) &&
    (gene.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     (typeof gene.rs === 'string' ? gene.rs.toLowerCase().includes(searchTerm.toLowerCase()) : 
      gene.rs.some(rs => rs.toLowerCase().includes(searchTerm.toLowerCase()))) ||
     gene.description.includes(searchTerm))
  );

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">پایگاه داده ژن‌های انسانی</h1>
          <p className="text-lg text-purple-600">اطلاعات جامع درباره ژن‌ها و تأثیرات آنها</p>
          <p className="text-sm text-purple-500 mt-2">تعداد کل ژن‌ها: {genes.length}</p>
        </header>

        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" size={20} />
            <input
              type="text"
              placeholder="جستجو بر اساس نام ژن یا RS..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2 flex-wrap justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === 'all' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white text-purple-600 hover:bg-purple-50'
              } transition-colors duration-200`}
            >
              همه ({genes.length})
            </button>
            {Object.entries(categories).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === key 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white text-purple-600 hover:bg-purple-50'
                } transition-colors duration-200`}
              >
                {value} ({genes.filter(g => g.category === key).length})
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGenes.map((gene, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-purple-900">{gene.name}</h2>
                <div className="flex flex-col items-end">
                  {Array.isArray(gene.rs) ? (
                    gene.rs.map((rs, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mb-1">
                        {rs}
                      </span>
                    ))
                  ) : (
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {gene.rs}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-600">{gene.description}</p>
              <div className="mt-4">
                <span className="text-sm text-purple-600">
                  {categories[gene.category]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneticInfoWebsite;
