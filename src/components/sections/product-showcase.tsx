'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { FadeIn, siteShellClassName } from './layout-helpers'

type WorkflowId =
  | 'listen'
  | 'author'
  | 'output'

type Workflow = {
  id: WorkflowId
  number: string
  title: string
  headline: string
  description: string
  actions: Array<{
    label: string
    value: string
  }>
  sources: string[]
  previewLabel: string
  previewMeta: string
}

const workflows: Workflow[] = [
  {
    id: 'listen',
    number: '01',
    title: 'Listen',
    headline: 'Every signal lands in one place.',
    description: 'Buyer calls, docs, Slack threads, support tickets, product changes, and competitor moves all become one continuous PMM foundation.',
    actions: [
      { label: 'Pulls', value: 'buyer signal' },
      { label: 'Watches', value: 'market movement' },
      { label: 'Connects', value: 'product context' },
    ],
    sources: ['Sales calls', 'Docs', 'Slack', 'Support', 'Product updates', 'Competitor sites'],
    previewLabel: 'Signal stream',
    previewMeta: 'Updated 9m ago',
  },
  {
    id: 'author',
    number: '02',
    title: 'Author',
    headline: 'PMM holds the pen on what is true.',
    description: 'Positioning, claims, proof points, and competitive comparisons are authored directly in Oden, with every claim traced back to the signal that informed it.',
    actions: [
      { label: 'Owns', value: 'the canon' },
      { label: 'Sources', value: 'every claim' },
      { label: 'Keeps', value: 'truth current' },
    ],
    sources: ['Buyer language', 'Approved docs', 'Product facts', 'Win-loss', 'Competitive intel'],
    previewLabel: 'Authored truth',
    previewMeta: 'Version 2.4',
  },
  {
    id: 'output',
    number: '03',
    title: 'Output',
    headline: 'Every artifact comes out current and sourced.',
    description: 'Sales decks, battle cards, talk tracks, launch content, web copy, partner enablement, and internal answers all flow from the same current source.',
    actions: [
      { label: 'Generates', value: 'sales assets' },
      { label: 'Ships', value: 'launch content' },
      { label: 'Answers', value: 'internal questions' },
    ],
    sources: ['Authored story', 'Sourced claims', 'Current proof', 'Live buyer signal'],
    previewLabel: 'Artifact hub',
    previewMeta: 'Current now',
  },
]

function PreviewShell({
  label,
  meta,
  children,
}: {
  label: string
  meta: string
  children: React.ReactNode
}) {
  return (
    <div className="overflow-hidden rounded border border-border-sand/70 bg-white shadow-xl shadow-blue-950/5">
      <div className="flex items-center justify-between gap-4 border-b border-border-sand/70 bg-off-white px-5 py-3">
        <p
          className="text-[11px] uppercase text-subtle-graphite"
          style={{ letterSpacing: '1.2px', fontFamily: 'ui-monospace, monospace' }}
        >
          {label}
        </p>
        <p
          className="text-[11px] text-placeholder-gray tabular-nums"
          style={{ fontFamily: 'ui-monospace, monospace' }}
        >
          {meta}
        </p>
      </div>
      <div className="bg-white p-5 md:p-6">{children}</div>
    </div>
  )
}

function StatPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border-sand/70 bg-white px-3 py-1.5 text-[12px] text-subtle-graphite shadow-sm">
      {children}
    </span>
  )
}

function ActionCard({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="rounded border border-border-sand/60 bg-white px-4 py-3 shadow-sm">
      <p
        className="text-[11px] uppercase text-placeholder-gray"
        style={{ letterSpacing: '1.2px', fontFamily: 'ui-monospace, monospace' }}
      >
        {label}
      </p>
      <p className="mt-2 text-[15px] leading-[1.35] text-headline-black text-balance">{value}</p>
    </div>
  )
}

