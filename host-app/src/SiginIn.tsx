import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const SiginIn = () => {
  const navigate = useNavigate();

  const [tenant, setTenant] = useState<string>("a");

  const [formValues, setFormValues] = useState<{
    username: string;
    pass: string;
  }>({
    username: "",
    pass: "",
  });

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
    setTenant(e.target.value);
  };

  const onSubmit = () => {
    if (tenant === "a") {
      navigate("/tenant-a");
    } else if (tenant === "b") {
      navigate("/tenant-b");
    } else {
      alert("Tenant not found.");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        Tenant:
        <select onChange={onChangeSelect}>
          <option value="a">Tenant A</option>
          <option value="b">Tenant B</option>
        </select><br/><br/>
        Username：
        <input type="text" name="username" onChange={onChangeInput} />
        <br />
        Password：
        <input type="text" name="pass" onChange={onChangeInput} />
        <br />
        <br />
        <button type="submit">Signin</button>
      </form>
    </div>
  );
};

export default SiginIn;
