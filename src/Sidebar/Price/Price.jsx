import "./Price.css";
import Input from "../../components/Input";

export default function Price({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label htmlFor="" className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="checkmark"></span>All
      </label>
      <Input handleChange={handleChange} value={50} title="$0-50" />
      <Input handleChange={handleChange} value={100} title="$50-100" />
      <Input handleChange={handleChange} value={150} title="$100-150" />
      <Input handleChange={handleChange} value={200} title="Over $150" />
    </div>
  );
}
