import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { RegisterFarmer } from "./components/RegisterFarmer";
import { RegisterRetailer } from "./components/RegisterRetailer";
import { LoginFarmer } from "./components/LoginFarmer";
import { LoginRetailer } from "./components/LoginRetailer";
import { CreateCustomer } from "./components/CreateCustomer";
import { CreateRetailer } from "./components/CreateRetailer";
import { CustomerDashboard } from './components/CustomerDashboard';
import { RetailerDashboard } from './components/RetailerDashboard';

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
    },
    {
        path: '/register-farmer',
        element: <RegisterFarmer />
    },
    {
        path: '/register-retailer',
        element: <RegisterRetailer />
    },
    {
        path: '/login-farmer',
        element: <LoginFarmer />
    },
    {
        path: '/login-retailer',
        element: <LoginRetailer />
    },
    {
        path: '/create-farmer',
        element: <CreateCustomer />
    },
    {
        path: '/create-retailer',
        element: <CreateRetailer />
    },
    {
        path: '/customer-dashboard',
        element: <CustomerDashboard />
    },
    {
        path: '/retailer-dashboard',
        element: <RetailerDashboard />
    }
];

export default AppRoutes;
