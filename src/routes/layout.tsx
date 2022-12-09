import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import ManualNav from '~/components/ManualNav';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <ManualNav />
          <Slot />
        </section>
      </main>
      <footer>
        &copy; 2022
      </footer>
    </>
  );
});
