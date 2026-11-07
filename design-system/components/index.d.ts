import type { ReactNode } from 'react';

export interface ButtonProps {
  /** primary = agent-fill (one per screen); human = a gate action such as "Duyệt spec"; ghost = secondary. Default primary. */
  variant?: 'primary' | 'human' | 'ghost';
  size?: 'md' | 'sm';
  /** Renders an <a> instead of a <button>. */
  href?: string;
  /** Appends a mono → after the label. */
  arrow?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
  children: ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;

export interface BadgeProps {
  /** agent = work the AI does (dot); human = a person approves (diamond); neutral = metadata. Default neutral. */
  tone?: 'agent' | 'human' | 'neutral';
  children: ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;

export interface StageCardProps {
  /** Two-digit stage number, e.g. "02". */
  index: string;
  /** Uppercase English code shown in the eyebrow, e.g. "DESIGN". */
  code: string;
  /** Vietnamese stage name, e.g. "Thiết kế". */
  title: string;
  /** Who does the work. Default agent. */
  owner?: 'agent' | 'human' | 'both';
  /** The committed file this stage hands on, e.g. "spec.md". */
  artifact?: string;
  /** The human gate, e.g. "Bạn duyệt spec". Omit when the stage has none. */
  gate?: string;
  /** Highlights the card with agent-soft. */
  active?: boolean;
  /** One or two sentences of description. */
  children?: ReactNode;
}
export declare function StageCard(props: StageCardProps): JSX.Element;

export interface PipelineStage { index: string; name: string; file: string; gate?: boolean; }
export interface PipelineProps {
  /** Defaults to the six stages in the README. */
  stages?: PipelineStage[];
  /** Zero-based index of the stage to fill with agent-fill. */
  current?: number;
  /** Set false to hide the loop-back line. */
  loop?: boolean;
  loopLabel?: string;
  /** Set false to hide the AI / human legend. */
  legend?: boolean;
}
export declare function Pipeline(props: PipelineProps): JSX.Element;

export interface TerminalLine {
  /** prompt = "$ " command to the AI; out = muted output; ok = passed check; gate = waiting on a human; error = failed (text says so). */
  kind?: 'prompt' | 'out' | 'ok' | 'gate' | 'error';
  text: string;
}
export interface TerminalProps {
  title?: string;
  lines: TerminalLine[];
  /** Adds shadow-lift — hero only. */
  lift?: boolean;
}
export declare function Terminal(props: TerminalProps): JSX.Element;
