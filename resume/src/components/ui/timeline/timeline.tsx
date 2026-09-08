                   'use client';

import {ArrowUpRightIcon, CheckIcon, CircleIcon, XIcon} from "@phosphor-icons/react";
import React, {CSSProperties, JSX} from "react";

export function TimelineTitle(): JSX.Element {
    return (
        <div className={'timeline-head'}>
            <h2 className={'timline-head-title'}>My Growth as a UI/UX Designer</h2>
            <p className={'timeline-head-description'}>Each stage of my journey has deepened my
                skills in
                design systems, usability, and product thinking enabling me to create polished, thoughtful experiences
                for users.</p>
        </div>
    )
}

export function TimelineElements(): JSX.Element {
    const scaleY: CSSProperties = {
        transform: 'scaleY(1)',
    }
    return (
        <ul className={'timeline-elements-list'}>
            <li className={'timeline-element'} data-index="0">
                <div className='timeline-element-desc'>
                    <p className={'timeline-element-desc-heading_title'} role="heading">UI/UX Intern</p>
                    <p className={'timeline-element-desc-heading_date'}>June 2022</p>
                </div>
                <div className={'timeline-element-icons'}>
                    <div className={'group/timeline-dot-horizontal timeline-elements-icons-details'} data-active="true" role="status">
                        <CircleIcon height={24} width={24}
                                className={'timeline-icon timeline-icon-circle'}
                                stroke={'currentColor'} fill={'none'}
                                strokeWidth={2} strokeLinecap={'round'}/>
                        <CheckIcon width={24} height={24}
                                className={'timeline-icon timeline-icon-check'}
                                fill="none" stroke="currentColor"
                                strokeWidth={2} strokeLinecap={'round'}/>
                        <XIcon width={24} height={24}
                               className="timeline-icon timeline-icon-x"
                               fill={'none'} stroke={'currentColor'}
                               strokeWidth={2} strokeLinecap={'round'}
                                group-data-active="true"/>
                        <span className={'timeline-dot'} group-data-active='false'></span>
                    </div>
                    <div role="separator" aria-orientation="horizontal" className={'timeline-separator'}>
                        <div style={scaleY} className={'timeline-separator-line'}></div>
                    </div>
                </div>
            </li>
            <li className={'timeline-element'} data-index="1">
                <div className='timeline-element-desc'>
                    <p className={'timeline-element-desc-heading_title'} role="heading">Jr. UI/UX Designer</p>
                    <p className={'timeline-element-desc-heading_date'}>June 2023</p>
                </div>
                <div className={'timeline-element-icons'}>
                    <div role="status" className={'timeline-elements-icons-details'} data-active="false">
                        <CircleIcon height={24} width={24} className={'timeline-icon timeline-icon-circle'}
                                stroke={'currentColor'} fill={'none'} strokeWidth={2}
                                strokeLinecap={'round'}/>
                        <CheckIcon width={24} height={24} className={'timeline-icon timeline-icon-check'}
                                fill="none" stroke="currentColor" strokeWidth={2}
                                strokeLinecap="round"/>
                        <XIcon width={24} height={24} className={'timeline-icon timeline-icon-x'}
                                fill={'none'} stroke={'currentColor'} strokeWidth={2}
                                strokeLinecap={'round'}
                                group-data-active="true"/>

                        <span group-data-active='true' className={'timeline-dot'}></span>
                    </div>
                    <div role="separator" aria-orientation="horizontal"
                         className={'timeline-separator scale-important'}>
                        <div style={scaleY}
                             className={'timeline-separator-line scale-important'}></div>
                    </div>
                </div>
            </li>
            <li className={'timeline-element'} data-index="2">
                <div className='timeline-element-desc'>
                    <p className={'timeline-element-desc-heading_title'} role="heading">UI/UX Designer</p>
                    <p className={'timeline-element-desc-heading_date'}>June 2024</p>
                </div>
                <div className={'timeline-element-icons'}>
                    <div role="status" className={'timeline-elements-icons-details'} data-active="true">
                        <CircleIcon height={24} width={24} className={'timeline-icon timeline-icon-circle'}
                            fill={'none'} stroke={'currentColor'} strokeWidth={2} strokeLinecap={'round'}/>
                        <CheckIcon width={24} height={24} className={'timeline-icon timeline-icon-check'}
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <XIcon width={24} height={24} className="timeline-icon timeline-icon-x"
                            fill={'none'} stroke={'currentColor'} strokeWidth={'2'} strokeLinecap={'round'}
                            group-data-active="true"/>
                        <span group-data-active='false' className={'timeline-dot'}></span>
                    </div>
                    <div role="separator" aria-orientation="horizontal"
                         className={'timeline-separator scale-important'}>
                        <div style={scaleY}
                             className={'timeline-separator-line scale-important'}></div>
                    </div>
                </div>
            </li>
            <li className={'timeline-element'} data-index="3">
                <div className='timeline-element-desc'>
                    <p className={'timeline-element-desc-heading_title'} role="heading">Sr. UI/UX Designer</p>
                    <p className={'timeline-element-desc-heading_date'}>June 2025</p>
                </div>
                <div className={'timeline-element-icons'}>
                    <div role="status" className={'timeline-elements-icons-details'} data-active="true">
                        <CircleIcon height={24} width={24} className={'timeline-icon timeline-icon-circle'}
                                    fill={'none'} stroke={'currentColor'} strokeWidth={2} strokeLinecap={'round'}/>
                        <CheckIcon width={24} height={24} className={'timeline-icon timeline-icon-check'}
                                    fill="none" stroke={'currentColor'} strokeWidth={2} strokeLinecap={'round'}/>
                        <XIcon width={24} height={24} className={"timeline-icon timeline-icon-x"}
                                    fill={'none'} stroke={'currentColor'} strokeWidth={2} strokeLinecap={'round'}
                                    group-data-active="true"/>
                        <span group-data-active='false' className={'timeline-dot'}></span>
                    </div>
                    <div role="separator" aria-orientation="horizontal" className={'timeline-separator scale-important'}>
                        <div style={scaleY}
                             className={'timeline-separator-line scale-important'}></div>
                    </div>
                </div>
            </li>
        </ul>
    )
}



