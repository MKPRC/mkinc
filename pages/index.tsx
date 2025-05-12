import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-center py-20 px-4">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        흐름(Flow), 지금 시작합니다.
      </motion.h1>
      <p className="text-lg text-gray-600">
        금의 가치, 사람의 가치, 기술의 가치를 연결하는 조율형 브랜드 – 흐름(Flow)
      </p>
    </div>
  );
}