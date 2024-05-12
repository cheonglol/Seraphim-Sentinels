import React from 'react'
import { BasicLayout } from '../Layouts/BasicLayout'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import ReactPlayer from 'react-player'

// TODO: move each post as its own component under `src\Components\blog` so i dont make this fucking landing page SO LONG TO READ wtf

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
                            <p>
                                you may not have one, but keep ur judgment to
                                yourself - just enjoy my personality...
                            </p>
                            <p className="my-4 italic font-black text-red-400">
                                if you won't be a salty hater yes, i admit, im
                                gaslighting u
                            </p>
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
                        <Card title="My TikTok 🎵🗣️💯" className="mt-6">
                            <div>
                                <Button
                                    link
                                    onClick={() =>
                                        window.open(
                                            'https://www.tiktok.com/@yuzigoesbrrrt/video/7353649238946925840?is_from_webapp=1&sender_device=pc&web_id=7342133434465486343',
                                            '_blank'
                                        )
                                    }
                                />
                                <a
                                    href="https://www.tiktok.com/@yuzigoesbrrrt/video/7353649238946925840?is_from_webapp=1&sender_device=pc&web_id=7342133434465486343"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-button font-bold text-xl"
                                >
                                    Go Navigate Yourself to my tiktok profile{' '}
                                    <br />
                                    theres a cat video there, omg i believe i've
                                    hit the algorithm 🔥
                                </a>
                            </div>
                        </Card>
                    </Card>
                    <Card
                        title="AFTER A LOSING STREAK I FUCKING FINALLY EXTRACTED"
                        subTitle="(diff lvl 4 stfu leave me be IM LONEWOLF-ING MISSIONS)"
                    >
                        <ReactPlayer
                            width="fit"
                            controls={true}
                            url={'https://www.twitch.tv/videos/2143434679'}
                        ></ReactPlayer>
                    </Card>
                    <Card
                        title="typical helldiver2 gameplay (not chaotic (real))"
                        subTitle="i bombed my friend's friend & idek who they are, idek them irl - LOOOL | ngl i think they dont like me (i wont take shit personally tho - bite me)"
                    >
                        <ReactPlayer
                            width="fit"
                            controls={true}
                            url={'https://www.twitch.tv/videos/2143080229'}
                        ></ReactPlayer>
                    </Card>
                </div>
            }
        />
    )
}
