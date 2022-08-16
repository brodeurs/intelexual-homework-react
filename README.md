## ProjectsReactApp

### function or class?
My research over the last couple of years shows that the React community appears to be heading toward function implementation. Of course, I've leaned toward class implementation because it seems more object-oriented to me. It's clear that transpiled React code with class implementation generates more javascript than function implementations, so I've moved more toward functions. However, a LOT of React documentation shows class implementations, requiring conversion. Oh well.

### Basic implementation
1. All tables use useEffect hooks to call the Spring Boot Projects microservice
2. All table views use react-table to render their respective view
3. Sort hooks have been added to all view tables, but only sort loaded data.
4. TBD: Paging, Filtering using calls to Projects microservice

### Testing
I failed to write a single test due to my React beginner level. Disturbing.

### Installed packages

npm install react-router-dom --save
npm install prop-types --save
npm install react-table
npm add bootstrap
npm add reactstrap
npm install @babel/core@7.10.0
