
import './App.css'
import {createBrowserRouter,RouterProvider,Navigate} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/home/Home';
import Signup from './components/signup/Signup'
import Signin from './components/signin/SignIn';
import ErrorRoute from './components/ErrorRoute';
import UserProfile from './components/user-profile/UserProfile';
import AuthorProfile from './components/author-profile/AuthorProfile';
import Articles from './components/articles/Articles';
import AddArticle from './components/add-articles/AddArticle';
import ArticlesByAuthor from './components/articles-by-author/ArticlesByAuthor';
import Article from './components/article/Article';
import ErrorPage from './components/ErrorPage';



function App() {

  
let router=createBrowserRouter([

  {
    path:'',
    element:<RootLayout />,
    errorElement:<ErrorPage />,

    children:[
    {
     path:'',
     element:<Home/>
    },
    {
      path:'/home',
      element:<Home/>
     },
    {
      path:'/signup',
      element:<Signup/>

    },
    {
     path:'/signin',
     element:<Signin/>
    },
      {
        path:"/user-profile",
        element:<UserProfile />,
        children:[
          {
            path:"articles",
            element:<Articles />
          },
          {
            path:"article/:articleId",
            element:<Article />
          },
          {
            path:'',
            element:<Navigate to='articles' />
          }
        ]
      },
      {
        path:"/author-profile",
        element:<AuthorProfile />,
        children:[
          {
            path:'new-article', 
            element:<AddArticle />
            
          },
          {
            path:'articles-by-author/:author',
            element:<ArticlesByAuthor />,
           
          },
          {
            path:"article/:articleId",
            element:<Article/>
          },
          {
            path:'',
            element:<Navigate to='articles-by-author/:author' />
          }
        ]
      }
    ]
  }])
   
   
  

  return (


    <div>
      
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
