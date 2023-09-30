import { Box, Input, Table, Title } from "@mantine/core"
import { numberWithCommas } from "../../util/format";

export default function Calculate({ finalMass }: { finalMass: number }) {


    const elements = [
        { mass: finalMass * 0.9, variance: '-10%' },
        { mass: finalMass, variance: '0%' },
        { mass: finalMass * 1.1, variance: '+10%' },
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