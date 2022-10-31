import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductsActions } from "../../redux/actions/product.action";
import * as XLSX from "xlsx";
import "./adminportal.css";
function AdminPortal(props) {
  const [allProductString, setAllProductString] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function (e) {
      const bstr = e.target.result;
      const workbook = XLSX.read(bstr, { type: "binary" });
      workbook.SheetNames.forEach((sheet) => {
        let rowObject = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheet]
        );
        console.log(rowObject);
        const allProductsString = JSON.stringify(rowObject);
        const allproduct = {
          products: allProductsString,
        };
        setAllProductString(allproduct);
      });
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProductsActions(allProductString));
  };

  return (
    <div className="Admin-portal">
      <section>
        <h3 className="">Upload excel file of product list*</h3>
        <div className="input-field">
          <input
            className="upload-products"
            type="file"
            id="customFile"
            accept="*"
            onChange={(e) => handleChange(e)}
          ></input>
          <label for="upload-products">Select file</label>
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </section>
    </div>
  );
}

export default AdminPortal;
