import Link from "next/link";
import { SimpleWidgetValue } from "./SimpleWidgetValue";

interface Props {
  description: string;
}

export const SimpleWidget = ({ description }: Props) => {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:min-w-[25%] min-w-full rounded-2xl border border-gray-100 m-2">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-4">
          <h2 className="font-semibold text-gray-700 text-center text-lg">Contador</h2>
        </div>
        
        {/* Content */}
        <div className="flex-1 flex items-center justify-center mb-4">
          <div className="flex items-center space-x-4">
            <SimpleWidgetValue description={description} />
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-gray-100">
          <Link href="/counter" 
            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors duration-200 float-right"
          >
            Ver más →
          </Link>
        </div>
      </div>
    </div>
  )
}