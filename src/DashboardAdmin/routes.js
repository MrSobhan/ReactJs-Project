import Home from'./pages/home/Home'
import UserList from'./pages/Users/UserList'
import User from'./pages/User/User'
import NewUser from'./pages/NewUser/NewUser'
import Products from'./pages/Products/Products'
import Product from'./pages/Product/Product'

let routes = [
    {path: '/', element: <Home />},
    {path: '/users', element: <UserList />},
    {path: '/newUser', element: <NewUser />},
    {path: '/products', element: <Products />},
    {path: '/product/:productID', element: <Product />},
    {path: '/user/:userID', element: <User />},
]

export default routes