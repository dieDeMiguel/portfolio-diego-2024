import type { Dictionary, ReleaseI } from '@/types'
import React from 'react'
import Container from '../Container'

export default function ReleasesSection({ dict }: {
    dict: Dictionary
}) {
    const releasesArray = dict.releases as unknown as ReleaseI[]
    const sortedReleases = releasesArray.sort((a, b) => {
        return a.version > b.version ? -1 : 1
    })

    return (
        <section className="my-12 px-5 lg:px-12 w-full mx-auto max-w-7xl">

            <Container>

                <div className="flex flex-col gap-4 my-12">
                    {
                        sortedReleases.map((release) => (
                            <Container key={release.version} extraClasses="flex flex-col md:flex-row w-full py-4 bg-white !my-0 gap-4 md:gap-12">
                                <div className="flex flex-col">
                                    <div className="text-3xl">{release.version}</div>
                                    <div className='text-nowrap'>{release.date}</div>
                                </div>
                                <ul>
                                    {release.features.map((desc) => (
                                        <li key={desc}>- {desc}</li>
                                    ))}
                                </ul>
                            </Container>
                        ))
                    }
                </div>
            </Container>

        </section>
    )
}
