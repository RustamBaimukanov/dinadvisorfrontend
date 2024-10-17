import {useEffect, useState} from "react";
import {demoApiService} from "../services/demoApiService";

export function DemoComponent(){
    const [sample, setSample] = useState(null);

    useEffect(() => {
        demoApiService.getSample()
            .then(sample => setSample(sample))
            .catch(exception => console.error(exception))
    }, []);

    return(
      <h1>{sample}</h1>
    );
}