const linkStyles = 
    "drop-shadow-xl text-gray-900 dark:text-stone-50 hover:drop-shadow-[0_0_10px_#a21caf] cursor-pointer relative tracking-wide transition-all duration-300 drop-shadow-violet-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-fuchsia-500 before:transition-all before:duration-300 hover:before:w-full"

const footerLinks = [
    {id:1, label:"Anime"},
    {id:2, label:"Top Rated"},
    {id:3, label:"Genres"},
    {id:4, label:"My Lists"},
    {id:5, label:"Journal"},
    {id:6, label:"Friends"},
    {id:7, label:"NewsLetter"},
]

const firstRow = footerLinks.slice(0, 3);
const secondRow = footerLinks.slice(3, 6);
const thirdRow = footerLinks.slice(6, 7);

const Footer = () => {
    return (
        <div className="
        shadow-3xl bg:stone-50 dark:bg-gray-800
        p-4 text-white md:p-6 rounded-lg">
            {/* top part of our footer */}
            <div className="flex flex-col">

                <div className="md:grid md:grid-cols-2 flex flex-col">
                    {/* part containing image and links */}
                    <div className="flex flex-row items-center justify-center gap-2 md:gap-3 lg:gap-4
                    ml-4" >
                        <img src="/logo1.png"
                        className="w-[60px] rounded-full"
                        />
                        <h2
                        className="text-violet-900 dark:text-stone-50 font-bold"
                        >Track.Rate.Obsess.</h2>
                    </div>

                    <div className="grid grid-cols-3 mt-3">
                        <div>
                            <h3 className="text-gray-900 dark:text-stone-50 underline">
                                Browse
                            </h3>
                        
                        {firstRow.map(footerLink => {
                        return (
                            <div
                            key={footerLink.id}
                            className={linkStyles}
                            >
                            {footerLink.label}
                            </div>
                        );
                        })}

                        </div>

                        <div>
                            <h3 className="text-gray-900 dark:text-stone-50 underline">
                                Community
                            </h3>
                        
                        {secondRow.map(footerLink => {
                        return (
                            <div
                            key={footerLink.id}
                            className={linkStyles}
                            >
                            {footerLink.label}
                            </div>
                        );
                        })}

                        </div>

                        <div>
                            <h3 className="text-gray-900 dark:text-stone-50 underline">
                                Connect
                            </h3>
                        
                        {thirdRow.map(footerLink => {
                        return (
                            <div
                            key={footerLink.id}
                            className={linkStyles}
                            >
                            {footerLink.label}
                            </div>
                        );
                        })}

                        </div>
                    </div>
                </div>

                <hr
                className="border-t-2 border-gray-900 dark:border-stone-300 border-dashed my-4"/>

                <div
                className="flex flex-row gap-4 md:gap-5 mt-6">
                    {/* div with mascot */}
                    <img src="/levi.jpg"
                    alt="Humanity's Strongest Soldier"
                    className="h-12 w-12 rounded-full animate-bounce-slow"
                    />
                    <img src="/Eren.jpg"
                    alt="Devil of Paradis"
                    className="h-12 w-12 rounded-full animate-bounce-slow"
                    />
                    <img src="/Mikasa.jpg"
                    alt="Titan Slayer"
                    className="h-12 w-12 rounded-full animate-bounce-slow"
                    />
                    <img src="/Armin.jpg"
                    alt="Genius Tactician"
                    className="h-12 w-12 rounded-full animate-bounce-slow"
                    />
                </div>
            </div>

            {/* top part of our footer */}

            <hr
            className="my-6 border-t-2 border-gray-900 dark:border-stone-300"/>

            <div>
                {/* bottom part of our footer */}
                <h4 className="flex justify-center items-center
                text-gray-500 dark:text-stone-400">
                @2024 OtakuBoxd | Privacy | Terms
                </h4>
            </div>
        </div>
    )
}

export default Footer