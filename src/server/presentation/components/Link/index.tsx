import Link from 'next/link'
import React from 'react'

const Links = () => {
    return (
        <div>
            <Link href={'/link/create'}><button>create</button></Link>
            <Link href={'/link/delete'}><button>delete</button></Link>
            <Link href={'/link/select'}><button>select</button></Link>
            <Link href={'/link/update'}><button>update</button></Link>
        </div>
    )
}

export default Links