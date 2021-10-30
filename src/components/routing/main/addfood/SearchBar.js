import { Input, Space } from "antd";

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../../static/css/SearchBar.css";

const { Search } = Input;


function SearchBar(props) {
  const [params, setParams] = useState({
    api_Key: "XBPqMYgU4h05cs4NAnjIvXCQc8wldJ4wG3OethYK",
    food: "",
    dataType: ["Survey (FNDDS)"],
    pagesize: 100, //default is 50
    sortBy: "score", //load fails without .keyword
    sortOrder: "desc",
  });

  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = (event) => {
    const searchTermsArry = event.target.value.split(" ");
    const newSearchTerm = [];
    if (searchTermsArry.length > 1) {
      for (let item of searchTermsArry) {
        newSearchTerm.push("+" + item);
      }
    }

    if (newSearchTerm.length !== 0) {
      setSearchValue(newSearchTerm.join(" "));
    } else {
      setSearchValue(event.target.value);
    }
  };

  const handleSearch = () => {
    makeApiCall(searchValue);
  };

  const makeApiCall = (searchInput) => {
    var searchUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(
      searchInput
    )}&pageSize=${encodeURIComponent(
      params.pagesize
    )}&api_key=${encodeURIComponent(
      params.api_Key
    )}&dataType=${encodeURIComponent(
      params.dataType
    )}&sortBy=${encodeURIComponent(
      params.sortBy
    )}&sortOrder=${encodeURIComponent(params.sortOrder)}
        `;

    axios.get("http://localhost:8080/search/" + searchValue).then((response) => {
      setSearchResult(response.data.foods);
      console.log(response);
    });
  };

  const [searchResult, setSearchResult] = useState([]);

  return (
    <div className="search-bar">
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onChange={(event) => handleOnChange(event)}
          onSearch={handleSearch}
          onPressEnter={handleSearch}
        />
      </Space>

      {searchResult.length !== 0 && (
        <div className="dataResult">
          {searchResult.map((result) => (
            <p
              onClick={() => {  //if we pass the result to the onclick, foodData.foodNutrients... will fail with typeerror in NutritionDetails.js
                props.addFood(result);
                console.log(props.selectedDate)
                // props.countCalories(result);
                setSearchResult([]);
              }}
              className="dataItem"
              key={result.fdcId}
            >
              {result.description} 
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
export default SearchBar;
