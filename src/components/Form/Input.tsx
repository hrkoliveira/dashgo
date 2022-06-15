import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
  error?: FieldError;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error, ...rest },
  ref
) => {
  return (
    <FormControl id={name} isInvalid={!!error}>
      {label && <FormLabel>{label}</FormLabel>}
      <ChakraInput
        name={name}
        variant="filled"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        size="lg"
        _hover={{
          bg: "gray.900",
        }}
        ref={ref}
        {...rest}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);