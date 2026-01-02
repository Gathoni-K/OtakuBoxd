# Context API

**1.Create the Context.**
always type our context as undefined and as the type of our context i.e.
    '
    
    const ThemeContext = createContext<ThemContextType | undefined>(undefined);
    

**2.Create the Provider.**
-State management: the provider owns the state:
    '
    
    const [ isDark, setIsDark ] = useState<boolean>(false);
    
-Provider will also handle side-effects if any, in our case, the DOM updates whenever we change our theme.
    '
    
    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark]);
    
-useEffect tells React:
    "Hey, run this side-effect when something changes."
-By side-effect, anything outside React's normal render flow like DOM, localStorage, APIs, timers etc.
-'document.documentElement' is basically the <html> element.
-toggle works like, add if missing, removes if present.
-In our case we have:
    '
    
    toggle(className, condition)
-Meaning; if isDark === true, add dark, and if false, remove dark.
-Our dependency array; '[isDark]' only runs the effect, remove and add dark when isDark changes.


* The useEffect listens for changes to isDark and conditionally adds or removes the dark class on the root 'html' element, enabling Tailwind CSS dark mode styles globally *

-Also creates helper functions, provider will create utility functions:
    '
    
    const toggleTheme = () => setIsDark(prev => !prev);
    
-Broadcasting - provider broadcasts everything.
    '
    
    <ThemeContext.Provider value={{isDark, setIsDark, toggleTheme}}>
    


