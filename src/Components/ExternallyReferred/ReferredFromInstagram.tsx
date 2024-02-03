import JSConfetti from 'js-confetti'
import { Button } from 'primereact/button'
import { Skeleton } from 'primereact/skeleton'
import React, { useEffect, useState } from 'react'
import {
    getVisitorPublicIpAddr,
    iAPIResponse_getVisitorPublicIpAddr,
} from '../../APIs/VisitorPublicIpAddressAPI'
import { BasicLayout } from '../../Layouts/BasicLayout'

export const ReferredFromInstagram = () => {
    const jsConfetti = new JSConfetti()
    // const loaderData = useLoaderData() as ILoaderData_SocmedHandler
    const [visitorIpAddr, setVisitorIpAddr] = useState<string | undefined>('')

    useEffect(() => {
        const fetchData = async () => {
            if (!visitorIpAddr) {
                const data = await getVisitorPublicIpAddr()
                setVisitorIpAddr(
                    (data as iAPIResponse_getVisitorPublicIpAddr).ip
                )

                jsConfetti.addConfetti({
                    emojis: ['😂', '👌🏻', '💯', '🎉', '🎊', '🥳'],
                    emojiSize: 125,
                    confettiNumber: 250,
                })
            }
        }
        fetchData()
    })

    return (
        <BasicLayout
            headerContent={<></>}
            mainContent={
                <div className="flex justify-center align-middle flex-col gap-[1rem] text-center px-5">
                    <img
                        src="https://media.tenor.com/Oas_7V6NajEAAAAe/laugh-point.png"
                        alt="-"
                        className="mx-auto rounded-lg"
                    />
                    {visitorIpAddr ? (
                        <h1>{visitorIpAddr}</h1>
                    ) : (
                        <Skeleton
                            className="mx-auto"
                            height="4vh"
                            width="300px"
                        />
                    )}
                    <Button
                        rounded
                        className="bg-blue-500 p-2 max-w-[20vw] text-center mx-auto"
                        onClick={() => {
                            window.location.href = '/'
                        }}
                    >
                        Homepage
                    </Button>
                </div>
            }
        />
    )
}
