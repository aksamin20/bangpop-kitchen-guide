import { useState } from 'react';
import { ChevronDown, ChevronUp, CheckSquare, Square } from 'lucide-react';
import { GuidelineSection } from '../data/guideline';

export interface SectionCardProps {
  key?: string | number;
  section: GuidelineSection;
  lang: 'th' | 'en';
  defaultExpanded?: boolean;
}

export function SectionCard({ section, lang, defaultExpanded = false }: SectionCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const title = section.title[lang];
  const content = section.content[lang];
  const checklist = section.checklist;

  // Format content with basic markdown-like syntax
  const formattedContent = content.split('\n').map((line, i) => {
    if (line.startsWith('**') && line.endsWith('**')) {
      return <h4 key={i} className="font-semibold text-gray-900 mt-4 mb-2">{line.replace(/\*\*/g, '')}</h4>;
    }
    if (line.startsWith('- ')) {
      return (
        <li key={i} className="ml-4 mb-1 text-gray-700 flex items-start">
          <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
          <span>{line.substring(2)}</span>
        </li>
      );
    }
    if (line.trim() === '') {
      return <div key={i} className="h-2" />;
    }
    return <p key={i} className="text-gray-700 mb-2 leading-relaxed">{line}</p>;
  });

  return (
    <div 
      id={section.id} 
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6 transition-all duration-200 hover:shadow-md"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-5 py-4 flex justify-between items-center bg-white hover:bg-gray-50/50 transition-colors text-left"
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">{title}</h3>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {isExpanded && (
        <div className="px-5 pb-5 pt-2 border-t border-gray-50">
          {content && (
            <div className="prose prose-sm sm:prose-base max-w-none">
              {formattedContent}
            </div>
          )}

          {checklist && checklist.length > 0 && (
            <div className="mt-4 space-y-2">
              {checklist.map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => toggleCheck(idx)}
                  className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors border ${
                    checkedItems[idx] 
                      ? 'bg-emerald-50/50 border-emerald-100' 
                      : 'bg-white border-gray-100 hover:border-emerald-200'
                  }`}
                >
                  <div className="mt-0.5 flex-shrink-0">
                    {checkedItems[idx] ? (
                      <CheckSquare size={20} className="text-emerald-500" />
                    ) : (
                      <Square size={20} className="text-gray-300" />
                    )}
                  </div>
                  <span className={`text-sm sm:text-base ${checkedItems[idx] ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                    {item[lang]}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
