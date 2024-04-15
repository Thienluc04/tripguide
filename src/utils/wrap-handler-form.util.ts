import { FieldValues, Path, UseFormReturn } from "react-hook-form";

// Test common handle form func ( not work )
export const wrapHandlerForm = <T extends FieldValues>(
  callback: () => void,
  form: UseFormReturn<T>,
) => {
  try {
    callback();
  } catch (err) {
    const error = err as unknown as ErrorResponse;

    // Loop errors response and setError with key and value
    for (const [key, value] of Object.entries(error?.errors as ErrorsType)) {
      form.setError(key as `root.${string}` | "root" | Path<T>, {
        message: value.msg,
      });
    }
  }
};
