'use client'

import { Section, FadeIn } from "../layout-helpers";

const beforeSchedule = [
    { time: "9:00 AM", task: "Scramble to write battle card" },
    { time: "10:30", task: "Drop everything for CEO request" },
    { time: "12:00", task: "Lunch at desk, writing copy" },
    { time: "2:00 PM", task: "Back-to-back stakeholder syncs" },
    { time: "5:00 PM", task: "Finally start the launch deck" },
    { time: "8:00 PM", task: "Still working..." },
];

const afterSchedule = [
    { time: "9:00 AM", task: "Assign battle card to Sales Agent" },
    { time: "9:15", task: "Focus time: launch strategy", highlight: true },
    { time: "11:00", task: "Review agent outputs, quick edits" },
    { time: "12:00", task: "Actual lunch break" },
    { time: "2:00 PM", task: "Strategic stakeholder conversations" },
    { time: "5:00 PM", task: "Done. Actually done.", highlight: true, orange: true },
];

export function FoundingPMMDayInLife() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-4xl text-zinc-900">A day in the life with Oden</h2>
                    <p className="text-zinc-500">Before and after your AI team joins</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Before Oden */}
                    <div className="bg-zinc-50/50 border border-zinc-100 rounded-2xl p-8 space-y-8">
                        <div className="flex items-center gap-3">
                            <span className="text-xl">🤯</span>
                            <h3 className="text-lg text-zinc-600">Before Oden</h3>
                        </div>
                        <div className="space-y-6">
                            {beforeSchedule.map((item, index) => (
                                <div key={index} className="flex gap-6 items-start">
                                    <span className="text-xs font-medium text-zinc-400 w-16 pt-0.5">{item.time}</span>
                                    <span className="text-sm text-zinc-500">{item.task}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* With Oden */}
                    <div className="bg-white border-t-4 border-t-[#111111] border border-zinc-100 shadow-xl rounded-2xl p-8 space-y-8 relative overflow-hidden">
                        <div className="flex items-center gap-3">
                            <span className="text-xl">✨</span>
                            <h3 className="text-lg text-zinc-900">With Oden</h3>
                        </div>
                        <div className="space-y-6">
                            {afterSchedule.map((item, index) => (
                                <div key={index} className="flex gap-6 items-start">
                                    <span className={`text-xs font-semibold w-16 pt-0.5 ${item.orange ? 'text-[#111111]' : 'text-zinc-400'}`}>
                                        {item.time}
                                    </span>
                                    <span className={`text-sm ${item.orange ? 'text-[#111111] font-bold' :
                                            item.highlight ? 'text-zinc-900 font-semibold' :
                                                'text-zinc-600'
                                        }`}>
                                        {item.task}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