**3.Create the hook.**
General Pattern:
    '
    
    export const useContextName = () => {
            const context = useContext(ContextNameContext);
            if(!context) {
                throw new Error("useContextName
                must be used within ContextNameProvider");
            }
            return context;
        }
        

**Mapping through Styles**

**1.Base styles.**
 '
 
 const baseClassName = "shared styles go here"
 

**2.Data array**
-Defines what the element is, the structure only.
-Properties given are id, label etc.
    '
    
    const element = [
        {id:1, label:""},
        {id: 2, label:""},

    ]
    

**3.Map, combine the styles**
    '

    {items.map(item => {
        <element
        key={item.id}
        className={`${baseElementStyles}`
        }
        >
        {item.label}
        </element>
    })
    }
    

**Creating a horizontal line**
    '
    
        <hr className="my-5 border-t-2/4/8 border-tailwindColors border-dashed/dotted/double"/>
    
        
the 'my-8' creates vertical spacing, i.e. space above and below the line.

**Setting up our API with Tanstcak Query.**

**1.Creating our .env file**
Syntax:
    '
    
    VITE_APINAME_API_URL=APIurl

    '
There should be no spaces or semi-colon.
-The file is created at the root directory.
-To access the data:
        '
        const apiUrl = import.meta.env.VITE_APINAME_API_URL;
        '

**2.Update our gitignore**
-Add this in our gitignore file:
    '
    #Environment variables
    .env
    '

**3.Creating the necessary folders in src**
the api, hooks, types and lib folders.
1.api-file containing all our api calls.
2.hooks - keep our tanstack query hooks.
3.types- keep our interfaces.
4.lib - query client config.
-Group related endpoints/hooks in the same file.

**4.Set up our API client.**
-This is done inside client.ts file in the api folder.
-An API client is a programme that sends or request data.
-Tool handling all the communication between frontend and api.
    '
    
    import axios from "axios"
    //axios is a library making HTTP requests easier.
    //is like fetch but with more features and better defaults

    export const apiClient = axios.create({
        //axios.create creates a customized instance of axios.
        //is like creating own specialized manager.
        baseUrl: import.meta.env.VITE_API_BASE_URL,
        //sets up the base URL for all requests
        timeout: 10000,
        //the max time needed to wait for a response, if time exceeds the request fails.
        headers: {
            'Content-Type' : 'application/json',
        },
    });

    <!-- optional, here add auth tokens, error handling etc -->
    apiClient.interceptors.request.use((config) => {
        //add auth token if needed.
        const token = localStorage.getItem('token');
        if(token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    });

    apiClient.interceptors.response.use(
        //interceptors are middleware running before and after requests.
        //this runs after getting a response.
        //if successful, returns our response.
        (response) => response,
        (error) => {
            //global error handling
            console.error("API error:" error);
            return Promise.reject(error);
            //if fails, log the error and pass the error along.
        }
    );
    '
-Create one client per API/backend you will communicate with.
-General template for each client.

**5.Define the TS types.**
-Define the shape of data we are to get from our API.
-This is done in the types folder.

**6.Create API functions.**
-Is done in the api folder.
-Map App's features to API endpoints.
-Our app's features:
    1.Browse anime.
    2.View anime details.
    3.Search for anime.
    4.Add to watchlist.
    5.Write reviews.
-Create one function per endpoint.
-For any API endpoint follow the template below:
    '
    
    actionName: async (parameters) => {
        const {data} = await clientName.get<ResponseType>('endpoint', {
            params: {//query parameters for here},
        });
        return data;
    }
    

**7.Create Query Hooks.**
-Done in the hooks folder.
-For every API endpoint, create a hook.

**Defining the TS types**
Data fetched from our API:
1.HomePage: a list of most popular anime; image, name, status
2.Anime: a grid of anime; image, heading, status, description

**Creating API functions**

**Deciding on the parameters.**
1.Look at the endpoint, if the endpoint returns valid data with no query parameters then all query parameters are optional.
2.Read the list of query parameters, the list tells us they ways we are allowed to change the default behaviour.
3.Decide what our UI/feature needs to control, define function parameters for behaviour needed to change.


**Creating Query Hooks**
-One query hook per API function.
-But if it is the same endpoint but different endpoint, another hook can be created.
-Note that mutations such as updating watch status and adding a review follow a different pattern.
-Hooks map to UI intent.

Universal template:
    '

    export const use[ResourceName] = (params, options?) => {
    //options is used if 2 components want the same data but different fetching behaviour
    //they exist mainly for edge-cases
        return useQuery({
            queryKey: ["resource", "action", parameter1, parameter2],
            //this is what our data is
            queryFn: () => apiFunction(params),
            //this is where it is coming from
            //arrow function calling our API function

            staleTime: 5 * 60 * 1000,
            //sets for how long data is considered fresh, will only refetch data after 5 mins
            //fast-changing data like live scores, news: 1-2 mins,
            //normal data, anime lists - 5-10 mins
            //rarely changes, anime lists - 30-60 mins
            //almost never changes, static content - 24 hrs
            gcTime: 10 * 60 * 1000,
            //states how long unused data is kept.
            enabled: true,
            //property setting whether the query should run
            ...options,
        });
    };

-The hook name should follow this syntax: 
    '

    useActionResource

-use + what we're getting + what resource : useTopAnime, useSearchAnime
-The parameters our hook needs are the same parameters as our API function.
-The Query key is a unique identifier for caching.
-The pattern is:
    '

    ['resource', 'action', ...dynamic values]

-The dynamic values are the parameters that can change, parameters in our hook.

**What does our hook do under the hood?**

Understanding React Hooks.

1.Caching
-React query stores results in a global cache.
-Our hook defines:

    queryKey: ["resource", "action", param1]

What is happening?
1.Results are stored by ket,
2.Any component using the same key gets the same data.
3.No duplicate network requests - 2 components, one fetch.

2.Background refetching
-Data can be come stale

    staleTime : 5 * 60 * 1000,

-React query:
1.uses cached data immediately.
2.refetches in the background when needed.
3.seamlessly updates UI.
-User will not see a loading spinner again unless truly necessary.

3.Request Cancellation.
-When the component unmounts, query becomes disabled, query key changes, a new search happens.
-By unmounting we mean when the component is no longer visible on the screen.

4.Stale Data Management.
-Each query has the following states:
    fresh, stale, inactive, garbage collected.
-React query tracks this.
-Our hooks defines the rules using 'staleTime, gcTime'

5.Automatic retries.
-By default, failed queries retry, sops on certain errors, can be controlled using; 

    retry: number,
    //defines how many times our query will refetch data on encountering an error.

6.Error Boundary Integration
-Handles our errors.

7.Window focus & Reconnect awareness.
-Our query fetches automatically when internet reconnects or when user comes back to tab.
-Our app stays fresh without manual logic.

8.Pagination and Infinite State.
-Hooks can manage: page numbers, cursors, infinite scroll state.
-React query tracks which pages exist, which ones are fetching and which ones failed.


9.Query invalidation.
-WHen data changes elsewhere, react query marks relevant queries states, refetches data, updates all dependent components.


Our hook contributes:
    1.consistent query keys.
    2.domain naming.
    3.fetch function writing.
    3.enable/disable logic.
    4.sensible defaults.

-React query contributes everything else.

    Component - asks for data
    Query hook - defines rules and identity
    React Query - executes, caches, syncs
    Network

**Parameters we should define inside our hook.**
-The are parameters that should be assigned the default value inside the hook and not the component, why? Because when defaults live in components, different defaults, causing unpredictable behaviour.

-Any parameters affecting data shape or cache identity must be defined withing the hook.
    limit, page, sort, filters, lang, seasons, includeAdult

What should be defined in our hook?
1.Defaults.

    limit = 10
    page = 1
    sort = "popularity"

2.Normalization.
-Is tuning many equivalent inputs into one canonical form.
-Are the different ways of asking the same thing should be treated as the same thing.
Examples:

    const normalizedQuery = query.trim().toLowerCase();
    const normalizedLimit = limit ?? 10;
    const normalizedPage = Math.max(1, page);
    const includeAdult = !!rawIncludeAdult

-If a value can be represented in multiple ways, or if different representations mean the same thing semantically, normalize.

3.Validation.

    enabled: query.length > 0




## Correct Architectural Order

1.Define the data source - API layer.
//How do I get the data?
2.Define the query Keys.
//What do we call the data?
3.Define Query Hooks.
//Under what rules does this data exists?
4.Define mutation hooks.
//What changes this data?
5.Consume in components.
//How do we show this?



**Consuming a hook in our component**
-General pattern: 
    '

    function ComponentName() {
        const { data, isLoading, isError, error } = useHookName(params);

        if(isLoading) {
            return <div> Loading anime data... </div>
        }
        if(isError) {
            return <div>
            Error: {(error as Error)?.message}
            </div>
        }

        const processedData = data?.data || [];

        return (
            <div>
            {processedData.map(item => {
                //define how the data should look like
            })}
            </div>
        )
    }

**Setting up our search  query.**

-How does it work?

-On entering an anime name in the input field, the anime's
name, score, type, and status is shown.
-Click enter, fetch anime data from the API.
-Need state to manage our user input.

What do we need?

-Capture user input.
-In our input component: 
    '

    import { useState } from 'react';

    function MyForm() {
    const [name, setName] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value); // Capture value on every keystroke
  };

  return (
    <input type="text" value={name} onChange={handleChange} />
  );
}

-Search trigger.
-On pressing the enter key, calls our fetch function once.
    '

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
    console.log("Searching for:", nameOfDataVar);
    }
    };

    <input 
    type="text" 
    onKeyDown={handleKeyDown} 
    onChange={(e) => setQuery(e.target.value)} 
    />