function MetricCard({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="rounded border border-border-sand/60 bg-white px-4 py-4 shadow-sm">
      <p className="text-[26px] leading-none text-headline-black tabular-nums">{value}</p>
      <p className="mt-2 text-[12px] leading-[1.45] text-mid-gray text-pretty">{label}</p>
    </div>
  )
}

function SignalRow({
  label,
  value,
  widthClassName,
}: {
  label: string
  value: string
  widthClassName: string
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[13px] text-headline-black">{label}</p>
        <span className="text-[12px] text-placeholder-gray tabular-nums">{value}</span>
      </div>
      <div className="h-2 rounded-full bg-off-white">
        <div className={cn('h-full rounded-full bg-subtle-graphite', widthClassName)} />
      </div>
    </div>
  )
}

function PreviewRow({
  title,
  detail,
  trailing,
}: {
  title: string
  detail: string
  trailing?: string
}) {
  return (
    <div className="flex items-start gap-4 rounded border border-border-sand/60 bg-white px-4 py-3">
      <div className="min-w-0 flex-1">
        <p className="text-[14px] text-headline-black">{title}</p>
        <p className="mt-1 text-[13px] leading-[1.55] text-mid-gray text-pretty">{detail}</p>
      </div>
      {trailing ? (
        <span className="shrink-0 text-[12px] text-placeholder-gray tabular-nums">{trailing}</span>
      ) : null}
    </div>
  )
}

function renderPreview(activeId: WorkflowId) {
  switch (activeId) {
    case 'listen':
      return (
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-3">
            <MetricCard value="127" label="buyer calls" />
            <MetricCard value="34" label="docs parsed" />
            <MetricCard value="12" label="market changes" />
          </div>
          <div className="space-y-3">
            <PreviewRow title="Buyer objection" detail="Implementation risk mentioned in 18 enterprise calls this month." trailing="Calls" />
            <PreviewRow title="Competitor move" detail="Competitor X changed pricing and updated enterprise packaging." trailing="Market" />
            <PreviewRow title="Product update" detail="New governance controls are ready for launch messaging." trailing="Product" />
          </div>
          <div className="flex flex-wrap gap-2">
            <StatPill>Calls ingested</StatPill>
            <StatPill>Docs parsed</StatPill>
            <StatPill>Market watched</StatPill>
          </div>
        </div>
      )
    case 'author':
      return (
        <div className="space-y-4">
          <div className="rounded border border-border-sand/60 bg-off-white px-4 py-4">
            <p className="text-[12px] uppercase text-placeholder-gray" style={{ letterSpacing: '1.2px', fontFamily: 'ui-monospace, monospace' }}>
              Core claim
            </p>
            <p className="mt-2 text-[17px] leading-[1.45] text-headline-black text-balance">
              Oden is the operating system for product marketing.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <ActionCard label="Positioning" value="PMM-owned" />
            <ActionCard label="Proof" value="source-linked" />
            <ActionCard label="Status" value="current" />
          </div>
          <div className="flex flex-wrap gap-2">
            <StatPill>Claim sourced</StatPill>
            <StatPill>Proof attached</StatPill>
            <StatPill>PMM approved</StatPill>
          </div>
        </div>
      )
    case 'output':
      return (
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-3">
            <MetricCard value="Deck" label="current story" />
            <MetricCard value="Card" label="sourced claims" />
            <MetricCard value="Copy" label="approved canon" />
          </div>
          <div className="space-y-3">
            <PreviewRow title="Sales deck" detail="Updated with the current enterprise governance story." trailing="Live" />
            <PreviewRow title="Battle card" detail="Rebuilt from the latest competitor move and buyer objections." trailing="Live" />
            <PreviewRow title="Launch copy" detail="Generated from PMM-approved positioning and sourced proof." trailing="Live" />
          </div>
          <div className="flex flex-wrap gap-2">
            <StatPill>Sales aligned</StatPill>
            <StatPill>Marketing current</StatPill>
            <StatPill>Story consistent</StatPill>
          </div>
        </div>
      )
  }
}

