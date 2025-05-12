import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HomePage() {
  const [showServiceSlide, setShowServiceSlide] = useState(false);

  const scrollToMembership = () => {
    const section = document.getElementById("membership-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setShowServiceSlide(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="bg-white py-32 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          흐름(Flow), 지금 시작합니다.
        </motion.h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-10 text-lg">
          금의 가치, 사람의 가치, 기술의 가치를 연결하는 조율형 브랜드 – 흐름(Flow)
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Button className="px-8 py-4 text-lg rounded-full" onClick={scrollToMembership}>
            흐름 멤버십 알아보기
          </Button>
          <Button variant="outline" className="px-8 py-4 text-lg rounded-full border-blue-600 text-blue-600 hover:bg-blue-50" onClick={scrollToMembership}>
            나에게 맞는 흐름 시작하기
          </Button>
        </div>

        <div className="mt-8 text-sm text-gray-600 space-y-2">
          <p><span className="font-semibold text-blue-600">2.1배 빠른 연결</span> – Flow 구독자 후기</p>
          <p><span className="font-semibold text-blue-600">차량 구매 + Gold 혜택</span> – Flow+ 이용자 체감</p>
          <p><span className="font-semibold text-blue-600">가치의 전환점 경험</span> – Flow Gold 실사용 리뷰</p>
        </div>
      </div>

      {/* 슬라이드 형태의 서비스 소개 */}
      {showServiceSlide && (
        <div className="bg-white py-16 px-4 md:px-12 transition-opacity duration-700">
          <h2 className="text-2xl font-bold text-center mb-10">Flow 멤버십에서 가능한 조율 서비스</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { title: "AI와 함께하는 소프트웨어 개발", desc: "기획부터 개발까지 기술 기반 조율", label: "Flow Gold 전용" },
              { title: "금의 가치 (Gold Line)", desc: "우아한 디자인, 최적의 조건", label: "Flow+ 이상" },
              { title: "고민 상담 & 철학", desc: "기준 철학, 흐름 선언, 조율형 대화", label: "Flow+ 이상" },
              { title: "자동차 솔루션 (Auto Line)", desc: "신차·중고차 리스/렌트/회수 연계", label: "모든 플랜 이용 가능" }
            ].map((service, idx) => (
              <Card key={idx} className="shadow hover:shadow-md transition">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                  <p className="text-gray-600 mb-1">{service.desc}</p>
                  <p className="text-xs text-blue-500">{service.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* 멤버십 섹션 */}
      <div id="membership-section" className="bg-white py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-2">흐름 멤버십 가입</h2>
        <p className="text-gray-600 mb-12 text-lg">
          당신의 흐름에 맞는 가치를 전달하는 구독형 조율 플랫폼 – 흐름(Flow)
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Flow Basic", desc: "뉴스레터, 도구 추천, 흐름 인사이트 제공", price: "₩9,900 / 월" },
            { name: "Flow+", desc: "1:1 조율 세션 월 1회 + 콘텐츠 우선 제공", price: "₩29,000 / 월" },
            { name: "Flow Gold", desc: "웹제작, 금·차 컨시어지, 기술 파트너링 지원", price: "₩79,000 / 월" }
          ].map((plan, idx) => (
            <Card key={idx} className="shadow-lg">
              <CardContent className="p-6 flex flex-col gap-4 items-center">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-sm text-gray-600 text-center">{plan.desc}</p>
                <p className="font-bold text-lg">{plan.price}</p>
                <Button className="mt-2 px-4 py-2 text-sm rounded-full">가입하기</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-sm px-6 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-left">
          <div>
            <h4 className="font-bold mb-2">조율 서비스</h4>
            <ul className="space-y-1">
              <li>AI 개발 지원</li>
              <li>자동차 연계</li>
              <li>금 라인 컨시어지</li>
              <li>철학/조율 상담</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">고객센터</h4>
            <ul className="space-y-1">
              <li>자주 묻는 질문</li>
              <li>문의하기</li>
              <li>이벤트 및 공지</li>
              <li>이용가이드</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">마이 페이지</h4>
            <ul className="space-y-1">
              <li>구독 상태 확인</li>
              <li>상담 기록 보기</li>
              <li>결제 내역</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>사이트맵 | 이용약관 | 개인정보처리방침 | 저작권안내</p>
          <p className="mt-2">
            ⓒ 2025 흐름(Flow) | 조율된 흐름은 가치를 만듭니다.<br />
            대표자: 김무경 | 사업자등록번호: 829-87-03239<br />
            대구광역시 북구 침산로 229-1 1층 | Fax: 0303-3440-3444<br />
            중소기업확인서 및 기타 서류는 고객 요청 시 제공합니다.<br />
            통신판매업신고번호: 제2025-대구북구-XXXX호
          </p>
        </div>
      </footer>
    </div>
  );
}