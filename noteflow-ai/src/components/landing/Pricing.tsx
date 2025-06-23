/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Check, Sparkles, Zap, Users, Shield, Infinity } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const router = useRouter();

  const plans = [
    {
      name: "Essential",
      description:
        "Perfect for individuals getting started with AI-powered note-taking",
      monthlyPrice: 0,
      yearlyPrice: 0,
      aiCredits: "50 AI requests/month",
      popular: false,
      features: [
        "Unlimited notes and pages",
        "Basic AI writing assistance",
        "50 AI-powered suggestions per month",
        "Real-time collaboration (up to 3 users)",
        "Web and mobile access",
        "Basic templates library",
        "5GB file storage",
        "Standard support",
      ],
      limitations: ["Limited AI model access", "Basic AI capabilities only"],
    },
    {
      name: "Pro",
      description: "Unleash the full power of AI for teams and power users",
      monthlyPrice: 19,
      yearlyPrice: 189,
      aiCredits: "Unlimited AI access",
      popular: true,
      features: [
        "Everything in Essential",
        "Unlimited AI requests",
        "Advanced AI models (GPT-4, Claude)",
        "AI-powered content generation",
        "Smart document summarization",
        "Unlimited team collaboration",
        "Advanced templates and blocks",
        "100GB file storage",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "Team management tools",
      ],
      limitations: [],
    },
  ];

  const getPrice = (plan: any) => {
    return billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
  };
  const getSavings = (plan: any) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice;
    return Math.round(((monthlyCost - yearlyCost) / monthlyCost) * 100);
  };

  const handleGetStarted = (plan: any) => {
    if (plan.monthlyPrice === 0) {
      // For free plan, navigate to dashboard
      router.push('/dashboard');
    }
    // For paid plans, you can add payment logic here later
  };
  return (
    <div id="pricing" className="min-h-screen bg-gradient-to-br from-slate-100 via-purple-50 to-slate-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-200 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-purple-700 text-sm font-medium">
              AI-Powered Productivity
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-purple-700 to-purple-600 bg-clip-text text-transparent mb-6">
            Choose Your Plan
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Transform your note-taking with AI intelligence. Start free, upgrade
            when you&apos;re ready to unlock unlimited potential.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white border border-slate-200 rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                billingCycle === "monthly"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-800"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                billingCycle === "yearly"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-800"
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group ${
                plan.popular
                  ? "bg-gradient-to-br from-purple-50 to-white border-purple-300 shadow-purple-200 shadow-xl"
                  : "bg-white border-slate-200 hover:border-purple-300 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-8">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`flex items-center justify-center w-16 h-16 rounded-2xl ${
                        plan.popular
                          ? "bg-gradient-to-br from-purple-500 to-pink-500"
                          : "bg-gradient-to-br from-slate-400 to-slate-500"
                      }`}
                    >
                      {plan.popular ? (
                        <Infinity className="w-8 h-8 text-white" />
                      ) : (
                        <Zap className="w-8 h-8 text-white" />
                      )}
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-1">
                        {plan.name}
                      </h3>
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                          plan.popular
                            ? "bg-purple-100 text-purple-700 border border-purple-200"
                            : "bg-slate-100 text-slate-600 border border-slate-200"
                        }`}
                      >
                        <Sparkles className="w-4 h-4" />
                        {plan.aiCredits}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-4xl font-bold text-slate-800">
                        {getPrice(plan) === 0 ? "Free" : `$${getPrice(plan)}`}
                      </span>
                      {getPrice(plan) > 0 && (
                        <span className="text-slate-600">
                          /{billingCycle === "monthly" ? "month" : "year"}
                        </span>
                      )}
                    </div>
                    {billingCycle === "yearly" && getPrice(plan) > 0 && (
                      <p className="text-green-600 text-sm">
                        Save {getSavings(plan)}% annually
                      </p>
                    )}
                  </div>                  <SignedOut>
                    <button
                      disabled={true}
                      className="w-full py-4 px-6 rounded-xl font-semibold text-gray-400 bg-gray-200 cursor-not-allowed opacity-60 mb-2 transition-all duration-200"
                    >
                      Sign in to get started
                    </button>
                  </SignedOut>                  <SignedIn>
                    <button
                      onClick={() => handleGetStarted(plan)}
                      className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 transform hover:scale-105 active:scale-95 mb-2 ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/25"
                          : getPrice(plan) === 0
                          ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg shadow-green-500/25"
                          : "bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 border border-slate-400"
                      }`}
                    >
                      {plan.popular
                        ? "Start Pro Trial"
                        : getPrice(plan) === 0
                        ? "Get Started Free"
                        : "Get Started"}
                    </button>
                  </SignedIn>

                  <p className="text-center text-slate-500 text-xs">
                    {plan.popular
                      ? "14-day free trial • No credit card required"
                      : getPrice(plan) === 0
                      ? "Forever free • No credit card required"
                      : "Free to start • Upgrade anytime"}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`rounded-full p-1 mt-0.5 ${
                          plan.popular ? "bg-purple-100" : "bg-slate-100"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.popular ? "text-purple-600" : "text-slate-600"
                          }`}
                        />
                      </div>
                      <span className="text-slate-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center gap-8 text-slate-600 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>10,000+ Teams</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
