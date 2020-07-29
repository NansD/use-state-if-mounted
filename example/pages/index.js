import Head from "next/head";

import { useStateIfMounted } from "../../use-state-if-mounted";
import { toCamel } from "../lib/util";

import hookConfig from "../../use-state-if-mounted/package.json";

export default function Index() {
  const { name, description, repository = {}, author = {} } = hookConfig;

  const { name: authorName, url: authorUrl } = author;

  const { url: repositoryUrl } = repository;
  const repositoryExists = typeof repositoryUrl === "string";

  const repositoryUrlDisplay =
    repositoryExists && repositoryUrl.split("://")[1];

  return (
    <>
      <Head>
        <title>Hook - useStateIfMounted</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <main>
        <style jsx global>{`
          body {
            font-family: sans-serif;
            padding: 0;
            margin: 0;
          }

          main {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 1em 0;
          }

          h1 {
            font-size: 2em;
          }

          img {
            max-width: 100%;
          }

          pre {
            overflow: auto;
            max-height: 15em;
            background-color: #eeeeee;
            padding: 1em;
          }

          section,
          footer {
            width: 100%;
            max-width: 50em;
            margin: 0 auto;
          }

          footer p {
            font-size: 0.9em;
          }

          footer p,
          footer a {
            color: #546e7a;
          }
        `}</style>

        <section>
          <h1>{toCamel(name)}</h1>

          <p>{description}</p>

          {repositoryExists && (
            <p>
              <a href={repositoryUrl}>{repositoryUrlDisplay}</a>
            </p>
          )}

          <h2>How to use</h2>

          <p>
            Use this hook just like React's&nbsp;
            <a href="https://reactjs.org/docs/hooks-reference.html#usestate">
              useState
            </a>
            .
          </p>
          <p>
            This one hook only updates state if the component that called this
            hook is mounted. This allows us to avoid memory leaks and messages
            like this one :
          </p>
          <code>
            Warning: Can't perform a React state update on an unmounted
            component. This is a no-op, but it indicates a memory leak in your
            application. To fix, cancel all subscriptions and asynchronous tasks
            in a useEffect cleanup function. in Child (created by Holder)
          </code>

          <h2>Examples</h2>

          <p>
            <strong>Basic usage:</strong>
          </p>
          <pre>
            <code>
              {`
const [count, setCount] = useStateIfMounted(0);`}
            </code>
          </pre>
          <p>
            <strong>"Real use case" usage:</strong>
          </p>
          <p>
            It's actually an <a href="https://github.com/facebook/react/issues/14113">issue</a> from Github.
          </p>
          <pre>
            <code>
              {`
const apiCall = n =>
new Promise(resolve => setTimeout(() => resolve(n + 1), 3000));

const ShowApiCallResult = () => {
const [n, setN] = useState(0);
useEffect(() => {
  apiCall(n).then(newN => setN(newN));
});

return String(n);
};

const RemoveComponentWithPendingApiCall = () => {
const [show, setShow] = useState(true);
return (
  <React.Fragment>
    <button onClick={() => setShow(false)}>Click me</button>
    {show && <ShowApiCallResult />}
  </React.Fragment>
);
};
`}
            </code>
          </pre>
          <p>
            The issue can be fixed with our hook by simply replacing <code>useState</code> with <code>useStateIfMounted</code>
          </p>
          <pre>
            <code>
              {`
const apiCall = n =>
new Promise(resolve => setTimeout(() => resolve(n + 1), 3000));

const ShowApiCallResult = () => {
const [n, setN] = useState(0);
useEffect(() => {
  apiCall(n).then(newN => setN(newN));
});

return String(n);
};

const RemoveComponentWithPendingApiCall = () => {
const [show, setShow] = useStateIfMounted(true); // notice the change 🚀
return (
  <React.Fragment>
    <button onClick={() => setShow(false)}>Click me</button>
    {show && <ShowApiCallResult />}
  </React.Fragment>
);
};`}
            </code>
          </pre>
        </section>

        <footer>
          <p>
            Made by <a href={authorUrl}>{authorName}</a>
          </p>
        </footer>
      </main>
    </>
  );
}
