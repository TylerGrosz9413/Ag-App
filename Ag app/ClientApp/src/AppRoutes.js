import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { RegisterFarmer } from "./components/RegisterFarmer";
import { RegisterRetailer } from "./components/RegisterRetailer";
import { LoginFarmer } from "./components/LoginFarmer";
import { LoginRetailer } from "./components/LoginRetailer";
import { CreateFarmer } from "./components/CreateFarmer";
import { CreateRetailer } from "./components/CreateRetailer";
import { FarmerDashboard } from './components/FarmerDashboard';
import { RetailerDashboard } from './components/RetailerDashboard';
import { UpdateRecommendation } from "./components/UpdateRecommendation";
import { UpdateRequest } from "./components/UpdateRequest";
import { AllRequests } from "./components/AllRequests";
import { FarmerAccount } from "./components/FarmerAccount";
import { UpdateFarmerAccount } from "./components/UpdateFarmerAccount";
import { RetailerAccount } from "./components/RetailerAccount"
import { UpdateRetailerAccount } from "./components/UpdateRetailerAccount";

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
        element: <CreateFarmer />
    },
    {
        path: '/create-retailer',
        element: <CreateRetailer />
    },
    {
        path: '/farmer-dashboard',
        element: <FarmerDashboard />
    },
    {
        path: '/retailer-dashboard',
        element: <RetailerDashboard />
    },
    {
        path: '/update-recommendation',
        element: <UpdateRecommendation />
    },
    {
        path: '/update-request',
        element: <UpdateRequest />
    }, 
    {
        path: '/all-requests',
        element: <AllRequests />
    },
    {
        path: '/farmer-account',
        element: <FarmerAccount />
    }, 
    {
        path: '/update-farmer-account',
        element: <UpdateFarmerAccount />
    }, 
    {
        path: '/retailer-account',
        element: <RetailerAccount />
    },
    {
        path: '/update-retailer-account',
        element: <UpdateRetailerAccount />
    }
];

export default AppRoutes;
