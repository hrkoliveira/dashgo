import { Box, HStack, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

type PaginationProps = {
  currentPage: number;
  perPage?: number;
  total: number;
  siblingPages?: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  currentPage,
  onPageChange,
  perPage = 10,
  siblingPages = 2,
  total,
}: PaginationProps) {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  const lastPage = Math.ceil(total / perPage);

  const previousPages =
    currentPage > 1
      ? [...Array(siblingPages)]
        .map((_, index, arr) => currentPage - arr.length + index)
        .filter((page) => page > 0)
      : [];

  const nextPages =
    currentPage < lastPage
      ? [...Array(siblingPages)]
        .map((_, index) => currentPage + index + 1)
        .filter((page) => page <= lastPage)
      : [];

  return (
    <Stack
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
      direction={isWideVersion ? "row" : "column"}
    >
      <Box>
        <strong>{(currentPage - 1) * perPage + 1}</strong> -{" "}
        <strong>{Math.min(currentPage * perPage, total)}</strong> de{" "}
        <strong>{total}</strong>
      </Box>
      <HStack spacing="2">
        {currentPage - siblingPages > 1 && (
          <PaginationItem page={1} onClick={onPageChange} />
        )}

        {currentPage - siblingPages > 2 && (
          <Text w={4} color="gray.300" align="center">
            ...
          </Text>
        )}

        {previousPages.map((page) => (
          <PaginationItem key={page} page={page} onClick={onPageChange} />
        ))}

        <PaginationItem isCurrent page={currentPage} onClick={onPageChange} />

        {nextPages.map((page) => (
          <PaginationItem key={page} page={page} onClick={onPageChange} />
        ))}

        {currentPage + siblingPages < lastPage - 1 && (
          <Text w={4} color="gray.300" align="center">
            ...
          </Text>
        )}

        {currentPage + siblingPages < lastPage && (
          <PaginationItem page={lastPage} onClick={onPageChange} />
        )}
      </HStack>
    </Stack>
  );
}