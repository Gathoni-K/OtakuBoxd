**Context API**

**1.Create the Context.**
always type our context as undefined and as the type of our context i.e.
    '
    const ThemeContext = createContext<ThemContextType | undefined>(undefined);
    '

**2.Create the Provider.**
-State management: the provider owns the state:
    '
    const [ isDark, setIsDark ] = useState<boolean>(false);
    '
-Provider will also handle side-effects if any, in our case, the DOM updates whenever we change our theme.
    '
    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark]);
    '
-useEffect tells React:
    "Hey, run this side-effect when something changes."
-By side-effect, anything outside React's normal render flow like DOM, localStorage, APIs, timers etc.
-'document.documentElement' is basically the <html> element.
-toggle works like, add if missing, removes if present.
-In our case we have:
    'toggle(className, condition)'
-Meaning; if isDark === true, add dark, and if false, remove dark.
-Our dependency array; '[isDark]' only runs the effect, remove and add dark when isDark changes.


* The useEffect listens for changes to isDark and conditionally adds or removes the dark class on the root 'html' element, enabling Tailwind CSS dark mode styles globally *

-Also creates helper functions, provider will create utility functions:
    '
    const toggleTheme = () => setIsDark(prev => !prev);
    '
-Broadcasting - provider broadcasts everything.
    '
    <ThemeContext.Provider value={{isDark, setIsDark, toggleTheme}}>
    '


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
        '

**Mapping through Styles**

**1.Base styles.**
 '
 const baseClassName = "shared styles go here"
 '

**2.Data array**
-Defines what the element is, the structure only.
-Properties given are id, label etc.
    '
    const element = [
        {id:1, label:""},
        {id: 2, label:""},

    ]
    '

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
    '

**Creating a horizontal line**
        '
        <hr className="my-5 border-t-2/4/8 border-tailwindColors border-dashed/dotted/double"/>
        '
the 'my-8' creates vertical spacing, i.e. space above and below the line.