export function TimelineContent({ style, style1} :{ style: React.CSSProperties, style1: React.CSSProperties}): JSX.Element{
    return (
        <div className={'timeline-element-content'}>
            <div className={'timeline-element-content-desc-container'}>
            <div className={'timeline-element-content-desc-container-title'}>
                <div style={style}>
                    <h3 className="text-foreground text-2xl font-semibold">Jr. UI/UX Designer</h3>
                </div>
                <div className="flex items-center gap-3" style={style}>
                    <p>Full-time</p>
                    <p className="text-foreground">|</p>
                    <p>2023 - 2024</p></div>
            </div>
            <div className={'timeline-element-content-badge-container'}>
                <div style={style}>
                    <div className={'timeline-element-content-badge-list'}>
                        <span className={"timeline-element-content-badge"} data-slot="badge" data-variant="outline">Figma</span>
                        <span className={"timeline-element-content-badge"} data-slot="badge" data-variant="outline">Prototyping</span>
                        <span className={"timeline-element-content-badge"} data-slot="badge" data-variant="outline">User Research</span>
                        <span className={"timeline-element-content-badge"} data-slot="badge" data-variant="outline">Wireframing</span>
                        <span className={"timeline-element-content-badge"} data-slot="badge" data-variant="outline">Adobe Creative Suite</span>
                    </div>
                </div>
                <div style={style}>
                    <div className="ml-2 flex flex-col items-start gap-3">
                        <div style={style}>
                            <div className="flex items-start gap-2 py-1">
                                <div className="bg-primary mt-2 size-1.5 shrink-0 rounded-full"></div>
                                <span className="text-card-foreground text-base">
                                    Supported designing intuitive and visually engaging interfaces by creating wireframes, design, prototypes, and high-fidelity mockups.
                                </span>
                            </div>
                        </div>
                        <div style={style}>
                            <div className="flex items-start gap-2 py-1">
                                <div className="bg-primary mt-2 size-1.5 shrink-0 rounded-full"></div>
                                <span className="text-card-foreground text-base">
                                    Assisted in developing and maintaining a scalable design system that supported team workflow and visual consistency across projects.
                                </span>
                            </div>
                        </div>
                        <div style={style1}>
                            <div className="flex items-start gap-2 py-1">
                                <div className="bg-primary mt-2 size-1.5 shrink-0 rounded-full"></div>
                                <span className="text-card-foreground text-base">Worked with product managers and developers to improve user flows, ensuring clarity and ease of use for end-users.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-7" style={style1}>
                    <button type="button" tabIndex={0} data-slot="button" className={'group/button timeline-element-content-button'}>
                        <span className="group-hover/button:text-foreground relative z-2 transition-colors duration-500">View My Portfolio</span>
                        {/*<span className="relative z-1 size-5"/>*/}
                        {/*<span className="bg-background absolute inset-0 -z-1 size-5 rounded-full transition-transform duration-500 group-hover/button:scale-[15]"/>*/}
                        <span className="bg-background text-primary group-hover/button:bg-primary group-hover/button:text-background relative z-2 flex size-5 items-center justify-center rounded-full transition-all duration-500">
                            <ArrowUpRightIcon width="24" height="24"
                                              className="tabler-icon tabler-icon-arrow-up-right size-3 stroke-2 transition-transform duration-500 group-hover/button:rotate-45"
                                              fill="none" strokeWidth="2"/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default function Timeline() {
    const style: CSSProperties = {
        filter: 'blur(0)',
        opacity: 1,
        transform: "none",
    };
    const style2: CSSProperties = {
        filter: 'blur(0)',
        opacity: 1,
        transform: 'none'
    }
    return (
        <>
            <TimelineTitle/>
            <TimelineElements/>
            <TimelineContent style={style} style1={style2}/>
        </>
    )
}