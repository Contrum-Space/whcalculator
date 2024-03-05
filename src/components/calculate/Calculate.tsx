import { Box, Input, Table, Title } from "@mantine/core"
import { numberWithCommas } from "../../util/format";

export default function Calculate({ modifiedMass, massPassed }: { modifiedMass: number, massPassed: number }) {


    const elements = [
        { mass: Math.round(modifiedMass * 0.9) - massPassed, variance: '-10%' },
        { mass: Math.round(modifiedMass) - massPassed, variance: '0%' },
        { mass: Math.round(modifiedMass * 1.1) - massPassed, variance: '+10%' },
    ];

    const rows = elements.map((element) => (
        <Table.Tr key={element.variance}>
            <Table.Td>{numberWithCommas(Math.round(element.mass))} Kg</Table.Td>
            <Table.Td>{element.variance}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Box px='md'>
            <Title size={18} mb='lg'>Mass Left Until Collapse</Title>
            <Table highlightOnHover withTableBorder withColumnBorders>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Total Jump Mass Left</Table.Th>
                        <Table.Th>Mass Variance</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </Box>
    );
}