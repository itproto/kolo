
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React from "react";
import { API_KEY } from "../../secret";

const render = (status: Status) => {
    return <h1>{status}</h1>;
};



const SuperMap: React.FC<{}> = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState<google.maps.Map>();

    React.useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);

    return <div ref={ref} />
};

export const KoloMap = () => {
    return (
        <Wrapper apiKey={API_KEY} render={render}>
            <SuperMap />
        </Wrapper>
    );
}