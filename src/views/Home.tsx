import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, MapPin, Truck, Shield, Briefcase, Settings } from 'lucide-react';
import { Home as HomeIcon } from 'lucide-react';
import Menu from '@/components/ui/Menu'

const Home = () => {
  const categories = [
    { 
      icon: <Truck className="w-6 h-6 text-blue-500" />, 
      label: "이사/청소", 
      subcategories: [
        { 
          label: "이사", 
          children: [
            "가정이사(투룸 이상)",
            "무전동차량/냉동차량/빙장차량",
            "원룸/소형 이사",
            "장거리 이사",
            "국제 이사",
            "특수 이사 서비스"
          ]
        },
        { 
          label: "입주/집 청소", 
          children: [
            "이사/입주 청소업체",
            "곰팡이 제거",
            "단열/결로 시공",
            "보일러/수도배관 청소",
            "줄눈 시공",
            "코킹 시공"
          ]
        }
      ]
    },
    { 
      icon: <Settings className="w-6 h-6 text-purple-500" />, 
      label: "설치/수리", 
      subcategories: [
        { 
          label: "가전 설치", 
          children: [
            "에어컨 설치",
            "TV 설치",
            "냉장고 설치",
            "세탁기 설치",
            "정수기 설치",
            "빌트인 가전 설치"
          ]
        },
        { 
          label: "수리 서비스", 
          children: [
            "전기 수리",
            "배관 수리",
            "도배 수리",
            "타일 수리",
            "싱크대 수리",
            "창호 수리"
          ]
        }
      ]
    },
    { 
      icon: <HomeIcon className="w-6 h-6 text-green-500" />, 
      label: "인테리어", 
      subcategories: [
        { 
          label: "인테리어 서비스", 
          children: [
            "리모델링",
            "홈 스타일링",
            "페인팅",
            "벽지 시공",
            "바닥재 시공",
            "주방 리모델링"
          ]
        }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedChild, setSelectedChild] = useState(null);

  // Effect to set default selection
  useEffect(() => {
    if (categories.length > 0) {
      // Select first category
      const firstCategory = categories[0];
      setSelectedCategory(firstCategory);

      // Select first subcategory of the first category
      if (firstCategory.subcategories.length > 0) {
        const firstSubcategory = firstCategory.subcategories[0];
        setSelectedSubcategory(firstSubcategory);

        // Optionally, select first child of the first subcategory
       
      }
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="container mx-auto bg-white">
      {/* Top Categories */}
      <div className="flex space-x-4 p-4 border-b overflow-x-auto">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center p-2 rounded-xl 
                 ${selectedCategory?.label === category.label 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'hover:bg-gray-200'}`}
            onClick={() => {
              setSelectedCategory(category);

              // Reset subcategory and child when changing category
              setSelectedSubcategory(category.subcategories[0]);
             
            }}
          >
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-2`}>
              {category.icon}
            </div>
            <span className="text-xs">{category.label}</span>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      {selectedCategory && (
        <div className="flex mt-4">
          {/* Left Subcategories (30%) */}
          <div className="w-[30%] p-4 border-r">
            {selectedCategory.subcategories.map((subcategory, subIndex) => (
              <div 
                key={subIndex}
                className={`p-3 cursor-pointer rounded-lg mb-2
                  ${selectedSubcategory === subcategory 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'hover:bg-gray-200'}`}
                onClick={() => {
                  setSelectedSubcategory(subcategory);
                  // Automatically select first child when subcategory changes
                  
                }}
              >
                <h3 className="font-medium">{subcategory.label}</h3>
              </div>
            ))}
          </div>

          {/* Right Children (70%) */}
          {selectedSubcategory && (
            <div className="w-[70%] p-4">
              <div className="grid grid-cols-2 gap-4">
                {selectedSubcategory.children.map((child, childIndex) => (
                  <div 
                    key={childIndex}
                    className={`p-3 border rounded-lg cursor-pointer 
                      ${selectedChild === child 
                        ? 'bg-blue-50 border-blue-300' 
                        : 'hover:bg-gray-100'}`}
                    onClick={() => setSelectedChild(child)}
                  >
                    {child}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;