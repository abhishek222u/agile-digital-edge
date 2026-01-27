import React from 'react';
import { Monitor, Cloud, Server, X } from 'lucide-react';

const CloudflareError = () => {
    return (
        <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center font-sans text-[#404040]">
            {/* Main Container */}
            <div className="max-w-4xl w-full px-4 md:px-8 py-12">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-16">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-light mb-2">Web server is down</h1>
                        <p className="text-[#a0a0a0] text-lg">Error code 521</p>
                        <p className="text-[#a0a0a0] text-sm mt-1">Visit <a href="#" className="text-[#2f7bbf] hover:underline">cloudflare.com</a> for more information.</p>
                    </div>
                </div>

                {/* Diagram Section */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 mb-20 text-center">

                    {/* Browser */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative">
                            <Monitor size={80} className="text-[#404040]" strokeWidth={1.5} />
                        </div>
                        <div className="text-sm">
                            <p className="font-semibold text-2xl mb-1">You</p>
                            <p className="uppercase text-[#a0a0a0] text-xs font-bold tracking-wider">Browser</p>
                            <p className="text-[#bd2426] mt-1 text-sm font-medium">Error</p>
                        </div>
                    </div>

                    {/* Arrow / Connection */}
                    <div className="hidden md:flex flex-col items-center justify-center -mt-12 opacity-50">
                        <div className="w-2 h-2 rounded-full bg-[#dbe1e3] mx-1"></div>
                        <div className="w-2 h-2 rounded-full bg-[#dbe1e3] mx-1"></div>
                        <div className="w-2 h-2 rounded-full bg-[#dbe1e3] mx-1"></div>
                    </div>

                    {/* Cloudflare */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative">
                            <Cloud size={80} className="text-[#404040]" strokeWidth={1.5} />
                        </div>
                        <div className="text-sm">
                            <p className="font-semibold text-2xl mb-1">London</p>
                            <p className="uppercase text-[#a0a0a0] text-xs font-bold tracking-wider">Cloudflare</p>
                            <p className="text-[#bd2426] mt-1 text-sm font-medium">Error</p>
                        </div>
                    </div>

                    {/* Arrow / Connection */}
                    <div className="hidden md:flex flex-col items-center justify-center -mt-12 opacity-50">
                        <div className="w-2 h-2 rounded-full bg-[#dbe1e3] mx-1"></div>
                        <div className="w-2 h-2 rounded-full bg-[#dbe1e3] mx-1"></div>
                        <div className="w-2 h-2 rounded-full bg-[#dbe1e3] mx-1"></div>
                    </div>

                    {/* Host */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative">
                            <Server size={80} className="text-[#bd2426]" strokeWidth={1.5} />
                            <div className="absolute -bottom-2 -right-2 bg-[#bd2426] text-white rounded-full p-1 border-4 border-white">
                                <X size={20} strokeWidth={3} />
                            </div>
                        </div>
                        <div className="text-sm">
                            <p className="font-semibold text-2xl mb-1">mysite.com</p>
                            <p className="uppercase text-[#a0a0a0] text-xs font-bold tracking-wider">Host</p>
                            <p className="text-[#bd2426] mt-1 text-sm font-medium">Error</p>
                        </div>
                    </div>
                </div>

                {/* Text Details Section */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 border-t border-[#dbe1e3] pt-12">
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-4">What happened?</h3>
                        <p className="text-base leading-relaxed text-[#404040]">
                            The web server is not returning a connection. As a result, the webpage is not displaying.
                        </p>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-4">What can I do?</h3>
                        <div className="space-y-4 text-base leading-relaxed text-[#404040]">
                            <p>If you are a visitor of this website:</p>
                            <p>Please try again in a few minutes.</p>

                            <p className="mt-4">If you are the owner of this website:</p>
                            <p>Contact your hosting provider letting them know your web server is not responding. Additional troubleshooting information <a href="#" className="text-[#2f7bbf] hover:underline">here</a>.</p>
                        </div>
                    </div>
                </div>

                {/* Footer info */}
                <div className="mt-16 pt-8 text-xs text-[#a0a0a0] flex flex-col md:flex-row justify-between items-center border-t border-[#ede7f6]">
                    <div>
                        Cloudflare Ray ID: <span className="font-mono text-[#404040]">84c7a2b1d9e2f3a4</span> &bull; Your IP: <span className="font-mono text-[#404040]">192.168.1.1</span>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center gap-2">
                        <span>Performance & security by</span>
                        <a href="#" className="font-semibold hover:underline text-[#404040]">Cloudflare</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CloudflareError;
