import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Gift, PiggyBank, Target } from "lucide-react"

const chartBars = [24, 32, 36, 44, 52, 64, 72, 84, 96]

export default function AssetHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Simple white background */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 py-16 lg:py-24">
        <header className="flex flex-col items-center text-center">
          {/* Removed the top badge */}
          <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Secure your child's future
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-gray-600">
            Smart savings and investment platform designed for families. Watch your child's future grow with every contribution.
          </p>
        </header>

        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
          <Button 
            size="lg" 
            className="group px-8 py-4 text-lg font-semibold"
            style={{ backgroundColor: '#cf21c3' }}
          >
            Join the waitlist
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
    
        </div>

        {/* Phone Mockup Section - Made smaller for mobile */}
        <div className="relative mt-12 lg:mt-20 w-full flex justify-center">
          <div className="relative flex justify-center">
            {/* Smaller phone for mobile */}
            <div className="relative flex h-[500px] w-[250px] lg:h-[600px] lg:w-[300px] flex-col overflow-hidden rounded-[2.5rem] lg:rounded-[3rem] border-8 border-gray-800 bg-white shadow-xl">
              {/* Phone Header */}
              <div className="flex items-center justify-between bg-gray-100 px-4 lg:px-6 pt-3 lg:pt-4 pb-2 rounded-t-[1.8rem] lg:rounded-t-[2rem]">
                <div className="flex items-center gap-1">
                  <div className="h-1 w-1 rounded-full bg-gray-400" />
                  <div className="h-1 w-1 rounded-full bg-gray-400" />
                  <div className="h-1 w-1 rounded-full bg-gray-400" />
                </div>
                <span className="text-sm font-semibold text-gray-900">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-4 rounded-sm border border-gray-400" />
                  <div className="h-1 w-1 rounded-full bg-gray-400" />
                </div>
              </div>

              {/* App Content */}
              <div className="flex-1 bg-white px-4 lg:px-6 py-4 lg:py-6 rounded-b-[1.8rem] lg:rounded-b-[2rem]">
                {/* Profile Section */}
                <div className="flex items-center gap-3 mb-4 lg:mb-6">
                  <div className="h-8 w-8 lg:h-10 lg:w-10 rounded-full bg-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">👤</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm lg:text-base">Emma's Future</div>
                    <div className="text-xs lg:text-sm text-gray-600">Age 8 • Goal: College</div>
                  </div>
                </div>

                {/* Balance Section */}
                <div className="relative bg-white rounded-2xl p-4 lg:p-6 mb-4 lg:mb-6 shadow-sm border border-gray-200">
                  <span className="text-sm font-medium text-gray-500">Total Savings</span>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900">
                    $22,246
                  </div>
                  <span className="text-sm font-medium text-green-500">+4.2% this month</span>
                </div>

                {/* Chart Area */}
                <div className="relative rounded-2xl bg-gray-50 p-3 lg:p-4 mb-4 lg:mb-6 border border-gray-200">
                  <div className="flex items-baseline justify-between mb-3 lg:mb-4">
                    <div className="text-sm font-semibold text-gray-600">Growth Plan</div>
                    <span className="text-sm font-semibold text-primary">+12.4% YTD</span>
                  </div>
                  <div className="flex items-end justify-between gap-1 h-16 lg:h-20 mb-2 lg:mb-3">
                    {chartBars.map((height, index) => (
                      <div
                        key={index}
                        className="w-3 lg:w-4 rounded-full bg-purple-500"
                        style={{ 
                          height: `${(height / 96) * 50}px`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Portfolio Cards */}
                <div className="space-y-2 lg:space-y-3">
                  <div className="relative rounded-xl bg-gray-50 p-3 lg:p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 lg:gap-3">
                        <div className="h-6 w-6 lg:h-8 lg:w-8 rounded-full bg-green-500 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">S</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm lg:text-base">$18,200</div>
                          <div className="text-xs lg:text-sm text-gray-600">Stock Portfolio</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-green-600">+5.2%</div>
                        <div className="text-xs text-gray-500">30d</div>
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-xl bg-gray-50 p-3 lg:p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 lg:gap-3">
                        <div className="h-6 w-6 lg:h-8 lg:w-8 rounded-full bg-blue-500 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">B</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm lg:text-base">$4,046</div>
                          <div className="text-xs lg:text-sm text-gray-600">Bonds & CDs</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-blue-600">+2.1%</div>
                        <div className="text-xs text-gray-500">30d</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 lg:gap-3 mt-4 lg:mt-6">
                  <button 
                    className="flex-1 text-white rounded-xl py-2 lg:py-3 px-3 lg:px-4 font-semibold text-xs lg:text-sm"
                    style={{ backgroundColor: '#cf21c3' }}
                  >
                    Add Funds
                  </button>
                  <button className="flex-1 bg-gray-200 text-gray-700 rounded-xl py-2 lg:py-3 px-3 lg:px-4 font-semibold text-xs lg:text-sm">
                    View Reports
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Cards - Only show on desktop */}
            <div className="absolute -left-32 top-32 hidden lg:block opacity-0 animate-[slideFromPhone_2s_ease-out_2s_forwards]">
              <FloatingCard
                icon={<Target className="h-5 w-5 text-purple-600" />}
                title="Goal Progress"
                value="$22,246"
                status="68% to college goal"
                trend="up"
              />
            </div>

            <div className="absolute -right-40 top-24 hidden lg:block opacity-0 animate-[slideFromPhone_2s_ease-out_3s_forwards]">
              <FloatingCard
                icon={<TrendingUp className="h-5 w-5 text-blue-600" />}
                title="Monthly Growth"
                value="+$450"
                status="Auto-investing active"
                trend="up"
              />
            </div>

            <div className="absolute -left-40 bottom-20 hidden lg:block opacity-0 animate-[slideFromPhone_2s_ease-out_4s_forwards]">
              <FloatingCard
                icon={<Gift className="h-5 w-5 text-green-600" />}
                title="Family Gifts"
                value="$3,420"
                status="12 contributors"
                trend="neutral"
              />
            </div>

            {/* Notification badges - Only show on desktop */}
            <div className="absolute -top-16 -left-24 hidden lg:block opacity-0 animate-[slideFromPhone_2s_ease-out_1.5s_forwards]">
              <PillBadge label="New: Smart Goals" />
            </div>
            <div className="absolute -top-20 -right-32 hidden lg:block opacity-0 animate-[slideFromPhone_2s_ease-out_1.8s_forwards]">
              <PillBadge label="Family Portal Active" />
            </div>
          </div>
        </div>

        {/* Mobile Floating Cards - Stacked below phone */}
        <div className="mt-8 lg:hidden w-full max-w-md mx-auto space-y-4">
          <div className="opacity-0 animate-[slideFromPhone_1s_ease-out_0.5s_forwards]">
            <FloatingCard
              icon={<Target className="h-4 w-4 text-purple-600" />}
              title="Goal Progress"
              value="$22,246"
              status="68% to college goal"
              trend="up"
            />
          </div>
          <div className="opacity-0 animate-[slideFromPhone_1s_ease-out_1s_forwards]">
            <FloatingCard
              icon={<TrendingUp className="h-4 w-4 text-blue-600" />}
              title="Monthly Growth"
              value="+$450"
              status="Auto-investing active"
              trend="up"
            />
          </div>
          <div className="opacity-0 animate-[slideFromPhone_1s_ease-out_1.5s_forwards]">
            <FloatingCard
              icon={<Gift className="h-4 w-4 text-green-600" />}
              title="Family Gifts"
              value="$3,420"
              status="12 contributors"
              trend="neutral"
            />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideFromPhone {
            0% {
              opacity: 0;
              transform: scale(0.3) translateY(20px);
            }
            50% {
              opacity: 0.8;
              transform: scale(0.7);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `
      }} />
    </section>
  )
}

function FloatingCard({
  icon,
  title,
  value,
  status,
  trend,
}: {
  icon: React.ReactNode
  title: string
  value: string
  status: string
  trend: "up" | "down" | "neutral"
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <p className="text-sm font-semibold text-gray-600">{title}</p>
      </div>
      <p className="text-xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-xs text-gray-600">{status}</p>
    </div>
  )
}

function PillBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-semibold text-gray-700 shadow-lg">
      {label}
    </div>
  )
}