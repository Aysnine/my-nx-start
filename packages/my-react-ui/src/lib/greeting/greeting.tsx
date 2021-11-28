import './greeting.module.scss';

/* eslint-disable-next-line */
export interface GreetingProps {}

export function Greeting(props: GreetingProps) {
  return (
    <div>
      <h1>Welcome to Greeting!</h1>
    </div>
  );
}

export default Greeting;
