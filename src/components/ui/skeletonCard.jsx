import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-4 bg-white/10 p-6 rounded-2xl w-[360px] mx-auto">
      <Skeleton className="h-[190px] w-full rounded-xl" />
      <div className="space-y-3">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-4/5" />
      </div>
    </div>
  );
}
