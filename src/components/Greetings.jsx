export const Greetings = () => {

    return (
        <div className={'w-full h-full flex flex-col justify-center items-center text-[18px] text-lime-300 bg-gradient-to-tl from-zinc-900 to-gray-700'}>

            <div className={'w-16 h-16 rounded-sm bg-orange-400 ring-8 ring-neutral-800 hover:ring-neutral-700 active:scale-[90%] cursor-crosshair mb-4'}></div>

            <div className={'dogicaPixel tracking-[-1.5px]'}>
                greetings, <b className={'text-orange-400 px-0.5 text-[24px]'}>bitmap</b><span className={'text-[28px]'}>!</span>
            </div>
        </div>
    )
}
