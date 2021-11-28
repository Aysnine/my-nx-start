import './greeting.module.scss';

/* eslint-disable-next-line */
export interface GreetingProps {}

export function Greeting(props: GreetingProps) {
  return (
    <div>
      <h3>Welcome to Greeting!</h3>
    </div>
  );
}

export default Greeting;
