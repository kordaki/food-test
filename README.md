# Ignored items
According to judgment parameters, we unfortunately ignore some parts of details in task. Hope you are less upset about the shortcomings of the project by reading this document.
## Styles
Generally we don't focus in details in styles. Some details has not inserted for saving time.
We can use **Layout** for considering header body and etc.
## Logic
 **loading** on load vendors: It needs new dispatcher for set *loading* state value nad it can use before api request.
 We didn't use **Routin** on this project.
 Cuz we use Redux and there is not react state; _memo_, getDrivedStateFromProps and ComponentSouldUpdate were not useful for make better performance.

 ## Helpers and Utils
  **ApiRequests** instert into a service file and don't use axios directly in all of project. **Canceling before api request** can be handle in this service
## Test
**BDD Tests** should be write for real project. We can do it for components as shallow rendering (like unit test) and full mount (like integration). Also _Reducers_ and  _Actions_ need test.


### Thank you for giving me this opportunity :)
I guess if I fix these defects it takes much less time than writing this docs X-) 