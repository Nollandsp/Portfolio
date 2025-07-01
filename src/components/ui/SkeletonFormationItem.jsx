import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonFormationItem() {
  return (
    <div className="flex items-center space-x-4 p-6 rounded-lg ">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <SkeletonFormationItem />
    </div>
  );
}
