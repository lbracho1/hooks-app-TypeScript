import React from "react";

interface Porps {
    subtitle: string

    callMyAPI: () => void;
};

export const MySubtitle = React.memo(({ subtitle, callMyAPI }: Porps) => {

    console.log('My Subtitle re-render');

    return (
        <>
            <h6 className="text-2xl font-bold">{subtitle}</h6>

            <button
                className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer"
                onClick={callMyAPI}
            >
                Llamar a función
            </button>
        </>
    );
});
