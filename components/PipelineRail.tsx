import { Fragment } from 'react'
import { ChevronRight } from 'lucide-react'
import type { Project } from '@/lib/projects'

export default function PipelineRail({ project }: { project: Project }) {
  return (
    <div>
      <p className="mb-6 text-[15px] leading-relaxed text-muted">{project.pipelineIntro}</p>
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
        {project.pipeline.map(({ label, sub, Icon }, i) => (
          <Fragment key={i}>
            <div className="flex min-w-[96px] shrink-0 flex-col items-center gap-2 rounded-2xl border border-border-neutral bg-ink/[0.012] px-4 py-3.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink/[0.06]">
                <Icon className="h-4 w-4 text-ink" strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <p className="text-[12px] font-medium leading-tight text-ink">{label}</p>
                <p className="mt-0.5 text-[10px] text-muted">{sub}</p>
              </div>
            </div>
            {i < project.pipeline.length - 1 && (
              <ChevronRight className="h-4 w-4 shrink-0 text-muted/50" strokeWidth={1.5} />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
