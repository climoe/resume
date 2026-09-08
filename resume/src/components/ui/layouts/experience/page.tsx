'use client'

import ChangelogContent from './timeline-layout'
import type { Release } from './timeline-layout'
import V1_3_0_Content from './timeline-element-v1';
import V1_2_0_Content from './timeline-element-v2'
import V1_1_0_Content from './timeline-element-v3'

export const releases: Release[] = [
    {
        version: 'v 1.3.0',
        date: 'November 7, 2025',
        content: <V1_3_0_Content />
    },
    {
        version: 'v 1.2.0',
        date: 'March 22, 2025',
        content: <V1_2_0_Content />
    },
    {
        version: 'v 1.1.0',
        date: 'January 15, 2025',
        content: <V1_1_0_Content />
    }
]

const ChangelogComponentPage = () => {
    return (
        <div className='flex min-h-screen flex-col'>
            <div className='mx-auto w-[100rem] px-4 py-10 md:px-8 md:py-16'>
                <div className='flex flex-col items-start'>
                    <ChangelogContent releases={releases} />
                </div>
            </div>
        </div>
    )
}

export default ChangelogComponentPage;
