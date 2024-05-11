import React from 'react'
import { BasicLayout } from '../Layouts/BasicLayout'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'

export const LandingView = () => {
    return (
        <BasicLayout
            mainContent={
                <div className="grid grid-cols-1 sm:grid-cols-0 gap-4 max-w-[90vw] m-auto">
                    <Card className="bg-slate-600">
                        <h1>My Home Feed</h1>
                        <p>
                            I post whatever the hell i want here on <br />
                            <a
                                className="font-black text-blue-500 text-[200%]"
                                href="https://cheong.lol"
                            >
                                C'MON THIS IS MY OWN FUCKING SITE!
                                <br /> LEAVE ME BE!
                            </a>
                            <br />
                            (you may not have one, but keep ur judgment to
                            yourself)
                        </p>
                        <Card title="My Twitch 📹🎥🗣️💯" className="mt-6">
                            <div>
                                <Button
                                    link
                                    onClick={() =>
                                        window.open(
                                            'https://www.twitch.tv/cheonglol70',
                                            '_blank'
                                        )
                                    }
                                />
                                <a
                                    href="https://www.twitch.tv/cheonglol70"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-button font-bold text-xl"
                                >
                                    Go Navigate Yourself to my twitch chhannel
                                    please <br /> (pls support me 💖💖)
                                </a>
                            </div>
                        </Card>
                    </Card>
                </div>
            }
        />
    )
}
