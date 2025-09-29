import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Gift, PiggyBank, Target } from "lucide-react"

const chartBars = [24, 32, 36, 44, 52, 64, 72, 84, 96]

export default function AssetHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Solid white background - no gradients */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-16 lg:py-24">
        <header className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-sm border border-gray-200">
            <PiggyBank className="h-4 w-4" />
            KidsNest Finance
          </div>
          <h1 className="mt-8 max-w-4xl text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Secure your child's future
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-gray-600">
            Smart savings and investment platform designed for families. Watch your child's future grow with every contribution.
          </p>
        </header>

        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
          <Button size="lg" className="group px-8 py-4 text-lg font-semibold">
            Join the waitlist
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <button className="text-lg font-medium text-primary underline-offset-4 hover:underline">
            See how it works
          </button>
        </div>

        <div className="relative mt-20 flex w-full justify-center">
          {/* Central Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative flex h-[600px] w-[300px] flex-col overflow-hidden rounded-[3rem] border-8 border-gray-800 bg-white shadow-2xl">
              {/* Phone Header */}
              <div className="flex items-center justify-between bg-gray-100 px-6 pt-4 pb-2 rounded-t-[2rem]">
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
              <div className="flex-1 bg-white px-6 py-6 rounded-b-[2rem]">
                {/* Profile Section */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold">👤</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Emma's Future</div>
                    <div className="text-sm text-gray-600">Age 8 • Goal: College</div>
                  </div>
                </div>

                {/* Balance Section */}
                <div className="relative bg-white rounded-2xl p-6 mb-6 shadow-sm border border-gray-200">
                  <span className="text-sm font-medium text-gray-500">Total Savings</span>
                  <div className="text-3xl font-bold text-gray-900 relative">
                    $22,246
                    <div className="absolute -top-2 -right-2 opacity-0 animate-[popOut_2s_ease-out_2s_forwards] pointer-events-none">
                      <div className="absolute inset-0 transform translate-x-[200px] translate-y-[-100px] scale-0 group-hover:scale-100 transition-all duration-500">
                        <FloatingCard
                          icon={<Target className="h-5 w-5 text-purple-600" />}
                          title="Goal Progress"
                          value="$22,246"
                          status="68% to college goal"
                          trend="up"
                        />
                      </div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-green-500">+4.2% this month</span>
                </div>

                {/* Chart Area */}
                <div className="relative rounded-2xl bg-gray-50 p-4 mb-6 border border-gray-200">
                  <div className="flex items-baseline justify-between mb-4">
                    <div className="text-sm font-semibold text-gray-600">Growth Plan</div>
                    <span className="text-sm font-semibold text-primary">+12.4% YTD</span>
                  </div>
                  <div className="flex items-end justify-between gap-1 h-20 mb-3">
                    {chartBars.map((height, index) => (
                      <div
                        key={index}
                        className="w-4 rounded-full bg-gray-400"
                        style={{ 
                          height: `${(height / 96) * 60}px`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                  <div className="absolute top-0 right-0 opacity-0 animate-[popOut_2s_ease-out_3s_forwards] pointer-events-none">
                    <div className="transform translate-x-[150px] translate-y-[-50px] scale-0 group-hover:scale-100 transition-all duration-500">
                      <FloatingCard
                        icon={<TrendingUp className="h-5 w-5 text-blue-600" />}
                        title="Monthly Growth"
                        value="+$450"
                        status="Auto-investing active"
                        trend="up"
                      />
                    </div>
                  </div>
                </div>

                {/* Portfolio Cards */}
                <div className="space-y-3">
                  <div className="relative rounded-xl bg-gray-50 p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">S</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">$18,200</div>
                          <div className="text-sm text-gray-600">Stock Portfolio</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-green-600">+5.2%</div>
                        <div className="text-xs text-gray-500">30d</div>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 opacity-0 animate-[popOut_2s_ease-out_4s_forwards] pointer-events-none">
                      <div className="transform translate-x-[-200px] translate-y-[20px] scale-0 group-hover:scale-100 transition-all duration-500">
                        <FloatingCard
                          icon={<Gift className="h-5 w-5 text-green-600" />}
                          title="Family Gifts"
                          value="$3,420"
                          status="12 contributors"
                          trend="neutral"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-xl bg-gray-50 p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">B</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">$4,046</div>
                          <div className="text-sm text-gray-600">Bonds & CDs</div>
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
                <div className="flex gap-3 mt-6">
                  <button className="flex-1 bg-purple-600 text-white rounded-xl py-3 px-4 font-semibold text-sm">
                    Add Funds
                  </button>
                  <button className="flex-1 bg-gray-200 text-gray-700 rounded-xl py-3 px-4 font-semibold text-sm">
                    View Reports
                  </button>
                </div>
              </div>

              {/* Glow effect removed */}
            </div>

            {/* Floating Cards */}
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

            {/* Notification badges */}
            <div className="absolute -top-16 -left-24 hidden lg:block opacity-0 animate-[slideFromPhone_2s_ease-out_1.5s_forwards]">
              <PillBadge label="New: Smart Goals" />
            </div>
            <div className="absolute -top-20 -right-32 hidden lg:block opacity-0 animate-[slideFromPhone_2s_ease-out_1.8s_forwards]">
              <PillBadge label="Family Portal Active" />
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideFromPhone {
            0% {
              opacity: 0;
              transform: scale(0.3) translateX(0) translateY(0);
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
          
          @keyframes popOut {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }
            50% {
              opacity: 0.7;
              transform: scale(0.8);
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
    <div className="rounded-3xl border border-gray-200 bg-white px-6 py-6 shadow-xl transform hover:scale-105 transition-all duration-300 max-w-xs">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <p className="text-sm font-semibold text-gray-600">{title}</p>
      </div>
      <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-sm text-gray-600">{status}</p>
    </div>
  )
}

function PillBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-lg">
      {label}
    </div>
  )
}