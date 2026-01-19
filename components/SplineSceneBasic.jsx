"use client";

import { SplineScene } from "./ui/SplineScene";
import { Spotlight } from "./ui/Spotlight";

export default function SplineSceneBasic() {
    return (
        <div className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden rounded-3xl border border-white/10 shadow-xl">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className="flex flex-col md:flex-row h-full">
                {/* Left content */}
                <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                    <h3 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">
                        Agile Digital Edge
                    </h3>
                    <p className="mt-4 text-neutral-300 max-w-lg text-lg leading-relaxed">
                        Transcending the ordinary. We build immersive, interactive digital experiences that position your brand at the forefront of innovation.
                    </p>
                </div>

                {/* Right content */}
                <div className="flex-1 relative min-h-[300px] md:min-h-auto">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
}
