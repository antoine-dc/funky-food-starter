export default function DishSkeleton({ index }) {
  return (
    <div className="group" data-discover="true">
      <div
        className="bg-white rounded-3xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-transparent"
        style={{
          transform: index % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)",
        }}
      >
        <div className="relative h-64 overflow-hidden bg-gray-200 animate-pulse" />

        <div className="p-6">
          <div className="h-8 bg-gray-200 rounded-lg mb-4 animate-pulse w-3/4" />

          <div className="flex items-center gap-4 mb-4">
            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
          </div>

          <div className="h-6 bg-gray-200 rounded-full mb-4 w-32 animate-pulse" />

          <div className="pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
