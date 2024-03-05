import { Box, Table, Title } from "@mantine/core";
import shipJson from '../../data/ships.json';
import { useEffect, useState } from "react";
import { numberWithCommas } from "../../util/format";

export default function JumpsLeft({ mass, massPassed }: { mass: number, massPassed: number }) {
    const [ships, setShips] = useState<{ name: string, mass: number }[]>([]);

    useEffect(() => {
        setShips(shipJson);
    }, [])

    const rows = ships.map((ship) => (
        <Table.Tr key={ship.name}>
            <Table.Td>{ship.name}</Table.Td>
            <Table.Td ta='right'>{numberWithCommas(Math.round(ship.mass))} Kg</Table.Td>
            <Table.Td ta='right'>{numberWithCommas(Math.floor(Math.round(mass * 0.9 - massPassed) / ship.mass))}</Table.Td>
            <Table.Td ta='right'>{numberWithCommas(Math.floor(Math.round(mass * 1 - massPassed) / ship.mass))}</Table.Td>
            <Table.Td ta='right'>{numberWithCommas(Math.floor(Math.round(mass * 1.1 - massPassed) / ship.mass))}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Box px='md'>
            <Title size={24} mb='md'>Ship Jumps Left</Title>
            <Table highlightOnHover withTableBorder withColumnBorders>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th ta='center' rowSpan={2}>Ship Type</Table.Th>
                        <Table.Th ta='center' rowSpan={2}>Mass</Table.Th>
                        <Table.Th colSpan={3} ta='center'>Maximum Jumps Left</Table.Th>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Th ta='center'>-10% Variance</Table.Th>
                        <Table.Th ta='center'>0% Variance</Table.Th>
                        <Table.Th ta='center'>10% Variance</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {rows}
                </Table.Tbody>
            </Table>
        </Box>
    );
}