export function LessonHeader({title}) {
    return (
        <header className="flex lg:hidden sticky top-0 px-4 py-5 bg-black text-white uppercase font-bold">
            <h2>{title}</h2>
        </header>
    )
}