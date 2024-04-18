import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { toast } from "react-toastify";

export const wrapCheckErrorForm = async <T extends FieldValues>(
  callback: () => void,
  setLoading: (check: boolean) => void,
  form: UseFormReturn<T>,
) => {
  try {
    await callback();
  } catch (err) {
    setLoading(false);
    const error = err as unknown as ErrorResponse;
    if (error.errors) {
      // Set focus first field when error
      const listError = Object.entries(error?.errors as ErrorsType);
      form.setFocus(listError[0][0] as Path<T>);

      // Loop errors response and setError with key and value
      listError.forEach(([key, value]) => {
        form.setError(key as Path<T>, {
          message: value.msg,
        });
      });
    } else {
      toast.error(error.message);
    }
  }
};
