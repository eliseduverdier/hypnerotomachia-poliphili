import Link from "next/link"

export default function Nav({ children }) {
    return <nav>
        <h1>
            <Link href={`/`}>hypnerotomachia ⁑ poliphili</Link>
        </h1>
    </nav>
}
