import { Input, Space } from "antd";

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../../static/css/SearchBar.css";

const { Search } = Input;


function SearchBar(props) {
  const endpoint = process.env.REACT_APP_API_ENDPOINT;

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
    axios.get(endpoint + "/search/" + searchValue).then((response) => {
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
              onClick={() => { 
                console.log(result);
                console.log(props.selectedDate)
                setSearchResult([]);
                props.addFood(result)
              }}
              className="dataItem"
              key={result.fdcId}
            >
              {result.description} ({result.foodNutrients[3].value} Kcal / 100g)
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
export default SearchBar;
