import { Box, Input, Stack, Title } from "@mantine/core";
import { useEffect, useState } from "react";

export default function MassSelect({
    setMassPassed,
}: {
    setMassPassed: React.Dispatch<React.SetStateAction<number>>;
}) {
    const [values, setValues] = useState({
        hbc: 0,
        crb: 0,
        rhic: 0,
        hrc: 0,
        custom: 0,
    });

    useEffect(() => {
        calculateFinalMass()
    }, [values]);


    function calculateFinalMass() {
        const { hbc, crb, rhic, hrc, custom } = values;
        const massPassed = 300000000 * hbc + 200000000 * crb + 138000000 * rhic + 1230000000 * hrc + custom;
        setMassPassed(massPassed);
    }

    const handleInputChange = (name: string, value: string) => {
        if (Number.isNaN(parseInt(value, 10))) {
            setValues({
                ...values,
                [name]: 0,
            });
        }
        else {
            setValues({
                ...values,
                [name]: parseInt(value, 10),
            });
        }
    };

    return (
        <Box px="md">
            <Title size={18} mb="md">
                Mass Passed Through
            </Title>
            <Stack gap={10}>
                <Input.Wrapper label="Hot Rolling Battleship" description="300,000,000 Kg">
                    <Input
                        placeholder="0"
                        value={values.hbc.toString()}
                        onChange={(event) => handleInputChange("hbc", event.target.value)}
                    />
                </Input.Wrapper>
                <Input.Wrapper label="Cold Rolling Battleship" description="200,000,000 Kg">
                    <Input
                        placeholder="0"
                        value={values.crb.toString()}
                        onChange={(event) => handleInputChange("crb", event.target.value)}
                    />
                </Input.Wrapper>
                <Input.Wrapper label="Rolling Heavy Interdiction Cruiser" description="138,000,000 Kg">
                    <Input
                        placeholder="0"
                        value={values.rhic.toString()}
                        onChange={(event) => handleInputChange("rhic", event.target.value)}
                    />
                </Input.Wrapper>
                <Input.Wrapper label="Hot Rolling Carrier" description="1,230,000,000 Kg">
                    <Input
                        placeholder="0"
                        value={values.hrc.toString()}
                        onChange={(event) => handleInputChange("hrc", event.target.value)}
                    />
                </Input.Wrapper>
                <Input.Wrapper mb='lg' label="Custom Mass Passes" description="Enter jumped mass in Kg">
                    <Input placeholder="0" value={values.custom} onChange={(e) => { handleInputChange("custom", e.target.value) }} />
                </Input.Wrapper>
            </Stack>
        </Box>
    );
}
