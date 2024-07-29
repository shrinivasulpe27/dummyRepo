import React, { useEffect, useState } from "react";

function Pagination() {
  const [arr, setArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  async function fetchApi() {
    
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setArr(data);
   
  }

  useEffect(() => {
    fetchApi();
  }, []);

//   useEffect(() => {
//     console.log("Current Page:", currentPage);
//   }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    console.log("pNo",pageNumber);
    setCurrentPage(pageNumber);
  };

  const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  const currentItems = paginate(arr, itemsPerPage, currentPage)


  let page = [];

  for(let i= 1; i<= Math.ceil(arr.length/itemsPerPage); i++)
    {
        page.push(i);
    }
console.log(page);


  return (
    <>
      {currentItems.map((item) => (
        <div key={item.id}>
         
          <p>{item.title}</p>
        </div>
      ))}

      {/* <div>
        <button onClick={() => handlePageChange(1)}>1</button>
        <button onClick={() => handlePageChange(2)}>2</button>
     
      </div> */}
      {
        page.map((pages,index) => (
            <span key={index}>
                <button onClick={() =>handlePageChange(pages)}>{pages}</button>
            </span>

        ))
      }
    </>
  );
}

export default Pagination;
