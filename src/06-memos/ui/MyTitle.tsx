import React from "react";

interface Porps {
    title: string
};

export const MyTitle = React.memo(({ title }: Porps) => {

    console.log('My title re-render');

    return (
        <h1 className="text-3xl">{title}</h1>
    );
});
