'use client'

import { ListTodo, Users, Bell } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

export function GTMFeatures() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-zinc-900 mb-4">
                        One plan. <br />
                        <span className=" text-zinc-500">Everyone aligned.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-green-100 hover:bg-green-50/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300">
                            <ListTodo className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl text-zinc-900 mb-3">Launch Playbooks</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Auto-generates launch checklists by tier (major, minor, patch) with ownership, dependencies, and deadlines.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-green-100 hover:bg-green-50/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl text-zinc-900 mb-3">Cross-Functional Sync</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Tracks readiness across Product, Marketing, Sales, and CS. Flags blockers before they become fires.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-green-100 hover:bg-green-50/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300">
                            <Bell className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl text-zinc-900 mb-3">Milestone Alerts</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Sends proactive reminders to stakeholders when their tasks are due. No more &quot;I forgot&quot; excuses.
                        </p>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
