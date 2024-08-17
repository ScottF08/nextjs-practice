import SideNav from '@/app/ui/dashboard/sidenav';

/**
 * 
 * A layout is something that can be used on a folder level. For example this nav bar does not have to always re-render when
 * a page renders again. This is a different way to handle than lit for sure.
 */
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}