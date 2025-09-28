import {
  Bolt,
  Shield,
  Rocket,
  Check,
  Heart,
  Globe,
  Sparkles,
  Star,
  Zap,
  Lock,
  Users,
  TrendingUp,
  Clock,
  Award,
  Target,
  Lightbulb,
  Settings,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Wifi,
  Search,
  BarChart3,
  PieChart,
  Activity,
  Layers,
  Package,
  Truck,
  CreditCard,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  Download,
  Upload,
  Share2,
  Link,
  Eye,
  EyeOff,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Image,
  Video,
  Music,
  Headphones,
  Camera,
  Mic,
  MicOff,
  Bell,
  BellOff,
  Home,
  User,
  UserPlus,
  UserCheck,
  Building,
  Store,
  ShoppingCart,
  Gift,
  Tag,
  Bookmark,
  Flag,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  CheckCircle,
  XCircle,
  Plus,
  Minus,
  X,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Filter,
  RefreshCw,
  RotateCcw,
  RotateCw,
  Maximize,
  Minimize,
  Copy,
  Edit,
  Save,
  Trash,
  Trash2,
  Archive,
  Folder,
  FolderOpen,
  File,
  FilePlus,
  Printer,
  Paperclip,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Send,
  Reply,
  Forward,
  Inbox,
  Sun,
  Moon,
  CloudRain,
  Compass,
  Navigation,
  Map,
  Car,
  Plane,
  Timer,
  Calendar as CalendarIcon,
  Battery,
  Plug,
  Power,
  Cpu,
  HardDrive,
  Server,
  Terminal,
  Code,
  Hash,
  AtSign,
  DollarSign,
  Euro,
  Bitcoin,
  Coins,
  Wallet,
  Calculator,
  Wrench,
  Hammer,
  Paintbrush,
  Palette,
  PenTool,
  Pencil,
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  Quote,
  Table,
  Grid,
  Layout,
  Move,
  Crop,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

// Icon mapping for easy access
const iconMap = {
  // Core icons
  bolt: Bolt,
  shield: Shield,
  rocket: Rocket,
  check: Check,
  heart: Heart,
  globe: Globe,
  sparkles: Sparkles,
  star: Star,
  
  // Performance & Speed
  zap: Zap,
  activity: Activity,
  trending: TrendingUp,
  clock: Clock,
  timer: Timer,
  
  // Security & Trust
  lock: Lock,
  award: Award,
  
  // People & Community
  users: Users,
  user: User,
  building: Building,
  
  // Technology
  settings: Settings,
  database: Database,
  cloud: Cloud,
  smartphone: Smartphone,
  monitor: Monitor,
  wifi: Wifi,
  
  // Analytics & Data
  search: Search,
  chart: BarChart3,
  pie: PieChart,
  layers: Layers,
  
  // Business & Commerce
  package: Package,
  truck: Truck,
  card: CreditCard,
  store: Store,
  cart: ShoppingCart,
  
  // Communication
  message: MessageSquare,
  mail: Mail,
  phone: Phone,
  
  // Navigation & Actions
  target: Target,
  lightbulb: Lightbulb,
  arrow: ArrowRight,
  plus: Plus,
  
  // Media & Content
  image: Image,
  video: Video,
  music: Music,
  camera: Camera,
  
  // Status & Feedback
  alert: AlertCircle,
  info: Info,
  success: CheckCircle,
  error: XCircle,
  
  // Default fallback
  default: Star
};

export type IconName = keyof typeof iconMap;

export function getIcon(name: string): React.ComponentType<any> {
  const iconName = name.toLowerCase() as IconName;
  return iconMap[iconName] || iconMap.default;
}

export function isValidIcon(name: string): boolean {
  const iconName = name.toLowerCase() as IconName;
  return iconName in iconMap;
}

// Export all available icon names for reference
export const availableIcons = Object.keys(iconMap) as IconName[];

// Helper function to get icon component with props
export function renderIcon(name: string, props: any = {}) {
  const IconComponent = getIcon(name);
  return <IconComponent {...props} />;
}
