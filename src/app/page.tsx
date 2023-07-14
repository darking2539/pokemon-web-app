import { redirect } from 'next/navigation';

type Props = {}

export default async function Home(Props: {}) {
    redirect('/home');
  // ...
}