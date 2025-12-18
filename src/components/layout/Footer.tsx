const linkStyles = 
    "drop-shadow-xl hover:drop-shadow-[0_0_10px_#a21caf] cursor-pointer relative tracking-wide transition-all duration-300 drop-shadow-violet-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-fuchsia-500 before:transition-all before:duration-300 hover:before:w-full"

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
        p-4 text-white md:p-6">
            {/* top part of our footer */}
            <div>

                <div className="grid grid-cols-2">
                    {/* part containing image and links */}
                    <div className="flex flex-col gap-2 md:gap-3 lg:gap-4
                    ml-4" >
                        <img src="/logo1.png"
                        className="w-[60px] rounded-full"
                        />
                        <h2>Track.Rate.Obsess.</h2>
                    </div>

                    <div className="grid grid-cols-3">
                        <div>
                            <h3>
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
                            <h3>
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
                            <h3>
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

                <div>
                    {/* div with mascot */}
                </div>
            </div>

            {/* top part of our footer */}
        </div>
    )
}

export default Footer