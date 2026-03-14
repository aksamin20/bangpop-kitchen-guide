import { useState, useMemo } from 'react';
import { Search, Globe, Bot, Printer, Copy, Menu, X, Check } from 'lucide-react';
import { guidelineData } from './data/guideline';
import { SectionCard } from './components/SectionCard';
import { AIChat } from './components/AIChat';

export default function App() {
  const [lang, setLang] = useState<'th' | 'en'>('th');
  const [searchQuery, setSearchQuery] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Filter sections based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return guidelineData;
    const query = searchQuery.toLowerCase();
    return guidelineData.filter(section => {
      const titleMatch = section.title[lang].toLowerCase().includes(query);
      const contentMatch = section.content[lang].toLowerCase().includes(query);
      const checklistMatch = section.checklist?.some(item => item[lang].toLowerCase().includes(query));
      return titleMatch || contentMatch || checklistMatch;
    });
  }, [searchQuery, lang]);

  const handleCopySummary = () => {
    const summarySection = guidelineData.find(s => s.id === 'shortest-summary');
    if (summarySection) {
      navigator.clipboard.writeText(`${summarySection.title[lang]}\n\n${summarySection.content[lang]}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col md:flex-row">
      
      {/* Mobile Header & Sticky Nav */}
      <div className="md:hidden sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Menu size={24} />
          </button>
          <h1 className="font-bold text-lg text-emerald-800 truncate">BangPop Kitchen Hand</h1>
        </div>
        <button 
          onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors"
        >
          <Globe size={16} />
          {lang.toUpperCase()}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 shadow-xl transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 md:shadow-none md:z-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-emerald-800 tracking-tight">BangPop</h1>
              <p className="text-sm text-gray-500 font-medium mt-1">Kitchen Hand Guideline</p>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-2 text-gray-400 hover:bg-gray-100 rounded-lg">
              <X size={20} />
            </button>
          </div>

          <div className="p-4 border-b border-gray-100 hidden md:block">
            <button 
              onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl text-sm font-medium transition-colors"
            >
              <Globe size={16} className="text-emerald-600" />
              {lang === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
              {lang === 'th' ? 'สารบัญ' : 'Contents'}
            </div>
            {guidelineData.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors truncate"
              >
                {section.title[lang]}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-gray-100 space-y-2">
            <button 
              onClick={handlePrint}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <Printer size={18} />
              {lang === 'th' ? 'พิมพ์เอกสาร' : 'Print Guideline'}
            </button>
            <button 
              onClick={handleCopySummary}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
            >
              {copied ? <Check size={18} className="text-emerald-600" /> : <Copy size={18} />}
              {copied 
                ? (lang === 'th' ? 'คัดลอกแล้ว!' : 'Copied!') 
                : (lang === 'th' ? 'คัดลอกสรุปย่อ' : 'Copy Summary')}
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 min-w-0 flex flex-col h-screen overflow-hidden">
        
        {/* Search Bar (Sticky on Desktop) */}
        <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 p-4 sticky top-0 z-30">
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'th' ? 'ค้นหาหัวข้อ, หน้าที่, เช็คลิสต์...' : 'Search guidelines, checklists...'}
              className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 pb-32">
          <div className="max-w-3xl mx-auto">
            
            {/* Quick Access Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { id: 'morning-checklist', icon: '🌅', label: { th: 'ชิพเช้า', en: 'Morning' } },
                { id: 'evening-checklist', icon: '🌙', label: { th: 'ชิพเย็น', en: 'Evening' } },
                { id: 'closing-checklist', icon: '🧹', label: { th: 'ปิดร้าน', en: 'Closing' } },
                { id: 'priorities', icon: '⚡', label: { th: 'ลำดับการล้าง', en: 'Priorities' } },
              ].map(pill => (
                <button
                  key={pill.id}
                  onClick={() => scrollToSection(pill.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800 transition-all shadow-sm"
                >
                  <span>{pill.icon}</span>
                  {pill.label[lang]}
                </button>
              ))}
            </div>

            {/* Sections */}
            {filteredSections.length > 0 ? (
              <div className="space-y-6">
                {filteredSections.map((section, index) => (
                  <SectionCard 
                    key={section.id} 
                    section={section} 
                    lang={lang} 
                    defaultExpanded={searchQuery !== '' || index === 0} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <Search size={24} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  {lang === 'th' ? 'ไม่พบข้อมูล' : 'No results found'}
                </h3>
                <p className="text-gray-500">
                  {lang === 'th' ? 'ลองค้นหาด้วยคำอื่น' : 'Try searching with different keywords'}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Floating AI Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 font-medium"
        >
          <Bot size={20} />
          <span className="hidden sm:inline">{lang === 'th' ? 'ถาม AI' : 'Ask AI'}</span>
        </button>
      )}

      {/* AI Chat Panel */}
      <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} lang={lang} />
      
    </div>
  );
}

