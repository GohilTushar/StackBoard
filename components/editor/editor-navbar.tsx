"use client"

import { LayoutTemplate, PanelLeftClose, PanelLeftOpen, Save, Share2, Sparkles } from "lucide-react"
import { UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import type { SaveStatus } from "@/hooks/use-canvas-autosave"

interface EditorNavbarProps {
  isOpen: boolean
  onToggle: () => void
  projectName?: string
  isAiSidebarOpen?: boolean
  onToggleAiSidebar?: () => void
  onOpenShareDialog?: () => void
  onOpenTemplates?: () => void
  saveStatus?: SaveStatus
  onSave?: () => void
}

// Action buttons collapse to icon-only below the `sm` breakpoint.
const ACTION_BUTTON_CLS = "gap-2 px-2 sm:px-2.5"
const ACTION_LABEL_CLS = "hidden sm:inline"

export function EditorNavbar({
  isOpen,
  onToggle,
  projectName,
  isAiSidebarOpen = false,
  onToggleAiSidebar,
  onOpenShareDialog,
  onOpenTemplates,
  saveStatus,
  onSave,
}: EditorNavbarProps) {
  const saveLabel =
    saveStatus === "saving"
      ? "Saving..."
      : saveStatus === "saved"
      ? "Saved"
      : saveStatus === "error"
      ? "Error"
      : "Save"

  return (
    <header className="flex h-12 shrink-0 items-center justify-between gap-2 border-b border-border-default bg-bg-surface px-2 sm:px-3">
      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
        <Button variant="ghost" size="icon" className="shrink-0" onClick={onToggle}>
          {isOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle sidebar</span>
        </Button>

        {projectName ? (
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-text-primary">{projectName}</p>
            <p className="hidden text-xs text-text-faint sm:block">Workspace</p>
          </div>
        ) : null}
      </div>

      <div className="flex shrink-0 items-center gap-1 sm:gap-2">
        {onToggleAiSidebar ? (
          <>
            {onSave ? (
              <Button
                variant="outline"
                size="sm"
                className={ACTION_BUTTON_CLS}
                onClick={onSave}
                disabled={saveStatus === "saving"}
                title={saveLabel}
                aria-label={saveLabel}
              >
                <Save className="h-4 w-4" />
                <span className={ACTION_LABEL_CLS}>{saveLabel}</span>
              </Button>
            ) : null}
            {onOpenTemplates ? (
              <Button
                variant="outline"
                size="sm"
                className={ACTION_BUTTON_CLS}
                onClick={onOpenTemplates}
                title="Templates"
                aria-label="Templates"
              >
                <LayoutTemplate className="h-4 w-4" />
                <span className={ACTION_LABEL_CLS}>Templates</span>
              </Button>
            ) : null}
            {onOpenShareDialog ? (
              <Button
                variant="outline"
                size="sm"
                className={ACTION_BUTTON_CLS}
                onClick={onOpenShareDialog}
                title="Share"
                aria-label="Share"
              >
                <Share2 className="h-4 w-4" />
                <span className={ACTION_LABEL_CLS}>Share</span>
              </Button>
            ) : null}
            <Button
              variant={isAiSidebarOpen ? "default" : "outline"}
              size="sm"
              className="gap-2"
              onClick={onToggleAiSidebar}
              aria-pressed={isAiSidebarOpen}
            >
              <Sparkles className="h-4 w-4" />
              AI
            </Button>
          </>
        ) : null}

        {!onToggleAiSidebar ? <UserButton /> : null}
      </div>
    </header>
  )
}
