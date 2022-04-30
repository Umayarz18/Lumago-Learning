import { ReactNode } from "react"
import { TempHeader } from "./TempHeader"

export const TempLayout = (props:{header:string, children: ReactNode})=>{
    return (
        <div className="min-h-full">
        <TempHeader/>

        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">{props.header}</h1>
          </div>
        </header>
        <main>
          <article className="mt-4 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-white flex flex-col gap-5 h-full prose md:prose-md lg:prose-lg xl:prose-xl justify-center">
            {props.children}


          </article>
        </main>
      </div>
    )
}