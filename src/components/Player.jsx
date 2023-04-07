import { Fragment, useEffect, useState } from "react";
// import { Widget } from "../services";

const Player = () => {
    const [paused, isPaused] = useState(true);
    const [info, setInfo] = useState(null);
    useEffect(() => {
        window.SC.Widget(document.getElementById('sc')).getCurrentSound(function(currentSound) {
            console.log('sound ', currentSound, 'began to play');
            if (!info || !info.id) {
                setInfo(currentSound);
            }
        });

        window.SC.Widget(document.getElementById('sc')).isPaused(function(b) {
            console.log(b);
        });
    })

    const handlePlayOrPause = () => {
        // setTimeout(() => {
            
            window.SC.Widget(document.getElementById('sc')).isPaused((paused) => {
                if (paused) {
                    isPaused(false);
                    window.SC.Widget(document.getElementById('sc')).play();
                } else {
                    isPaused(true);
                    window.SC.Widget(document.getElementById('sc')).pause();
                }
            });
    }

    return ( 
    <Fragment>
        <div className="flex justify-start">
            <button className="px-5 py-5 bg-emerald-300"
                onClick={() => { handlePlayOrPause() }}
            >
                {paused ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                    </svg>
                )}
                
            </button>
            {info && (
                <div className="m-2">
                    <div className="flex">
                        <h1 className="text-xl font-semibold mr-4">{ info ? info.title : '' }</h1>
                        <div className="font-thin flex justify-start align-middle mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            <p>{ info ? info.download_count : '' }</p>
                        </div>

                        <div className="font-thin flex justify-start align-middle mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>
                            <p>{ info ? info.comment_count : '' }</p>
                        </div>

                    </div>
                    <p className="text-xs font-thin">{ info ? info.description : '' }</p>
                </div>
            )}
        </div>
    </Fragment> 
    );
}
 
export default Player;