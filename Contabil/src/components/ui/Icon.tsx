import {
  ArrowRight,
  Calculator,
  Camera,
  Check,
  CircleAlert,
  ClipboardCheck,
  FileSpreadsheet,
  FileText,
  FolderOpen,
  Keyboard,
  ListChecks,
  MessageSquare,
  ScanText,
  Server,
  ShieldCheck,
  TriangleAlert,
  Upload,
  Users,
  type LucideIcon,
} from "lucide-react";

/** Ícones disponíveis para o conteúdo (src/content). */
export const icons = {
  arrow: ArrowRight,
  calc: Calculator,
  camera: Camera,
  check: Check,
  alert: CircleAlert,
  clipboard: ClipboardCheck,
  sheet: FileSpreadsheet,
  pdf: FileText,
  folder: FolderOpen,
  keyboard: Keyboard,
  list: ListChecks,
  chat: MessageSquare,
  scan: ScanText,
  server: Server,
  shield: ShieldCheck,
  warn: TriangleAlert,
  upload: Upload,
  users: Users,
} satisfies Record<string, LucideIcon>;

export type IconKey = keyof typeof icons;

export function Icon({ name, size = 32, color = "currentColor" }: { name: IconKey; size?: number; color?: string }) {
  const Cmp = icons[name];
  return <Cmp size={size} color={color} strokeWidth={1.75} aria-hidden />;
}
