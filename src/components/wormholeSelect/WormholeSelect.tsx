import { Badge, Group, NativeSelect, Title } from '@mantine/core';
import wormholesJSON from '../../data/wormholes.json';
import { useEffect, useState } from 'react';
import { numberWithCommas } from '../../util/format';

export default function WormholeSelect({ mass, setMass }: { mass: number, setMass: React.Dispatch<React.SetStateAction<number>> }) {
    const [modifiedMass, setModifiedMass] = useState(0);
    const [wormhole, setWormhole] = useState("E004");
    const [modifier, setModifier] = useState("Fresh");

    const [masses, setMasses] = useState<{ label: string, value: string }[]>([]);
    const [wormholes, setWormholes] = useState<string[]>([]);

    useEffect(() => {

        // initialise wormhole name list
        setWormholes(wormholesJSON.map((wormhole) => {
            return wormhole.Name;
        }));


        // initialise wormhole mass list
        let masses: string[] = [];
        for (const wormhole of wormholesJSON) {
            if (!masses.includes(wormhole.maxStableMass)) {
                masses.push(wormhole.maxStableMass);
            }
        }

        const sortedMasses = masses.map((mass) => parseInt(mass)).sort((a, b) => a - b);;

        setMasses(sortedMasses.map((mass) => {
            return {
                label: (numberWithCommas(mass)).toString(),
                value: mass.toString()
            }
        }
        ));
    }, [])

    useEffect(() => {
        for (const wh of wormholesJSON) {
            if (wh.Name === wormhole) {
                setMass(parseInt(wh.maxStableMass));
                calculateModifiedMass()
                break;
            }
        }
    }, [wormhole])


    function calculateModifiedMass() {
        switch (modifier) {
            case 'Fresh':
                setModifiedMass(mass);
                break;
            case 'Reduced':
                setModifiedMass(mass * 0.5);
                break;
            case 'Critical':
                setModifiedMass(mass * 0.1);
                break;
        }
    }

    useEffect(calculateModifiedMass, [mass, modifier]);

    return (
        <>
            <Title size={24} mb='md'>Wormhole</Title>
            <NativeSelect radius="md" label="Name" description="Wormhole Code" onChange={(event) => setWormhole(event.currentTarget.value)} data={wormholes} />
            <Title size={18} my='md' ta='center'>OR</Title>
            <NativeSelect radius="md" label="Mass" description="Wormhole Mass" onChange={(event) => setMass(parseInt(event.currentTarget.value))} mb='md' data={masses} />
            <NativeSelect radius="md" mb='xl' label="Mass Modifier" description="Wormhole State" onChange={(event) => setModifier(event.target.value)} data={["Fresh", "Reduced", "Critical"]} />
            <Group>
                <Badge color="green" variant='light'>Original Mass : {numberWithCommas(mass)} Kg</Badge>
                <Badge color="green" ml='auto' variant='light'>Selected Mass : {numberWithCommas(modifiedMass)} Kg</Badge>
            </Group>
        </>
    );
}
