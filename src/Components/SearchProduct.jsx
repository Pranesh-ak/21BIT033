import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';
import './search.css'

const SearchProduct = () => {
  const[products, setProducts] = useState([]);
  const[category,setCategory]=useState("")
  const[companyname,setCompany]=useState("")
  const[t,setT]=useState(10)
  const[n,setN]=useState(1)
  const[m,setM]=useState(10000)
  const token = {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5ODk2NDM1LCJpYXQiOjE3MTk4OTYxMzUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjU0ZDg5NmFjLThiNzctNDhhNC1hZjBiLWUwZGNiNWU3MjY4OCIsInN1YiI6InByYW5lc2guMjFpdEBrY3QuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJHb3dNYXJ0IiwiY2xpZW50SUQiOiI1NGQ4OTZhYy04Yjc3LTQ4YTQtYWYwYi1lMGRjYjVlNzI2ODgiLCJjbGllbnRTZWNyZXQiOiJ6UE1LUmlEaEhzRkNTbU5KIiwib3duZXJOYW1lIjoiUHJhbmVzaCIsIm93bmVyRW1haWwiOiJwcmFuZXNoLjIxaXRAa2N0LmFjLmluIiwicm9sbE5vIjoiMjFCSVQwMzMifQ.wB7JWXd8MuckEwsPZm7OAezGcVQbYMPS91xi_XsuIwQ",
    "expires_in": 1719896435
  };

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token.access_token}` }
    };

    axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${category}/product?top=${t}&minPrice=${n}&maxPrice=${m}`, config)
     .then(response => {
        setProducts(response.data);
      })
     .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [token]);
  return (
    <div className='search-form '>
        <h1>Search Product</h1>
        <form>
            <label htmlFor="companyname">Company</label>
            <input type="text" name="companyname" onChange={(event)=>setCompany(event.target.value)}/>
            <label htmlFor="category">Category</label>
            <input type="text" name="category" onChange={(event)=>setCategory(event.target.value)}/>
            <label htmlFor="companyname">MinPrice</label>
            <input type="text" name="companyname" onChange={(event)=>setN(event.target.value)}/>
            <label htmlFor="category">Maxprice</label>
            <input type="text" name="category" onChange={(event)=>setM(event.target.value)}/>
            <button>Search</button>
        </form>
        <div>
      {
        products?.map((product,id) => {
            return (<Cards
            name={product.productName}
            price={product.price}
            />)
        })
      }
    </div>
    </div>
  )
}

export default SearchProduct;