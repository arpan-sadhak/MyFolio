import {
  X,
  Clock,
  Layers,
  Briefcase,
  ShieldCheck,
  User,
  Users,
  Code,
  Laptop,
  Monitor,
  Smartphone,
  Database,
  Cloud,
  Globe,
  BarChart3,
  LineChart,
  PieChart,
  TrendingUp,
  Activity,
  Trophy,
  Award,
  Medal,
  Star,
  Crown,
  Target,
  Timer,
  Calendar,
  History,
  Mail,
  Send,
  MessageCircle,
  Phone,
  Video,
  Bell,
  MapPin,
  Map,
  Navigation,
  Compass,
  Home,
  Palette,
  Pencil,
  Brush,
  Settings,
  Wrench,
  Search as SearchIcon,
  Key,
  Lock,
  Heart,
  ThumbsUp,
  Share2,
  Bookmark,
  Camera,
  Image,
  Play,
  Music,
  Mic,
  ShoppingCart,
  ShoppingBag,
  CreditCard,
  Wallet,
  DollarSign,
  Package,
  Truck,
  File,
  FileText,
  Folder,
  Clipboard,
  BookOpen,
  Shield,
  Fingerprint,
  Eye,
  Terminal,
  Bug,
  Webhook,
  GitBranch,
  Zap,
  Rocket,
  Lightbulb,
  Flame,
  Check,
  Info,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";

export const ICONS = {
  clock: Clock,
  layers: Layers,
  briefcase: Briefcase,
  shield: ShieldCheck,

  user: User,
  users: Users,

  code: Code,
  laptop: Laptop,
  monitor: Monitor,
  smartphone: Smartphone,
  database: Database,
  cloud: Cloud,
  globe: Globe,

  barChart: BarChart3,
  lineChart: LineChart,
  pieChart: PieChart,
  trendingUp: TrendingUp,
  activity: Activity,

  trophy: Trophy,
  award: Award,
  medal: Medal,
  star: Star,
  crown: Crown,
  target: Target,

  timer: Timer,
  calendar: Calendar,
  history: History,

  mail: Mail,
  send: Send,
  message: MessageCircle,
  phone: Phone,
  video: Video,
  bell: Bell,

  mapPin: MapPin,
  map: Map,
  navigation: Navigation,
  compass: Compass,
  home: Home,

  palette: Palette,
  pencil: Pencil,
  brush: Brush,

  settings: Settings,
  wrench: Wrench,
  key: Key,
  lock: Lock,

  heart: Heart,
  thumbsUp: ThumbsUp,
  share: Share2,
  bookmark: Bookmark,

  camera: Camera,
  image: Image,
  play: Play,
  music: Music,
  mic: Mic,

  shoppingCart: ShoppingCart,
  shoppingBag: ShoppingBag,
  creditCard: CreditCard,
  wallet: Wallet,
  dollar: DollarSign,
  package: Package,
  truck: Truck,

  file: File,
  fileText: FileText,
  folder: Folder,
  clipboard: Clipboard,
  bookOpen: BookOpen,

  shieldBasic: Shield,
  fingerprint: Fingerprint,
  eye: Eye,

  terminal: Terminal,
  bug: Bug,
  webhook: Webhook,
  gitBranch: GitBranch,

  zap: Zap,
  rocket: Rocket,
  lightbulb: Lightbulb,
  flame: Flame,
  check: Check,
  info: Info,
  help: HelpCircle,
};

/* =========================================================
   ICON OPTIONS
========================================================= */

const ICON_OPTIONS = Object.keys(ICONS).map((name) => ({
  value: name,
  label: name
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase()),
}));

/* =========================================================
   ICON PICKER
========================================================= */

const IconPicker = ({ value, onChange, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIcons = ICON_OPTIONS.filter((icon) =>
    icon.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div
      className="absolute z-50 top-9 left-0 w-72 rounded-2xl border border-paper-200 dark:border-white/10 bg-white dark:bg-ink-950 shadow-xl p-3"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}

      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-ink-950 dark:text-white">
          Choose Icon
        </p>

        <button
          type="button"
          onClick={onClose}
          className="p-1 rounded-md text-ink-900/40 dark:text-paper-100/40 hover:text-ink-950 dark:hover:text-white"
        >
          <X size={16} />
        </button>
      </div>

      {/* Search */}

      <div className="relative mb-3">
        <SearchIcon
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-900/40 dark:text-paper-100/40"
        />

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search icons..."
          className="w-full rounded-lg border border-paper-200 dark:border-white/10 bg-paper-50 dark:bg-ink-900 py-2 pl-9 pr-3 text-xs text-ink-950 dark:text-white outline-none focus:border-brand-500"
          autoFocus
        />
      </div>

      {/* Icons */}

      <div className="grid grid-cols-6 gap-1.5 max-h-64 overflow-y-auto">
        {filteredIcons.map((icon) => {
          const Icon = ICONS[icon.value];

          return (
            <button
              key={icon.value}
              type="button"
              title={icon.label}
              onClick={() => {
                onChange(icon.value);
                onClose();
              }}
              className={`flex items-center justify-center rounded-lg p-2 transition-colors ${
                value === icon.value
                  ? "bg-brand-500/10 text-brand-600 dark:text-brand-400"
                  : "text-ink-900/50 dark:text-paper-100/50 hover:bg-paper-100 dark:hover:bg-white/5 hover:text-brand-600 dark:hover:text-brand-400"
              }`}
            >
              <Icon size={18} />
            </button>
          );
        })}
      </div>

      {filteredIcons.length === 0 && (
        <p className="text-center text-xs text-ink-900/40 dark:text-paper-100/40 py-6">
          No icons found
        </p>
      )}
    </div>
  );
}

export default IconPicker;