export function ProductShowcase() {
  const [activeId, setActiveId] = useState<WorkflowId>(workflows[0].id)
  const activeWorkflow = workflows.find((workflow) => workflow.id === activeId) ?? workflows[0]

  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32" id="product">
      <div className={siteShellClassName}>
        <FadeIn>
          <div className="mb-16 max-w-3xl">
            <p
              className="mb-5 text-[13px] uppercase text-subtle-graphite"
              style={{ letterSpacing: '1.2px' }}
            >
              The loop
            </p>
            <h2 className="text-balance">
              Listen. Author. Output. <span className="text-placeholder-gray">The company&apos;s story stays current.</span>
            </h2>
          </div>

          <div className="relative mb-8 grid grid-cols-1 gap-3 md:grid-cols-3" aria-label="Platform workflows">
            {workflows.map((workflow) => {
              const isActive = workflow.id === activeId

              return (
                <button
                  key={workflow.id}
                  type="button"
                  aria-pressed={isActive}
                  aria-controls={`workflow-panel-${workflow.id}`}
                  className={cn(
                    'rounded border px-5 py-5 text-left shadow-sm transition-colors',
                    isActive
                      ? 'border-headline-black bg-headline-black text-white'
                      : 'border-border-sand/70 bg-white/90 hover:border-subtle-graphite'
                  )}
                  onClick={() => setActiveId(workflow.id)}
                >
                  <span
                    className={cn(
                      'block text-[11px] uppercase tabular-nums',
                      isActive ? 'text-white/46' : 'text-placeholder-gray'
                    )}
                    style={{ letterSpacing: '1.2px', fontFamily: 'ui-monospace, monospace' }}
                  >
                    {workflow.number}
                  </span>
                  <span className={cn('mt-3 block text-[16px] leading-[1.35] text-balance', isActive ? 'text-white' : 'text-headline-black')}>
                    {workflow.title}
                  </span>
                  <span className={cn('mt-2 block text-[13px] leading-[1.45] text-pretty', isActive ? 'text-white/60' : 'text-mid-gray')}>
                    {workflow.headline}
                  </span>
                </button>
              )
            })}
          </div>

          <div
            id={`workflow-panel-${activeWorkflow.id}`}
            className="relative overflow-hidden rounded border border-border-sand/70 bg-white p-6 shadow-2xl shadow-blue-950/10 md:p-8 lg:p-10"
          >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.18fr)] lg:items-start">
              <div className="relative max-w-xl">
                <p
                  className="text-[11px] uppercase text-placeholder-gray"
                  style={{ letterSpacing: '1.2px', fontFamily: 'ui-monospace, monospace' }}
                >
                  {activeWorkflow.number} {activeWorkflow.title}
                </p>
                <h3 className="mt-4 text-balance">{activeWorkflow.headline}</h3>
                <p
                  className="mt-4 text-pretty text-mid-gray leading-[1.65]"
                  style={{ fontSize: '16px', letterSpacing: '-0.16px' }}
                >
                  {activeWorkflow.description}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {activeWorkflow.actions.map((action) => (
                    <ActionCard key={`${action.label}-${action.value}`} label={action.label} value={action.value} />
                  ))}
                </div>

                <div className="mt-8">
                  <p
                    className="text-[11px] uppercase text-placeholder-gray"
                    style={{ letterSpacing: '1.2px', fontFamily: 'ui-monospace, monospace' }}
                  >
                    Pulls from
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeWorkflow.sources.map((source) => (
                      <StatPill key={source}>{source}</StatPill>
                    ))}
                  </div>
                </div>
              </div>

              <div className="min-w-0">
                <PreviewShell label={activeWorkflow.previewLabel} meta={activeWorkflow.previewMeta}>
                  {renderPreview(activeWorkflow.id)}
                </PreviewShell>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
