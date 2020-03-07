1. What problem does the context API help solve?

It is easier to move state to components than using redux

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are information that contain an action type and related data. Reducers are where we update state. the store is an object representing everything that changes within the application. The state in the store is immutable. You must make a copy of the state, change the copy, and replace the previous state with the changed copy

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and can be accessed by any component. Component state is local and only available to that component. Local state should only be used for transient state, all other state should be Application state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is a middleware that handles async operations in action creators. It intercepts returned data and possibly changes it.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Async Redux, because I was able to figure it out o my own. I'm not sure an opinion like this can be formed after doing one project each. This is a question for someone who has used each enough to be familiar with them.

1. Why are all the questions numbered 1? Would our projects work with this inattention to detail? Please explain why!