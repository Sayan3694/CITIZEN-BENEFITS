import {
  Accessibility,
  Briefcase,
  GraduationCap,
  HardHat,
  HeartHandshake,
  Home,
  Landmark,
  LayoutGrid,
  ShieldCheck,
  Sprout,
  Stethoscope,
  Store,
  Wheat,
} from 'lucide-react';
import type { CategoryMeta } from '../types/scheme';

interface CategoryIconProps {
  name: CategoryMeta['iconName'];
  className?: string;
}

export function CategoryIcon({ name, className = 'w-4 h-4' }: CategoryIconProps) {
  switch (name) {
    case 'LayoutGrid':
      return <LayoutGrid className={className} aria-hidden="true" />;
    case 'GraduationCap':
      return <GraduationCap className={className} aria-hidden="true" />;
    case 'HeartHandshake':
      return <HeartHandshake className={className} aria-hidden="true" />;
    case 'Landmark':
      return <Landmark className={className} aria-hidden="true" />;
    case 'ShieldHeart':
      return <ShieldCheck className={className} aria-hidden="true" />;
    case 'Sprout':
      return <Sprout className={className} aria-hidden="true" />;
    case 'Stethoscope':
      return <Stethoscope className={className} aria-hidden="true" />;
    case 'Home':
      return <Home className={className} aria-hidden="true" />;
    case 'Wheat':
      return <Wheat className={className} aria-hidden="true" />;
    case 'Briefcase':
      return <Briefcase className={className} aria-hidden="true" />;
    case 'Store':
      return <Store className={className} aria-hidden="true" />;
    case 'HardHat':
      return <HardHat className={className} aria-hidden="true" />;
    case 'Accessibility':
      return <Accessibility className={className} aria-hidden="true" />;
    default:
      return <LayoutGrid className={className} aria-hidden="true" />;
  }
}
