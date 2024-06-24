# Posts Board Project

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨

## Overview
I decided to use NgRx SignalStore, which simplifies state management and eliminates the need for Reducer, Actions, Effects and Selectors files.

## Project Design
- **Layer Separation**: Stand-alone components, store, services, using routing.
- **Configuration**: Multiple configuration files for multi-environment support.
- **i18n**: In `post-list.component.html`, I used two hardcoded strings ('Not Selected Yet', 'Toggle Grid Mode'). These can be improved by using LOCO and a translate service for multi-language support.

## UI/UX
- **Multiple UIs**: Implemented two different UIs - a "Pinterest-like" layout and a grid layout, both responsive and Grid UI also supporting small screens.
- **Styling**: Used mixins and variable files to prevent duplicate styling.
- **Post Display**: Square posts with fixed size could use an `isTruncate` directive and tooltips, but I preferred for the first two layouts for better UX.
- **Loader**: The `getPosts` request is very quick, so I didn't implement a loader for `state.isLoading = true`. In a real project, I would include this.

## Future Improvements
- **Multi-language Support**: Enhance by integrating a translation service.
- **Loader Implementation**: Add a loader for slow network conditions or larger data requests.


## How to run
```
npm install
nx s
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

# Questions And Answers
## JWT
Using JWTs for authentication can be safe with proper precautions.

The provided token can be broken down into three parts:
- Header: { "alg": "HS256", "typ": "JWT" } - Specifies the algorithm used (HMAC-SHA256) and the token type (JWT).
- Payload: Contains claims like sub (subject), admin (role), and valid_until (expiration). For example, it includes the email someone@example.net and an admin flag.
- Signature: Ensures the token's integrity and authenticity.

The provided token uses HS256 for signing, ensuring integrity if the secret key is secure. However, it is essential to:
1. Transmit over HTTPS: Prevents interception.
2. Short Expiration Time: Reduces risk if compromised.
3. Avoid Sensitive Data: Payload is base64-encoded, not encrypted.
4. Manage Revocation: Implement token blacklisting or refreshing mechanisms.
5. Overall, the token is safe if these practices are followed.

---

## Attack Vectors:

1. Cross-Site Scripting (XSS):

   - Description: Malicious scripts are injected into web pages viewed by other users. These scripts can steal cookies, session tokens, or other sensitive information.
   - Mitigation:
   - Sanitize Input: Use libraries to sanitize HTML inputs, removing any potentially malicious code.
   - Content Security Policy (CSP): Implement CSP headers to restrict the sources from which scripts can be loaded.


2. HTML Injection:

   - Description: Attackers inject malicious HTML content that can manipulate the UI or perform actions on behalf of the user.
   - Mitigation:
   - Escape Output: Ensure all user-generated content is properly escaped before rendering it in the browser.
   - Sanitize Input: Similar to XSS prevention, sanitize any HTML content before displaying it to users.
   
Summary
To mitigate these risks, always sanitize and escape user inputs and outputs, and implement security policies such as CSP to minimize the attack surface.


---

## Difference Between Mutable and Immutable Objects:

**Mutable Objects**: Can be changed after creation.
- Example: Arrays, Objects.

**Immutable Objects**: Cannot be changed once created. 
- Example: Strings, Numbers.
- Example of an Immutable Object in JavaScript:
String: In JavaScript, strings are immutable. 
Once a string is created, it cannot be altered.

**Pros and Cons of Immutability:** 
- Pros:
  - Predictability: Easier to understand and predict behavior.
  - Concurrency: Safe for concurrent operations, reducing side effects.
  - Debugging: Easier to track changes and debug.
- Cons:
  - Performance: Can be slower due to frequent copying.
  - Memory Usage: More memory needed for new object instances.

**Achieving Immutability:**
  - Use const: Declare variables with const to prevent reassignment.
  - Libraries: Use libraries like Lodash(cloneDeep), Immutable.js or Immer to manage immutable data structures.
  - Spread Operator: Create new objects or arrays using the spread operator (...).
```
const newObject = { ...oldObject, newProp: value };
const newArray = [...oldArray, newElement];
```

---

## speed up the loading of a web-application

To speed up the loading of a web application, consider these steps:

1. Optimize Images: Compress and use the correct format (e.g., WebP).
2. Minify Resources: Minimize CSS, JavaScript, and HTML files. 
3. Enable Caching: Implement browser and server caching.
4. Lazy Loading: Load resources only when needed.
5. Asynchronous Loading: Load JavaScript files asynchronously.
6. Reduce HTTP Requests: Combine files and use sprites.
7. Optimize Server Response: Use Gzip compression and optimize server configurations.