-In our handleDown function, we need:
1.takes the anime value.
2.fetches anime from the API.
3.returns the anime data
4..displays the result

-The complete flow:
1.User types anime name - name state updates.
2.User presses Enter, search Jikan API.
3.Display a list of search results.

**Architecture:**

**State Management.**
1.lives in AnimePage.
1. name - the search input text.
2. searchResults - array of anime returned from search API.
3. selectedId - returns the anime details of the selected anime.

**Functions**
-Also live in Anime page.
1.handleSearch() - fetches from our API and stores our results in searchResults.
2.handleSelectAnime(id) - sets the selectedId when user clicks an anime from results.
3.handleClearSearch() - clears search, resets searchResults and selectedId back to null.

**Display Logic**
-If no search has happens, searchResults is empty, shows AnimeGrid.
-else if searchResults exists, but no anime has been selected yet, show searchResults component(list of results)
-else if selectedId exists, show AnimeDetails component(full info of the anime)

**Component Props**
1.SearchBar = name, setName, handleSearch.
2.SearchResults = searchResults, handleSelectAnime.
3.AnimeDetails = selectedId, uses useAnimeData internally.


**Functions**

    handleSearch()
-Is an asynchronous functions.
-State changes:
    
    setIsLoading(true)
    setError(null)
General pattern:














