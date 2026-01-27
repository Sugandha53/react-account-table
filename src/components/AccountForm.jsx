import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setAccounts } from "../store/accountsSlice";

function AccountForm() {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.accounts.data);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newAccount = {
      id: accounts.length + 1,
      ...data,
    };

    dispatch(setAccounts([...accounts, newAccount]));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: "20px" }}>
      <h3>Add New Account</h3>

      <input
        placeholder="Name"
        {...register("name", { required: "Name is required" })}
      />
      <p style={{ color: "red" }}>{errors.name?.message}</p>

      <input
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email format",
          },
        })}
      />
      <p style={{ color: "red" }}>{errors.email?.message}</p>

      <input
        placeholder="Phone"
        {...register("phone", {
          required: "Phone is required",
          minLength: {
            value: 10,
            message: "Phone must be 10 digits",
          },
        })}
      />
      <p style={{ color: "red" }}>{errors.phone?.message}</p>

      <input
        placeholder="Website"
        {...register("website", { required: "Website is required" })}
      />
      <p style={{ color: "red" }}>{errors.website?.message}</p>

      <input
        placeholder="Industry"
        {...register("industry", { required: "Industry is required" })}
      />
      <p style={{ color: "red" }}>{errors.industry?.message}</p>

      <select {...register("status", { required: "Status is required" })}>
        <option value="">Select Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <p style={{ color: "red" }}>{errors.status?.message}</p>

      <input
        placeholder="Remark"
        {...register("remark", { required: "Remark is required" })}
      />
      <p style={{ color: "red" }}>{errors.remark?.message}</p>

      <button type="submit" style={{ marginTop: "10px" }}>
        Add Account
      </button>
    </form>
  );
}

export default AccountForm;
