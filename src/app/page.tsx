import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#19191F] to-[#2D2D35] text-white p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to AI Agent</h1>
      
      <div className="relative w-64 h-64 mb-8">
        <Image
          src="/images/robot.png"
          alt="AI Agent Robot"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      
      <p className="text-lg text-center mb-8 max-w-md">
        Your intelligent assistant for managing investments and financial decisions.
      </p>
      
      <div className="flex gap-4">
        <Button className="bg-[#E7B2DB] hover:bg-[#D1A1C5] text-[#19191F] font-semibold px-6 py-3">
          Login
        </Button>
        <Button className="border-[#E7B2DB] bg-[#e7b2db] text-black hover:bg-[#E7B2DB] font-semibold px-6 py-3">
          Connect Wallet
        </Button>
      </div>
    </div>
  )
}

