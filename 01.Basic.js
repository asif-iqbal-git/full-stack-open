//component

//url:https://fullstackopen.com/en/part1/introduction_to_react
const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
// =============================================================

const App2 = () => {
    const now = new Date()
    const a = 10
    const b = 20
  
    return (
      <div>
        <p>Hello world, it is {now.toString()}</p>
        <p>
          {a} plus {b} is {a + b}
        </p>
      </div>
    )
}

/*
JSX
It seems like React components are returning HTML markup. However, this is not the case. The layout of React components is mostly written using JSX. Although JSX looks like HTML, we are actually dealing with a way to write JavaScript. Under the hood, JSX returned by React components is compiled into JavaScript.
*/

const App_2 = () => {
    const now = new Date()
    const a = 10
    const b = 20
    return React.createElement(
      'div',
      null,
      React.createElement(
        'p', null, 'Hello world, it is ', now.toString()
      ),
      React.createElement(
        'p', null, a, ' plus ', b, ' is ', a + b
      )
    )
  }
