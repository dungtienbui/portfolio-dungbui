import clsx from 'clsx';

export const MyCard = () => {
    return (
        <div
            className={clsx(
                "w-full h-screen flex items-center justify-center bg-gray-200 group",
                "perspective-midrange",
            )}
        >
            <div
                className={clsx(
                    "w-80 h-80 rounded-full p-2 gap-5 bg-green-500 shadow-lg shadow-gray-500",
                    "relative",
                    "rotate-x-60 -rotate-z-5",
                    "transform-3d",
                )}
            >
                <div
                    className={clsx(
                        "w-60 h-60 rounded-lg bg-amber-500 pt-5",
                        "absolute left-1/2 -translate-x-1/2 bottom-2/5",
                        "origin-bottom -rotate-x-70",
                        "shadow-2xs"
                    )}
                >
                    <div className="text-center border">[Image here!]</div>
                </div>
                <button
                    type="button"
                    className={clsx(
                        "py-1 px-5 rounded-full bg-blue-500 text-white",
                        "absolute left-1/2 -translate-x-1/2 bottom-1/5",
                        "origin-bottom -rotate-x-10 translate-z-2 active:translate-z-1",
                        "shadow-lg shadow-white active:shadow-sm"
                    )}
                >
                    Click!
                </button>
            </div>
        </div>
    );
};